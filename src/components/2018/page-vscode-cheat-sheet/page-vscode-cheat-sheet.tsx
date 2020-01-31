import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-vs-code-cheat-sheet',
})
export class PageVsCodeCheatSheet {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageVsCodeCheatSheet.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
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

                            <p><img alt="VS Code Icon" class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/logo-vs-code.svg" width="100" />This is my personal cheat sheet for Microsoft Visual Studio Code (VS Code). Mainly, this is to record little commands and things that I am constantly forgetting (especially unique ones related to the unique plugins I use).</p>


                            <h2 class="clear">Keyboard shortcuts for Windows</h2>

                            <h3>General</h3>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Key(s)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Show Command Palette</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd>, <kbd>F1</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Quick Open, Go to File…</td>
                                        <td><kbd>CTRL</kbd> + <kbd>P</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>New window/instance</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>N</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Close window/instance</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>W</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>User Settings</td>
                                        <td><kbd>CTRL</kbd> + <kbd>,</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Keyboard Shortcuts</td>
                                        <td><kbd>CTRL</kbd> + <kbd>K</kbd> <kbd>CTRL</kbd> + <kbd>S</kbd></td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>Basic editing</h3>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Key(s)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Cut line (empty selection)</td>
                                        <td><kbd>Ctrl</kbd> + <kbd>X</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Copy line (empty selection)</td>
                                        <td><kbd>Ctrl</kbd> + <kbd>C</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Move line up/down</td>
                                        <td><kbd>Alt</kbd> + <kbd>↑</kbd> / <kbd>↓</kbd> </td>
                                    </tr>
                                    <tr>
                                        <td>Copy line up/down</td>
                                        <td><kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>↓</kbd> / <kbd>↑</kbd> </td>
                                    </tr>
                                    <tr>
                                        <td>Delete line</td>
                                        <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Insert line below</td>
                                        <td><kbd>Ctrl</kbd> + <kbd>Enter</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Insert line above</td>
                                        <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Enter</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Jump to matching bracket</td>
                                        <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>\</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Indent/outdent line</td>
                                        <td><kbd>Ctrl</kbd> + <kbd>]</kbd> / <kbd>[</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Go to beginning/end of line</td>
                                        <td><kbd>Home</kbd> / <kbd>End</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Go to beginning of file</td>
                                        <td><kbd>Ctrl</kbd> + <kbd>Home</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Go to end of file</td>
                                        <td><kbd>Ctrl</kbd> + <kbd>End</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Scroll line up/down</td>
                                        <td><kbd>Ctrl</kbd> + <kbd>↑</kbd> / <kbd></kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Scroll page up/down</td>
                                        <td><kbd>Alt</kbd> + <kbd>PgUp</kbd> / <kbd>PgDn</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Fold (collapse) region</td>
                                        <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>[</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Unfold (uncollapse) region</td>
                                        <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>]</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Fold (collapse) all subregions</td>
                                        <td><kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>Ctrl</kbd> + <kbd>[</kbd> </td>
                                    </tr>
                                    <tr>
                                        <td>Unfold (uncollapse) all subregions</td>
                                        <td><kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>Ctrl</kbd> + <kbd>]</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Fold (collapse) all regions</td>
                                        <td><kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>Ctrl</kbd> + <kbd>0</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Unfold (uncollapse) all regions</td>
                                        <td><kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>Ctrl</kbd> + <kbd>J</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Add line comment</td>
                                        <td><kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>Ctrl</kbd> + <kbd>C</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Remove line comment</td>
                                        <td><kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>Ctrl</kbd> + <kbd>U</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Toggle line comment</td>
                                        <td><kbd>Ctrl</kbd> + <kbd>/</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Toggle block comment</td>
                                        <td><kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>A</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Toggle word wrap</td>
                                        <td><kbd>Alt</kbd> + <kbd>Z</kbd></td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>Navigation</h3>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Key(s)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Show all Symbols</td>
                                        <td><kbd>CTRL</kbd> + <kbd>T</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Go to Line...</td>
                                        <td><kbd>CTRL</kbd> + <kbd>G</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Go to File...</td>
                                        <td><kbd>CTRL</kbd> + <kbd>P</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Go to Symbol...</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>O</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Show Problems panel</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>M</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Go to next error or warning</td>
                                        <td><kbd>F8</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Go to previous error or warning</td>
                                        <td><kbd>SHIFT</kbd> + <kbd>F8</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Navigate editor group history</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>TAB</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Go back / forward</td>
                                        <td><kbd>ALT</kbd> +  <kbd>←</kbd> / <kbd>→</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Toggle Tab moves focus</td>
                                        <td><kbd>CTRL</kbd> + <kbd>M</kbd></td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>Search and replace</h3>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Key(s)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Find</td>
                                        <td><kbd>CTRL</kbd> + <kbd>F</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Replace</td>
                                        <td><kbd>CTRL</kbd> + <kbd>H</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Find next/previous</td>
                                        <td><kbd>F3</kbd> / <kbd>SHIFT</kbd> + <kbd>F3</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Select all occurences of Find match</td>
                                        <td><kbd>ALT</kbd> + <kbd>ENTER</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Add selection to next Find match</td>
                                        <td><kbd>CTRL</kbd> + <kbd>D</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Move last selection to next Find match</td>
                                        <td><kbd>CTRL</kbd> + K <kbd>CTRL</kbd> + <kbd>D</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Toggle case-sensitive / regex / whole word</td>
                                        <td><kbd>ALT</kbd> + <kbd>C</kbd> / <kbd>R</kbd> / <kbd>W</kbd></td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>Multi-cursor and selection</h3>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Key(s)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Insert cursor</td>
                                        <td><kbd>ALT</kbd> + Click</td>
                                    </tr>
                                    <tr>
                                        <td>Insert cursor above / below</td>
                                        <td><kbd>CTRL</kbd> + <kbd>ALT</kbd> +  <kbd>↑</kbd> / <kbd>↓</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Undo last cursor operation</td>
                                        <td><kbd>CTRL</kbd> + <kbd>U</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Insert cursor at end of each line selected</td>
                                        <td><kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>I</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Select current line</td>
                                        <td><kbd>CTRL</kbd> + <kbd>L</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Select all occurrences of current selection</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>L</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Select all occurrences of current word</td>
                                        <td><kbd>CTRL</kbd> + <kbd>F2</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Expand selection</td>
                                        <td><kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>→</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Shrink selection</td>
                                        <td><kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>←</kbd></td>
                                    </tr>

                                    <tr>
                                        <td>Column (box) selection</td>
                                        <td><kbd>SHIFT</kbd> + <kbd>ALT</kbd> + (drag mouse)</td>
                                    </tr>

                                    <tr>
                                        <td>Column (box) selection</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + (arrow key)</td>
                                    </tr>

                                    <tr>
                                        <td>Column (box) selection page up/down</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>PgUp</kbd> /  <kbd>PgDn</kbd></td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>Rich languages editing</h3>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Key(s)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Trigger suggestion</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SPACE</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Trigger parameter hints</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>SPACE</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Format document</td>
                                        <td><kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>F</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Format selection</td>
                                        <td><kbd>CTRL</kbd> + K <kbd>CTRL</kbd> + <kbd>F</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Go to Definition</td>
                                        <td><kbd>F12</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Peek Definition</td>
                                        <td><kbd>ALT</kbd> + <kbd>F12</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Open Definition to the side</td>
                                        <td><kbd>CTRL</kbd> + <kbd>K</kbd> <kbd>F12</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Quick Fix</td>
                                        <td><kbd>CTRL</kbd> + <kbd>.</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Show References</td>
                                        <td><kbd>SHIFT</kbd> + <kbd>F12</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Rename Symbol</td>
                                        <td><kbd>F2</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Trim trailing whitespace</td>
                                        <td><kbd>CTRL</kbd> + <kbd>K</kbd> <kbd>CTRL</kbd> + <kbd>X</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Change file language</td>
                                        <td><kbd>CTRL</kbd> + <kbd>K</kbd> <kbd>M</kbd></td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>Editor management</h3>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Key(s)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Close editor</td>
                                        <td><kbd>CTRL</kbd> + <kbd>F4</kbd>, <kbd>CTRL</kbd> + <kbd></kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Close folder</td>
                                        <td><kbd>CTRL</kbd> + <kbd>K</kbd> <kbd>F</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Split editor</td>
                                        <td><kbd>CTRL</kbd> + <kbd></kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Focus into 1st, 2nd or 3rd editor group</td>
                                        <td><kbd>CTRL</kbd> +  <kbd>1</kbd> / <kbd>2</kbd> / <kbd>3</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Focus into previous/next editor group</td>
                                        <td><kbd>CTRL</kbd> + K <kbd>CTRL</kbd> +  <kbd>←</kbd> / <kbd>→</kbd> </td>
                                    </tr>
                                    <tr>
                                        <td>Move editor left/right</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>PgUp</kbd> / <kbd>PgDn</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Move active editor group</td>
                                        <td><kbd>CTRL</kbd> + <kbd>K</kbd> <kbd>←</kbd> / <kbd>→</kbd> </td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>File management</h3>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Key(s)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>New File</td>
                                        <td><kbd>CTRL</kbd> + N</td>
                                    </tr>
                                    <tr>
                                        <td>Open File...</td>
                                        <td><kbd>CTRL</kbd> + O</td>
                                    </tr>
                                    <tr>
                                        <td>Save</td>
                                        <td><kbd>CTRL</kbd> + S</td>
                                    </tr>
                                    <tr>
                                        <td>Save As...</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + S</td>
                                    </tr>
                                    <tr>
                                        <td>Save All</td>
                                        <td><kbd>CTRL</kbd> + K S</td>
                                    </tr>
                                    <tr>
                                        <td>Close</td>
                                        <td><kbd>CTRL</kbd> + F4</td>
                                    </tr>
                                    <tr>
                                        <td>Close All</td>
                                        <td><kbd>CTRL</kbd> + <kbd>K</kbd> <kbd>CTRL</kbd> + <kbd>W</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Reopen closed editor</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + T</td>
                                    </tr>
                                    <tr>
                                        <td>Enter Keep preview mode editor open</td>
                                        <td><kbd>CTRL</kbd> + K</td>
                                    </tr>
                                    <tr>
                                        <td>Open next</td>
                                        <td><kbd>CTRL</kbd> + Tab</td>
                                    </tr>
                                    <tr>
                                        <td>Open previous</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + Tab</td>
                                    </tr>
                                    <tr>
                                        <td>Copy path of active file</td>
                                        <td><kbd>CTRL</kbd> + K P</td>
                                    </tr>
                                    <tr>
                                        <td>Reveal active file in Explorer</td>
                                        <td><kbd>CTRL</kbd> + K R</td>
                                    </tr>
                                    <tr>
                                        <td>Show active file in new window/instance</td>
                                        <td><kbd>CTRL</kbd> + K O</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>Display</h3>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Key(s)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Toggle full screen</td>
                                        <td>F11</td>
                                    </tr>
                                    <tr>
                                        <td>Toggle editor layout (horizontal/vertical)</td>
                                        <td><kbd>SHIFT</kbd> + <kbd>ALT</kbd> + 0</td>
                                    </tr>
                                    <tr>
                                        <td>Zoom in/out</td>
                                        <td><kbd>CTRL</kbd> +  = / -</td>
                                    </tr>
                                    <tr>
                                        <td>Toggle Sidebar visibility</td>
                                        <td><kbd>CTRL</kbd> + B</td>
                                    </tr>
                                    <tr>
                                        <td>Show Explorer / Toggle focus</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + E</td>
                                    </tr>
                                    <tr>
                                        <td>Show Search</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + F</td>
                                    </tr>
                                    <tr>
                                        <td>Show Source Control</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + G</td>
                                    </tr>
                                    <tr>
                                        <td>Show Debug</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + D</td>
                                    </tr>
                                    <tr>
                                        <td>Show Extensions</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + X</td>
                                    </tr>
                                    <tr>
                                        <td>Replace in files</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + H</td>
                                    </tr>
                                    <tr>
                                        <td>Toggle Search details</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + J</td>
                                    </tr>
                                    <tr>
                                        <td>Show Output panel</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + U</td>
                                    </tr>
                                    <tr>
                                        <td>Open Markdown preview</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + V</td>
                                    </tr>
                                    <tr>
                                        <td>Open Markdown preview to the side</td>
                                        <td><kbd>CTRL</kbd> + K V</td>
                                    </tr>
                                    <tr>
                                        <td>Zen Mode (Esc Esc to exit)</td>
                                        <td><kbd>CTRL</kbd> + K Z </td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>Debug</h3>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Key(s)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Toggle breakpoint</td>
                                        <td>F9</td>
                                    </tr>
                                    <tr>
                                        <td>Start/Continue</td>
                                        <td>F5</td>
                                    </tr>
                                    <tr>
                                        <td>Stop</td>
                                        <td><kbd>SHIFT</kbd> + F5</td>
                                    </tr>
                                    <tr>
                                        <td>Step into/out</td>
                                        <td>F11 / <kbd>SHIFT</kbd> + F11</td>
                                    </tr>
                                    <tr>
                                        <td>Step over</td>
                                        <td>F10</td>
                                    </tr>
                                    <tr>
                                        <td>Show hover</td>
                                        <td><kbd>CTRL</kbd> + K <kbd>CTRL</kbd> + I</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>Integrated terminal</h3>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Key(s)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Show integrated terminal</td>
                                        <td><kbd>CTRL</kbd> + ` </td>
                                    </tr>
                                    <tr>
                                        <td>Create new terminal</td>
                                        <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + ` \</td>
                                    </tr>
                                    <tr>
                                        <td>Copy selection</td>
                                        <td><kbd>CTRL</kbd> + C </td>
                                    </tr>
                                    <tr>
                                        <td>Paste into active terminal</td>
                                        <td><kbd>CTRL</kbd> + V </td>
                                    </tr>
                                    <tr>
                                        <td>Scroll up/down</td>
                                        <td><kbd>CTRL</kbd> + ↑ / ↓ </td>
                                    </tr>
                                    <tr>
                                        <td>Scroll page up/down</td>
                                        <td><kbd>SHIFT</kbd> + PgUp / PgDn </td>
                                    </tr>
                                    <tr>
                                        <td>Scroll to top/bottom</td>
                                        <td><kbd>CTRL</kbd> + Home / End </td>
                                    </tr>
                                </tbody>
                            </table>

                            <p>For other operating systems’ keyboard shortcuts and additional information, see <a
                                href="https://code.visualstudio.com/docs/getstarted/keybindings">Key Bindings for Visual Studio Code</a>.</p>


                            <h2>Preference settings</h2>

                            <p>Following is NOT an exhaustive list of all preference settings that are available. There are more, but these are just the ones I have so
                                far found useful.</p>
                            <p>To access settings, go to File &gt; Preferences &gt; Settings, or press <kbd>CTRL</kbd> + <kbd>,</kbd></p>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <th>Setting</th>
                                    <th>Description</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>editor.minimap.enabled</td>
                                        <td>Controls whether the minimap is shown.</td>
                                    </tr>
                                    <tr>
                                        <td>editor.renderControlCharacters</td>
                                        <td>Controls whether the editor should render control characters.</td>
                                    </tr>
                                    <tr>
                                        <td>editor.renderWhitespace</td>
                                        <td>Controls whether the editor should render whitespace characters.</td>
                                    </tr>
                                    <tr>
                                        <td>explorer.compactFolders</td>
                                        <td>Controls whether the explorer should render folders in a compact form. In such a form, single child folders will be compressed in a combined tree element. Useful for Java package structures, for example.</td>
                                    </tr>
                                    <tr>
                                        <td>html.autoClosingTags</td>
                                        <td>Enable/disable autoclosing of HTML tags.</td>
                                    </tr>
                                    <tr>
                                        <td>javascript.updateImportsOnFileMove.enabled</td>
                                        <td>Enable/disable automatic updating of import paths when you rename or move a file in VS Code. Requires using TypeScript 2.9 or newer in the workspace.</td>
                                    </tr>
                                    <tr>
                                        <td>window.zoomLevel</td>
                                        <td>Adjust the zoom level of the window. The original size is 0 and each increment above (e.g. 1) or below (e.g. -1) represents zooming 20% larger or smaller. You can also enter decimals to adjust the zoom level with a finer granularity.</td>
                                    </tr>
                                    <tr>
                                        <td>workbench.tree.indent</td>
                                        <td>Controls tree indentation in pixels.</td>
                                    </tr>
                                    <tr>
                                        <td>workbench.tree.renderIndentGuides</td>
                                        <td>Controls whether the tree should render indent guides.</td>
                                    </tr>
                                </tbody>
                            </table>


                            <h2>Plugins</h2>
                            <h3 class="clear">HTML Tag Wrap</h3>
                            <p>Plugin dependency: <a href="https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap" rel="nofollow">htmltagwrap</a></p>
                            <p>Wraps selected code with HTML tags.</p>
                            <h3>Usage</h3>
                            <ul>
                                <li>Select one or more blocks of text or strings of text.</li>
                                <li>Press <kbd>Alt</kbd> + <kbd>W</kbd> or <kbd>Option</kbd> + <kbd>W</kbd> for Mac.</li>
                                <li>Type the tag name you want.</li>
                            </ul>
                            <p>By default, pressing spacebar will deselect the closing tags, so you can add attributes to the opening tags (you can turn this feature off, see below). If nothing is selected when you run htmltagwrap, it will add an opening and closing tag at the cursor position.</p>
                            <p>NOTE: This extension works best in files that either use tabs or spaces for indentation. It may not work as well with mixed tabs/spaces.</p>

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