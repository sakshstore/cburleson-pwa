import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-intellij-idea-cheat-sheet',
})
export class PageIntellijIdeaCheatSheet {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageIntellijIdeaCheatSheet.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + SITENAME;
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

                            <p>Keyboard shortcuts and various tips for IntelliJ IDEA. This document assumes IntelliJ on a Mac, using the Keymap setting for <code>Mac OS X 10.5+</code>&nbsp;(in Preferences &gt; Keymap). I know you can get all these through Help &gt; Keymap Reference in IntelliJ, but I like to maintain my own list so that I can organize and search it the way I prefer, plus have a place to add my own additional notes.</p>

                            <h1>Editing</h1>

                            <table class="table table-bordered table-striped">
                                <tbody>
                                    <tr>
                                        <td>Comment / uncomment selected text</td>
                                        <td>Select block of text and then press <kbd>CMD</kbd> + <kbd>/</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Spread selection from cursor (to word, then line, etc.)</td>
                                        <td>ALT + up arrow or down arrow</td>
                                    </tr>
                                    <tr>
                                        <td>Format selected code</td>
                                        <td>CTRL + ALT + I</td>
                                    </tr>
                                    <tr>
                                        <td>Format all code</td>
                                        <td>ALT + CMD + L</td>
                                    </tr>
                                    <tr>
                                        <td>Autocomplete method parameter info</td>
                                        <td>CMD + P (when cursor is in method signature)</td>
                                    </tr>
                                    <tr>
                                        <td>Invoke a Surround Template (ex: surround a line with try/catch)</td>
                                        <td>OPTION + CMD + T</td>
                                    </tr>
                                    <tr>
                                        <td>Complete a statement</td>
                                        <td>SHIFT + CMD + ENTER</td>
                                    </tr>
                                    <tr>
                                        <td>Import Java Package</td>
                                        <td>Hover over the red text of the class missing a package and press: ALT + ENTER</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h1>Live Templates</h1>

                            <p>Live templates can be found in Preferences &gt; Editor &gt; Live Templates. Learn them! To use a live template, enter its short text in the editor and then press tab to replace the short text with its template.</p>

                            <h1>Navigation</h1>

                            <h2>Tool Windows and Dialogs</h2>

                            <table class="table table-bordered table-striped">
                                <tbody>
                                    <tr>
                                        <td>Project</td>
                                        <td>CMD + 1</td>
                                    </tr>
                                    <tr>
                                        <td>Version Control</td>
                                        <td>CMD + 9</td>
                                    </tr>
                                    <tr>
                                        <td>Preferences</td>
                                        <td>CMD + ,</td>
                                    </tr>
                                    <tr>
                                        <td>Breakpoints</td>
                                        <td>SHIFT + COMMAND + F8</td>
                                    </tr>
                                    <tr>
                                        <td>Recent Files</td>
                                        <td>CMD + E</td>
                                    </tr>
                                    <tr>
                                        <td>Search Everywhere</td>
                                        <td>SHIFT + SHIFT</td>
                                    </tr>
                                    <tr>
                                        <td>Search Classes</td>
                                        <td>CMD + O</td>
                                    </tr>
                                    <tr>
                                        <td>Search Symbols</td>
                                        <td>OPTION + CMD + O</td>
                                    </tr>
                                    <tr>
                                        <td>Navigate back and forth through recent files</td>
                                        <td>CMD + [ and CMD + ]</td>
                                    </tr>
                                    <tr>
                                        <td>New file (where selection is in Project window)</td>
                                        <td>CMD + N Note: you can use slashes to create entire trees abc/def/ghi/jkl&#8230;</td>
                                    </tr>
                                    <tr>
                                        <td>Hide all other windows</td>
                                        <td>SHIFT + CMD + F12</td>
                                    </tr>
                                    <tr>
                                        <td>Stretch pane right or left</td>
                                        <td>SHIFT + CMD + left or right arrow</td>
                                    </tr>
                                    <tr>
                                        <td>Clipboard History</td>
                                        <td>SHIFT + CMD + V</td>
                                    </tr>
                                    <tr>
                                        <td>Method List (of the active editor file)</td>
                                        <td>CMD + F12</td>
                                    </tr>
                                    <tr>
                                        <td>Navigation Bar</td>
                                        <td>CMD + up arrow Note: This is particularly useful if you turn off the normal navigation bar in preferences to save UI space.</td>
                                    </tr>
                                    <tr>
                                        <td>Action Search</td>
                                        <td>SHIFT + CMD + A (try, for example, &#8220;RESTful Web Service&#8221;)</td>
                                    </tr>
                                    <tr>
                                        <td>Version Control Quick List</td>
                                        <td>CTRL + V</td>
                                    </tr>
                                    <tr>
                                        <td>Quick Switch Settings</td>
                                        <td>CTRL + ~</td>
                                    </tr>
                                    <tr>
                                        <td>Quick Documentation</td>
                                        <td>CTRL + J (and then again to pin it open at larger size).</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h1>TO DO items</h1>

                            <p><strong>Create a&nbsp;</strong>TO DO&nbsp;<strong>item</strong></p>

                            <ul><li>CMD + / to create a new comment line</li><li>Type TODO then whatever comment you want</li></ul>

                            <p><strong>View all&nbsp;</strong>TO DO&nbsp;<strong>items</strong></p>

                            <ul><li>View &gt; Tool Windows &gt; TODO or</li><li>CMD + 6</li></ul>

                            <h1>Increase IntelliJ IDE memory on a Mac</h1>

                            <ul>
                                <li>Help &gt; Edit Custom VM Options&#8230;</li>
                                <li>Answer Yes to create the idea.vmoptions file.&nbsp;This will automatically create a copy of the .vmoptions file in the config folder and open a dialog to edit it.</li>
                                <li>I change -Xmx750m to -Xmx2048m</li>
                            </ul>

                            <h2>Tips</h2>

                            <p>Following are some of the Tip of the Day items that appear when you first open IntelliJ.</p>

                            <h5>Highlight usages of some variable</h5>

                            <ul><li>Use ⇧⌘F7 (Edit | Find | Highlight Usages in File) to quickly highlight usages of some variable in the current file.</li><li>Use ⌘G and ⇧⌘G keys to navigate through highlighted usages.</li><li>Press ⎋ to remove highlighting.</li></ul>

                            <h5>Optimize imports</h5>

                            <ul><li>Use Code | Optimize Imports to automatically optimize imports (remove unused imports, etc.). To access the corresponding settings, use File | Settings | Code Style | Imports.</li></ul>

                            <h5>Reformat code</h5>

                            <ul><li>Use Code | Reformat Code to reformat code according to your code style preferences (File | Settings | Code Style).</li></ul>

                            <h1>References</h1>

                            <ul>
                                <li>
                                    <a href="https://www.youtube.com/watch?v=eq3KiAH4IBI" rel="nofollow">42 IntelliJ IDEA Tips and Tricks</a>, YouTube
                                    </li>
                                <li>
                                    <a href="https://stackoverflow.com/questions/13578062/how-to-increase-ide-memory-limit-in-intellij-idea-on-mac" rel="nofollow">How to increase IDE memory limit in IntelliJ IDEA on Mac?</a>
                                </li>
                            </ul>

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