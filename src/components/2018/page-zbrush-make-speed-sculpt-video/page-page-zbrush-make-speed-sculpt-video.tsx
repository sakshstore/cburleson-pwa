import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-make-a-zbrush-speed-sculpt-timelapse-video',
})
export class PageZbrushMakeSpeedSculptVideo {

    header: any;

    async componentWillLoad() {
        let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);

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

                            <p>A timelapse video, also known as a “Speed Sculpt” video, can exhibit your entire sculpting session in a time-compressed format that’s fascinating to watch and very popular for sharing on video sites like YouTube. Here’s a procedure to setup ZBrush and record such videos. A ZScript, which automates the same procedure is also attached.</p>
                            <p>Note: You might also be interested in reviewing the video <a href="https://www.youtube.com/watch?v=Cf36MNzyAdQ" rel="nofollow">ZBrush – How to Record a Timelapse</a>&nbsp;by Jared Michael, which demonstrates this procedure.</p>
                            <h1>Procedure for Timelapse Recording in ZBrush</h1>
                            <ul>
                                <li>Document &gt; New Document</li>
                                <li>Go to Document menu and turn off Pro, because that constrains the aspect ratio.</li>
                                <li>In the same spot, set width and height to 1920 x 1080 (a good resolution for sharing on YouTube)</li>
                                <li>In the same spot, click Resize. This will stretch pixols you may already have on the canvas, so…</li>
                                <li>Press <kbd>CTRL</kbd> + <kbd>N</kbd> to clear the document (if necessary).</li>
                                <li>Draw a new sphere by just clicking and dragging to get a new clay ball (or any SubTool) on the canvas that now has the new resolution.</li>
                                <li>Slide on the Zoom icon over at right to get the whole canvas in view; that’s the screen space that is going to be recorded.</li>
                                <li>Select Movie &gt; Doc (if the selection is grayed out, you may have to Delete a movie that’s been started) This is going to record just the document space rather than the entire ZBrush app window.</li>
                                <li>Movie &gt; Modifiers &gt; Frame Size 1 (sets a 1 to 1 resolution)</li>
                                <li>Movie &gt; Modifiers &gt; On Mouse (should be selected) / 24 fps (Every time you click, you record 1 second)</li>
                                <li>Movie &gt; Overlay Image &gt; Opacity: 0</li>
                                <li>Movie &gt; Title Image &gt; Fade In Time : 0</li>
                                <li>Movie &gt; Title Image &gt; Fade Out Time: 0</li>
                                <li>Now, you can activate the Movie &gt; Timelapse button to start recording.</li>
                                <li>You can click the Pause button to pause.</li>
                                <li>You can Play whatever you’ve got so far, export, share it with the web, etc.</li>
                                <li>Click T to go into Edit mode (or click on the Edit mode icon).</li>
                                <li>Now you can click B for the Brush palette, plus C (clay) and B (build-up) and start whippin’ shit out.</li>
                            </ul>
                            <h1>Download the ZScript</h1>
                            <p>You can also download and use the attached ZScript, which automates the procedure above.</p>
                            <p><strong>Download</strong>:&nbsp;<a href="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/cdb-InitSpeedSculptTimelapseRecording.txt"><strong>cdb-InitSpeedSculptTimelapseRecording.TXT</strong></a></p>
                            <ul>
                                <li>Since the ZScript is in text format, you can edit the settings in any text editor. To use the script in ZBrush:</li>
                                <li>Click to open the ZScript menu (palette).</li>
                                <li>Click Load and browse to select the downloaded script.</li>
                                <li>Expand the drawer below the canvas at the very bottom of the ZBrush UI.</li>
                                <li>You should see a Play button, which you can click to execute the script.</li>
                            </ul>
                            <h1>Reference Resources</h1>
                            <ul>
                                <li><a href="https://www.youtube.com/watch?v=Cf36MNzyAdQ" rel="nofollow">ZBrush – How to Record a Timelapse</a>, Jared Michael</li>
                            </ul>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>



        ];
    }
}