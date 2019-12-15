import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-docker-cheat-sheet',
})
export class PageDockerCheatSheet {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageDockerCheatSheet.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
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

                <h1>{this.header.title}</h1>

                <app-entry-meta header={this.header} />

                <p>My cheat sheet of commonly used docker commands.</p>

                <h2>List all containers</h2>
                <p><code>docker ps --all</code> or <code>docker ps -a</code></p>
                <h2>Remove all containers and images</h2>
                <p>Here are the two Docker commands you can run in sequence to completely remove (delete) all of your containers and images.</p>
                <p>To <strong>remove all containers</strong>:</p>
                <p><code>docker rm $(docker ps -a -q)</code></p>
                <p>To <strong>remove all images</strong>:</p>
                <p><code>docker rmi $(docker images -q)</code></p>
                <p>Warning: Executing the commands shown above&nbsp;<em>will</em> destroy <em>all</em>your containers and images; it will not be possible to restore&nbsp;them.</p>
                <h2>List images</h2>
                <p><code>docker images</code></p>
                <h2>Remove an image</h2>
                <p><code>docker rmi &lt;image-id&gt;</code></p>
                <p>Warning: Executing the commands shown above will destroy the given image; it will not be possible to restore it.</p>
                <h2>Container shell access</h2>
                <p>The&nbsp;<code>docker exec</code>&nbsp;command allows you to run commands inside a Docker container. The following command line will give you a bash shell inside your&nbsp;container:</p>
                <p><code>docker exec -it &lt;container-name&gt; bash</code></p>
                <p>If the container does not have bash installed you can use the following as an alternative:</p>
                <p><code>docker exec -it &lt;container-name&gt; sh</code></p>
                <p>For container shell access with root privileges, you can run the following command:</p>
                <p><code>docker exec -ti -u root &lt;container-name&gt; bash</code></p>
                <p>Type <code>exit</code> to exit out of the container and return to your host shell.</p>
                <h2>List ports</h2>
                <p>The <code>port</code> command can be used to display the ports that are exposed by a given container.</p>
                <p><code>docker port &lt;container-name&gt;</code></p>
                <h2>List processes</h2>
                <p>To see the processes running in a container, you can use the <code>top</code> command (similar to running the Linux top command):</p>
                <p><code>docker top &lt;container-name&gt;</code></p>
                <h2>View container log file</h2>
                <p><code>docker logs &lt;container-name&gt;</code></p>
                <h2>Follow container log file</h2>
                <p><code>docker logs --follow &lt;container-name&gt;</code></p>
                <p>or</p>
                <p><code>docker logs -f &lt;container-name&gt;</code></p>
                <h2>Restart a running container</h2>
                <p><code>docker restart</code></p>
                <h2>Stop all running containers</h2>
                <p><code>docker stop $(docker ps -a -q)</code></p>
                <h2>Inspect container information</h2>
                <p><code>docker inspect &lt;container-name-or-id&gt;</code></p>
                <p>This returns verbose information about the container in JSON format.</p>
                <p>You can zero in on a particular attribute using the f parameter. The following, for example, will print only the Mounts section of the container information that would otherwise be found in the whole JSON print.</p>
                <p><code>docker inspect -f '&#123;&#123; .Mounts &#125;&#125;' &lt;container-name-or-id&gt;</code></p>

            </ion-content>

        ];
    }
}