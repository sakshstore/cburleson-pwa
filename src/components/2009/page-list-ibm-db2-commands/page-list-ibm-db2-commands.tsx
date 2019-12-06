import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-list-ibm-db2-commands',
})
export class PageListIbmDb2Commands {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageListIbmDb2Commands.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
    }

    // Use this if using source code blocks to be formatted by prism.js...
    // componentDidLoad() {
    // setTimeout(() => Prism.highlightAll(), 0)
    // }

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

                <p class="entry-meta">Posted on <time>{new Date(this.header.datePublished).toDateString()}</time> (last modified <time>{new Date(this.header.dateModified).toDateString()}</time>)</p>

                <p>Did you know that you can get a quick list of db2 commands by typing &#8220;db2 ?&#8221; on the command line?</p>
                <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2009/03/db2Help.gif" alt="" /></p>
                <p>Following are the DB2 commands from the screen-shot in a form that you can copy and paste:</p>

                <table class="table table-bordered">
                    <tbody>
                        <tr>
                            <td>ACTIVATE DATABASE</td>
                            <td>GET CONTACTS</td>
                            <td>RECOVER</td>
                        </tr>
                        <tr>
                            <td>ADD CONTACT</td>
                            <td>GET/UPDATE DB CFG</td>
                            <td>REDISTRIBUTE DB PARTITION</td>
                        </tr>
                        <tr>
                            <td>ADD CONTACTGROUP</td>
                            <td>GET/UPDATE DBM CFG</td>
                            <td>REFRESH LDAP</td>
                        </tr>
                        <tr>
                            <td>ADD DATALINKS MANAGER</td>
                            <td>GET DBM MONITOR SWITCHES</td>
                            <td>REGISTER LDAP</td>
                        </tr>
                        <tr>
                            <td>ADD DBPARTITIONNUM</td>
                            <td>GET DESCRIPTION FOR HEALTH</td>
                            <td>REGISTER XMLSCHEMA</td>
                        </tr>
                        <tr>
                            <td>ADD XMLSCHEMA</td>
                            <td>GET NOTIFICATION LIST</td>
                            <td>REGISTER XSROBJECT</td>
                        </tr>
                        <tr>
                            <td>ARCHIVE LOG</td>
                            <td>GET HEALTH SNAPSHOT</td>
                            <td>REORG INDEXES/TABLE</td>
                        </tr>
                        <tr>
                            <td>ATTACH</td>
                            <td>GET INSTANCE</td>
                            <td>REORGCHK</td>
                        </tr>
                        <tr>
                            <td>AUTOCONFIGURE</td>
                            <td>GET MONITOR SWITCHES</td>
                            <td>RESET ADMIN CFG</td>
                        </tr>
                        <tr>
                            <td>BACKUP DATABASE</td>
                            <td>GET RECOMMENDATIONS</td>
                            <td>RESET ALERT CFG</td>
                        </tr>
                        <tr>
                            <td>BIND</td>
                            <td>GET ROUTINE</td>
                            <td>RESET DB CFG</td>
                        </tr>
                        <tr>
                            <td>CATALOG APPC NODE</td>
                            <td>GET SNAPSHOT</td>
                            <td>RESET DBM CFG</td>
                        </tr>
                        <tr>
                            <td>CATALOG APPN NODE</td>
                            <td>HELP</td>
                            <td>RESET MONITOR</td>
                        </tr>
                        <tr>
                            <td>CATALOG DATABASE</td>
                            <td>HISTORY</td>
                            <td>RESTART DATABASE</td>
                        </tr>
                        <tr>
                            <td>CATALOG DCS DATABASE</td>
                            <td>IMPORT</td>
                            <td>RESTORE DATABASE</td>
                        </tr>
                        <tr>
                            <td>CATALOG LDAP DATABASE</td>
                            <td>INITIALIZE TAPE</td>
                            <td>REWIND TAPE</td>
                        </tr>
                        <tr>
                            <td>CATALOG LDAP NODE</td>
                            <td>INSPECT</td>
                            <td>ROLLFORWARD DATABASE</td>
                        </tr>
                        <tr>
                            <td>CATALOG LOCAL NODE</td>
                            <td>LIST ACTIVE DATABASES</td>
                            <td>RUNCMD</td>
                        </tr>
                        <tr>
                            <td>CATALOG NPIPE NODE</td>
                            <td>LIST APPLICATIONS</td>
                            <td>RUNSTATS</td>
                        </tr>
                        <tr>
                            <td>CATALOG NETBIOS NODE</td>
                            <td>LIST COMMAND OPTIONS</td>
                            <td>SET CLIENT</td>
                        </tr>
                        <tr>
                            <td>CATALOG ODBC DATA SOURCE</td>
                            <td>LIST DATABASE DIRECTORY</td>
                            <td>SET RUNTIME DEGREE</td>
                        </tr>
                        <tr>
                            <td>CATALOG TCPIP NODE</td>
                            <td>LIST DB PARTITION GROUPS</td>
                            <td>SET TABLESPACE CONTAINERS</td>
                        </tr>
                        <tr>
                            <td>CHANGE DATABASE COMMENT</td>
                            <td>LIST DATALINKS MANAGERS</td>
                            <td>SET TAPE POSITION</td>
                        </tr>
                        <tr>
                            <td>CHANGE ISOLATION LEVEL</td>
                            <td>LIST DBPARTITIONNUMS</td>
                            <td>SET UTIL_IMPACT_PRIORITY</td>
                        </tr>
                        <tr>
                            <td>COMPLETE XMLSCHEMA</td>
                            <td>LIST DCS APPLICATIONS</td>
                            <td>SET WRITE</td>
                        </tr>
                        <tr>
                            <td>CREATE DATABASE</td>
                            <td>LIST DCS DIRECTORY</td>
                            <td>START DATABASE MANAGER</td>
                        </tr>
                        <tr>
                            <td>CREATE TOOLS CATALOG</td>
                            <td>LIST DRDA INDOUBT</td>
                            <td>START HADR</td>
                        </tr>
                        <tr>
                            <td>DEACTIVATE DATABASE</td>
                            <td>LIST HISTORY</td>
                            <td>STOP DATABASE MANAGER</td>
                        </tr>
                        <tr>
                            <td>DECOMPOSE XML DOCUMENT</td>
                            <td>LIST INDOUBT TRANSACTIONS</td>
                            <td>STOP HADR</td>
                        </tr>
                        <tr>
                            <td>DEREGISTER</td>
                            <td>LIST NODE DIRECTORY</td>
                            <td>TAKEOVER</td>
                        </tr>
                        <tr>
                            <td>DESCRIBE</td>
                            <td>LIST ODBC DATA SOURCES</td>
                            <td>TERMINATE</td>
                        </tr>
                        <tr>
                            <td>DETACH</td>
                            <td>LIST PACKAGES/TABLES</td>
                            <td>UNCATALOG DATABASE</td>
                        </tr>
                        <tr>
                            <td>DROP CONTACT</td>
                            <td>LIST TABLESPACE CONTAINERS</td>
                            <td>UNCATALOG DCS DATABASE</td>
                        </tr>
                        <tr>
                            <td>DROP CONTACTGROUP</td>
                            <td>LIST TABLESPACES</td>
                            <td>UNCATALOG LDAP DATABASE</td>
                        </tr>
                        <tr>
                            <td>DROP DATABASE</td>
                            <td>LIST UTILITIES</td>
                            <td>UNCATALOG LDAP NODE</td>
                        </tr>
                        <tr>
                            <td>DROP DATALINKS MANAGER</td>
                            <td>LOAD</td>
                            <td>UNCATALOG NODE</td>
                        </tr>
                        <tr>
                            <td>DROP DBPARTITIONNUM</td>
                            <td>LOAD QUERY</td>
                            <td>UNCATALOG ODBC DATA</td>
                        </tr>
                        <tr>
                            <td>DROP TOOLS CATALOG</td>
                            <td>MIGRATE DATABASE</td>
                            <td>UNQUIESCE DATABASE</td>
                        </tr>
                        <tr>
                            <td>ECHO</td>
                            <td>PING</td>
                            <td>UNQUIESCE INSTANCE</td>
                        </tr>
                        <tr>
                            <td>EDIT</td>
                            <td>PREP/PRECOMPILE</td>
                            <td>UPDATE ALERT CFG</td>
                        </tr>
                        <tr>
                            <td>EXPORT</td>
                            <td>PRUNE HISTORY/LOGFILE</td>
                            <td>UPDATE COMMAND OPTIONS</td>
                        </tr>
                        <tr>
                            <td>FORCE APPLICATION</td>
                            <td>PUT ROUTINE</td>
                            <td>UPDATE CONTACT</td>
                        </tr>
                        <tr>
                            <td>GET/UPDATE ADMIN CFG</td>
                            <td>QUERY CLIENT</td>
                            <td>UPDATE CONTACTGROUP</td>
                        </tr>
                        <tr>
                            <td>GET ALERT CFG</td>
                            <td>QUIESCE DATABASE</td>
                            <td>UPDATE NOTIFICATION LIST</td>
                        </tr>
                        <tr>
                            <td>GET AUTHORIZATIONS</td>
                            <td>QUIESCE INSTANCE</td>
                            <td>UPDATE HISTORY</td>
                        </tr>
                        <tr>
                            <td>GET/UPDATE CLI CFG</td>
                            <td>QUIESCE TABLESPACES</td>
                            <td>UPDATE LDAP NODE</td>
                        </tr>
                        <tr>
                            <td>GET CONNECTION STATE</td>
                            <td>QUIT</td>
                            <td>UPDATE MONITOR SWITCHES</td>
                        </tr>
                        <tr>
                            <td>GET CONTACTGROUP</td>
                            <td>REBIND</td>
                            <td>XQUERY</td>
                        </tr>
                        <tr>
                            <td>GET CONTACTGROUPS</td>
                            <td>RECONCILE</td>
                            <td>&nbsp;</td>
                        </tr>
                    </tbody>
                </table>

            </ion-content>

        ];
    }
}
