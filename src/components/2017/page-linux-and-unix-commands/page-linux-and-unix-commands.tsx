import { Component, h } from '@stencil/core';

import Prism from "prismjs"
import 'prismjs/components/prism-bash.min.js';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-linux-and-unix-commands',
})
export class PageLinuxAndUnixCommands {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageLinuxAndUnixCommands.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
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
                            <p>Other references</p>
                            <ul>
                                <li><a href="https://tiswww.case.edu/php/chet/bash/bashref.html" rel="nofollow">Bash Reference Manual</a></li>
                                <li><a href="https://github.com/LeCoupa/awesome-cheatsheets/blob/master/languages/bash.sh" rel="nofollow">Bash Cheatsheet</a></li>
                                <li><a href="http://www.learnshell.org/" rel="nofollow">Learn Shell</a></li>
                            </ul>

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
                                        <td>chmod +x filename.ext</td>
                                        <td>Give execute access to a file.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>sudo chmod -R 777 workspace</td>
                                        <td>-R means<br />
                                            <em>RECURSIVE</em></td>
                                    </tr>
                                    <tr role="row">
                                        <td>sudo chown -R basejump workspace</td>
                                        <td>Take ownership of a file. basejump (user) and workspace (directory)</td>
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
                                        <td>tar -zxvf file.tar.gz</td>
                                        <td>To extract one or more members from an archive:</td>
                                    </tr>
                                    <tr role="row">
                                        <td>
                                            <pre>tar -czvf name-of-archive.tar.gz /path/to/directory-or-file</pre>
                                        </td>
                                        <td><p>Compress an entire directory or single file.</p>
                                        <p><em>Note: Be sure to add the .tar.gz in the archive file name yourself; the command doesn&#8217;t do it for you.<br />
                                        </em></p>
                                        <p>Here’s what the switches mean: -c: Create an archive. -z: Compress the archive with gzip. -v: Display progress in the terminal<br />
                                            while creating the archive, also known as “verbose” mode. The v is always optional in these commands, but<br />
                                            it’s helpful. -f: Allows you to specify the filename of the archive.</p></td>
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
                                        <td>alias p=&lt;command&gt;</td>
                                        <td><p>Create shortcut aliases to common commands.</p>
                                            <p>For example:</p>
                                            <div>alias p=&#8221;open /x/yx/z&#8221; to open a particular directory in Finder</div>
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
                                        <td>mv &lt;oldDirName&gt; &lt;newDirName&gt;</td>
                                        <td>Rename a directory. Be aware: this is actually a move command. So, you&#8217;re just moving<br />
                                            the directory from one name to another in the same path.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>rmdir</td>
                                        <td>Remove an empty directory</td>
                                    </tr>
                                    <tr role="row">
                                        <td>rm -rf &lt;dirName&gt;</td>
                                        <td>Forcefully remove a directory recursively.
                                        <p><em>Remove the f switch to be prompted for each sub-directory and file inside.</em></p></td>
                                    </tr>
                                    <tr role="row">
                                        <td>cp -rf present/directory /desire/directory</td>
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
                                        <td>sudo &lt;command&gt;</td>
                                        <td>Execute command as the root user.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>sudo !!</td>
                                        <td>Execute the last command as root user. (!!) represents the last command<br />
                                            you just tried to run, but couldn&#8217;t because of permission issues.</td>
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
                                        <td>./startTest.sh &amp;</td>
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
                                        <td>cd / find . -size +10000000c -print</td>
                                        <td>Prints out the names of all files with size &gt; 10mb.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>cd / sudo du -sm *</td>
                                        <td>Examine the size of the directories under /. You can then navigate into<br />
                                            any given subdirectory and execute dm -sm * again to see which subdirectories are the largest.</td>
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
                                        <td>df -h</td>
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
                                        <td>printenv</td>
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
                                        <td>mv</td>
                                        <td>Rename a file</td>
                                    </tr>
                                    <tr role="row">
                                        <td>rm</td>
                                        <td>Remove a file</td>
                                    </tr>
                                    <tr role="row">
                                        <td>rm -f</td>
                                        <td>Forcefully remove a file</td>
                                    </tr>
                                    <tr role="row">
                                        <td>rm -i</td>
                                        <td>Interactively remove a file</td>
                                    </tr>
                                </tbody>
                            </table>

                            <p>If you are not certain about removing files that match a pattern you supply, it is always good to run rm interactively (rm<br />
                                –i) to prompt before every removal.</p>

                            <h2>Switch user</h2>

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr role="row">
                                        <th>>Command</th>
                                        <th>Usage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr role="row">
                                        <td>su &#8211; &lt;username&gt;</td>
                                        <td>Switch to the given user, loading their profile. You may have to use sudo su &#8211; &lt;username&gt;.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>su</td>
                                        <td>Without a username means to just switch to root user.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>whoami</td>
                                        <td>&#8220;Who Am I?&#8221; Prints the current user.</td>
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
                                        <td>cat</td>
                                        <td>Used for viewing files that are not very long; it does not provide any scroll-back.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>tac</td>
                                        <td>Used to look at a file backwards, starting with the last line.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>less</td>
                                        <td>Used to view larger files because it is a paging program; it pauses at each<br />
                                            screenful of text, provides scroll-back capabilities, and lets you search and navigate within the file. Note:<br />
                                            Use / to search for a pattern in the forward direction and ? for a pattern in the backward direction. Press<br />
                                            Q to quit.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>tail</td>
                                        <td>Used to print the last 10 lines of a file by default. You can change the<br />
                                            number of lines by doing -n 15 or just -15 if you wanted to look at the last 15 lines instead of the default.</td>
                                    </tr>
                                    <tr role="row">
                                        <td>head</td>
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

                            <p>The UNIX/Linux philosophy is to have many simple and short programs (or commands) cooperate together to produce quite complex results, rather than have one complex program with many possible options and modes of operation. In order to accomplish this, extensive use of pipes is made; you can pipe the output of one command or program into another as its input. In order to do this we use the vertical-bar, |, (pipe symbol) between commands as in: $ command1 | command2 | command3 The above represents what we often call a pipeline and allows Linux to combine the actions of several commands into one. This is extraordinarily efficient because command2 and command3 do not have to wait for the previous pipeline commands to complete before they can begin hacking at the data in their input streams; on multiple CPU or core systems the available computing power is much better utilized and things get done quicker. In addition there is no need to save output in (temporary) files between the stages in the pipeline, which saves disk space and reduces reading and writing from disk, which is often the slowest bottleneck in getting something done.</p>

                            <h2>Split a large text file into smaller parts</h2>

                            <p>The Linux split command can help you break up really large text files into smaller, more manageable parts.</p>

                            <p><code>split -l &lt;line-numbers&gt; &lt;source-file&gt; &lt;destination-file-prefix&gt;</code></p>

                            <p>For example:</p>

                            <p><code>split -l 5000000 data3.trig segment</code></p>

                            <h2>Fast string replace using stream editor (sed)</h2>

                            <p>If you need to replace strings in a very large file or many files, you can use sed, the streaming editor. It&#8217;s very fast because it uses streaming. This sure beats opening individual files in some editor and then using a find and replace function. The string positions expect regex, so be careful fo special characters.</p>

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
                            <gls-adsense-ad />
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}