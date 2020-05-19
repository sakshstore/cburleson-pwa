import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-better-error-messages-from-gulp-using-gulp-util',
})
export class PagePageBetterErrorMessages {

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

                            <p>Gulp is a streaming build system that can help automate and enhance your workflow. For example, at Base22, in one of our composite tasks, we use Gulp to create a directory structure, compile Less into standard CSS, copy static dependencies, minify JavaScript, compress images, run a simple HTTP server, and then watch for subsequent changes to files while we’re working. Gulp is easy to install, easy to learn, easy to configure, and I love it. But when it happens to bomb on a problem, it doesn’t always log information that you can actually make sense of. Luckily, there’s a Gulp plugin that can help you coax more troubleshooting info out of these errors.</p>

                            <p>Take the following Gulp error message, for example:</p>

                            <h3>Example Problem – Useless Error Message</h3>

                            <deckgo-highlight-code><code slot="code">{`events.js:85
      throw er; // Unhandled 'error' event
            ^
Error
    at new Parser (C:\git\frontend\node_modules\gulp-less\node_modules\less\lib\less\parser.js:333:27)
    at Object.less.render (C:\git\frontend\node_modules\gulp-less\node_modules\less\lib\less\index.js:18:22)`}</code></deckgo-highlight-code>


                            <p>Pretty useless. The only thing one can discern from the error is that it has something to do with the less parser. But what? Who the #$@% knows.</p>

                            <p>But what if you could get the following instead?</p>

                            <h3>Example Solution: Improved Error Message</h3>


                            <deckgo-highlight-code><code slot="code">{`[15:52:20] { [Error: Unrecognised input in file C:\git\frontend\dev\less\theme.less line no. 2449]
  type: 'Parse',
  message: 'Unrecognised input in file C:\\git\\frontend\\dev\\less\\theme.less line no. 2449',
  filename: 'C:\\git\\frontend\\dev\\less\\theme.less',
  index: 45319,
  line: 2449,
  callLine: NaN,
  callExtract: undefined,
  column: 17,
  extract:
   [ ' .btn-main-green {background-color: #7AB642; color:white; }',
     ' .btn-main-green: {background-color: #7AB642; color:white; }',
     ' .btn-main-green:hover {background-color: #2B872B; color:white;}' ],
  lineNumber: 2449,
  fileName: 'C:\\git\\frontend\\dev\\less\\theme.less',
  ...etc...`}</code></deckgo-highlight-code>

                            <p>This error message is much improved. It tells us exactly which less file is failing the parser. It also tells us the precise failing line number, and it even gives us an extract of the CSS around that line number. Without even opening the file, we can see the erroneous colon after the CSS class, <code>.btn-main-green: &#123;</code>.</p>

                            <h2>How To…</h2>

                            <p>The answer to this problem lies in the <a href="https://github.com/gulpjs/gulp-util" rel="nofollow">gulp-util plugin</a>.</p>

                            <p>Install the plugin and also add it to your package.json file with the following command:</p>

                            <p><code>npm install --save-dev gulp-util</code></p>

                            <p>Next, add the following declaration to the top of your gulp.js file:</p>

                            <p><code>var gutil = require('gulp-util');</code></p>

                            <p>Finally, attach the following error handler to tasks (when you are compiling less, uglifying some code, or whatever):</p>

                            <p><code>.pipe(less().on('error', gutil.log))</code></p>

                            <p>or…</p>

                            <p><code>.pipe(uglify().on('error', gutil.log))</code></p>

                            <p>With this little gem, you can now spend less time troubleshooting errors and more time creating works of art.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}