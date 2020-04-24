import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-how-to-make-your-rational-project-use-ant-for-automatic-build',
})
export class PageMakeRationalUseAnt {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageMakeRationalUseAnt.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substring( document.location.pathname.lastIndexOf('/') + 1 );
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + SITENAME;
        if (this.header.teaser) {
            document.getElementById("meta-desc").setAttribute("content", this.header.teaser);
        }
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/" />
                    </ion-buttons>
                    <ion-title>Blog</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content class="ion-padding">

                <ion-grid>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
                            <h1>{this.header.title}</h1>
                            <app-entry-meta header={this.header} />

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/RADnANT.png" alt="" width="150" height="150" />You can configure your project to use an <a href="http://ant.apache.org/" rel="nofollow">Apache Ant</a> script to build automatically, rather than with the default Java Builder in Rational Application Developer (RAD). This is valuable when you need a more sophisticated build process, but you still want the efficiency and convenience of an automatic build in the IDE. It’s alo useful if you simply need to trigger additional tasks after a ‘clean’, during a ‘clean’, in the manual build, or in the automatic build.</p>

                            <p>Here’s how you set it up…</p>

                            <p>Right-click on your project node in the explorer and select Properties from the context menu.</p>

                            <p>Select ‘Builders’ in the dialog and then click the ‘New…’ button as shown below…</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/ProjectProps.png" alt="" /></p>

                            <p>Then select the Ant Builder and click ‘OK’.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/AntBuilder.png" alt="" /></p>

                            <p>On the Main tab of the builder configuration, click the ‘Browse Workspace…’ button and select your Ant build.xml file.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/SetBuildFile.png" alt="" /></p>

                            <p>Next, click on the Targets tab. You’ll be able to choose a target in your Ant script to execute After a ‘Clean’, for the Manual Build, for the Auto Build, or during a ‘Clean’. For one or more of those options, click ‘Set Targets…’ and choose a target in the build script.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/ChooseAntTarget.png" alt="" /></p>

                            <p>When you click OK to dismiss all the open dialogs, you will see your new Ant Builder in the list of builders applied to your project. You can then easily toggle the builder on or off or toggle between the Ant Builder and the default java Builder. It’s a lot more convenient than right-clicking your build file and selecting Run As &gt; Ant Build every time you want to build from your Ant script.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/NewAntBuilder.png" alt="" /></p>

                            <p>Sounds useful, eh? Here’s just one example use case for this, which I know because it’s one I use myself…</p>

                            <p>Suppose you have a commons project with a lot of utility classes that are bundled up in a JAR and used in multiple other projects. Using an Ant Builder, you could automatically distribute the modified JAR file to all projects in the workspace that use it.</p>

                            <p>If you have any little not-so-obvious IDE tips like this, please share in the comments section of this page.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                            <gls-adsense-ad />
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}