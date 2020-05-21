import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-new-web-developer-toolkit-for-ibm-digital-experience',
})
export class PageNewWebDeveloperToolkit {

    header: any;

    async componentWillLoad() {
        let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);
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

                            <p>With the new Web Developer Toolkit for IBM Digital Experience you can automatically download all the components and presentation templates in a WCM library where you can access them quickly and easily in your favorite editor. You can also push updated files back onto the server with the click of a button or even watch for changes and have them pushed back to the server automatically. The tool also offer features for syncing theme and script portlet files.</p>

                            <p>We tried the tool today on a couple of WCM libraries and seems to work pretty great.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/web-Developer-Toolkit-For-IBM-DX1.png" alt="" /></p>


                            <p>You can download it from GitHub here:</p>

                            <p><a href="https://github.com/OpenNTF/WebDevToolkitForDx/blob/master/README.md" rel="nofollow">Download Web Developer Toolkit for IBM Digital Experience</a>.</p>

                            <p>This toolkit is available as unsupported open source. IBM expects to enhance and expand this toolkit over the next months with additional features.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                            
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}