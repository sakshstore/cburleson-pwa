import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-how-to-tail-websphere-portal-log-files-in-microsoft-windows',
})
export class PageHowToTail {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageHowToTail.componentWillLoad');
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

                            <p>Tailing the WebSphere Portal log files allows you to watch the logs in real-time as they roll. In Unix or Linux it can be done with the command tail -f System.out.log. There is no such command for Windows, but several tools are available which provide this functionality. The one I use is WinTail <a href="http://www.baremetalsoft.com/wintail/" rel="nofollow">(WinTail.exe) from baremetalsoft.com</a>.</p>

                            <p>Here’s how you can setup WinTail to watch your Portal log file.</p>

                            <p>Download WinTail.exe from the link given above. Put the executable in a permanent place where you’ll know where to find it because you may create shortcuts, which each point to a different log file. For example, you might make one point to the WebSphere Portal SystemOut.log file and you may make another which points to the debug trace file of a Web Experience Factory portlet that you’re working on. For example, I put WinTail.exe in my Program Files directory.</p>

                            <p>Next, create a shortcut and drag it to your desktop. Rename the shortcut to something logical like “Tail Portal Log”. Right-click on the shortcut and choose Properties from the context menu. In the target field of the Shortcut tab, place the path to your portal log file after the executable. For example:</p>

                            <p><strong>“C:\Program Files (x86)\WinTail.exe” C:\IBM\WebSphere\wp_profile\logs\WebSphere_Portal\SystemOut.log</strong></p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/WinTail.png" alt="" /></p>

                            <p>Now, when you double-click the shortcut, WinTail will open directly against your Portal log file and you can watch her as she rolls, as shown below.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/WinTailRolling-300x210.png" alt="" /></p>

                            <p>You can also create additional shortcuts pointing to different log files.</p>

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