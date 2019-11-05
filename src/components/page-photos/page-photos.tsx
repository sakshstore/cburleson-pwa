import { Component, Prop, h } from '@stencil/core';


import { PhotoData } from '../../services/photo-data';

@Component({
    tag: 'page-photos',
    styleUrl: 'page-photos.css',
})
export class PagePhotos {

    @Prop() name: string;

    title: string;

    data: any;

    async componentWillLoad() {
        console.log('>> componentWillLoad() > Route parameter property "name": %s', this.name);
        this.data = await PhotoData.load(this.name);
        document.title = this.data.pageTitle;
    }

    render() {

        // Generate an array of our elements with content first, then reduce it to groups and wrap each group with a row container:
        // See: https://stackoverflow.com/questions/34458165/how-to-surround-every-x-elements-with-a-class-using-react-js
        var groupSize = 4; // i.e. number of columns per row
        var gridRows = this.data.photos.map(function (item) {

            // map each item to html elements...
            return (
                <ion-col size-xs="12" size-sm="12" size-md="6" size-lg="6" size-xl="3">
                    <app-photo-card image-path={this.data.imagesURL} item={item}></app-photo-card>
                </ion-col>
            );
        }, this).reduce(function (r, element, index) {
            // Note that "this" is passed as the second argument to the map function above. Why?
            // We are calling and using the "this" object (this class) inside the map function,
            // so we need access to it. Array.prototype.map() takes a second argument to set what "this" 
            // refers to in the mapping function, so we pass "this" as the second argument to preserve the current context.


            // Create element groups with size based on defined groupSize, result looks like:
            // [[elem1, elem2, elem3, elem4], [elem5, elem6, elem7, elem8], ...]
            index % groupSize === 0 && r.push([]);
            r[r.length - 1].push(element);
            return r;
            // Now, with the new r array of arrays, we map each inner array (every group)...
        }, []).map(function (rowContent) {
            // and surround it with 'row'
            return <ion-row>{rowContent}</ion-row>;
        });
        // Now rows contains all the rows we need for the grid and we'll just use it in the page 
        // where we need it with {rows}...

        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/cage" />
                    </ion-buttons>
                    <ion-title>The Cage - Vietnam</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content>
                <ion-grid fixed>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="12" size-lg="12" size-xl="12">

                            <h1>{this.data.pageTitle}</h1>

                            <div innerHTML={this.data.pageIntro}></div>
                            
                            <p class="text-muted"><em>Last modified: {this.data.lastModified}</em></p>

                            <ion-grid class="card-grid">{gridRows}</ion-grid>

                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-content>,

        ];
    }
}