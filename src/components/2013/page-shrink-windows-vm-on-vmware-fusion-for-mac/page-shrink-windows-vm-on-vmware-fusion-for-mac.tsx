import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-shrink-windows-vm-on-vmware-fusion-for-mac',
})
export class PageShrinkWindowsVmOnVmwareFusionForMac {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageShrinkWindowsVmOnVmwareFusionForMac.componentWillLoad');
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

                <p>Here’s my procedure for shrinking a Windows virtual machine on VMWare Fusion for the Mac. I should give credit to &quot;Mmc&quot; who posted the <a href="http://techblog.41concepts.com/2008/03/31/Shrink-Your-Windows-Disk-Image-On-Wmware-Fusion-Mac/" rel="nofollow">original procedure</a> back in March 2008, which continues to dominate in Google search results. That procedure is out of date, however, so I reckon it’s time for an update.</p>

                <ol>
                    <li>Make a backup of the VM (just to be on the safe side).</li>
                    <li>Remove any snapshots; you can’t reclaim disk space on a VM that has them.</li>
                    <li>From within the Windows VM, clean up files and defrag the hard drive (Run Disk Cleanup, delete unused files, uninstall anything you don’t need, empty the recycle bin, delete the browser caches, etc., etc. Then defragment the hard-drive inside the Windows VM.)</li>
                    <li>Zap the unused disk space<br />
                        – Download&nbsp;<a href="http://technet.microsoft.com/en-us/sysinternals/bb897443.aspx" rel="nofollow">SDelete</a> into the Windows VM. I like to put sdelete.exe directly in C: (root) on all my VMs so that I know it’s always there in that convenient spot when it’s time to compress the VM again.<br />
                        – In a command prompt, execute “sdelete -z c:” to zap all the free disk space on the C drive</li>
                    <li>Shut down the Windows VM and quit VMWare Fusion.</li>
                    <li>Go to Window &gt; Virtual Machines Library, select the VM and then click the icon to Refresh Disk Space (as shown below)…<br />
                        <img  src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/refreshDiskSpace.png" alt="" /></li>
                    <li>Finally, go to Virtual Machines &gt; Settings… &gt; General and click the Clean Up Virtual Machine button to reclaim disk space (shown below)…<br />
                        <img  src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/vmWareRecliamSpace.png" alt="" /></li>
                </ol>

            </ion-content>

        ];
    }
}
