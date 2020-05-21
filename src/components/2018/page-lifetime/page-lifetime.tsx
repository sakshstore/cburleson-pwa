import { Component, h, Element } from '@stencil/core';
import { modalController } from '@ionic/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';

import * as d3 from "d3";
import d3Tip from "d3-tip"
const tip = d3Tip();

import moment from 'moment';

import { BlogData } from '../../../services/blog-data';

interface calendarData {
    calendarYears: number;
    weekBoxWidth: number;
    weekBoxHeight: number;
    weekRectOffset: number;
    marginLeft: number;
    marginTop: number;
    marginRight: number;
    marginBottom: number;
    backgroundColor: string;
    data: Array<any>;
}

@Component({
    tag: 'page-lifetime',
    styleUrl: 'page-lifetime.css',
})
export class PageLifetime {

    @Element() el: HTMLElement;

    modalCtrl: any = modalController;

    // header for this individual item by id...
    header: any;

    // The data object containing both configuration and data
    calendar: calendarData = {
        "calendarYears": 90,
        "weekBoxWidth": 9, // 4, 9
        "weekBoxHeight": 9, // 4, 9
        "weekRectOffset": 4, // 2, 4
        "marginLeft": 18, // 6, 18
        "marginTop": 20, // 6, 20
        "marginRight": 18, // 6, 18
        "marginBottom": 20, // 6, 20
        "backgroundColor": "#fff",
        "data": []
    }

    /**
     * Default seetings for the calendar and for populating the modal
     * form when it is displayed. These values also get changed when 
     * changes are detected in the modal form.
     */
    formProps = {
        birthday: '1971-06-08',
        gender: 'male'
    }

    lifeExpectMale = 76;
    lifeExpectFemale = 81;

    async componentWillLoad() {
        let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);
    }

    //windowResized() {
    //console.log('window resized');
    //}

    componentDidRender() {
        //const graphContainerElement = this.el.querySelector('#graph');
        //if(isLocal()){
        // console.log('- PageLifetime.componentDidRender #graph.clientWidth: ' + graphContainerElement.clientWidth);
        //}
        this.renderGraph();
        //window.onresize = this.windowResized;
    }

    initCalendarData(birthday) {

        let weekNum = 1;
        let weekDate = birthday;

        // Iterate for the number of years defined in the calendarYears attribute of the calendar object
        // (90 times, for example)...
        for (var y = 1; y < this.calendar.calendarYears + 1; y++) {

            // There are 52 weeks in a year, so for this current year that we're on, iterate 52 times (start with 1, not zero base for w);
            // Setup the week object and then push it into the calendar data array.

            for (var w = 1; w < 53; w++) {
                var week = {
                    "weekNumber": weekNum++,
                    "yearNumber": y,
                    "weekNumberInYear": w,
                    "date": weekDate.clone()
                };
                this.calendar.data.push(week);
                weekDate.add(1, 'week');
            }

        }

        // DEBUG
        // So, if we had 90 years, for example (on the outer loop), then 90 x 52 = 4,680; 
        // we should end up with 4,680 weeks total for "the lifetime". We should see 4,680 
        // total weeks logged to the console.
        //if (isLocal) {
        //for (var i = 0; i < this.calendar.data.length; i++) {
        //var aWeek = this.calendar.data[i];
        //console.log(aWeek.weekNumber + " : " + aWeek.date.toString());
        //}
        //}

    }

    createTooltip(week) {
        let html = '';
        html += '<span class="date">' + week.date.format('ll') + '</span><br/>';
        //html += '<span>Week: ' + week.weekNumber + '</span><br/>'
        //html += '<span>Year: ' + week.yearNumber + '</span><br/>';

        //let age = week.yearNumber - 1;
        //html += '<span>Age: ' + age + '</span><br/>';

        ///console.log('*****  birthday.toString(): ' +  birthday.format());
        ///console.log('*****  birthday.month("M"): ' +  birthday.format('M'));
        ///console.log('*****  week.date.month("M"): ' +  week.date.month('M'));

        return html;
    }

    renderGraph() {

        // TO DO: get actual birthday from form...
        let birthday = moment.utc(this.formProps.birthday); // Get from form option
        let today = moment.utc();
        //console.log("Birthday: " + birthday.format());
        //console.log("Today: " + today.format());

        // Prepare the width and height of teh SVG element contained by the container (#graph) element...
        let width = (this.calendar.marginTop + this.calendar.marginBottom) +
            (52 * this.calendar.weekBoxHeight) + (52 * this.calendar.weekRectOffset) - this.calendar.weekRectOffset;

        let height = (this.calendar.marginLeft + this.calendar.marginRight) +
            (this.calendar.calendarYears * this.calendar.weekBoxWidth) +
            (this.calendar.calendarYears * this.calendar.weekRectOffset) - this.calendar.weekRectOffset;

        // Initialize the calendar data based on the given birthdate
        this.initCalendarData(birthday);

        // Select the contrainer element, which has the id="graph",
        // Append an SVG element to that container,
        // Give the new SVG element its own id="svgGraph",
        // Give the new SVG element width and height attributes,
        // And finally, give the new SVG element a CSS background color.
        let svg = d3.select('#graph')
            .append('svg')
            .attr('id', 'svgGraph')
            .attr('width', width)
            .attr('height', height)
            .style('background', this.calendar.backgroundColor);

        /* Initialize tooltip */

        tip.attr('class', 'd3-tip')
            .html((data) => this.createTooltip(data))
            .direction('n')
            .offset([-6, 0]);

        /* Invoke the tip in the context of your visualization */
        svg.call(tip);

        // Note that once we get inside of the svg functions, `this` no longer represents this class, so we need a way to 
        // continue to refer to the `this` that represents the class. For that, we'll just cast to a new `thiz`
        // object. Then inside the functions we can refer to `thiz` for the class and `this` for the current rect element 
        // of the iteration.

        let thiz = this;

        // The first selectAll('rect') is selecting all of the <rect> elements available on the page, 
        // which in this case is none. So, it returns an empty selection.
        // Later use of .data(this.calendar.data) and .enter( ) allows us to bind the data to the empty selection.
        // Then we use .append('rect') to append a <rect> for each item in the array (an item is 1 week object).
        // To be laid out properly, each one of these <rect> elements needs a width, a height which is taken from 
        // the config settings defined in the calendar object. We draw 52 weeks across, and the total num calendar years down.
        // The css class we apply draws each week box with the appropriate styling.

        // Note for later that if you need an iteration number, you can use the i parameter like this:
        // .attr('x', function (data, i) {

        svg.selectAll('rect')
            .data(this.calendar.data).enter()
            .append('rect')
            .attr('width', this.calendar.weekBoxWidth).attr('height', this.calendar.weekBoxHeight)
            .attr('x', function (data) {
                if (data.weekNumberInYear === 1) {
                    return thiz.calendar.marginLeft;
                } else {
                    return ((data.weekNumberInYear - 1) * (thiz.calendar.weekBoxWidth + thiz.calendar.weekRectOffset) + thiz.calendar.marginLeft);
                }
            })
            .attr('y', function (data) {
                if (data.yearNumber === 1) {
                    return thiz.calendar.marginTop;
                } else {
                    return ((data.yearNumber - 1) * (thiz.calendar.weekBoxHeight + thiz.calendar.weekRectOffset) + thiz.calendar.marginTop);
                }
            })
            .attr('class', function (data) {
                if (thiz.formProps.gender == 'male') {
                    if (data.yearNumber == thiz.lifeExpectMale) {
                        if (data.date.isBefore(today)) {
                            return "week expected elapsed";
                        } else {
                            return "week expected";
                        }
                    } else {
                        if (data.date.isBefore(today)) {
                            return "week elapsed";
                        } else {
                            return "week";
                        }
                    }
                } else {
                    if (data.yearNumber == thiz.lifeExpectFemale) {
                        if (data.date.isBefore(today)) {
                            return "week expected elapsed";
                        } else {
                            return "week expected";
                        }
                    } else {
                        if (data.date.isBefore(today)) {
                            return "week elapsed";
                        } else {
                            return "week";
                        }
                    }
                }
            })
            /* Show and hide tip on mouse events */
            .on('mouseover', function (d) {
                d3.select(this)
                    //.attr('fill', '') // Un-sets the "explicit" fill (might need to be null instead of '')
                    .classed("active", true) // should then accept fill from CSS
                tip.show(d, this);
            })
            .on('mouseout', function (d) {
                d3.select(this).classed("active", false);
                tip.hide(d, this);
            });

    }

    clearGraph() {
        const graphContainerElement = this.el.querySelector('#graph');
        while (graphContainerElement.firstChild) {
            graphContainerElement.removeChild(graphContainerElement.firstChild);
        }
    }

    async presentModal() {

        const modal = await this.modalCtrl.create({
            component: 'page-lifetime-modal',
            // The componentProps are any properties inside the modal component 
            // that have been identified with the @Prop annotation. Here, we can 
            // pass settings into those attributes for when the model is 
            // instantiated. The modal, when instantiated, will have the given 
            // values for each respective @Prop() defined in the modal.

            componentProps: this.formProps
        });

        modal.onDidDismiss()
            .then((data) => {
                //const user = data['data']; // Here's your selected user!
                console.log("-- PageLifetime.presentModal > modal.onDidDismiss() > data['data']: %o", data['data']);
                // When the modal is dismissed, we get back data and set properties local to this 
                // class (tyhe formProps) with what comes back from the modal form...
                this.formProps.birthday = data['data'].birthday;
                this.formProps.gender = data['data'].gender;

                this.clearGraph();
                this.renderGraph();

            });

        return await modal.present();
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/" />
                    </ion-buttons>
                    <ion-title>Blog</ion-title>
                    <ion-buttons slot="end">
                        <ion-button onClick={() => this.presentModal()}>
                            <ion-icon slot="icon-only" name="options"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>,

            <ion-content class="ion-padding">

                <h1>{this.header.title}</h1>
                <app-entry-meta header={this.header} />

                <blockquote>Death is imminent. Life is awesome. Make it count.</blockquote>

                <p>There are 52 weeks in a year (left-to-right) and ninety {this.calendar.calendarYears} years (top to bottom).
                            This is your whole life, in a sobering glance. <em>Best viewed on desktop resolution.</em></p>

                <p><ion-button onClick={() => this.presentModal()} size="small">
                    <ion-icon slot="icon-only" name="options"></ion-icon>
                            &nbsp;&nbsp;Personalize
                            </ion-button>
                </p>

                {/*
                <ion-range min={50} max={100} step={25} snaps pin style={{width:`50%`}}>
                </ion-range>
                */}

                <div id="graph" style={{ overflow: `auto` }}></div>

                <p style={{ paddingBottom: `10px` }}>
                    <div class="float-left">Legend:&nbsp;&nbsp;</div>
                    <div class="float-left">
                        <div class="legend"></div>
                                    A week,&nbsp;&nbsp;
                                </div>
                    <div class="float-left">
                        <div class="legend elapsed" style={{ width: `9px` }}></div>
                                    A week lived,&nbsp;&nbsp;
                                </div>
                    <div class="float-left">
                        <div class="legend expected" style={{ width: `9px` }}></div>
                                    Life expectancy by gender,&nbsp;&nbsp;
                                </div>
                    <div class="float-left">
                        <div class="legend expected elapsed" style={{ width: `9px` }}></div>
                                    A week lived in the life expectancy year
                                </div>
                </p>

                <p class="clear entry-meta"><br />Inspired by Tim Urban's TED talk, <a href="https://www.ted.com/talks/tim_urban_inside_the_mind_of_a_master_procrastinator" rel="nofollow">Inside the mind of
            a master procrastinator</a>, as well as articles from his blog, <a href="http://waitbutwhy.com/">Wait But
            Why</a>.</p>

                <p class="entry-meta">Source of Life expectancy by gender: Centers for Disease Control and Prevention, 2012 (<em>Females: 81 years,
            Males: 76 years</em>)</p>

            </ion-content>

        ];
    }
}