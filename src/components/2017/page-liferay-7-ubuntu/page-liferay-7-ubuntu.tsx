import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"
import 'prismjs/components/prism-properties.min.js';
import 'prismjs/components/prism-bash.min.js';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-liferay-7-ubuntu-developer-vm-setup-log',
})
export class PageLiferay7Ubuntu {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageLiferay7Ubuntu.componentWillLoad');
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

                            <p>This page provides a log of how I setup a Liferay development environment using Ubuntu and VMWare Fusion. The idea is to be able to develop for Liferay CE and Liferay DXP although only the CE portion is fully setup so far, with the DXP portion standing by for potential completion in the case of a customer project. I like to snapshot my VMs frequently so that I can roll back at any point, so you will see indicators everywhere that I&#8217;ve taken a snapshot.</p>
                            <p>This also includes an acid-test, which is itself a mini-tutorial on how to create a RESTful web service endpoint in Liferay.</p>

                            <h1>Create an Ubuntu virtual machine</h1>

                            <ul>
                                <li>Download Ubuntu 16.04.3 LTS Desktop ISO:<br />
                                    <a href="https://www.ubuntu.com/download/desktop" rel="nofollow">https://www.ubuntu.com/download/desktop</a></li>
                                <li>Install using the easy install (drag and drop the ISO after selecting new in VMWare Fusion)<br />
                                    <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/10/liferay-ubuntu-1.png" alt="" /><br />
                                    Password is: dev</li>
                                <li>On this next screen, do not click FINISH!<br />
                                    <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/10/liferay-ubuntu-2.png" alt="" /><br />
                                    Instead, click Customize Settings</li>
                                <li>Save the VM as &#8220;Ubuntu 64-bit Server 16.04.3&#8221; (default file name for the VM)</li>
                                <li>In the virtual machine settings:
<ul>
                                        <li>Processors: 2 Processor Cores</li>
                                        <li>Memory 4000 MB</li>
                                        <li>Disk size: 60 GB (but not pre-allocated); leave split into multiple files checked</li>
                                    </ul>
                                </li>
                                <li>Start up the VM</li>
                                <li>Reinstall VMWare Tools using the instructions for installing here:<br />
                                    <a href="https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&amp;cmd=displayKC&amp;externalId=1022525" rel="nofollow">https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&amp;cmd=displayKC&amp;externalId=1022525</a><br />
                                    RESTART</li>
                                <li><span class="badge badge-secondary">SNAPSHOT: CLEAN INSTALL W VMWARE TOOLS</span></li>
                            </ul>


                            <h1>Update Ubuntu</h1>

                            <pre><code class="language-bash">{`developer@ubuntu:~$ sudo su -
[sudo] password for developer:<
root@ubuntu:~# dev <-password
root@ubuntu:~# apt-get update && apt-get upgrade`}</code></pre>

                            <p><span class="badge badge-secondary">SNAPSHOT: UBUNTU UPDATE &amp; UPGRADE</span></p>

                            <h1>Install Java</h1>

                            <p>Note by the following command that Java is not installed&#8230;</p>

                            <pre><code class="language-bash">{`developer@ubuntu:~$ java -version
The program 'java' can be found in the following packages:
 * default-jre
 * gcj-5-jre-headless
 * openjdk-8-jre-headless
 * gcj-4.8-jre-headless
 * gcj-4.9-jre-headless
 * openjdk-9-jre-headless
Try: sudo apt install <selected package>
developer@ubuntu:~$`}</code></pre>

                            <p>Change to root&#8230;</p>

                            <pre><code class="language-bash">{`sudo su -
(enter password)
apt-get install software-properties-common
add-apt-repository ppa:webupd8team/java
apt-get update
apt-get install oracle-java8-installer`}</code></pre>

                            <p>Check if Java is successfully installed</p>

                            <pre><code class="language-bash">{`java -version
java version "1.8.0_111"
Java(TM) SE Runtime Environment (build 1.8.0_111-b14)
Java HotSpot(TM) 64-Bit Server VM (build 25.111-b14, mixed mode)`}</code></pre>


                            <h1>Fix for network service discovery disabled</h1>

                            <p>I got this on a startup.</p>

                            <p><ion-img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/10/liferay-ubuntu-3.png" alt="" /></p>

                            <h2>Fix</h2>

                            <p>It looks like avahi-daemon is started when the network connection is established (<code>/etc/network/if-up.d/avahi-daemon</code>). This notification is informing you that mDNS (Avahi) has been disabled. It&#8217;s only used for a small number of applications that only work on the local network, it won&#8217;t adversely affect your internet connection or DNS.</p>

                            <p>The most well known use for mDNS is sharing music with Rhythmbox (or iTunes) over your LAN. It&#8217;s an Apple technology, but it&#8217;s largely been ignored in favour of uPNP or DLNA.</p>

                            <p>To disable it, you must edit the file <code>/etc/default/avahi-daemon</code> as root:</p>

                            <pre><code class="language-bash">{`sudo -i
gedit /etc/default/avahi-daemon`}</code></pre>

                            <p>and add this line (or change it if already exists to):</p>

                            <p><code>AVAHI_DAEMON_DETECT_LOCAL=0</code></p>

                            <p>Source: <a href="http://ubuntuforums.org/showthread.php?t=1632952" rel="nofollow">http://ubuntuforums.org/showthread.php?t=1632952</a></p>

                            <h1>Fix for colord-sane crash on startup</h1>

                            <p><ion-img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/10/liferay-ubuntu-4.png" alt="" /></p>

                            <h2>Fix</h2>

                            <pre><code class="language-bash">{`sudo apt-get remove sane-utils
sudo apt-get remove colord`}</code></pre>

                            <p>Worked for me, 16.04 running XFCE, but i&#8217;ve no need for color profiles.</p>

                            <ul>
                                <li><a href="https://bugs.launchpad.net/ubuntu/+source/sane-backends/+bug/1351286" rel="nofollow">https://bugs.launchpad.net/ubuntu/+source/sane-backends/+bug/1351286</a></li>
                            </ul>

                            <p><span class="badge badge-secondary">SNAPSHOT: STARTUP ERRORS FIXED</span></p>

                            <h1>Install MySQL 5.6</h1>

                            <p>You&#8217;ll need MySQL 5.6 for the latest version of Liferay (at this point in time).</p>


                            <pre><code class="language-bash">{`sudo add-apt-repository 'deb http://archive.ubuntu.com/ubuntu trusty universe'
sudo apt-get update
sudo apt install mysql-server-5.6
sudo apt install mysql-client-5.6`}</code></pre>

                            <h2>MySQL root credentials</h2>

                            <table class="table table-bordered table-striped">
                                <tbody>
                                    <tr>
                                        <th>user</th>
                                        <td>root</td>
                                    </tr>
                                    <tr>
                                        <th>password</th>
                                        <td>fruityrooty22</td>
                                    </tr>
                                </tbody>
                            </table>

                            <p><span class="badge badge-secondary">SNAPSHOT: MYSQL 5.6 SERVER AND CLIENT</span></p>

                            <h1>Start the MySQL server and enable the service on system boot</h1>

                            <p>Once the MySQL installation is completed, start the MySQL server and enable the service on system boot:</p>


                            <pre><code class="language-bash">{`sudo su -
systemctl restart mysql
systemctl enable mysql`}</code></pre>

                            <p><span class="badge badge-secondary">SNAPSHOT: ENABLE MYSQL ON BOOT</span></p>

                            <h1>Install MySQL Workbench</h1>

                            <p>Install MySQL Workbench using the APT package manager:</p>

                            <pre><code class="language-bash">{`sudo apt install mysql-workbench`}</code></pre>

                            <h2>Run MySQL Workbench</h2>

                            <p>Launch MySQL Workbench from the terminal:</p>

                            <pre><code class="language-bash">{`mysql-workbench`}</code></pre>

                            <p>To view more launch options from the command line interface, use the <code>--help</code> option:</p>

                            <pre><code class="language-bash">{`/usr/bin/mysql-workbench --help`}</code></pre>

                            <p><span class="badge badge-secondary">SNAPSHOT: MYSQL WORKBENCH</span></p>

                            <h1>Secure the MySQL installation</h1>

                            <pre><code class="language-bash">{`sudo su -
mysql_secure_installation`}</code></pre>

                            <p><span class="badge badge-secondary">SNAPSHOT: SECURE MYSQL INSTALLATION</span></p>

                            <h1>Download Liferay assets</h1>

                            <ul>
                                <li>Download Liferay Portal CE from the site using the Firefox browser in the virtual machine.</li>
                                <li>Alsxo download the latest Liferay IDE for Linux (64bit)</li>
                            </ul>

                            <p>Now, we have both in our Downloads directory. This is what we&#8217;ll need to setup a basic Liferay Portal CE dev environment. Note that in the future, I want to also be able to do Liferay DXP development on the same system. Thus, I&#8217;ll name things using &#8220;CE&#8221; versus &#8220;DXP&#8221; to distinguish.</p>

                            <ul>
                                <li>Download Liferay DXP from Customer Portal</li>
                                <li>Download Liferay Developer Studio from Customer Portal</li>
                                <li>You DO NOT need to download Liferay Workspace as it is within Liferay Developer Studio</li>
                            </ul>

                            <p>To simplify subsequent steps, I renamed my downloads as follows:</p>

                            <p><ion-img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/10/liferay-ubuntu-5.png" alt="" /></p>

                            <p><span class="badge badge-secondary">SNASPSHOT: LIFERAY ASSETS DOWNLOADED</span></p>

                            <h1>Unzip and move Liferay CE</h1>

                            <p>In a terminal&#8230;</p>

                            <pre><code class="language-bash">{`cd ~
cd Downloads
unzip liferay-ce.zip
sudo mv liferay-ce-portal-7.0-ga4/ /opt/liferay-ce`}</code></pre>



                            <p>Notice that during the move operation, the directory was renamed to simpley &#8220;liferay-ce&#8221;.</p>

                            <p>Next, we&#8217;ll do a similar procedure for Liferay DXP.</p>

                            <h1>Unzip and Move Liferay DXP</h1>

                            <p>In a terminal&#8230;</p>


                            <pre><code class="language-bash">{`cd ~
cd Downloads
unzip liferay-dxp.zip
sudo mv liferay-dxp-digital-enterprise-7.0-sp4/ /opt/liferay-dxp`}</code></pre>

                            <p>Notice that during the move operation, the directory was renamed to simpley &#8220;liferay-ce&#8221;.</p>

                            <h1>Delete Liferay CE and DXP Zips</h1>

                            <p>Now we can delete the original archive files to clean up and free some space&#8230;</p>

                            <pre><code class="language-bash">{`cd ~
cd Downloads
rm -rf liferay-ce.zip
rm -rf liferay-dxp.zip`}</code></pre>

                            <p><span class="badge badge-secondary">SNAPSHOT: LIFERAY CE AND DXP IN PLACE</span></p>

                            <h1>Create MySQL databases for Liferay</h1>

                            <p>Since I am setting up my dev to support both liferay-ce and liferay-dxp, I&#8217;ll create two databases, on for each instance.</p>

                            <p>Run the &#8216;<code>mysql</code>&#8216; command as a MySQL super user. The default user is &#8216;root&#8217; with a blank password.</p>

                            <pre><code class="language-bash">{`mysql -h localhost -u root -pfruityrooty22`}</code></pre>

                            <p>Create an empty Liferay database schema by running this command:</p>

                            <pre><code class="language-bash">{`CREATE DATABASE liferayce CHARACTER SET utf8 COLLATE utf8_bin;
CREATE DATABASE liferaydxp CHARACTER SET utf8 COLLATE utf8_bin;`}</code></pre>

                            <p>Create the Liferay database user by running this command. Replace &#8216;liferayuser&#8217; and &#8216;liferaypass&#8217; with a username and password of your choice. If Liferay is not running on the same server as your MySQL database server, replace &#8216;localhost&#8217; with the hostname or IP address of the Liferay server.</p>


                            <pre><code class="language-bash">{`GRANT ALL PRIVILEGES ON liferayce.* TO 'liferay_db_user'@'localhost' IDENTIFIED BY 'liferay_db_user22';
GRANT ALL PRIVILEGES ON liferaydxp.* TO 'liferay_db_user'@'localhost' IDENTIFIED BY 'liferay_db_user22';`}</code></pre>

                            <h2>liferay_db_user credentials</h2>

                            <p>&#8230;for both lifreayce and liferaydxp databases&#8230;</p>

                            <table class="table table-bordere">
                                <tbody>
                                    <tr>
                                        <th>User</th>
                                        <td>
                                            <pre>liferay_db_user</pre>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Password</th>
                                        <td>
                                            <pre>liferay_db_user22</pre>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <p>Enter <code>quit</code> to exit out of mysql.</p>

                            <p>If you want, you can execute the following command to fire up the MySQL Workbench to verify:</p>

                            <pre><code class="language-bash">{`mysql-workbench`}</code></pre>

                            <p>You should see the following&#8230;</p>

                            <p>(click to enlarge&#8230;)</p>

                            <p><ion-img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/10/liferay-ubuntu-6.png" alt="" /></p>

                            <p><span class="badge badge-secondary">SNAPSHOT: EMPTY LIFERAY DBS CREATED</span></p>

                            <h1>Create portal-ext.properties files</h1>

                            <p>Create the following two portal-ext.properties files and place them in their respective Liferay home directories.</p>

                            <p><strong>portal-ext.properties for liferay-ce</strong></p>

                            <pre><code class="language-properties">{`#
# MySQL
#
jdbc.default.driverClassName=com.mysql.jdbc.Driver
jdbc.default.url=jdbc:mysql://localhost/liferayce?useUnicode=true&characterEncoding=UTF-8&useFastDateParsing=false
jdbc.default.username=liferay_db_user
jdbc.default.password=liferay_db_user22`}</code></pre>

                            <p><strong>portal-ext.properties for liferay-dxp</strong></p>

                            <pre><code class="language-properties">{`#
# MySQL
#
jdbc.default.driverClassName=com.mysql.jdbc.Driver
jdbc.default.url=jdbc:mysql://localhost/liferaydxp?useUnicode=true&characterEncoding=UTF-8&useFastDateParsing=false
jdbc.default.username=liferay_db_user
jdbc.default.password=liferay_db_user22`}</code></pre>

                            <p>Note:</p>

                            <p>You can find the default portal.properties file inside of&#8230;</p>

                            <p>tomcat/webapps/ROOT/WEB-INF/lib/portal-impl.jar</p>

                            <p>That can be used as a reference (has lots of nice comments in it; but you&#8217;ll never edit that directly &#8211; you just override properties within it)</p>

                            <p><span class="badge badge-secondary">SNAPSHOT: PORTAL-EXT.PROPERTIES CREATED</span></p>

                            <p>I corrected the above files AFTER creating this snapshot, so the values shown above are what they SHOULD be for this snapshot. If you go back to this snapshot for some reason or use any between this one up to and including BUMP TOMCAT, you need to revise the files above as shown above.</p>



                            <h1>Remove Libre Office from the VM</h1>

                            <p>This is a developer VM; we don&#8217;t need it.</p>

                            <pre><code class="language-bash">{`sudo apt-get remove --purge libreoffice*
sudo apt-get clean
sudo apt-get autoremove`}</code></pre>

                            <p><span class="badge badge-secondary">SNAPSHOT: LIBREOFFICE* REMOVED</span></p>

                            <p>Increase Tomcat memory settings</p>

                            <p>In each Liferay home directory, navigate into the tomcat/bin directory and edit the setenv.sh file. You want to change</p>

                            <pre>Xmx2048m -XX:MaxPermSize=1024m</pre>

                            <p>It should look something like this after you change it&#8230;</p>

                            <p><strong>setenv.sh</strong></p>

                            <pre><code class="language-properties">{`CATALINA_OPTS="$CATALINA_OPTS -Dfile.encoding=UTF8 -Djava.net.preferIPv4Stack=true  -Dorg.apache.catalina.loader.WebappClassLoader.ENABLE_CLEAR_REFERENCES=false -Duser.timezone=GMT -Xmx2048m -XX:MaxPermSize=1024m"`}</code></pre>

                            <p><span class="badge badge-secondary">BUMP TOMCAT MEM</span></p>

                            <h1>Start Liferay CE and complete configuration</h1>

                            <pre><code class="language-bash">{`/opt/liferay-ce/tomcat-8.0.32/bin/startup.sh
tail -f /opt/liferay-ce/tomcat-8.0.32/logs/catalina.out`}</code></pre>

                            <p>The application may take some time to be fully started; that&#8217;s why we follow the log file for details.</p>

                            <p>After it starts, at localhost:8080, keep all the defaults in the configuration, uncheck Add Sample Data and then click Finish Configuration&#8230;</p>

                            <p>(click to enlarge&#8230;)</p>

                            <p><ion-img class="alignnone size-full wp-image-42" src="/wp-content/uploads/2017/10/liferay-ubuntu-7.png" alt="" /></p>

                            <p>Then you will see:</p>

                            <p><ion-img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/10/liferay-ubuntu-7a.png" alt="" /></p>

                            <p>Now, we should shut down this portal and do the same for the liferay-dxp instance.</p>

                            <pre><code class="language-bash">{`/opt/liferay-ce/tomcat-8.0.32/bin/shutdown.sh
tail -f /opt/liferay-ce/tomcat-8.0.32/logs/catalina.out`}</code></pre>

                            <p>Again, now, you must start the liferay instance. Answer YES to the Terms agreement in the web browser and enter a new password. For the new poassword, I just entered &#8220;test&#8221; again.</p>

                            <h2>Liferay admin user credentials</h2>

                            <table class="table table-bordered table-striped">
                                <tbody>
                                    <tr>
                                        <td>user</td>
                                        <td>test@liferay.com</td>
                                    </tr>
                                    <tr>
                                        <td>password</td>
                                        <td>dev</td>
                                    </tr>
                                </tbody>
                            </table>

                            <p><span class="badge badge-secondary">CE 7.0 GA4 CONFIGURED AND RUNNING</span></p>

                            <h1>Install Liferay IDE</h1>

                            <p>Extract the liferay-ide.tar.gz</p>

                            <p>Use drag-and-drop to move the resulting &#8220;eclipse&#8221; folder from Downloads to Home.</p>

                            <p>Start up eclipse from that directory and choose the following default workspace:</p>

                            <p>/home/developer/workspace-ce</p>

                            <h2>Remove Ubuntu apps</h2>

                            <p>Who has time for games?</p>

                            <pre><code class="language-bash">{`sudo apt remove aisleriot gnome-mahjongg gnome-mines gnome-sudoku
sudo apt remove account-plugin-facebook account-plugin-flickr`}</code></pre>

                            <p>Also while we&#8217;re at it, go to Ubuntu Software &gt; Installed and remove:</p>

                            <ul>
                                <li>Thunderbird Mail</li>
                                <li>Cheese (a camera app)</li>
                                <li>Rhythmbox</li>
                                <li>Simple Scan</li>
                                <li>Shotwell</li>
                                <li>Screen Reader</li>
                            </ul>

                            <p><span class="badge badge-secondary">SNAPSHOT: LIFERAY IDE INSTALLED</span></p>

                            <h2>Create a new Liferay Workspace Project</h2>

                            <p>Create a new Liferay Workspace Project named ce-work</p>

                            <p>(do not choose to Download liferay bundle)</p>

                            <p>Note (OPTIONAL)</p>


                            <p>We will use the existing liferay-ce bundle outside of the workspace (/opt/liferay-ce). But if you wanted to use a bundle within the workspace, after the project is created, in the Gradle Tasks view execute Bundle &gt; initBundle</p>

                            <p>When that&#8217;s done running, refresh the workspace in the IDE and you&#8217;ll see the bundle&#8230;</p>

                            <p><ion-img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/10/liferay-ubuntu-8.png" alt="" /></p>

                            <p>Modify the gradle.properties file. Uncomment and change the liferay.workspace.home.dir as shown below. This is what the gradle deploy tasks will use when executing deploy.</p>

                            <pre><code class="language-bash">{`liferay.workspace.home.dir=/opt/liferay-ce`}</code></pre>

                            <p>Modify the bundles &gt; config &gt; local &gt; portal-ext.properties so that it points to your local database as so&#8230;</p>

                            <pre><code class="language-properties">{`#
# MySQL
#

jdbc.default.driverClassName=com.mysql.jdbc.Driver
jdbc.default.url=jdbc:mysql://localhost/liferayce?useUnicode=true&characterEncoding=UTF-8&useFastDateParsing=false
jdbc.default.username=liferay_db_user
jdbc.default.password=liferay_db_user22`}</code></pre>

                            <p>Also, edit gradle.properties and uncomment the following line so that the local config is what is used:</p>

                            <pre><code class="language-properties">{`liferay.workspace.environment=local`}</code></pre>

                            <p>Later, you can change that line for another configuration.</p>

                            <p>DON&#8217;T FORGET TO DO A GRADLE REFRESH AFTER YOU SAVE! Right-click the file and select Gradle &gt; Refresh Gradle Project</p>

                            <p>Edit the tomcat / bin / setenv.sh in the bundles of the workspace and bump the tomcat memory 2048, 1024 as described earlier.</p>

                            <p>At this point you follow the instructions for Connect to existing Liferay CE from within the workspace (only pointing to the internal bundle) and then&#8230;</p>

                            <p>For safety, we&#8217;ll modify the portal-ext.properties file for this newly created server to point to our local ce database also&#8230;</p>

                            <p><ion-img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/10/liferay-ubuntu-9.png" alt="" /></p>

                            <p>So, at this point, we have a liferay-ce bundle in /opt and we now have another one inside the Liferay workspace. Both should be pointing to our local ce database.</p>

                            <p>Again, however, we need to keep the defaults in the web browser configuration and accept the License, but Add Create Sample Data!</p>

                            <p>And then, again, restart the portal (this time, from within the IDE).</p>


                            <p>After creating the Liferay Project Workspace, you should see:</p>

                            <p><ion-img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/10/liferay-ubuntu-10.png" alt="" /></p>

                            <h1>Connect to existing Liferay CE from within the workspace</h1>

                            <p>Next, we&#8217;ll connect to the bundle by creating a new server so we can stop and start and watch the logs within the IDE&#8230;</p>

                            <p>Connect to the Liferay Server&#8230;</p>

                            <p><ion-img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/10/liferay-ubuntu-11.png" alt="" /></p>

                            <p><ion-img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/10/liferay-ubuntu-12.png" alt="" /></p>

                            <p><ion-img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/10/liferay-ubuntu-13.png" /></p>

                            <p>Stop the liferay-ce server by command line (if one is started), so we can restart it from within the IDE.</p>

                            <p>After the server is created, double-click to open it in the Editor.</p>

                            <p>In the Liferay Account section, make sure you enter the username and password for the Liferay administrative user and save the server file.</p>
                            <p>Now you can start the server from within the IDE&#8230;</p>

                            <p><ion-img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/10/liferay-ubuntu-14.png" /></p>

                            <p><span class="badge badge-secondary">SNAPSHOT: LIFERAY IDE SETUP</span></p>

                            <h1>Quick acid test &#8211; create and deploy a RESTful web service</h1>

                            <p>Now, we should be able to test this setup. To do so, we&#8217;ll create an OSGI module, a simple REST web service, and deploy it using Gradle deploy.</p>

                            <ul>
                                <li>Right-click on the ce-work node (the Liferay Workspace Project node) and select New &gt; Liferay Module Project</li>
                                <li>Enter project name &#8216;rest&#8217; and select Project Template Name: rest as shown below&#8230;<br />
                                    <ion-img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/10/liferay-ubuntu-15.png" alt="" /></li>
                                <li>I am naming my class and package as shown below&#8230;<br />
                                    <ion-img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/10/liferay-ubuntu-16.png" alt="" /></li>
                                <li>Click Finish</li>
                                <li>The resulting module project should look like this:<br />
                                    <ion-img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/10/liferay-ubuntu-17.png" alt="" /></li>
                                <li>In the Gradle Tasks view, under the Rest &gt; build nodes and double-click build to execute the Gradle build for this module. You should get a BUILD SUCCESSFUL message in the console.</li>
                                <li>In the Gradle Tasks view, under the Rest &gt; build nodes, double-click the deploy task. Wait for the console to show you that the module was started.</li>
                                <li>Note that you can also right-click on the server and select to open the gogo shell:<br />
                                    <ion-img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/10/liferay-ubuntu-18.png" alt="" /></li>
                                <li>In the gogo shell, type lb and hit enter. You should see there at the bottom, the OSGI module as Active&#8230;<br />
                                    <ion-img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/10/liferay-ubuntu-19.png" alt="" /></li>
                                <li>Now point your browser to <a href="http://localhost:8080/o/rest/greetings" rel="nofollow">http://localhost:8080/o/rest/greetings</a> and you should see that it works!<br />
                                    <ion-img src="/wp-content/uploads/2017/10/liferay-ubuntu-20.png" alt="" /></li>
                            </ul>

                            <p><span class="badge badge-secondary">SNAPSHOT: REST ACID-TEST MODULE CREATED</span></p>

                            <h1>Conclusion</h1>

                            <p>This log has demonstrated the steps that I have used to build a developer&#8217;s virtual machine (VMWare Fusion for Mac, in my case &#8211; although it should also be fine on VMWare for Windows). At this point, you&#8217;ve got enough to do some development with Liferay CE using the Liferay IDE. In the near future, I may add to this to enable development for DXP (some of that has been prepped), development with Liferay Developer Studio, and building Liferay from source code.</p>

                            <h2>Potential future step A &#8211; complete the configuration for Liferay DXP</h2>

                            <p>This step will be very much like the CE step above, but we&#8217;ll wait on it as I intend to explore the CE stuff and the Liferay IDE before getting into any of the DXP stuff. When it comes to the DXP, I&#8217;ll simply pick up here and do similar steps as what was done for CE above &#8211; adding in the license file for DXP as an additional deploy step.</p>

                            <h2>Potential future step B &#8211; Setup for building Liferay from source code</h2>

                            <p>In a future step, I&#8217;d also like to set this environment up also for building Liferay from source code.</p>

                            <h2>Potential future step C &#8211; Setup for developing with IntelliJ</h2>

                            <p>I&#8217;d also like to experiment with using IntelliJ instead of an Eclipse-based IDE.</p>

                            <p>References</p>

                            <ul>
                                <li><a href="https://www.linuxcloudvps.com/blog/install-liferay-on-an-ubuntu-16-04-vps/" rel="nofollow">How to install Liferay on an Ubuntu 16.04 VPS</a></li>
                                <li><a href="https://askubuntu.com/questions/762384/install-mysql-5-6-on-ubuntu-16-04" rel="nofollow">Install MySql 5.6 on Ubuntu 16.04</a></li>
                                <li><a href="https://www.linode.com/docs/databases/mysql/install-and-configure-mysql-workbench-on-ubuntu" rel="nofollow">Install and Configure MySQL Workbench on Ubuntu 16.04</a></li>
                                <li><a href="https://techglimpse.com/mysql-mariadb-automatic-secure-installation-script/" rel="nofollow">Did you run ‘mysql_secure_installation’ after Installing MySQL? It helps Secure MySQL</a></li>
                                <li><a href="https://dev.liferay.com/develop/tutorials/-/knowledge_base/7-0/creating-a-liferay-workspace-with-liferay-ide" rel="nofollow">CREATING A LIFERAY WORKSPACE WITH LIFERAY IDE</a></li>
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