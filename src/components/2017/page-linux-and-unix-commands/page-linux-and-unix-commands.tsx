import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"
import 'prismjs/components/prism-bash.min.js';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-linux-and-unix-commands',
})
export class PageLinuxAndUnixCommands {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageLinuxAndUnixCommands.componentWillLoad');
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


    componentDidLoad() {
        setTimeout(() => Prism.highlightAll(), 0)
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

                            <p>My collection of handy Linux, Unix, and Mac OS terminal commands.</p>

                            <h2>Change file permissions</h2>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr role="row">
                                        <th>Command</th>
                                        <th>Usage</th>
                                    </tr>
                                </thead>
                                <tbody aria-live="polite" aria-relevant="all">
                                    <tr role="row">
                                        <td><code>chmod +x filename.ext</code></td>
                                        <td>Give execute access to a file.</td>
                                    </tr>
                                    <tr role="row">
                                        <td><code>sudo chmod -R 777 workspace</code></td>
                                        <td><code>-R</code> means <em>RECURSIVE</em></td>
                                    </tr>
                                    <tr role="row">
                                        <td><code>sudo chown -R basejump workspace</code></td>
                                        <td>Take ownership of a file. basejump (the user) and workspace (the directory)</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h2>Compress or extract files</h2>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr role="row">
                                        <th>Command</th>
                                        <th>Usage</th>
                                    </tr>
                                </thead>
                                <tbody aria-live="polite" aria-relevant="all">
                                    <tr role="row">
                                        <td><code>tar -zxvf file.tar.gz</code></td>
                                        <td>To extract one or more members from an archive:</td>
                                    </tr>
                                    <tr role="row">
                                        <td>
                                            <code>tar -czvf name-of-archive.tar.gz /path/to/directory-or-file</code>
                                        </td>
                                        <td><p>Compress an entire directory or single file.</p>
                                            <p><em>Note: Be sure to add the <code>.tar.gz</code> in the archive file name yourself; the command doesn't do it for you.<br />
                                            </em></p>
                                            <p>Here's what the switches mean: <code>-c</code>: Create an archive. <code>-z</code>: Compress the archive with gzip. <code>-v</code>: Display progress in the terminal<br />
                                                while creating the archive, also known as &quot;verbose&quot; mode. The <code>v</code> is always optional in these commands, but<br />
                                                it's helpful. <code>-f</code>: Allows you to specify the filename of the archive.</p></td>
                                    </tr>
                                </tbody>
                            </table>

                            <h2>Create an alias for a common command</h2>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr role="row">
                                        <th>Command</th>
                                        <th>Usage</th>
                                    </tr>
                                </thead>
                                <tbody aria-live="polite" aria-relevant="all">
                                    <tr role="row">
                                        <td><code>alias p=&quot;&lt;command&gt;&quot;</code></td>
                                        <td><p>Create shortcut aliases to common commands.</p>
                                            <p>For example:</p>
                                            <div><code>alias p=&quot;open /x/yx/z&quot;</code> to open a particular directory in Finder</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <h2>Directory commands</h2>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr role="row">
                                        <th>Command</th>
                                        <th>Usage</th>
                                    </tr>
                                </thead>
                                <tbody aria-live="polite" aria-relevant="all">
                                    <tr role="row">
                                        <td><code>pwd</code></td>
                                        <td>Print working directory (the directory you're currently in).</td>
                                    </tr>
                                    <tr role="row">
                                        <td><code>mv &lt;oldDirName&gt; &lt;newDirName&gt;</code></td>
                                        <td>Rename a directory. Be aware: this is actually a move command. So, you&#8217;re just moving<br />
                                            the directory from one name to another in the same path.</td>
                                    </tr>
                                    <tr role="row">
                                        <td><code>rmdir</code></td>
                                        <td>Remove an empty directory</td>
                                    </tr>
                                    <tr role="row">
                                        <td><code>rm -rf &lt;dirName&gt;</code></td>
                                        <td>Forcefully remove a directory recursively.
                                        <p><em>Remove the f switch to be prompted for each sub-directory and file inside.</em></p></td>
                                    </tr>
                                    <tr role="row">
                                        <td><code>cp -rf present/directory /desire/directory</code></td>
                                        <td>Copy an entire directory, its subdirectories, and files.
                                        <p><em>Remove the f switch to be prompted for each sub-directory and file inside.</em></p></td>
                                    </tr>
                                </tbody>
                            </table>

                            <h2>Execute command as root user</h2>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr role="row">
                                        <th>Command</th>
                                        <th>Usage</th>
                                    </tr>
                                </thead>
                                <tbody aria-live="polite" aria-relevant="all">
                                    <tr role="row">
                                        <td><code>sudo &lt;command&gt;</code></td>
                                        <td>Execute command as the root user.</td>
                                    </tr>
                                    <tr role="row">
                                        <td><code>sudo !!</code></td>
                                        <td>Execute the last command as root user. (<code>!!</code>) represents the last command<br />
                                            you just tried to run, but couldn't because of permission issues.</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h2>Execute task in background</h2>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr role="row">
                                        <th>Command</th>
                                        <th>Usage</th>
                                    </tr>
                                </thead>
                                <tbody aria-live="polite" aria-relevant="all">
                                    <tr role="row">
                                        <td><code>./startTest.sh &amp;</code></td>
                                        <td>Start the execution in the background, which will allow you to kill your SSH terminal<br />
                                            without killing the process itself.</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h2>Find large files</h2>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr role="row">
                                        <th>Command</th>
                                        <th>Usage</th>
                                    </tr>
                                </thead>
                                <tbody aria-live="polite" aria-relevant="all">
                                    <tr role="row">
                                        <td><code>cd / find . -size +10000000c -print</code></td>
                                        <td>Prints out the names of all files with size &gt; 10mb.</td>
                                    </tr>
                                    <tr role="row">
                                        <td><code>cd / sudo du -sm *</code></td>
                                        <td>Examine the size of the directories under /. You can then navigate into<br />
                                            any given subdirectory and execute <code>du -sm *</code> again to see which subdirectories are the largest.</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h2>Inspect disk space and usage</h2>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr role="row">
                                        <th>Command</th>
                                        <th>Usage</th>
                                    </tr>
                                </thead>
                                <tbody aria-live="polite" aria-relevant="all">
                                    <tr role="row">
                                        <td><code>df -h</code></td>
                                        <td>Inspect disk space and usage (in MB or GB)</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h2>Work with environment variables</h2>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr role="row">
                                        <th>Command</th>
                                        <th>Usage</th>
                                    </tr>
                                </thead>
                                <tbody aria-live="polite" aria-relevant="all">
                                    <tr role="row">
                                        <td><code>printenv</code></td>
                                        <td>Prints all currently set environment variables and values.</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h2>Remove a file</h2>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr role="row">
                                        <th>Command</th>
                                        <th>Usage</th>
                                    </tr>
                                </thead>
                                <tbody aria-live="polite" aria-relevant="all">
                                    <tr role="row">
                                        <td><code>mv</code></td>
                                        <td>Rename a file</td>
                                    </tr>
                                    <tr role="row">
                                        <td><code>rm</code></td>
                                        <td>Remove a file</td>
                                    </tr>
                                    <tr role="row">
                                        <td><code>rm -f</code></td>
                                        <td>Forcefully remove a file</td>
                                    </tr>
                                    <tr role="row">
                                        <td><code>rm -i</code></td>
                                        <td>Interactively remove a file</td>
                                    </tr>
                                </tbody>
                            </table>

                            <p>If you are not certain about removing files that match a pattern you supply, it is always good to run rm interactively (<code>rm –i</code>) to prompt before every removal.</p>

                            <h2>Switch user</h2>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr role="row">
                                        <th>Command</th>
                                        <th>Usage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr role="row">
                                        <td><code>su &#8211; &lt;username&gt;</code></td>
                                        <td>Switch to the given user, loading their profile. You may have to use sudo su &#8211; &lt;username&gt;.</td>
                                    </tr>
                                    <tr role="row">
                                        <td><code>su</code></td>
                                        <td>Without a username means to just switch to root user.</td>
                                    </tr>
                                    <tr role="row">
                                        <td><code>whoami</code></td>
                                        <td>&quot;Who Am I?&quot; Prints the current user.</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h2>View a file</h2>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr role="row">
                                        <th>Command</th>
                                        <th>Usage</th>
                                    </tr>
                                </thead>
                                <tbody aria-live="polite" aria-relevant="all">
                                    <tr role="row">
                                        <td><code>cat</code></td>
                                        <td>Used for viewing files that are not very long; it does not provide any scroll-back.</td>
                                    </tr>
                                    <tr role="row">
                                        <td><code>tac</code></td>
                                        <td>Used to look at a file backwards, starting with the last line.</td>
                                    </tr>
                                    <tr role="row">
                                        <td><code>less</code></td>
                                        <td>Used to view larger files because it is a paging program; it pauses at each 
                                            screenful of text, provides scroll-back capabilities, and lets you search and navigate within the file. Note:
                                            Use / to search for a pattern in the forward direction and ? for a pattern in the backward direction. Press <kbd>Q</kbd> to quit.</td>
                                    </tr>
                                    <tr role="row">
                                        <td><code>tail</code></td>
                                        <td>Used to print the last 10 lines of a file by default. You can change the<br />
                                            number of lines by doing -n 15 or just -15 if you wanted to look at the last 15 lines instead of the default.</td>
                                    </tr>
                                    <tr role="row">
                                        <td><code>head</code></td>
                                        <td>The opposite of tail; by default it prints the first 10 lines of a file.</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h2>Update the OS packages</h2>

                            <pre><code class="language-bash">{`sudo apt-get update
sudo apt-get upgrade
sudo apt-get dist-upgrade
sudo reboot`}</code></pre>

                            <h2>Use pipes</h2>

                            <p>The UNIX/Linux philosophy is to have many simple and short programs (or commands) cooperate together to produce quite complex results, rather than have one complex program with many possible options and modes of operation. In order to accomplish this, extensive use of pipes is made; you can pipe the output of one command or program into another as its input. In order to do this we use the vertical-bar, <code>|</code>, (pipe symbol) between commands as in: <code>$ command1 | command2 | command3</code> This represents what we often call a pipeline and allows Linux to combine the actions of several commands into one. This is extraordinarily efficient because command2 and command3 do not have to wait for the previous pipeline commands to complete before they can begin hacking at the data in their input streams; on multiple CPU or core systems the available computing power is much better utilized and things get done quicker. In addition there is no need to save output in (temporary) files between the stages in the pipeline, which saves disk space and reduces reading and writing from disk, which is often the slowest bottleneck in getting something done.</p>

                            <h2>Split a large text file into smaller parts</h2>

                            <p>The Linux <code>split</code> command can help you break up really large text files into smaller, more manageable parts.</p>

                            <p><code>split -l &lt;line-numbers&gt; &lt;source-file&gt; &lt;destination-file-prefix&gt;</code></p>

                            <p>For example:</p>

                            <p><code>split -l 5000000 data3.trig segment</code></p>

                            <h2>Fast string replace using stream editor (sed)</h2>

                            <p>If you need to replace strings in a very large file or many files, you can use <code>sed</code>, the streaming editor. It's very fast because it uses streaming. This sure beats opening individual files in some editor and then using a find and replace function. The string positions expect regex, so be careful fo special characters.</p>

                            <p><code>sed 's/&lt;original-string&gt;/&lt;revised-string&gt;/' &lt;source-file&gt; &gt; &lt;new-file&gt;</code></p>

                            <p>For example:</p>

                            <p><code>sed 's/dev.acme.com:48083/ldp.demo:8083/' segment-aa &gt; segmentaa</code></p>

                            <h2>Change default shell (on Mac OS X)</h2>

                            <p>You can change the default shell through the command line <code>chsh</code> command, which is shorthand for &#8216;change shell&#8217;. You’ll need to authenticate each change as well, the command will ask directly or you can prefix it with sudo. Here’s how to set the default user shell to zsh, bash, tcsh, ksh, sh, or any other shell for that matter.</p>

                            <ul>
                                <li>zsh: <code>chsh -s /bin/zsh</code></li>
                                <li>ksh: <code>chsh -s /bin/ksh</code></li>
                                <li>tcsh: <code>chsh -s /bin/tcsh</code></li>
                                <li>bash (default): <code>chsh -s /bin/bash</code></li>
                                <li>sh: <code>chsh -s /bin/sh</code></li>
                                <li>other shells: <code>chsh -s /path/to/alternate/shell</code></li>
                            </ul>


                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                            <h5>Related Web Resources</h5>
                            <ul>
                                <li><a href="https://tiswww.case.edu/php/chet/bash/bashref.html" rel="nofollow">Bash Reference Manual</a></li>
                                <li><a href="https://github.com/LeCoupa/awesome-cheatsheets/blob/master/languages/bash.sh" rel="nofollow">Bash Cheatsheet</a></li>
                                <li><a href="http://www.learnshell.org/" rel="nofollow">Learn Shell</a></li>
                            </ul>
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}