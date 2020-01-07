import { Component, Element, h } from '@stencil/core';

import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-cmd-chron-beaver-cage',
    styleUrl: 'page-cmd-chron-beaver-cage.css'
})
export class PageCmdChronBeaverCage {

    @Element() el: HTMLElement;

    title = 'Operation Beaver Cage - Command Chronology';

    componentWillLoad() {
        if (debug) {
            console.log('> PageCmdChronBeaverCage.componentWillLoad');
        }
        document.title = this.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
    }

    toggleSearch() {
        if (this.el.querySelector("#searchbar").classList.contains(`hidden`)) {
            this.el.querySelector("#searchbar").classList.remove('hidden');
        } else {
            this.el.querySelector("#searchbar").classList.add('hidden');
        }
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/cage" />
                    </ion-buttons>
                    <ion-title>The Cage - Vietnam</ion-title>
                    <ion-buttons slot="end">
                        <ion-button onClick={() => this.toggleSearch()}>
                            <ion-icon slot="icon-only" name="ios-search"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
                <gls-gcse-searchbox-only id="searchbar" class="hidden" />
            </ion-header>,

            <ion-content>
                <ion-grid fixed>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="12" size-lg="12" size-xl="12">

                            <h1>Operation Beaver Cage</h1>
                            <h2>Command Chronology from the Vietnam War</h2>
                            <h5>1 April 1967 through 13 May 1967</h5>
                            <hr />

                            <p>
                                This document is a declassified record of the Vietnam War from the period of Apr 1, 1967 to May 13, 1967, which generally
                                pertains to the operation known as &quot;Beaver Cage&quot;. The document was transcribed from a PDF
                                file for the purpose of making it more useful for research (i.e. more legible, hyperlinked,
                                and searchable). In some places, the scanned source document was somewhat illegible. The following
                                symbology is used to reflect what was questionable during the transcription:</p>

                            <ul>
                                <li><code>[?]</code> = One character exists here that is completely illegible or highly questionable.</li>
                                <li><code>[X?]</code> = Character here looks like character in brackets, but is questionable to some degree.</li>
                                <li><code>[O or 0]</code> = May be first of second character within brackets.</li>
                                <li><code>[…]</code> = Several characters or words of unrecognizable text.</li>
                            </ul>

                            <p class="entry-meta">
                                Last modified: February 6, 2019
                            </p>
                            <p class="entry-meta">
                                Source:<br />
                                COMMAND CHRONOLOGY [BLT 1/3], 01 April 1967, Box __, Folder 039, US Marine Corps History Division Vietnam War Documents Collection, Vietnam Center and Archive, Texas Tech University, <a href="https://www.vietnam.ttu.edu/virtualarchive/items.php?item=1201039031" target="_blank">https://www.vietnam.ttu.edu/virtualarchive/items.php?item=1201039031</a>, Accessed 22 Oct 2019.
                            </p>

                            <div id="command-chronology" style={{ borderTop: `1px solid #CCC`, paddingTop: `40px` }}>

                                <p class="text-center red"><strong>DECLASSIFIED</strong></p>

                                <p class="ion-text-center">
                                    HEADQUARTERS<br /> Battalion Landing Team 1/3<br /> Regimental Landing Team-26<br /> 9th Marine Amphibious
                                    Brigade, F<code>[?]</code>F
                                    <br /> FPO, San Francisco 96602</p>

                                <p class="ion-text-right">
                                    1/swd<br /> 5750
                            <br /> SerNo: 007-67<br /> 31 May 1967
                        </p>

                                <p>From: Commanding Officer<br /> To: Command Task Group 79.4<br /></p>

                                <h2>Subj: Command Chronology for period 1 April 1967 through 13 May 1967</h2>
                                <p>Ref:</p>
                                <ol class="list-lower-latin">
                                    <li>M<code>[C?]O</code> 5750.2A</li>
                                    <li>Brig<code>[O or 0]</code> 5750.1A</li>
                                    <li>FMFPACO 5750.<code>[?]</code></li>
                                </ol>

                                <p>Encl: (1) Battalion Landing Team 1/3 Command Chronology</p>

                                <ol>
                                    <li>In accordance with the provisions of references (a) through (c), enclosure (1) is submitted.</li>
                                    <li>Downgrade at 3 year intervals; declassified after 12 years.</li>
                                </ol>

                                <p class="ion-text-right"><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/p-a-wickwire-signature.png" alt="P.A. Wickwire signature" /><br /> P. A. WICKWIRE</p>

                                <p><strong>INDEX</strong></p>

                                <ul>
                                    <li>
                                        <a href="#organizational-data">PART I — ORGANIZATIONAL DATA</a>
                                    </li>
                                    <li>
                                        <a href="#narrative-summary">PART II — NARRATIVE SUMMARY</a>
                                    </li>
                                    <li>
                                        <a href="#sequential-listing-of-significant-events">PART III – SEQUENTIAL LISTING OF SIGNIFICANT
                                            EVENTS
                                </a>
                                    </li>
                                    <li>
                                        <a href="#supporting-documents">PART IV — SUPPORTING DOCUMENTS</a>
                                    </li>
                                </ul>

                                <a id="organizational-data"></a>

                                <h3>PART I – ORGANIZATIONAL DATA</h3>

                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Designation</th>
                                            <th>Commander</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Battalion Landing Team 1/3 <code>[…]</code></td>
                                            <td>LtCol P. A. WICKWIRE</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <h4>Subordinate Units</h4>

                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Designation</th>
                                            <th>Commander</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>H&amp;S Company</td>
                                            <td>Capt J. H. MACK</td>
                                        </tr>
                                        <tr>
                                            <td>Company A</td>
                                            <td>
                                                Capt P. N. HENDRIX<br /> (1 Apr – 6 May 67)<br /> Capt C. G. JORDAN<br /> (7 May – 13 May
                                                67)
                                    </td>
                                        </tr>
                                        <tr>
                                            <td>Company B</td>
                                            <td>Capt J. C. SHIRLEY</td>
                                        </tr>
                                        <tr>
                                            <td>Company C</td>
                                            <td>Capt G. F. RECZEK</td>
                                        </tr>
                                        <tr>
                                            <td>Company D</td>
                                            <td>Capt E. P. ALDOUS Jr.</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <h4>(Attached Units)</h4>

                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Designation</th>
                                            <th>Commander</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Det HqCo, 9thMAB (Radio Relay)</td>
                                            <td>Cpl J. N. MAGGI</td>
                                        </tr>
                                        <tr>
                                            <td>Det 15th Med Bn</td>
                                            <td>Lt D. M. MC GINN</td>
                                        </tr>
                                        <tr>
                                            <td>Det Postal Section Hq Bn 3dMarDiv</td>
                                            <td>Sgt W. A. LEDFORD</td>
                                        </tr>
                                        <tr>
                                            <td>Det Photo Section Hq Bn 3dMarDiv</td>
                                            <td>Cpl G. F. ORSZAG</td>
                                        </tr>
                                        <tr>
                                            <td>Det Disbursing Section Hq Bn 3dMarDiv</td>
                                            <td>Capt C. B. YELLIG</td>
                                        </tr>
                                        <tr>
                                            <td>Det Hq Bn RLT-26 (Radio Relay)</td>
                                            <td>Cpl K. K. FROST</td>
                                        </tr>
                                        <tr>
                                            <td>Btry A (Rein), 1stBn, 12thMar</td>
                                            <td>Capt D. J. HARRINGTON</td>
                                        </tr>
                                        <tr>
                                            <td>107mm MtrBtry, 2dBn, 12thMar</td>
                                            <td>Capt A. M. PATTERSON</td>
                                        </tr>
                                        <tr>
                                            <td>1stPlt (Rein), CoB 1stAmTracBn</td>
                                            <td>1stLt S. J. BROWN</td>
                                        </tr>
                                        <tr>
                                            <td>1stPlt (Rein), CoA 3dATBn</td>
                                            <td>2dLt W. M. HAYES</td>
                                        </tr>
                                        <tr>
                                            <td>3dPlt (Rein), CoC 3dTankBn</td>
                                            <td>2dLt L. D. DOBBIN</td>
                                        </tr>
                                        <tr>
                                            <td>2dPlt (Rein), CoA 3dEngrBn</td>
                                            <td>2dLt F. G. WENTWORTH</td>
                                        </tr>
                                        <tr>
                                            <td>1stPlt, Co<code>[B?]</code> 3dReconBn</td>
                                            <td>2dLt R. H. FREEMAN</td>
                                        </tr>
                                        <tr>
                                            <td>1st Clearing Plt (Rein), CoB 3dMedBn</td>
                                            <td>Lt R. G. SCHEIBE, USN</td>
                                        </tr>
                                        <tr>
                                            <td>Det 3dServBn (Provided by FLC)</td>
                                            <td>Lt. F. J. HAUGH</td>
                                        </tr>
                                        <tr>
                                            <td>2dPlt (Rein), CoB 3dSPBn</td>
                                            <td>2dLt K. A. WYMER</td>
                                        </tr>
                                        <tr>
                                            <td>1stPlt (Rein), CoB 3dMTBn</td>
                                            <td>2dLt. D. M. BYSTEDT</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <h4>Location</h4>

                                <ol class="list-lower-latin">
                                    <li>1-4 Apr 1967 – Camp Schwab, Okinawa</li>
                                    <li>5-19 Apr 1967 – Afloat with CTG 79.4</li>
                                    <li>20-23 Apr 1967 – SLF Camp, Subic Bay Philippines</li>
                                    <li>24-27 Apr 1967 – Afloat with CTG 79.4</li>
                                    <li>28 Apr- 18 May 1967 – Operation Beaver Cage, RVN</li>
                                    <li>3 May 1967 – Afloat with CTG 79.4 3.</li>
                                </ol>

                                <h4>Staff Officers</h4>

                                <table class="table table-striped">
                                    <tbody>
                                        <tr>
                                            <td>Executive Officer</td>
                                            <td>Maj B. D. THORNBURY</td>
                                        </tr>
                                        <tr>
                                            <td>S-1</td>
                                            <td>2dLt E. W. STERLING</td>
                                        </tr>
                                        <tr>
                                            <td>S-2</td>
                                            <td>CWO P. B. MURPHY</td>
                                        </tr>
                                        <tr>
                                            <td>S-3</td>
                                            <td>Maj R. C. OSSENFORT</td>
                                        </tr>
                                        <tr>
                                            <td>S-4</td>
                                            <td>Capt C. G. JORDON (1 Apr – 6 May 67) Capt P. N. HENDRIX (7 – 13 May 67)</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <h4>Average Monthly Strength</h4>

                                <table class="table table-striped">
                                    <tbody>
                                        <tr>
                                            <td>USMC Officers</td>
                                            <td>Enlisted</td>
                                            <td>USN Officers</td>
                                            <td>Enlisted</td>
                                            <td>Other</td>
                                        </tr>
                                        <tr>
                                            <td>60</td>
                                            <td>1660</td>
                                            <td>8</td>
                                            <td>90</td>
                                            <td>None</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <a id="narrative-summary"></a>

                                <h3>PART II – NARRATIVE SUMMARY</h3>

                                <p>During this reporting period Battalion Landing Team 1/3 conducted Special Operations in the Republic
                            of Vietnam and training therefore.</p>

                                <p>
                                    The first part of the reporting period was spent training for Spec Ops. A LEX was held on Okinawa with conditions and circumstances
                                    approximating those of RVN as closely as possible. The LEX was aborted one day early because of inclement
                                    weather; and an advanced party to the SLF Camp at NB Subic Bay was detached, and the BLT backloaded
                                    and set sail on board the ships of TG 76.4.
                        </p>
                                <p>
                                    AKA 104, USS Seminole, received three days of upkeep at Kau Chung, Taiwan.
                        </p>
                                <p>
                                    Then orders were received, the advance party was withdrawn from NB Subic and TG 79.4 sailed for the territorial waters off
                                    RVN. Two days later new orders were received, and the BLT sailed for and off loaded at the SLF Cam
                                    NM Subic. After three days training at Subic Bay, new orders were again received and the BLT returned
                                    to the territorial waters off RVN.
                        </p>
                                <p>
                                    On 28 April 1967 the BLT commenced Operation Beaver Cage. The first four days were in support of Operation Union. “D” Company
                                    operated on the beach in the vicinity of BT 305361 while “A”, “B”, and “C” Companies and the BLT
                                    command element operated inland, approximately 27 miles SSE of Da Nang AB. During this time only
                                    light enemy contact was made, however the BLT suffered heat casualties and more than 100 personnel
                                    were medevaced during this period.
                        </p>
                                <p>
                                    After four days, the BLT shifted 5 miles north and set up Headquarters in vicinity of BT 128388, at Landing Zone Cardinal.
                                    Companies were assigned individual TAOR’s and enemy contact began to increase in size and frequency.
                        </p>
                                <p>On 2 May, both “A” and “C” Companies made contact with enemy units of platoon size, or greater.</p>

                                <p>
                                    On 4 May “D” Company, while crossing a valley East of Hill 65, BT 094392 encountered intensive enemy resistance and had elements
                                    pinned down. Air and artillery support were called, and “C” Company was moved to Hill 65 to be in
                                    a position to support. Air and artillery continued into the night and “D” Company elements in contact
                                    with the enemy withdrew to Hill 65 under cover of darkness.
                        </p>

                                <p>
                                    On 5 May “B”, “C”, and “D” Companies conducted extensive search and destroy operations in the valley, coordinates BT 0904
                                    west to BT 2041. That evening local Viet Cong attacked BLT supporting elements in the process of
                                    extracting from Landing Zone Cardinal. Landing Zone Cardinal came under enemy mortar and small arms
                                    fire. H&amp;S Compand and W/2/12 personnel in the zone reacted and supporting arms assistance was
                                    requested. Two hundred men and 3000 pounds of ammunition were evacuated in one and one half hours
                                    of gathering darkness under constant enemy fire without any friendly casualties. Enemy casualties
                                    were 10 VC KIA confirmed and 20 VC KIA probable.
                        </p>
                                <p>
                                    The command elements with “A” Company in reserve moved to Que Son, and “B”, “C”, and “D” Companies commenced to sweep the
                                    valley west of Hill 65 in the vicinity of BT 060390. As the Companies swept the valley to the West,
                                    enemy mortar attacks became frequent and small arms resistance was encountered. After four days the
                                    companies reached the upper end of the valley and turned and began to sweep back down the valley
                                    to the East.
                        </p>
                                <p>
                                    On 10 May “B” and “C” Companies, leading the sweep in the vicinity of BT 030390, met small arms resistance. Both companies
                                    were unable to either advance or break contact. Supporting arms were called in, but were hampered
                                    by the closeness of contact. Additional help was requested and “C” Company, 1st Battalion, 5th Marines
                                    moved down the southern ridgeline and into the valley at BT 046384 to cut off enemy units moving
                                    either into or out of the battle area. “D” Company split its personnel, sending two platoons to “B”
                                    Company and one platoon to “C” Company. Forty personnel of Sparrow Hawk Platoon were inserted, however
                                    the platoon met such resistance that further use of helicopters in the area became impractical. Supporting
                                    arms continued to strike at enemy contact whenever possible. By evening the backbone of the enemy
                                    attack had been broken, contact had lessened and resupply and medevac helicopters were able to reach
                                    the friendly units. May 10th, the most active day of Operation Beaver Cage had cost BLT 1/3 22KIA
                                    and 88 WIA, and the enemy 181 KIA (confirmed), 136 KIA (probable), and 66 VC prisoners and detainees.
                        </p>
                                <p>
                                    During the next two days “B”, “C” and “D” Companies continued sweeping the Valley to the west. On 12 May they arrived at
                                    helicopter Landing Zone Quail in the vicinity of BT 060395 which had been secured by elements of
                                    3d Battalion, 5th Marines. On this day all elements of BLT 1/3 were extracted from this zone or from
                                    Landing Zone Magpie at Que Son, to the ships of TG 7<code>[6?]</code>.4. After 15 days, Operation Beaver Cage
                                    was completed.
                        </p>

                                <a id="sequential-listing-of-significant-events"></a>

                                <h3>PART III – SEQUENTIAL LISTING OF SIGNIFICANT EVENTS</h3>

                                <h4>Sequence of Events:</h4>

                                <ion-list>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>3 April</h5>
                                            <p>BLT 1/3 boarded the ships of TG 76.4</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>5 April</h5>
                                            <p>Rehearsal for Landing Exercise conducted aboard ships</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>6 April</h5>
                                            <p>BLT 1/3 commenced a Landing Exercise in the vicinity of Kin Village, Okinawa</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>7 April</h5>
                                            <p>BrigGon METZGER visited BLT 1/3. Landing Exercise completed. BLT 1/3 backloaded on board the ships of TG 76.4</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>17 April</h5>
                                            <p>BLT 1/3 arrived in the territorial waters of the Republic of Vietnam</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>19 April</h5>
                                            <p>BLT 1/3 left the territorial waters of the Republic of Vietnam for NB Subic Bay</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>20 April</h5>
                                            <p>BLT 1/3 off loaded at the SLF Camp, NB Subic Bay</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>23 April</h5>
                                            <p>BLT 1/3 backloaded on board the ships of TG 76.4</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>25 April</h5>
                                            <p>BLT 1/3 arrived in the territorial waters off the Republic of Vietnam and prepared for
                        forthcoming Amphibious Operations</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>28 April</h5>
                                            <p>Operation Beaver Cage commenced in support of Operation Union at 0700 with the landing
                            of “C” Company at BT 186294, followed by “A” Company at BT 19<code>[8?]</code>265 by helicopter. “D”
                                                Company, with attached tanks and ontos commenced amphibious landing at BT 305361 by LVT
                                                at 0800. A/1/12 landed at Hill 29 while W/2/12 and the BLT Command Group Landed at BT
                                                186294. Search and destroy operations were conducted in each company’s TAOR with light
                    resistance encountered. No friendly casualties were sustained while 5 VCS were captured.</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>29 April</h5>
                                            <p>Search and destroy operations were conducted throughout the day while “<code>[B?]</code>” and “C”
                            Companies proceeded to BT 165277 to establish a new C.P. “A” Company was helilifted to
                            BT 149234. Landing Zones in the new TAOR were secured and W/2/12 and the BLT Command
                            Group were helilifted to the new C.P. Light resistance in the form of sniper fire was
                    encountered with 2 VC KIA, 2 VC WIA and 9 VCS captured. No friendly casualties were sustained.</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>30 April</h5>
                                            <p>Local search and destroy operations were conducted with light resistance encountered.
                            Mortars were used against various targets with unknown results. Tanks and Onto’s were
                            backloaded aboard ship by LVT while “B” Company helilifted to BT 128388 and “D” Company
                            helilifted to 132399. One VC was wounded and captured, one killed, five probable VC KIA
                        and one U. S. WIA was sustained.</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>1 May</h5>
                                            <p>Local search and destroy operations conducted by all companies. “A” Company spotted 75
                            – 100 VC near BT 169240. An artillery mission on […] excellent target coverage but unknown
                            results. Groups of <code>[?]</code>0 – <code>[3?]</code>0 VC were engaged by “B” and “D” Companies in fire fights
                                                and mortar attacks with unknown results. In late afternoon “A” Company, W/2/12 and the
                                                BLT Command Group were helilifted to BT 128388 while “C” Company was helilifted to BT
                    132399. One VCS was captured, <code>[one?]</code> VC killed and one wounded.</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>2 May</h5>
                                            <p>Extensive search and destroy operations conducted by all companies with light contact
                            with small groups of VC throughout the day. At 1930 “C” Company, digging in at BT 098385,
                            came under heavy 82mm mortar, <code>[?]</code>7mm recoiless rifle, automatic weapons and small arms
                                                fire. 105mm and 107mm artillery fire was called in on targets at BT 166384 and BT 110374.
                                                Ancestor Flareship, Spooky Gunship, Huey Gunshis and fixed wing airstrikes called in
                                                on the same targets. The heavy fire and the advance of the VC units were effectively
                                                stopped. 4 U.S. KIA, 14 WIA and 6 WIANE were sustained during the battle while 2 VC KIA
                                                were confirmed. A thorough follow up search of the area was not conducted due to operational
                        commitments assigned by higher headquarters.</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>3 May</h5>
                                            <p>Medevac and emergency resupply of “C” Company conducted at first light. Sparrow Hawk
                            force inserted at BT 120384 to extract Reconnaissance element and attack area of possible
                            VC mortars. Search and destroy operations were continued by all companies with little
                            contact. At 1<code>[?]</code>30 an “A” Company water patrol made contact at BT 094356 and received
                                                heavy automatic weapons and small arms fire. Artillery and HUIE Gunships were utilized
                            to suppress the fire and four <code>[squads?]</code> were sent to assist the water patrol.This action
                                                lasted into the late evening hours with the situation remaining unclear until the following
                    day.</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>4 May</h5>
                                            <p>Search and destroy mission of TAOR continued by all companies. “A” Company’s casualties
                            from the previous night were med-evaced. The final count showed 14 KIA, [8?] WIA and
                            1 WIANE. Enemy casualties were <code>[3? or 8?]</code> KIA confirmed and 6 KIA probable. “A” Company
                                                called in artillery mission on 60 to 70 VC at BT 096404 and BT 095405. Mortar and small
                                                arms fire was received during scattered fire fights. “D” Company reported extensive tunnel
                                                complexes throughout their operating area. Total casualties for the day included 11 U.S.
                        KIA, 20 WIA, 6 WIANE. Enemy casualties were unknown.</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>5 May</h5>
                                            <p>“B” Company helolifted to BT 094392 to link up with “C” and “D” Companies to conduct
                            a search and destroy sweep of the area. Helolift of A/1/12. W/2/12 and Brave Command
                            Group to BT 031341 began at 1500. At 1815 the LZ at BT 1283[8?][8?] came under heavy
                            attack by 82mm mortars., automatic rifle and small arms fire. Klondike Gunships directed
                            airstrikes by F-9’s and a Spooky Gunship to suppress the fire and used it’s rockets and
                            machine guns to destroy the mortar. Results were 10 VC KIA confirmed, 20 VC KIA probable
                    with no U. S. casualties.</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>6 May</h5>
                                            <p>Search and destroy operations encountered light resistance in the form of sporadic sniper
                            fire throughout the day. The positions of the companies at the end of the day were –
                            “B” Company – BT 072395; “C” Company – BT 06239<code>[?]</code>; “D” Company – BT 057395. 4 U. S.
                    WIA were sustained during the period with 3 probable VC KIA.</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>7 May</h5>
                                            <p>Search and destroy operations continued with light resistance. The companies set up night
                            defensive positions as follows: “[B?]” Company – BT 021383; “C” Company – BT 023399;
                            “D” Company BT 03038[5?]. After setting in for the night “C” and “D” Companies received
                            approximately 12 rounds of 82mm mortar fire. One U. S. KAI, six U. S. WIA sustained in
                            the attack. An artillery mission was fired on a reported VC Battalion at BT 055371 which
                    resulted in a secondary explosion.</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>8 May</h5>
                                            <p>Search and destroy sweep by “B”, “C”, and “D” Companies continued with moderate resistance
                            from small arms and sporadic mortar attacks. 6 VCS were captured and 5 VC KIA confirmed
                            were counted. U. S. casualties were 3 KIA and 10 WIA. Airstrikes by Klondike and fixed
                    wing aircraft destroyed one mortar.</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>9 May</h5>
                                            <p>Search and destroy sweep continued to the west. Companies encountered sporadic small
                            arms and mortar fire. Klondike Gunships, fixed wing air strikes and small arms fire were
                    used to neutralize enemy fire. 7 VCS were captured and 1 VC KIA confirmed.</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>10 May</h5>
                                            <p>The direction of the search and destroy sweep was reversed and proceeded to the east
                            from the north-south line through BT 0<code>[2?]</code>41. “B”, “C”, and “D” Companies came under
                                                intensive attack by mortar, automatic and small arms fire from hill 110 to the south,
                                                from the slopes to the north and trenchlines to the east. Four air strikes by fixed wing
                                                aircraft and five by Klondike Gunships against various VC emplacements, along with coordinated
                                                attacks by the Companies effectively silenced enemy opposition. U. S. casualties were
                            22 KIA and 8<code>[8?]</code> WIA. Enemy casualties were 181 (KIA confirmed), 136 KIA (probable),
                    and 66 VC prisoners and detainees.</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>11 May</h5>
                                            <p>Movement of “B”, “C”, and “D” Companies to LZ until at <code>[…]</code> 060377 for backloading to
                    ships of AR<code>[G?]</code> 76.4 continued throughout the day with no enemy contact.</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>12 May</h5>
                                            <p>Backload of all BLT units completed by 1900, and Operation Beaver Cage ended.</p>
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label text-wrap>
                                            <h5>13 May</h5>
                                            <p>Preparation of personnel and equipment for future operations commenced.</p>
                                        </ion-label>
                                    </ion-item>
                                </ion-list>

                                <h4>Personnel</h4>

                                <ol class="list-lower-latin">
                                    <li>Replacements: no replacements were received</li>
                                    <li>Casualties: 55 KIA, 151 WIAE, 50 WIANE, 5 deaths due to loss of helicopter in transferring personnel
                                between ships.</li>
                                    <li>Awards: 8 Purple Hearts</li>
                                    <li>Post<code>[?]</code>l, promotions and personnel accounting remain satisfactory.</li>
                                </ol>


                                <h4>Administration</h4>

                                <p>Company administration is functioning smoothly under the supervision of Company Commander and Company
                                    First Sergeants.
                        </p>

                                <h4>Command Relations</h4>

                                <p>Battalion Landing Team 1/3 is OPCON to CTG 79.4 and ADCO<code>[N or H]</code> to CG, 9thMAB.</p>

                                <h4>Intelligence</h4>

                                <p>
                                    Initial enemy contact on Operation Beaver Cage consisted of harassing/sniper fire with two mortar attacks. Search and Destroy
                            operations uncovered numerous caches of rice and extensive tunnel complexes.</p>

                                <p>
                                    Intelligence reports revealed the possible movement of an unidentified battalion into the vicinity of BT 055370 on 7 May;
                                    three artillery missions were fired resulting in two secondary explosions. Significant enemy contact
                                    for the period was made with major elements of the 105th MF Battalion in the vicinity of BT 033385.
                                    Enemy losses for this engagement were sizeable; 40 VC/NVA KIA confirmed and 70 KIA probable. Major
                                    items of captured equipment were 2 – 60mm mortar sights, one 7.62 heavy machine gun, 2 SKS semiautomatic
                                    rifles, and one 7.62 AK-47 assault rifle. Of this gear, one mortar sight and the heavy machine gun
                                    were destroyed. Captured material consisted of 2 NVA diaries, 3 wallets containing NVA pictures,
                                    and anti-American literature, 1 VC/NVA medical bag. Numerous small arms ammunition, mortars and grenades
                            were destroyed.</p>

                                <h4>Close Air Support</h4>

                                <p>
                                    During the period at sea only minimal air support was needed and air operations were limited to helicopter sorties of an
                            administrative and logistical nature.</p>

                                <p>The tactical nature of both operations dictated extensive use of air support.</p>

                                <p>
                                    During Operation Beaver Cage (28 April – 12 May) helicopter support was provided by our brother unit in the S.L.F., H[?][?]-263,
                                    which flew 44<code>[2?]</code>9 UH-34 sorties and 389 UH-1E Gunship and TACA sorties; and 1stMAW helicopter squadrons
                                    which flew occasional medevacs. Fixed wind support was provided by elements of the 1stMAW and 7th
                                    Air Force who flew 21 01E observation, spotting, and TACA sorties; 30 fixed wind strike sorties;
                            4 C-47 gunship sorties; and 1 C-130 flareship sortie in support.</p>

                                <h4>Logistics</h4>

                                <ol class="list-lower-latin">
                                    <li><span class="text-underline">Supply</span>. During this period, approximately 101
                                        requisitions were placed through FSR with only 3<code>[5?]</code> completed. For Operation Beaver Cage <code>[…]</code>ndable
                                supplies were furnished from LSA Tam Ky, RVN.</li>
                                    <li><span class="text-underline">Maintenance</span>. During this period limited 3rd
                                        echelon maintenance was provided for engineer and communications equipment by an attached LSU
                                detachment from 3d Service Battalion under shipboard and combat conditions.</li>
                                    <li><span class="text-underline">Transportation</span>. On 3 April transportation to
                                        assigned shipping was provided at Camp Schwab, Okinawa by RLT-26. From 20 to 23 April at SLF
                                Camb Subic Bay, transportation was provided by U. S. Naval Station, Subic Bay.</li>
                                    <li><span class="text-underline">Fiscal</span>. Project 24 funds expended during this
                                period amounted to $20,162.00.</li>
                                    <li><span class="text-underline">Embarkation</span>. BLT 1/3 embarked for Okinawa aboard USS Okinawa LPH-3, USS
                                        Bayfield APA-33, USS Point Defiance LSD-31 and USS Seminole AKA-104. On 20 April personnel from assigned shipping were debarked to SLF Camp,
                                    Subic Bay and on 23 April were reembarked aboard assigned shipping. On 28 April personnel and
                                    equipment of BLT 1/3 were disembarked RVN to participate in Operation Beaver Cage and reembarked
                                on 12 May.</li>
                                </ol>

                                <a id="supporting-documents"></a>

                                <h3>PART IV – SUPPORTING DOCUMENTS</h3>

                                <ol>
                                    <li>BLT 1/3 Operation Order 5-67 (Added s<code>[?]</code>c 308 033)</li>
                                    <li>BLT 1/3 Administrative Plan 5-67</li>
                                    <li>BLT 1/3 Frag Order No 1 to OpOrder 5-67 (Added)</li>
                                    <li><a href="#combat-after-action-report-beaver-cage">BLT 1/3 After Action Report Operation Beaver
                                    Cage</a></li>
                                </ol>

                                <h4>FRAG ORDER NUMBER 1 TO OPERATION 5-67</h4>

                                <p>Ref:</p>

                                <ol>
                                    <li>CTG 79.4 Op Plan 120A-67</li>
                                    <li>CTG 79.4 Frag Order Number 1 to Op Plan 120A-67</li>
                                    <li>BLT 1/3 Op Order 5-67</li>
                                    <li>Operations Overlay ALFA (Enclosure (1) to BLT 1/3 Frag Order Number 1 to Operation Order 5-67).</li>
                                    <li>Operations Overlay BRAVO (Enclosure (2) to BLT 1/3 Frag Order Number 1 to Operation Order 5-67).</li>
                                    <li>Intelligence Estimate for Operation Beaver Cage (Enclosure (3) t<code>[...]</code> BLT 1/3 Frag Order Number
                                1 to Operation Order 5-67).</li>
                                    <li>Maps: Viet Name AMS Series L7014, Sheets 664oI, II, III, and IV.</li>
                                </ol>

                                <p>Time Zone: H</p>

                                <h4>TASK ORGANIZATION</h4>

                                <table class="table table-striped">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span class="text-underline">BLT 1/3</span>
                                            </td>
                                            <td>LtCol WICKWIRE</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;<span class="text-underline">H&amp;SCo (-)(Rein)</span>
                                            </td>
                                            <td>Lt Mack</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;H&amp;SCo (-)</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. (-) HqBn 3rdMarDiv</td>
                                            <td>Capt YELLIG</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. Disbursing Section</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. Postal Section</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. 9thMAB (Radio Relay)</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. HqC<code>[o?]</code> 26thMar (Radio Relay)</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. Btry A 1stBn 12thMar (LnTm)</td>
                                            <td>Lt PHILLIPS</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. HqBtry 1stBtn 12thMar (NGF LnTm)</td>
                                            <td>Ens MCCORMICK (USN)</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;1st Clearing Flat(Rein) Co B 3dMedBn</td>
                                            <td>Lt SCHEIBE (USN)</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Logistical Support Unit</td>
                                            <td>Lt HAUCH</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. 3rd ServBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Sqd. 2ndPlat(Rein) Co A 3rd EngrBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Sec. AirDelPlat H&amp;SCo ProvServBn 9thMAB</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;1stPlat Co B 3rdReconBn</td>
                                            <td>Lt FREEMAN</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. 15th Dental Co</td>
                                            <td>Lt MCGINN (USN)</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Beach Jumper Unit # 1</td>
                                            <td>Ltjg CAMPBELL (USN)</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;<span class="text-underline">Co A (Rein)</span></td>
                                            <td>Capt HENDRIX</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Co A</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. HqBtry 1stBn 12thMar (NGF SpotTm)</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;FO TM Btry A 1stBn 12thMar</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. 2ndPlat(Rein) Co A 3rd EngrBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. 2ndPlat(Rein) Co B 3rdSPBn (HST)</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. H&amp;SCo</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1stSec 81mm Mort Plat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. Intel Sec</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>[…]</code>Plat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. Comm<code>[…]</code></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. TACP</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;<span class="text-underline">Co C (Rein)</span></td>
                                            <td>Capt Re<code>[…]</code>K</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Co C</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;FO TM Btry A 1stBn 12thMar</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. 2ndPlat(Rein) Co A 3rd EngrBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. 2ndPlat(Rein) Co B 3rd SPBn (HST)</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. H&amp;SCo</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3rd Sec 81mm Mort Plat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. Intel Sec.</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. Med Plat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det.Comm Plat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. TACP (FACTm)</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. HqBn 3rdMarDiv (Photo Se<code>[c?]</code>)</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;<span class="text-underline">Co D (Rein)</span></td>
                                            <td>Lt ALDOUS</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Co D</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;FO TM Btry A 1stBn 12thMar</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det, 2ndPlat(Rein) Co B 3rdEngrBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. 2ndPlat(Rein) Co A 3rdSPBn (HST)</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. HqBtry 1stBn 12thMar (NGF SpotTm)</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. H&amp;SCo</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4th Sec 81mm Mort Plat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. Intel Sec</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. Med Plat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. Comm Plat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. TACP</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Sqd. MP Plat MPCo HqCo 9thMAB</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;4th Plat(Rein) Co A 5thAmTracBn</td>
                                            <td>Lt BROWN</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;1st Plat(Rein) Co A 3rdATBn</td>
                                            <td>Lt HAYES</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;3rd Plat(Rein) Co C 3rdTkBn</td>
                                            <td>Lt DOBBINS</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;<span class="text-underline">Btry A (-)(Rein) 1stBn 12th
                                            Marines</span></td>
                                            <td>Capt HARRINGTON</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Btry A</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. HqBtry 1stBn 12thMar</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;<span class="text-underline">107mm Mortar Btry 2ndBn 12th
                                                    Marines
                                        </span></td>
                                            <td>Capt PATTERSON</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;<span class="text-underline">2nd Plat (-)(Rein) Co A 3rd
                                            EngrBn</span></td>
                                            <td>Lt WENTWORTH</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;2ndPlat Co A 3rd EngrBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. H&amp;SCo 3rd EngrBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. Engr SuptCo 3rdEngrBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;<span class="text-underline">1stPlat (Rein) Co B 3rdMTBn</span>
                                            </td>
                                            <td>Lt BYSTEDT</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;1stPlat Co B 3rdMTBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det.H&amp;SCo 3rdMTBn</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;<span class="text-underline">2ndPlat (-)(Rein) Co B 3rdSPBn</span>
                                            </td>
                                            <td>Lt WYMER</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;2dPlat Co B 3rdSPBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. H&amp;SCo 3rdSPBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;<code>[…]</code></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;<span class="text-underline">BLT RESERVE</span></td>
                                            <td style={{ width: `50%`, height: `23px` }}>Capt SHIRLEY</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Co B</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;FO TM Btry A 1stBn 12thMar</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. 2ndPlat(Rein) Co A 3rdEngrBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. 2ndPlat(Rein) Co B 3rdSPBn (HST)</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. H&amp;SCo</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2nd Sec 81mm Mort Plat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. Intel Sec</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. Med Plat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. Comm Plat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. TACP</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>


                                <p>* Provided from Navy sources. Becomes a part of the Task Organization when the Shore Party Team is
                            activated.</p>

                                <hr />


                                <ol>
                                    <li>
                                        <span class="text-underline">SITUATION</span>
                                        <ol class="list-lower-latin">
                                            <li>
                                                <span class="text-underline">Enemy Forces.</span>
                                                <ol class="list-none">
                                                    <li>(1) Current Insums.</li>
                                                    <li>(2) Reference (f).</li>
                                                </ol>
                                            </li>
                                            <li>
                                                <span class="text-underline">Friendly Forces.</span>
                                                <ol class="list-none">
                                                    <li>See reference (f).</li>
                                                </ol>
                                            </li>
                                            <li>
                                                <span class="text-underline">Attachments and Detachments.</span>
                                                <ol class="list-none">
                                                    <li>Task Organization.</li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <span class="text-underline">MISSION</span>. BLT 1/3 conducts an amphibious assault
                                        commencing <code>[…]</code> Hour, D-Day in Thang Binh and Tam Ky Districts, Quang Tin […] destroy enemy forces
                                        by:
                                <ol class="list-none">
                                            <li>Ph1: Seizing a designated beach area and approaches <code>[…]</code> designated helicopter landing
                                                zones and surrounding <code>[…]</code>.
                                    </li>
                                            <li>Ph2: Coordinating search and destroy operations simultaneously within the designated
                                        TAOR (and the additional <code>[…]</code> the AOA).</li>
                                            <li>Ph3: Conducting amphibious withdrawal on order.</li>
                                        </ol>
                                    </li>
                                    <li>
                                        <span class="text-underline">EXECUTION</span>.
                                <ol class="list-lower-latin">
                                            <li>
                                                <span class="text-underline">Concept of Operations</span>. Commencing at
                                                H-Hour on D-Day <code>[…]</code> company will land over Red Beach, seizing and securing <code>[…]</code> approaches
                                                thereto and conducting search and destroy operations in designated TAOR. At L-Hour on
                                                D-Day, two <code>[…]</code> conduct helicopter assaults into LZ Thrush and <code>[…]</code> surrounding terrain
                                                and on order conduct search and destroy operations in assigned ZOA. One rifle company
                                                will be <code>[…]</code> SLF Reserve aboard LPH to include Sparrow Hawk Force <code>[…]</code> to control of BLT
                                                1/3. On order the BLT will conduct amphibious withdrawal.
                                    </li>
                                            <li>
                                                <span class="text-underline">Company “C” (Rein).</span>
                                                <ol class="list-none">
                                                    <li>(1) Commencing at L-Hour, D-Day, conduct a helicopterborne assault to seize Landing
                                                        Zone Oriole.
                                            </li>
                                                    <li>(2) On order conduct search and destroy operations in designated ZOA. Seize BLT
                                                Objectives 2,62,4,6,8 and 1<code>[0?]</code>.</li>
                                                    <li>(3) Be prepared to conduct amphibious withdrawal on order.</li>
                                                </ol>
                                            </li>
                                            <li>
                                                <span class="text-underline">Company “A” (Rein)</span>.
                                        <ol class="list-none">
                                                    <li>(1) Commencing on order on D-Day, conduct a helicopterborne assault to seize
                                                        Landing Zone Thrush.
                                            </li>
                                                    <li>(2) On order conduct search and destroy operations in designated ZOA. Seize BLT
                                                Objectives 1,3,61,5,7, and 9.</li>
                                                    <li>(3) Be prepared to conduct amphibious withdrawal on order.</li>
                                                </ol>
                                            </li>
                                            <li>
                                                <span class="text-underline">Company “D” (Rein)</span>.
                                        <ol class="list-none">
                                                    <li>(1) Commencing ay H-Hour on D-Day conduct a waterborne assault by LVT’s over
                                                        Red Beach.
                                            </li>
                                                    <li>(2) Seize BLT Objective 11.</li>
                                                    <li>(3) On order commence search and destroy operations in North one-half of designated
                                                TAOR. Seize BLT Objective 12.</li>
                                                    <li>(4) On order continue search and destroy operations in South one-half of designated
                                                TAOR. Seize BLT Objective 13.</li>
                                                    <li>(5) Be prepared to execute helicopterborne linkup with BLT on order.</li>
                                                </ol>
                                            </li>
                                            <li>
                                                <span class="text-underline">Battery “A” (-)(Rein) 1st Bn. 12th Marines</span>.
                                        <ol class="list-none">
                                                    <li>(1) on order commence helicopterborne movement to vicinity 5th MArines Command
                                                        Post. (Hill 35)
                                            </li>
                                                    <li>(2) Establish position and provide direct support fires in support of assault
                                                elements of BLT 1/3.</li>
                                                    <li>(3) Priority of fires to helicopter assault forces.</li>
                                                    <li>(4) Be prepared to displace and/or conduct amphibious withdrawal on order.</li>
                                                </ol>
                                            </li>
                                            <li>
                                                <span class="text-underline">107mm Mortar Battery, 2nd Bn, 12th Marines.</span>
                                                <ol class="list-none">
                                                    <li>(1) On order conduct helicopterborne movement to designated landing zone. Provide
                                                direct support fires in support of assault elements of BLT 1/3.</li>
                                                    <li>(2) Prioroty of fires to helicopterborne <code>[… probably “assualt forces”]</code>.</li>
                                                    <li>(3) Be prepared to displace and/or conduct amphibious withdrawal on order</li>
                                                </ol>
                                            </li>
                                            <li>
                                                <span class="text-underline">2nd Platoon (-)(Rein) Company “A”, 3d Engr
                                            Bn</span>.
                                        <ol class="list-none">
                                                    <li>(1) General Support.</li>
                                                    <li>(2) On order land over Blue Beach, provide engineer support for Company “D”.</li>
                                                </ol>
                                            </li>
                                            <li>
                                                <span class="text-underline">BLT Reserve</span>.
                                        <span class="text-underline">Company “B” (Rein)</span>
                                                <ol class="list-none">
                                                    <li>(1) Provide one platoor (Rein) for Sparrow Hawk Reaction force while aboard LPH,
                                                in accordance with Annex N of reference (c).</li>
                                                    <li>(2) Upon release of Sparrow Hawk requirements by SLF Commander, be prepared to
                                                be helilifted ashore to function under direct control of BLT 1/3 Commander.</li>
                                                    <li>(3) On order land by helicopterborne means in designated landing zone/objective.</li>
                                                    <li>(4) Be prepared to assume the mission of assault companies in assigned TAOR’s.</li>
                                                    <li>(5) Be prepared to conduct search and destroy operations as directed.</li>
                                                </ol>
                                            </li>
                                            <li>
                                                <span class="text-underline">106mm Recoilless Rifle Platoon</span>.
                                        <ol class="list-none">
                                                    <li>(1) General Support.</li>
                                                    <li>(2) On order land in designated landing zone/objective area.</li>
                                                    <li>(3) Be prepared to provide anti-personnel support fires in designated ZOA.</li>
                                                </ol>
                                            </li>
                                            <li>
                                                <span class="text-underline">Coordinating Instructions</span>.
                                        <ol class="list-none">
                                                    <li>(1) Notify CLF of BLT Reaction Force location and readiness posture on continuing
                                                        basis.
                                            </li>
                                                    <li>(2) Establish and maintain liaison with 2nd ARVN Div and 6th Regiment, 2nd ARVN
                                                Div as of 1600, D-1.</li>
                                                    <li>(3) Operation Overlay (issued separately).</li>
                                                    <li>(4) RCA authorized for tactical operations within AOA. Won-wind hazard to friendly
                                                        troops and non-combatants outside the target areas will be minimized consistent
                                                        with tactical requirements.
                                            </li>
                                                    <li>(5) D-Day – 28 April 1967 (to be announced).</li>
                                                    <li>(6) L-Hour – 0700, H-Hour 0800.</li>
                                                    <li>(7) AOA for operation is the land area contained within a ten nautical mile arc
                                                centered on Grid Coordinates 299379, <a href="https://www.vietnam.ttu.edu/reports/images.php?img=/maps/PDF/6640-1.pdf">AMS
                                                    Series L7014, Sheet 6640I</a>. The seaward extension of the AOA is contained
                                                            in a 25 nautical mile arc drawn from the same coordinate. Both arcs are terminated
                                                            and joined by the shoreline. Air space above the land and sea AOA from 0 – 25,000
                                                            feet mean sea level and tunnels for the passage of civil air traffic will be
                                                promulgated by NOTAM as directed by COMUSMAVC.</li>
                                                    <li>(8) Fire support coordination IAW reference (c) and as modified below:</li>
                                                    <li>(9) Code name of Operation is “BEAVER CAGE”</li>
                                                    <li>(10) Landing Plan IAW Annex F of reference (c).</li>
                                                    <li>(11) Centered Red Beach Coordinates 299379.</li>
                                                    <li>(12) Centered LZ Coordinates are:
                                                <ol class="list-none">
                                                            <li>Oriole – 186294</li>
                                                            <li>Canary – 206259</li>
                                                            <li>Parakeet – 195293</li>
                                                            <li>Thrush – 198265</li>
                                                            <li>Owl – 190284</li>
                                                        </ol>
                                                    </li>
                                                    <li>(13) Reference Points. (Use as thrust points).
                                                <ol class="list-none">
                                                            <li>(a) Girls – BT 2741</li>
                                                            <li>(b) Ships – BT 2028</li>
                                                            <li>(c) Cigarettes – BT 2938</li>
                                                            <li>(d) Months – BT 1926</li>
                                                            <li>(e) Boys – BT 1727</li>
                                                        </ol>
                                                    </li>
                                                    <li>(14) Helo Landing Diagram to be issued by SLF ALPHA.</li>
                                                    <li>(15) Amphibious withdrawal code name “Water Lily”.</li>
                                                    <li>(16) Each Company be prepared to provide one reinforce platoon as Sparrow Hawk
                                                Force on order.</li>
                                                    <li>(17) Marines with Vietnamese language ability will be used appropriately.</li>
                                                    <li>(18) Heliborne assault companies should be prepared to attack or defend NE if
                                                required.</li>
                                                    <li>(19) Company “B” and “W” Battery should be prepared for Heli-lift into any primary
                                                        or alternate LZ available.
                                            </li>
                                                    <li>(20) Company “D” will notify the BLT Commander prior to landing of all desired
                                                        on-call waves.
                                            </li>
                                                    <li>(21) All assault companies will be completely familiar with all primary and alternate
                                                        LZ’s.
                                            </li>
                                                    <li>(22) Any H&amp;I fires within 500 meters of battalion boundaries must be cleared
                                                        by the 5th Marine Regiment.
                                            </li>
                                                    <li>(23) NGF will be in direct support of Company “D”.</li>
                                                    <li>(24) This order is effective for planning upon receipt and for execution upon
                                                order.</li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <span class="text-underline">ADMINISTRATION AND LOGISTICS</span>.
                                <ol class="list-lower-latin">
                                            <li>
                                                <span class="text-underline">Supply</span>.
                                        <ol class="list-none">
                                                    <li>(1) General - - - Redesignate Administration Plan 5-67 as as Administrative Order
                                                        5-67.
                                            </li>
                                                    <li>(2) Supply sources - - - All classes of supplies ashore will be drawn from LSA.</li>
                                                    <li>(3) Distribution - - - Distribution of supplies will be direct from LSA to using
                                                        unit.
                                            </li>
                                                    <li>(4) Resupply
                                                <ol class="list-none">
                                                            <li>(a) Shore Party will furnish a liaison team of at least 10 men to LSA
                                                                at Tam Ky. Guard TacLog Net.
                                                    </li>
                                                            <li>(b) Resupply of all classes will be requested through BLT-S-4 and relayed
                                                                through LSA.
                                                    </li>
                                                        </ol>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                <span class="text-underline">Service</span>.
                                        <ol class="list-none">
                                                    <li>(1) Maintenance and logistic support will be provided by LSA ashore.</li>
                                                </ol>
                                            </li>
                                            <li>
                                                <span class="text-underline">Miscellaneous</span>.
                                        <ol class="list-none">
                                                    <li>(1) Uniform and equipmment.
                                                <ol class="list-none">
                                                            <li>(a) Field jackets win not be carried ashoro.</li>
                                                            <li>(b) Light Marching Pack w/E-tool vice Marching Pack.</li>
                                                        </ol>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <span class="text-underline">COMMAND AND COMMUNICATIONS - ELECTRONICS</span>.
                                <ol class="list-lower-latin">
                                            <li>
                                                <span class="text-underline">Communications - Electronics</span>.
                                        <ol class="list-none">
                                                    <li>(1) Annex I to rererence (c).</li>
                                                    <li>(2) Current COI.</li>
                                                    <li>(3) Visual Communications Plan (issued separately)</li>
                                                </ol>
                                            </li>
                                            <li>
                                                <span class="text-underline">Command Posts</span>.
                                        <ol class="list-none">
                                                    <li>(1) The SLF Command Post will be located aboard the <a href="https://en.wikipedia.org/wiki/USS_Okinawa_(LPH-3)">USS
                                                    Okinawa (LPH-3)</a>.</li>
                                                    <li>(2) BLT CP will be located vicinity Hill 29 (coordinates 226322).</li>
                                                    <li>(3) Company and Battery commanders report CP locations ashore when established.</li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>


                                <p class="ion-text-right">
                                    <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/p-a-wickwire-signature.png" alt="P.A. Wickwire signature" /><br /> P. A. WICKWIRE<br />                        Lieutenant
                            Colonel U. S. Marine Corps<br /> Commanding
                        </p>

                                <hr />

                                <a id="combat-after-action-report-beaver-cage"></a>

                                <p class="ion-text-center">
                                    HEADQUARTERS
                            <br /> 1st Battalion, 3d Marines
                            <br /> FPO, San Francisco 96602
                        </p>
                                <p class="ion-text-right">
                                    6/djz
                            <br /> 5050
                            <br /> 17 May 1967
                        </p>
                                <p>From: Commanding Officer<br /> To: Commander Task Group 79.4</p>

                                <h3>Subj: Combat After Action Report (Operation Beaver Cage)</h3>

                                <p>Encl:</p>
                                <ol>
                                    <li><a href="https://www.vietnam.ttu.edu/reports/images.php?img=/maps/PDF/6640-2.pdf">Map Sheet 6640 II</a></li>
                                    <li><a href="https://www.vietnam.ttu.edu/reports/images.php?img=/maps/PDF/6640-2.pdf">Map Sheet 6640 II</a></li>
                                    <li><a href="https://www.vietnam.ttu.edu/reports/images.php?img=/maps/PDF/6640-2.pdf">Map Sheet 6640 II</a></li>
                                    <li><a href="https://www.vietnam.ttu.edu/reports/images.php?img=/maps/PDF/6640-2.pdf">Map Sheet 6640 II</a></li>
                                    <li>Map Sheet <a href="https://www.vietnam.ttu.edu/reports/images.php?img=/maps/PDF/6640-2.pdf">6640 II</a> and <a href="https://www.vietnam.ttu.edu/reports/images.php?img=/maps/PDF/6640-3.pdf">6640 III</a></li>
                                    <li>Map Sheet <a href="https://www.vietnam.ttu.edu/reports/images.php?img=/maps/PDF/6640-2.pdf">6640 II</a> and <a href="https://www.vietnam.ttu.edu/reports/images.php?img=/maps/PDF/6640-3.pdf">6640 III</a></li>
                                    <li>Map Sheet <a href="https://www.vietnam.ttu.edu/reports/images.php?img=/maps/PDF/6640-2.pdf">6640 II</a> and <a href="https://www.vietnam.ttu.edu/reports/images.php?img=/maps/PDF/6640-3.pdf">6640 III</a></li>
                                </ol>

                                <h4>Name of Operation</h4>

                                <p>Beaver Cage, Search and Destroy Operation.</p>

                                <h4>Inclusive Dates and Location of Operation</h4>

                                <p>28 Apr - 12 May 1967. QuanQuc Son and Quang Thang Bin Provinoes RVN.</p>

                                <h4>Command Headquarters</h4>

                                <p>CTG 79.4</p>

                                <h4>TASK ORGANIZATION</h4>

                                <table class="table table-striped">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span class="text-underline">BLT 1/3</span>
                                            </td>
                                            <td>LtCol WICKWIRE</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;<span class="text-underline">H&amp;SCo (-)(ReinF)</span>
                                            </td>
                                            <td>Lt Mack</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;Det. (-) HqBn 3rdMarDiv</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. Disbursing Section</td>
                                            <td>Capt YELLIG</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. Postal Section</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;Det. 9thMAB (Radio Relay)</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;Det. HqCo 26thMar (Radio Relay)</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;Det. Btry A 1stBn 12thMar (LnTm)</td>
                                            <td>Lt PHILLIPS</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;Det. HqBtry 1stBtn 12thMar (NGF LnTm)</td>
                                            <td>Ens MCCORMICK (USN)</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;1st Clearing Flat(Rein) Co B 3dMedBn</td>
                                            <td>Lt SCHEIBE (USN)</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;Logistical Support Unit</td>
                                            <td>Lt HAUCH</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. 3rd ServBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;Sqd. 2ndPlat(Rein) Co A 3rd EngrBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;1stPlat Co B 3rdReconBn</td>
                                            <td>Lt FREEMAN</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;Det. 15th Dental Co</td>
                                            <td>Lt MCGINN (USN)</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;Beach Jumper Unit # 1</td>
                                            <td>Ltjg CAMPBELL (USN)</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;<span class="text-underline">Co A (Rein)</span></td>
                                            <td><code>[?]</code></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Co A</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. HqBtry 1stBn 12thMar (NGF SpotTm)</td>
                                            <td>Capt JORDAN 6May-12May</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;FO TM Btry A 1stBn 12thMar</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. 2ndPlat(Rein) Co A 3rd EngrBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. 2ndPlat(Rein) Co B 3rdSPBn (HST)</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. H&amp;SCo</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1stSec 81mm Mort Plat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. Intel Sec</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. MedPlat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. CommPlat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. TACP</td>
                                            <td></td>
                                        </tr>





                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;<span class="text-underline">Co B (ReinF)</span></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Co B</td>
                                            <td>Capt SHIRLEY</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;FO TM Btry A 1stBn 12thMar</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. 2ndPlat(Rein) Co A 3rdEngrBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. 2ndPlat(Rein) Co B 3rdSPBn (HST)</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. H&amp;SCo</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2nd Sec 81mm Mort Plat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. Intel Sec</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. Med Plat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. Comm Plat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. TACP</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;<span class="text-underline">Co C (ReinF)</span></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Co C</td>
                                            <td>Capt RECZEK</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;FO TM Btry A 1stBn 12thMar</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. 2ndPlat(Rein) Co A 3rd EngrBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. 2ndPlat(Rein) Co B 3rd SPBn (HST)</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. H&amp;SCo</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3rd Sec 81mm Mort Plat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. Intel Sec.</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det.Comm Plat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. TACP (FACTm)</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. HqBn 3rdMarDiv (Photo Sec)</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;<span class="text-underline">Co D (ReinF)</span></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Co D</td>
                                            <td>Lt ALDOUS</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;FO TM Btry A 1stBn 12thMar</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. 2ndPlat (Rein) Co A 3rdEngrBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. 2ndPlat (Rein) Co B 3rdSPBn (HST)</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. HqBtry 1stBn 12thMar (NGF SpotTm)</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. H&amp;SCo</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4th Sec 81mm Mort Plat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. Intel Sec</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. Med Plat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. Comm Plat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Det. TACP</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Sqd. MP Plat MPCo HqCo 9thMAB</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;** 4th Plat(ReinF) Co A 5thAmTracBn</td>
                                            <td>Lt BROWN</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;** 1st Plat(ReinF) Co A 3rdATBn</td>
                                            <td>Lt HAYES</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;** 3rd Plat(ReinF) Co C 3rdTkBn</td>
                                            <td>Lt DOBBINS</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;<span class="text-underline">Btry A (-)(ReinF) 1stBn 12th
                                                    Marines
                                        </span></td>
                                            <td>Capt HARRINGTON</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Btry A</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. HqBtry 1stBn 12thMar</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;<span class="text-underline">107mm Mortar Btry 2ndBn 12th
                                                    Marines
                                        </span></td>
                                            <td>Capt PATTERSON</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;<span class="text-underline">2nd Plat (-)(Rein) Co A 3rd
                                            EngrBn</span></td>
                                            <td>Lt WENTWORTH</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;2ndPlat Co A 3rd EngrBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. H&amp;SCo 3rd EngrBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. Engr SuptCo 3rdEngrBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;<span class="text-underline">1stPlat (Rein) Co B 3rdMTBn</span>
                                            </td>
                                            <td>Lt BYSTEDT</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;1stPlat Co B 3rdMTBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det.H&amp;SCo 3rdMTBn</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;<span class="text-underline">2ndPlat (-)(Rein) Co B 3rdSPBn</span>
                                            </td>
                                            <td>Lt WYMER</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;2dPlat Co B 3rdSPBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;Det. H&amp;SCo 3rdSPBn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;*Det.BMU, NBG</td>
                                            <td></td>
                                        </tr>


                                    </tbody>
                                </table>

                                <p>* Provided from Navy Sources. Became a part of the Task organization when the Shore Party Team was
                            activated.</p>
                                <p>** Back loaded aboard the USS Pt. Defiance on April 1967.</p>

                                <h4>Intelligence</h4>

                                <ol class="list-lower-latin">
                                    <li>Information received fram higher echelon concerning the enemy's strength, location, disposition,
                                        situation, tactics, capabilities and terrain prior to the operation was adequate, however, contact
                                        was not made with any unit reported in the area of operations. Significant contact was made with
                                        elements of the 105th MF Battalion reported by the Que Son distriot chief and confirmed by ITT
                                personnel.</li>
                                    <li>The first four days of the operation; the enemy contact consisted of sniper and harassing fire
                                        in the vicinity of Landing Zone Oriole and Thrush and objectives 11, 12, and 13 on Red Beach.
                                        Numerous tunnels and spider traps were uncovered and destroyed in the vacinity of Red Beach (BT
                                        3037). An estimated <code>[...]</code> of rice was discovered in the vicinity of LZ Oriole and Thrush, rice
                                was picked up and redistributed by Popular Forces.</li>
                                    <li>Search and Destroy operations in the vicinity of Landing Zone Cardinal were more active than
                                        those reported for Landing Zone Oriole and Thrush. An estimated VC/NVA company was observed in
                                        the vicinity of BT 1237 on 1 May. Interrogation of VCS revealed extensive tunnels complexes in
                                        the village of Phu Thai (BT 0940) many tunnels were uncovered in that vicinity. Estimated VC/NVA
                                        strength in the vicinity of Phu Thai was one company. Interrogation of VCS also revealed (not
                                        yet confirmed) that the village of Phu Thai was the location of a VC dispensary staffed by two
                                        VC/NVA corpsman and two female nurses and a 1500 meter tunnel that runs from the oenter of the
                                        village to the mouatains NW (approx coord BT 087414), Overall estimate of enemy strength in the
                                        vicinity of LZ Cardinal was reported to be two VC battalions observed by CAS and armed Huey aircraft
                                the night of 5 May.</li>
                                    <li>The valley which runs east to west from a MSR (BT 0739 to 0139) contained the 105th VC/NVA MF
                                        Battalion. Initial contact consisted of harassing and sniper fire with two mortar attacks. The
                                        Que Son district chief reported elements of the 105th MF Battalion were operating in the valley,
                                        (later confirmed by ITT personnel). District chief reported that a possible 300 man force was
                                        moving to the vicinity of Hill 123, (BT 055370) on 7 May, three artillery missions were fired
                                        with two secondary explosions observed., later reports from district chief was the distruction
                                        of two large ammunition caches and no further reports of the estimated battalion. Significant
                                        enemy contact was made with an rein-forced MF VC company (possible two companies) in the vicinity
                                        of Hill 110 (BT 033385). Enemy losses for this engagement were sizable 40 VC/NCA KIA by body
                                        count and 70 KIA Probable. Major items of equipment captured were two 60mm mortar sights, two
                                        SKS Soviet 7.62mm Semiautomatic Carbines, one AK-47 7.62 Assault Rifle, one 7.62 Heavy Machine
                                        Gun SG 43' & S.GM and one wooden mock up rifle. Captured Material: 2 NVA diaries, 3 wallets containing
                                        pictures of NVA soldiers and anti Amerioan literature, 1 VC/NVA medical bag, I medical handbook,
                                        Equipment Destroyed: 25 rounds of 60mm mortar, 25 CHICOM Grenades, 500 rounds of small arms ammunition,
                                punji traps and sticks and an assortment of VC/NVA 782 Equipment.</li>
                                    <li>
                                        The temperature during the operation was hot and humid with temperatures well over 100 degrees during the day and approximately
                                        75 degrees at night with only one day of rain. Pay War leaflets were dropped in the operational
                                area without much success due to rapid movement.</li>
                                </ol>

                                <h4>Mission</h4>

                                <ol class="list-lower-latin">
                                    <li><span class="text-underline">Phase I</span>. Commencing at H-Hour on D-Day, land
                                        by waterborne assault over Red Beach, and seize and secure the beach and approaches thereto.
                                        Commencing at L-Hour on D-Day, land by helicopterborne assault into LZ's Oriole and Thrush, and
                                        seize the LZ's and surropunding terrain.
                            </li>
                                    <li><span class="text-underline">Phase II</span>. On order conduct search and destroy
                                        operations within the designated TAOR and the additional zone of action within the AOA. Establish
                                        reserve rifle company aboard the LPH prepared to land by helicopter to be committed only with
                                        the permission of CLF. Within the reserve establish a platoon size Sparrow Hawk Force. If the
                                        reserve is committed, constitute and maintain a Sparrow Hawk Force as required by the tactical
                                        situation ashore. Establish and maintain liaison with adjacent and supporting units as required.
                            </li>
                                    <li><span class="text-underline">Phase III</span>. On order, conduct an amphibious withdrawal.</li>
                                </ol>

                                <h4>Execution</h4>

                                <ol class="list-lower-latin">
                                    <li>L-Hour was designated as 280700 April 1967, with one company landing in LZ Oriole, Upon completion
                                        of this landing, one company landed in LZ Thrush. H-Hour was designated as 280800 April 1967
                                        with one company reinforced by tanks and ontos landing in LVT's over Red Beach. Search and destroy
                                        operations were then conduoted from both LZ's and Red Beach, on order.
                            </li>
                                    <li>Chronological sequence of events from 271620 April 1967 through 121900 May 1967:

                                    <ion-list>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>271620</h5>
                                                    <p>CTG 79.4 received Initiating Directive for Operation beaver Cage.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>271800</h5>
                                                    <p>CTG 79.4 issued Frag Order #1 to BLT 1/3</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>271900</h5>
                                                    <p>BLT 1/3 issued Frag Order #1 to Operation Order 5-67 to all BLT Units.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>280545</h5>
                                                    <p>Land the Landing Force received from CATF. L-Hour confirmed as 0700, H-Hour confirmed
                                                as 0800.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>280711</h5>
                                                    <p>First two waves into LZ Oriole at coord 186294. No opposition. Co C securing
                                                LZ.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>280801</h5>
                                                    <p>First wave of LVT's touched down on Red Beach carrying assault waves of Co D.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>280813</h5>
                                                    <p>Second wave of LVT's landed on Red Beach with remainder of Co D aboard. 10-15
                                                        rounds sniper fire received from VIC 305361. Called for air strike which resulted
                                                    in good target coverage but negative results.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>280847</h5>
                                                    <p>Co C secured objective #2 at coord 187293 and established security.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>280858</h5>
                                                    <p>First two waves of Co A into LZ Thrush at Coord 198265. Light sniper fire received.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>280900</h5>
                                                    <p>Tank and Ontos serials requested ashore on Red Beach by Co D.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>280900</h5>
                                                    <p>Co D moving toward objective 11 at Coord 293371 from Red Beach.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>280919</h5>
                                                    <p>Co A received Small Arms Fire VIC. 185265. Returned fire, killed one VC (Conf).</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>280935</h5>
                                                    <p>A-1-12 commenced lift to Hill 29 with two MRC 109's followed by two 105's.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>281100</h5>
                                                    <p>Alpha Command Group landed in LZ Oriole, with recon unit.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>281130</h5>
                                                    <p>Co A uncovered 4,000 lbs of rice VIC. 195263.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>281327</h5>
                                                    <p>Movement of Co B to LZ Oriole commenced.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>281435</h5>
                                                    <p>Co C reported discovery of 3,000 lbs of rice VIC. 183298. Co D detained two VCS
                                                near Coord 295376. Co A captured 1 VCS.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>281500</h5>
                                                    <p>W-2-12 commenced move into LZ Oriole.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>281555</h5>
                                                    <p>Co A received small arms fir VIC. 191262. Returned fire with unkown results.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>281600</h5>
                                                    <p>Co C aprehended 2 VCS near Coord 183294.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>281607</h5>
                                                    <p>Co A seized Objective #1 at Coord 191259.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>281714</h5>
                                                    <p>Received CTG 79.4 Frag Order for operations 281700 to 291630.<br /> Co A reports
                                                    two tunnels at Coord 199255 and 198254.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>281715</h5>
                                                    <p>Co C captured 2 VCS near 183294.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>281730</h5>
                                                    <p>Co D reached Objective # 11 at 293371. Helo lift commenced for Bravo Command
                                                Group.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>281845</h5>
                                                    <p>BLT 1/3 Frag Order # 2 issued to BLT Units.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>282117</h5>
                                                    <p>Co D reports 5 VC located 100 meter from Objective # 11.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>290440</h5>
                                                    <p>Co C reports freshly dug fighting holes VIC. 185293.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>290450</h5>
                                                    <p>Co D reports one VC seriously wounded VIC. 293372. VC later died of wounds.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>290600</h5>
                                                    <p>Co D reports one VC wounded near Objective # 13 Coord 300364.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>290700</h5>
                                                    <p>Co C and Co D have commenced attack on Objective #14 and #12, respectively.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>290820</h5>
                                                    <p>Co B captured one VC weapon and wounded one VC in fire fight VIC. 195292.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>290850</h5>
                                                    <p>CTG 79.4 ordered S &amp; D ops ceased. Co C and Co B to move on Objective # 4 at
                                                Coiord 165277 with speed and caution.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>290855</h5>
                                                    <p>Co D received sniper fire VIC. 289375. Returned fire with unknown results.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>290910</h5>
                                                    <p>Co A seized one VCS at 185265.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>291030</h5>
                                                    <p>Co A ordered to prepare for helilift from Objective # 3 at 176268 to Objective
                                                        # 7 Coord 149243. Alpha Command Group and W-2-12 helilifted to Objective #4 at
                                                    165277, from LZ Oriole.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>291150</h5>
                                                    <p>Co C receiving sniper fire from Objective #4 Coord 165277.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>291200</h5>
                                                    <p>First elements Co A seized Objective # 7 Coord 149243.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>291244</h5>
                                                    <p>Co C seized and secured Objective # 4 Coord 165277.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>291250</h5>
                                                    <p>Co C receiving sniper fire at Objective # 4 Coord 165277.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>291540</h5>
                                                    <p>One VC killed by Co D near Objective # 12 at 273393.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>291700</h5>
                                                    <p>8 VCS captured by Co D VIC. 273392.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>291856</h5>
                                                    <p>Frag Order from CTG 79.4 for operations 291930 to 301630.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>292330</h5>
                                                    <p>CTG 79.4 Frag order passed to all units.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>292340</h5>
                                                    <p>CTG 79.4 Frag Order modified. Units conduct local S & D ops. Back load tanks,
                                                ontos and LVT's from Red Beach at 300700.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>292345</h5>
                                                    <p>Co D discovered one spider trap and one Hooch with punjistakes concealed under
                                                a false deck at 282388. Destoryed same.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>301140</h5>
                                                    <p>SAF delivered against Helos at Coord 159283. Co C fired 60mm mission on Coord
                                                159283 with unknown results.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>301155</h5>
                                                    <p>Co C spotted 10 VC in Rice paddy at 438286. Artillery mission fired with 5 enemy
                                                    KIA probable.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>301330</h5>
                                                    <p>Co A receiving automnatic weapons from VIC. 143243. Artillery mission fired without
                                                    results.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>301500</h5>
                                                    <p>Recon killed one VC (Conf) and captured VC near Coord 159252. Also fired artillery
                                                mission in that area with unkown results.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>301520</h5>
                                                    <p>Co B receiving SAF during lift out from LZ at 175270. One USMC WIA.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>301538</h5>
                                                    <p>Co B commenced landing in LZ Cardinal at Coord 128388. Receiving light sniper
                                                fire.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>301545</h5>
                                                    <p>Co D commenced landing in LZ Buzzard at Coord 132399. No opposition encountered.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>301626</h5>
                                                    <p>Co A spotted 6 VC in tree line at Coord 148232. Fired 60mm mortars with unknown
                                                results.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>301630</h5>
                                                    <p>Co A fired MG and 3.5 at pajama clad VC near objective # 7. Results unkown.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>302200</h5>
                                                    <p>Received Frag Order from CTG 79.4 on movement of Co A, W-2-12, and Command Group
                                                        to LZ Cardinal at coord 128388 on 1 May. Co C to be lifted to LZ Buzzard at 132399.
                                                Co A will be lifted out of LZ Robin at 163242 Vice Wren at 145240.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>010900</h5>
                                                    <p>Co D received small arms fire from 10 to 12 VC at 144399. VC located in caves
                                                and tunnels in that vicinity, Co D sweeping area.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>010920</h5>
                                                    <p>Co A spotted 75 to 100 VC on trail near 169240. Artillery fire mission got excellent
                                                target coverage. Results unknown.SAF also received from VIC. 165237.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>010930</h5>
                                                    <p>Co A captured one VCS at 155278.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>011050</h5>
                                                    <p>First wave of Co A into LZ Cardinal. Receiving SAF on chopeprs out of LZ Robin.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>011153</h5>
                                                    <p>Co D had firefight with approximately 10 VC near 135395. VC broke contact and
                                                fled with negative results.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>011230</h5>
                                                    <p>Co B reported two VC in the open with weapons VIC. 128390. Fired and got one
                                                VC KIA (Conf) and one VC KIA (Prob).</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>011510</h5>
                                                    <p>Co B reported 15 VC in open at 113394. Fired 81 mortars with unknown results.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>011825</h5>
                                                    <p>Received Frag Order for operations from 011900 to 021800 from CTG 79.4. Continue
                                                S &amp; D Ops.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>011856</h5>
                                                    <p>Helilift of Co A and W-2-12 to LZ Cardinal completed.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>012115</h5>
                                                    <p>Co B positions at LZ Cardinal probed by two VC. Illumination fired. VC fled.SAF
                                                produced negative results.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>020700</h5>
                                                    <p>Co's A and C contiunuing Search and Destroy operations in VIC.1237 and 1239 respectively.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>021005</h5>
                                                    <p>Co A received sniper fire from VIC. 125376. Fire returned with negative results.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>021030</h5>
                                                    <p>Co C received sniper fire and sighted three VC VIC 125388. Fire returned with
                                                negative results. One small tunnel destroyed at same location.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>021100</h5>
                                                    <p>Co A patrol blowing numerous caves discovered in vicinity of 120375.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>021305</h5>
                                                    <p>Co C Killed woman running from advance party at 118397.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>021445</h5>
                                                    <p>Co C taking automatic weapons fire VIC. 115398. Returned fire 81 and 60mm mortars
                                                and automatic weapons fire.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>021640</h5>
                                                    <p>Co D shot and wounded one VC in VIC. 129382. Three VCS came out of tunnel and
                                                    were captured.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>021700</h5>
                                                    <p>Co A reported point platoon receiving 6 to 8 rounds of SAF from VIC. 120358.
                                                Are searching area for VC.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>021930</h5>
                                                    <p>Co C under heavy fire from 116384. Co C located at 198385. Co C estimated it
                                                        was hit by a reinforced platoon. 105mm and 107mm fire was called in, and an emergency
                                                    air strike requested.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>022100</h5>
                                                    <p>Action involving Co C continued. Sparrow Hawk Force alerted for possible insertion
                                                to assist. Artillery missions continue firing VIC. 116384 and 110374.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>022200</h5>
                                                    <p>Flareship and UH1E Gunships reported on station to assist Co C. Co C receiving
                                                mortar fire again. Air strikes on area commenced.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>022300</h5>
                                                    <p>Med-Evac and emergency resupply of ammo called for by Co C.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>030645</h5>
                                                    <p>Med-Evac and resupply commenced for Co C. Friendly casualties were 4 KIA; 14
                                                WIAE; 6 WIANE. Enemy casualties were 2 KIA confirmed.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>030830</h5>
                                                    <p>Sparrow Hawk Force insterted at 120384 to extract Recon element and seize possible
                                                enemy mortar positions.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>031830</h5>
                                                    <p>Co A water patrol killed two VC at 094356, then came under attack from same area.
                                                        Four squads commited to assist the water patrol ran into heavy automatic and
                                                        small arms fire. Artillery and UH1E Gunship support was immediately available
                                                to Co A and was utilized throughout the area.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>032200</h5>
                                                    <p>All Co A units beyond perimeter at 094362 have returned with WIA's from action
                                                near 094356 except for 14 men still cut off.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>032300</h5>
                                                    <p>Patrol which was cut off near 094356 has returned with WIA's.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>040550</h5>
                                                    <p>Fire mission fired by A-1-12 at 090352 for Co A.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>040625</h5>
                                                    <p>Co A reports 60 to 70 VC at 085360. Artillery Fire mission called with unkown
                                                results.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>040907</h5>
                                                    <p>Brig Gen LaHue, ADC of 1st MarDiv visited BLT 1/3 CP at LZ Cardinal.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>040935</h5>
                                                    <p>Co A Friendly and Enemy casualty report received. Friendly casualties 14 KIA;
                                                8 WIAE; 1 WIANE. Enemey casualties 8 KIA (Conf); 6 KIA (Prob).</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>040936</h5>
                                                    <p>Co D spotted 20 VC at 096404. Fired 81mm mortar mission. Received SAF same location.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>040941</h5>
                                                    <p>Co D reports 20 VC confined in village at 095405.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>040953</h5>
                                                    <p>Co D requested Med-Evac for one USMC WIA at 098398. Found massive tunnel complex
                                                    at 085398 and 097404.Requested fire mission, negative results. Requested air.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>041040</h5>
                                                    <p>Co D receiving mortar fire and SAF from 107405. Requested Artillery and fixed
                                                    wing support.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>041131</h5>
                                                    <p>Co D has two WIA for emergency Med-Evac.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>041510</h5>
                                                    <p>Co C moving near 082386 reports one WIA from SAF. Med-Evac Requested.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>041520</h5>
                                                    <p>CAS mission for Co D at 085398 reported 100% on target with 65% coverage of target.
                                                Further results unknown.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>041800</h5>
                                                    <p>Co C moving to support Co D near hill 65 at 094393. Has Co D in visual contact,
                                                receiving sporadic sniper fire.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>041928</h5>
                                                    <p>Fire mission at 100403 for Co D. One USMC WIA reported as result of fire mission.
                                                Fire mission. Fire was on 50 VC in fortified position.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>042230</h5>
                                                    <p>Concept of operations for 5 May received from CTG 79.4.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>042325</h5>
                                                    <p>Co D reports all KIA extracted from Battle Zone to friendly lines. One M-60MG
                                                        with firing mechanism removed, one .45 Cal pistol and one M-16 rifle lost in
                                                        action. Total casualties: Friendly 11 KIA; 20 WIAE; 6<code>[?]</code> WIANE. Enemy Casualties
                                                - Unknown.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>050120</h5>
                                                    <p>Co D called artillery illumination mission to observe VC moving in area.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>050202</h5>
                                                    <p>Enemy appears to be slipping away to the SW. Distance too great for effective
                                                SAF. One Co D patrol still in contact.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>050500</h5>
                                                    <p>VC broke contact with Co D patrol. Continuing to move away to the southwest.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>050618</h5>
                                                    <p>Co D receiving SAF and automatic weapons fire from 104403. Fire mission called
                                                on 15 VC digging in Village at that location. Excellent coverage on target.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>050955</h5>
                                                    <p>Co'd C and D attacking fortified positions at 116395, receiving sporadic fire.
                                                        Bravi Company maneuvering in trace of Co C and D after departing LZ Cardinal.
                                                        Co B lifted to LZ Eagle at 095392. Co A lifted to LZ Magpie at 031341 from LZ
                                                Finch at 095392.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>051405</h5>
                                                    <p>At 108382 Co B reported one man stepped on surprise firing device causing WIA's.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>051430</h5>
                                                    <p>Co's C and B sweeping objective near 097402. Co C reports huge tunnel complex
                                                at 100402. Requests lights and demo to search and destroy this complex.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>051500</h5>
                                                    <p>CH-53, CH-46, and UH34D's arrived in LZ Cardinal without prior notification of
                                                lift A-1-12 and Bravo Command Group to LZ Magpie at 031341.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>051815</h5>
                                                    <p>LZ Cardinal under heavy attack from 82mm mortars, and SAF and automatic wpns
                                                        fire from all sides. CAS called and response was immediate with 2 F-9's, 2 UH1E
                                                        Gunships and Puff assisting. 10 VC KIA (Conf) 20 VC KIA (Prob). One 82mm mortar
                                                destroyed.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>052000</h5>
                                                    <p>All elements safely out of LZ Cardinal and into LZ Magpie without casualties.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>061000</h5>
                                                    <p>6 VC reported by Co B digging in at 044376. Artillery mission fired. Results
                                                unknown.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>061125</h5>
                                                    <p>Co C receiving sniper fire from 085393. 2 USMC WIA. Returned fire with 60mm mortars.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>061200</h5>
                                                    <p>Co B receiving light SAF near 090392. Returned fire with 3.5. 2 USMC WIA. 2 VC
                                                    KIA (Prob).</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>061730</h5>
                                                    <p>Co B reports 15 VC opened up on rear element of Company at 070389. Returned fire
                                                with small arms and M-79. 5 Enemy KIA (Prob).</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>061815</h5>
                                                    <p>Co D reports receiving sniper fire from 060385.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>062045</h5>
                                                    <p>Co A and BLT 1/3 CP at LZ Magpie. Co B at Coord 072395. Co C at 0623998. Co D
                                                    at 057395.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>071045</h5>
                                                    <p>Company B receiving sniper fire from 2 or 3 persons at 050399. Returned fire
                                                    with 81mm mortars.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>071215</h5>
                                                    <p>Co B received SAF from VIC. 050396. Returned fire. 3 enemy KIA (Prob).</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>071345</h5>
                                                    <p>All companies turning in Flak Vests to increase mobility and decrease load.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>071545</h5>
                                                    <p>Co D reported tunnel complex at 035375 containing some items of intelligence
                                                value.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>071700</h5>
                                                    <p>Co C reports two snipers VIC. 069398. Returned fire. One VC KIA (Conf) and one
                                                    VC KIA (Prob).</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>071845</h5>
                                                    <p>Position reports received from companies operating outside LZ Magpie. Co C Coord
                                                023399; Co B Coord 021383; Co D Coor 030385.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>072050</h5>
                                                    <p>Fire Mission on reported VC Battalion of 300 men moving VIC. 055371 resulted
                                                in a secondary explosion. More fire missions are being fired.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>072050</h5>
                                                    <p>Received Frag Order from CTG 79.4 for operations 8 May 1967. Co D reports movement
                                                at 030388. Fired 81 mission.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>072137</h5>
                                                    <p>Co D reports it is under mnortar attack from Coord 038395. Artillery mission
                                                fired. Friendly casualties: one KIA; 2 WIAE; 4 WIANE.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>072220</h5>
                                                    <p>Co C received six rounds of ineffective mortar fire on position from VIC. 031391.
                                                Fire mission called on that location.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>072325</h5>
                                                    <p>Casualty figures at this point in the operation are Friendly: 30 KIA; 55 WIA;
                                                30 WIANE. Enemy: 55 KIA (Conf); 77 KIA (Prob), 8 captured, and 24 VCS (Detained).</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>081035</h5>
                                                    <p>Co C captured 5 VCS of military age with packet of papers, money, fresh haircuts
                                                and false or no ID cards.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>081045</h5>
                                                    <p>Co C reported mortar attack on 023399 from VIC. 031391. Artillery and air requested.
                                                81's attempted to return fire but were hit by incoming.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>081102</h5>
                                                    <p>Co D receiving mortar fire. Co B 81's moving into <code>[...]</code> to assist Co C. Mortars
                                                located by recon elements at 032392. Co D reports 3 WIANE, non serious.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>081200</h5>
                                                    <p>More incoming mortars on Co C at 023399, 1UH1E Gunship and fixed wing attack
                                                        at 033393 and 033395 got 100% target coverage. One mortar position destroyed,
                                                5 VC KIA (Conf). Friendly casualties 3 KIA; 8 WIAE; 2 WIANE.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>081343</h5>
                                                    <p>Recon reports 6 VC pinned down at 032379. Fire mission fired with unknown results.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>081620</h5>
                                                    <p>Heavy punji trap area reported at coord 001371 by recon.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>081725</h5>
                                                    <p>Frag warning order received by BLT 1/3 from CTG 79.4 to be prepared to reorient
                                                operations toward LZ Cardinal.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>081935</h5>
                                                    <p>Co B captured one VCS at Coord 002370.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>082020</h5>
                                                    <p>Received intelligence report that one VC company was operating VIC. Coord 002370.
                                                Passed to Co B.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>082400</h5>
                                                    <p>Received Frag order from CTG 79.4 for operations on 9 May 1967. Operations are
                                                        oriented toward LZ Cardinal over same route covered to arrive at present locations.
                                                        Co A and BLT 1/3 CF remain at LZ Magpie. Present positions: Co B Coord 002375;
                                                Co C Coord 001370; Co D Coord 009386; Recon element Coord 021380.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>090455</h5>
                                                    <p>BLT 1/3 Frag order issued to units.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>090600</h5>
                                                    <p>Co's B, C and D are moving through area Coord 0137, 0138, 0139 on local search
                                                    and destroy operations.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>090640</h5>
                                                    <p>Co C receiving incoming mortar fire from VIC. 015375 and 012385. Co D firing
                                                        mortars to assist. Request for UH1E Gunship support. Co D also firing 3.5 and
                                                        M-60's on enemy positions. Co C using mortars to return fire. Co C received one
                                                    WIANE from mortar attack.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>090730</h5>
                                                    <p>CAS on VIC. of mortar positions. results: good target coverage Enemy casualties
                                                unknown.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>090906</h5>
                                                    <p>Co B captured 7 VCS VIC. 010385.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>091005</h5>
                                                    <p>Casualties as of 090900 May 1967 for BLT 1/3 KIA 33; WIAE 76; WIANE 21.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>091300</h5>
                                                    <p>Co D spotted 3 VC at 015403. One VC KIA (Prob) from SAF.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>091730</h5>
                                                    <p>CTG 79.4 issued SiteRep on Amphibious Withdrawal, confirming BLT 1/3 sweep to
                                                        the east toward the coast. Directed to coordinate sweep with 1stBn 5th Marines
                                                    on right flank.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>091905</h5>
                                                    <p>Co D sighted 4 VC at 025403. Ambush in progress. VC escaped without contact.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>092230</h5>
                                                    <p>BLT 1/3 issued Frag Order # 11 to Op Order 5-67 for sweep operations on 10 May
                                                67 East toward the coast.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>100730</h5>
                                                    <p>Co's B and C at Phase line Alpha on north south line from 0241 through 020387
                                                continuing sweep to east. Co D in trace moving down center of valley.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>100740</h5>
                                                    <p>Bravo Co receiving SAF and automatic wpns fire from Hill 110 a<code>[...]</code> 033386.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>100750</h5>
                                                    <p>Co C firing mortars on Hill 110, Co B returning fire on Hill 110 with 60 and
                                                81mm mortars, 3.5 rkts and automatic wpns. Request for UH1E Gunship support.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>100822</h5>
                                                    <p>Hill 100 being worked over by Gunships and automatic fire.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>100830</h5>
                                                    <p>Co B reports one WIA. Request Med-Evac.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>100848</h5>
                                                    <p>Co B reports VC moving toward Co B from left rear request Co C to check it out
                                                    and assist.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>100849</h5>
                                                    <p>Co D reports Co C, 1/5 is 300 meter west of Hill 110 moving east.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>100852</h5>
                                                    <p>Co B located at 034387; Co C at 034395; Co D at 025388.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>100853</h5>
                                                    <p>Co B taking heavy sniper fire. Reports 20 VC moving East.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>100906</h5>
                                                    <p>Co C moving 3d Plat to left flank of Co B.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>100915</h5>
                                                    <p>Co B taking mortar fire at a rate of one round per minute.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>* 100925</h5>
                                                    <p>Co B pinned down by heavy fire. Suffering unknown number of KIA and WIA. Requesting
                                                        close air support. Co C attempting to envelope village at 035395 with one platoon
                                                to stop enemy fire from that vicinity. Enveloping platoon receiving mortar fire.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>100930</h5>
                                                    <p>Request from Co B for Co C and D to link up on left and right flanks respectively.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>100935</h5>
                                                    <p>Co C, 1/5 moving toward Hill 110 sweep toward the east. Air strike will be run
                                                on Hill 110 prior to sweep.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>100949</h5>
                                                    <p>Co B reports one company of VC wearing green uniforms and helmets, well camoflaged
                                                and entrenched on Hill 100.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>100951</h5>
                                                    <p>Co C has one platoon pinned down by heavy fire from village at 035395.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>101025</h5>
                                                    <p>Air strike run on VIC. 033385. 5 VC KIA (Prob) and a secondary explosion. Air
                                                strike also run at Coord 025384. 5 VC KIA (Conf) KBA.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>101030</h5>
                                                    <p>Current situation has Co B on stream facing Hill 110 with Co C on left flank
                                                and Co B on right flank.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>101039</h5>
                                                    <p>Co C, 1/5 sweeping Hill 110, has control of objective. Co C needs help on left
                                                        flank. Withdrawing platoon from right flank to assist left flank platoon pinned
                                                    down by heavy fire.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>101045</h5>
                                                    <p>One platoon of Co D moving down to left flank to assist Co C. Co B reports VC
                                                moving east away from Hill 110.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>101054</h5>
                                                    <p>Co C has VC in trench line directly in front of position delivering heavy fire.
                                                Units are pinned down.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>101210</h5>
                                                    <p>Heavy contact continuing. Air strike run on Coord 044387. 50% Coverage of target.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>101259</h5>
                                                    <p>Co D now has two platoons commiited to right flank of Co B.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>101340</h5>
                                                    <p>Co B reports approximately 6 KIA and 23 WIA, all friendly, in Co C zone. Sparrow
                                                        Hawk arrived in zone with 40 men at approximately 1300. Suffered 5 WIA almost
                                                immediately. Remaining personnel pinned down in LZ.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>101536</h5>
                                                    <p>Heavy contact continues. Co B reports VC attempting to move out to the east,
                                                after air strike throughout the area.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>101600</h5>
                                                    <p>Contact light. Units cosolidating positions and establishing perimeter for the
                                                        night. Co's B, C, and D under control of 1/5. Received Frag order for night activities
                                                    from 1/5.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>102330</h5>
                                                    <p>Position report of Co's B, C, and D. Co B at 036389; Co C at 036391; Co D at
                                                030389. Units tied together in a perimeter for the night.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>111100</h5>
                                                    <p>Casualties reported for action 10 May 1967. Friendly: 22 KIA, 62 WIAE, 26 WIANE,
                                                Enemy: 86 KIA (Conf)</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>111645</h5>
                                                    <p>Co'd B, C, D and Mini Cmd Group moving East toward LZ Quail at 060377.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>112100</h5>
                                                    <p>Position report on all units submitted to CTG 79.4. Co A and BLT 1/3 at Coord
                                                        044342; Mini Cmd Group at 044390; Co B at 044390; Co C at 045396; Co D 042392.
                                                Perimeter established for night defense.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>112200</h5>
                                                    <p>Frag Order received from CTG 79.4 for Amphibious withdrawal to ships of ARG 76.4.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>121400</h5>
                                                    <p>All elements of Co's B, C, D and Mini Comd Group have departed LZ Quail at 060377.
                                                LZ Quail secured by 3/5.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>121900</h5>
                                                    <p>All Units of BLT 1/3 are aboard ships of ARG 76.4. Operation Beaver Cage completed.</p>
                                                </ion-label>
                                            </ion-item>
                                        </ion-list>
                                    </li>
                                    <li>Recapitulation of major moves by helicopter of BLT 1/3 during Operation Beaver Cage.

                                    <ion-list>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>280700 April 1967</h5>
                                                    <p>C Company landed in LZ Oriole at Coord 186294.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>280900</h5>
                                                    <p>A Company landed in LZ Thrush at Coord 198265.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>280935</h5>
                                                    <p>A-1-12 lifted to Hill 29 at Coord 2266320 with two 105's and 18 personnel</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>281100</h5>
                                                    <p>Alpha Command Group and Recon Platoon landed in LZ Oriole at Coord 186294.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>281330</h5>
                                                    <p>B Company landed in LZ Oriole at Coord 1866294.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>281530</h5>
                                                    <p>W-2-12 landed in LZ Oriole at Coord 185294.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>281730</h5>
                                                    <p>Bravo Command Group landed in LZ Oriole at Coord 186294.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>291030</h5>
                                                    <p>Command Group and W-2-12 lifted from LZ Oriole to objective # 4 at Coord 165277.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>291030</h5>
                                                    <p>A Company lifted from objective # 3 at Coord 176268 to objective #7 at Coord
                                                    149243 (LZ Wren).</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>301530</h5>
                                                    <p>B Company lifted from 165277 to LZ Cardinal at 128388.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>301700</h5>
                                                    <p>D Company lifted from 284388 to LZ Buzzard at Coord 132399.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>011050 May 1967</h5>
                                                    <p>A Company lifted from LZ Robin at Coordd 162242 to LZ Cardinal at Coord 128388.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>011300</h5>
                                                    <p>C Company lifted from 165277 to LZ Buzzard at coord 132399.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>011500</h5>
                                                    <p>Command Group and W-2-12 lifted from 165277 to LZ Cardinal.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>020900</h5>
                                                    <p>A-1-12 lifted from Hill 29 at Coord 226320 and LSD to LZ Cardinal.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>050700</h5>
                                                    <p>B Company lifted from LZ Cardinal at Coord 128388 to LZ Eagle at Coord 095392.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>050930</h5>
                                                    <p>A Company lifted from LZ Finch at Coord 094358 to LZ Magpie at Coord 031341.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>051500</h5>
                                                    <p>A-1-12, W-2-12, Command Group (255 personnel) moved from LZ Cardinal to LZ Magpie
                                                at Coord 031341.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>120900</h5>
                                                    <p>B, C, and D Companies lifted from LZ Quail at Coord 060377 to ships of ARG 76.4.</p>
                                                </ion-label>
                                            </ion-item>
                                            <ion-item>
                                                <ion-label text-wrap>
                                                    <h5>121200</h5>
                                                    <p>A-1-12, W-2-12, Company A, and command group lifted from LZ Magpie at Coord 031341
                                                to ships of ARG 76.4.</p>
                                                </ion-label>
                                            </ion-item>
                                        </ion-list>
                                    </li>
                                </ol>

                                <h4>Results</h4>

                                <p>Because of the requirement to move very rapidly and to cover large areas of terrain the Battalion
                                    could not adequately search and destroy where heavy contact had occurred. Therefore, the enemy losses
                            may have been much higher than these figures listed below.</p>

                                <ol class="list-lower-latin">
                                    <li><span class="text-underline">Over all enemy losses</span>
                                        <ul>
                                            <li>181 KIA (Conf)</li>
                                            <li>136 KIA (Prob)</li>
                                            <li>66 VC prisoners and detainees</li>
                                        </ul>
                                    </li>
                                    <li><span class="text-underline">Enemy Equipment, Material and Weapons Captured:</span>
                                        <ol>
                                            <li>Two 60mm Mortar Sights</li>
                                            <li>Six SKS Soviet 7.62mm Semiautomatic Carbines</li>
                                            <li>2 AK-47 7.62 Assault Guns</li>
                                            <li>One 7.62 Heavy MG SG 43 &amp; SGM</li>
                                            <li>Two Carbines US 30 Cal. M1</li>
                                            <li>2 NVA diaries</li>
                                            <li>3 wallets containing pictures of NVA soldiers and anti-american literature</li>
                                            <li>1 VC/NVA medical bag</li>
                                            <li>1 medical handbook</li>
                                            <li>25 rouinds of 60mm mortar rounds</li>
                                            <li>25 CHICOM grenades</li>
                                            <li>500 rounds small arms ammunition</li>
                                            <li>punji traps and sticks</li>
                                            <li>6 fuses for 60mm mortars</li>
                                        </ol>
                                    </li>
                                    <li><span class="text-underline">Enemy Equipment, Material and Weapons Destroyed:</span>
                                        <ol>
                                            <li>One 60mm Mortar Sight</li>
                                            <li>One 7.62 heavy MG 43 and SGM</li>
                                            <li>25 rounds 60mm mortar</li>
                                            <li>25 CHICOM Grenades</li>
                                            <li>500 rounds small arms ammunition</li>
                                            <li>6 fuses for 60mm mortars</li>
                                            <li>assortment of VC/NVA 782 gear: 22 cartridge belts, 13 entrenching tools and 9 canteens</li>
                                        </ol>
                                    </li>
                                    <li><span class="text-underline">Friendly Casualties:</span>
                                        <ul>
                                            <li>54 KIA</li>
                                            <li>1 DOW</li>
                                            <li>151 WIAE</li>
                                            <li>50 WIANE</li>
                                        </ul>
                                    </li>
                                    <li><span class="text-underline">Friendly equipment lost or destroyed:</span>
                                        <ul>
                                            <li>3-AN/PRC - 25</li>
                                            <li>7-.45 Cal Pistols</li>
                                            <li>1-M-79</li>
                                            <li>*9-M-16 rifles</li>
                                            <li>1-pr 7.50 Binoculars</li>
                                            <li>3-M1ZZ Tripods</li>
                                            <li>1-TAI telephone</li>
                                            <li>1-M-14 rifle</li>
                                        </ul>
                                    </li>
                                </ol>

                                <h4>Commander's Analysis</h4>

                                <ol class="list-lower-latin">
                                    <li>
                                        <span class="text-underline">Problems encountered.</span> The basic BLT concept applied
                                        to waterbornse elementslanded over the beach and helicopterborne elements landed abnormally deep
                                        inland intensified the problems of control and at times exceeded the command and capabilities
                                        of the BLT. In effect, two separate operations resulted. The use of a BLT as a subordinate command
                                        where major support units are not fragmented to task<code>[...]</code> organizations unnecessarily burdens
                                        the BLT with the problems of providing logistical support and security for numerous elements
                                        of the BLT, as well as causing serious distractions from the essential task of directing the
                                        Infantry Battalion. Briefings particularly with regard to overall missions and general plan were
                                        not adequate.
                            </li>
                                    <li><span class="text-underline">CA/PsyWar.</span> The CA/PsyWar aspects of the operation
                                        were not covered by instructions. Resettlement of refugees, and re-distribution of captured food
                                        were not provided for. Except for MedCap activities in the government controlled area of Que
                                        Son BT0334 and a very few individual able-bodies males who were able to obtain sanctuary with
                                        a rifle unit nothing constructive was offered nor was feasible. No CA/PsyWar objectives were
                                        set forth.

                            </li>
                                </ol>

                                <h4>Lessons Learned</h4>

                                <ol>
                                    <li><span class="text-underline">Item</span>: Rapid Movement.
                                <ol class="list-lower-latin">
                                            <li>Rapid movement through an area which has been occupied by the enemy for a long time permits
                                                the enemy to deliver accurate incoming sniper and mortar fire. It is imperative that
                                                the maneuvering unit be alloted a reasonable period of time during which enemy emplacements,
                                                caves and tunnels can be located and destroyed. On one of several occasions, an area,
                                                previously swept, developed into a fortified position when moved through again a day
                                                later. The area was known to be heavily tunneled but time could not be spent after the
                                                initial discovery because of the requirement to move. Disoovered enemy fortifications
                                                must be destroyed when first located and the maneuvering elements schedule should be
                                        flexible enough to allow this.</li>
                                            <li>The amount of demolitions required to destroy extensive enemy positions cannot be packed
                                                by the search and destroy unit. A requirement exists to have a ready supply of demolitions
                                                located in the immediate area of the Battalion TAOR/ZOA with additional qualified personnel
                                        ready for helilift to the using unit.</li>
                                        </ol>

                                    </li>
                                    <li>
                                        <p><span class="text-underline">Item</span>: Movement Pattermns and Terrain Utilization.</p>
                                        <p><span class="text-underline">Discussion</span>:</p>
                                        <p>Units maneuvering in the field must avoid a set schedule of movement and vary their utilization
                                            of terrain.
                                </p>
                                        <p>Companies working in assigned TAOR's or 8S part of a Battalion effort should normally avoid
                                            setting in night positions prior to darkness, and should be moving by dawn. Any delay after
                                            first light invites inooming sniper and mortar fire. Further, companies should attempt to
                                            disguise their direction of movement especially just prior to darkness. Maximum utilization
                                            of concealment is mandatory. The enemy is capable of making "educated" guesses as to possible
                                    friendly night positions unless deception is used.</p>
                                        <p>Early daylight and late afternoon resupply by helicopter should be employed infrequently and
                                            then only for emergency or to break the midday pattern. Resupply of friendly units should
                                            occur between the hours of 1000 to 1400, and should be executed as rapidly as possible. This
                                            is especially true in the high temperature/ humidity areas of Vietnam when these hours prove
                                            to be the least productive period. Intensive patrolling and ambushes must be carried on duriag
                                    the halt.</p>
                                        <p>Night movement of units can be used to deceive the enemy. This must depend on the commanders
                                    knowledge of the terrain and a reconnaissance of the area prior to movement.</p>
                                        <p>After night positions have been selected, and while the unit is moving toward its night positions,
                                            forward observers and forward air control1ers should be compUing likely H&amp; I and TPQ,-10
                                            targets. The process is a continuous one but acheives a greater degree of importance in the
                                            area of the night position. The Battalion FSCC then can supplement this target list to ensure
                                            a balanoed night fire plan.
                                </p>

                                        <p>To continuously selectt highground as final night defensive positions is undesirable. Rioe
                                            paddies and village positions in the lowground can be used; outposts and patrols attain added
                                            importance. In selective lowground positions, care must be taken to ensure the establishment
                                            of internal security posts to prevent the enemy's sudden appearance within the perimeter
                                            from hidden cave &amp; tunnels. Movement should be held to a minimum after dark within the
                                    perimeter and if messenger runs must be made, at least two runners should be sent together.</p>

                                    </li>
                                    <li>
                                        <p><span class="text-underline">Item</span>: General Comments Concerning Air/Infantry
                                            Teamwork.
                                </p>
                                        <p><span class="text-underline">Discussion</span>:</p>
                                        <ol class="list-lower-latin">
                                            <li>On a company level a definite requirement exists for the landing zone to be supervised
                                                by one company representative such as the Company gunnery Sergeant, First Sergeant, who
                                                is current in both the tactical and logistical situations and who can coordinate HST/TACP
                                        efforts towards resupply, Med Evac, etc.</li>
                                            <li>Each fire team of a unit <span class="text-underline">must</span> have air
                                                panels and display these panels whenever air is to be utilized in support. i.e. resupply,
                                        UH1E Gunship support, fized wing close air strikes.</li>
                                            <li>Smoke signals to make landing zones should be used only when requested by the incoming
                                        helicopter pilot. Smoking a zone should not be done automatically.</li>
                                            <li>Rapid moving tactical situations can suddenly preclude the use of CAS already requested.
                                                Commanders should, therefore, have secondary targets preselected for his support. The
                                                TACP representative with each company can maintain a current list of targets for the
                                        commanders.</li>
                                            <li>The selection of landing zones must be made in accordance with the following guidelines:
                                        <ol>
                                                    <li>Satisfactory size clearance, degree of slope.</li>
                                                    <li>Capable of receiving resupply and sending out Med-Evacs even if company is in
                                                contact.</li>
                                                    <li>Must not be centrally located to the point of exposing company CP, mortar positions
                                                etc. to high volume of incoming fire.</li>
                                                    <li>LZ must be secured and marked with air panels.</li>
                                                </ol>

                                            </li>
                                            <li>Med-Evac helicopters must be used for Med-Evacs only, and should not be directed to acoomplish
                                        other missions.</li>
                                            <li>Helicopters provide a ready supply of smoke for front lines units. In an emergency chiefs
                                        can supply a limited supply of smoke granades.</li>
                                            <li>All air agencies supporting an operation must be aware of the thrust point system in
                                                that area. Positions of friendlies are being compromised by the requirement that positions
                                        must be sent in the clear to helioopter elements etc.</li>
                                        </ol>
                                    </li>
                                    <li>
                                        <p><span class="text-underline">Item</span>: The Battalion CP.</p>
                                        <p><span class="text-underline">Discussion</span>: The Battalion Command Post must
                                            be flexible enough to adjust its size to meet the tactical situation. A highly mobile command
                                            group consists of the following: Battalion CO, Radio Operator for Regt TAC, Radio Operator
                                            for Bn TAC, S-3, S-3 assist, FSCC, Radio Operator for Arty Conduct of Fire, Radio Operator
                                    for TACP net.</p>

                                    </li>
                                    <li>
                                        <p><span class="text-underline">Item</span>: Lightening the load.</p>
                                        <p><span class="text-underline">Discussion</span>: In a moving sitaution, search
                                            and destroy or sweep operation, the additional weight of the second 81mm mortar in the section
                                            does not appear to warrant its being carried. A solution to this appears to be to drop the
                                    one gun, and utilize the personnel for carrying more ammo for the remaining gun.</p>

                                    </li>
                                    <li>
                                        <p><span class="text-underline">Item</span>: Communications.</p>
                                        <p><span class="text-underline">Discussion</span>:</p>
                                        <ol class="list-lower-latin">
                                            <li>Because of the operating distances involved between the Battalion and its companies and
                                                between the Battalion and higher Headquarters, radio was the primary and the only means
                                                of communications. Weather and terrain were generally favorable to good voice communications
                                        and consequent communication was reliable throughout the two week deployment.</li>
                                            <li>Post operation lim!ted technical inspection of radios and telephones disclosed no equipment
                                                faiures or malfunctions. However loss and <code>[...]</code> of radio accessories has dropped the availability
                                        of PRC-25 radios to a critical low.</li>
                                            <li>From the time that the BLT embarked on Okinawa through the end of Operation Beaver Cage,
                                                situations arose whioh, as they compounded, threatened the maintenance of adequate communications
                                                support of the BLT's mission in the joint operation. For the benefit ot future SLF's
                                                it is felt they are worthy of mention.
                                        <ol>
                                                    <li>It became aparrent upon embarkation that the troop radio equipment on board the
                                                        LPH was inadequate to meet even minimum requirements of the SLFF. Attempt to
                                                        rectify this deficiency in the Phillipines were not successful because of early
                                                        deployment to the coast of Vietnam. Out of necessity the BLT and the SLF installed
                                                        their organic equipment on board to supplement troop radio. A later requirement
                                                        for the establishment of an SLF oommand post ashore and communications equipment
                                                        for three liaison offioers to various adjacent organizations began to see the
                                                personnel and equipment organic to the SLF and the BLT spread sparsely.</li>
                                                    <li>These last two requirements came to light after the Battalion was deployed so
                                                        far inland that it had been necessary to establish a two vehicle relay station
                                                        in order to communicate with the LPH and the other ships whioh comprised our
                                                TACLOG.</li>
                                                    <li>Ultimately it became necessary to utilize message center, wire, and attached
                                                radio relay personnel to meet the requirements of manning radios around the clock.</li>
                                                    <li>A suggested solution is to augment the SLF staff with additional communicators
                                                        and equipment prior to deployment in order to handle TACLOG and liaison communications,
                                                        rather than tasking the Infantry Battalion to meet all unforseen oommunioations
                                                needs whioh can arise on speculative operations.</li>
                                                </ol>

                                            </li>
                                        </ol>

                                    </li>
                                    <li>
                                        <p><span class="text-underline">Item</span>: Resupply.</p>
                                        <p><span class="text-underline">Discussion</span>:</p>
                                        <ol class="list-lower-latin">
                                            <li>On several occasions resupply was not accomplished when and where desired due to non-availability
                                                of the UH-34 support helioopters. These aircraft were being utilized for tactioal or
                                                Med-Evac lifts. A solution to this difficulty would be to provide CH-46 aircraft to augment
                                                UH-34's for resupply.
                                    </li>
                                            <li>Timeliness of emergency resupply of class V was found to be a problem on one occasion
                                                at night. For convenienoe, the problem was solved by deliveries directly from the LPH
                                                support ship. An in country supply source for SLF support is considered highly desirable
                                        beoause of the availability of class I, II, IV and V supplies.</li>
                                            <li>Aircraft availability was not at a level to provide normal resupply on an on call basis.
                                                It was necessary that the tactioal plan allow for a position of the day set aside for
                                                resupply of units. The most sucoessful time for localre- supply of companies was during
                                                midday between the hours of 1100 - 1400, however due to situational dictates no pattern
                                                of resupply was set. Midday resupply was considered to be the best solution because it
                                                allows freedom of movement iin early morning and evening during the most critical time
                                        periods and when the most progress is made.</li>
                                            <li>The problems of resupply communications from the central LZ to units resupplied was solved
                                                quite satisfactorily by use of the HST net. Serving as the administrative and logistics
                                        net, the HST net relieved the burden from the Battalion Tactical Net.</li>
                                            <li>The most feasible and practical manner of resupply was found to be from the central LZ
                                                to the using units rather than direct from in country or ship board sources. This enabled
                                                greater positive control and ooordination. The pilots may be given ourreat local LZ coordinates,
                                        and conditions at the unit LZ'S.</li>
                                            <li>Control and accounting for individual equipment and weapons of KIA WIA personnel was
                                        a problem. Our experience indicates that Med Evacuated personnel must be evacuated <span class="text-underline">with</span>
                                                their equipmeat <span class="text-underline">tagged</span>. Personal equipment
                                                should not be evacuated via resupply helicopters that are subject to frag orders changing
                                                destination and resulting in temporary or permanent loss of equipment. If due to weight
                                                limitations of the Med Evac helicopter; personal gear is not evacuated with the casualty,
                                                it could be returned via resupply helicopter to the central LZ for further delivery to
                                                designated receiving locators.
                                    </li>
                                            <li>There were occasions when units requesting resupply experienced difficulty in determining
                                                exact requirements dut to the changing nature of the tactical situation. Extreme care,
                                                forethought and screening must be taken by the requesting <code>[...]</code> to avoid receiving burdensome
                                        excess ammunition or other supplies.</li>
                                            <li>Companies submiting resupply request during the evening prior to delivery the following
                                                day were supplied on a "fill or kill" basis. This made the resupply chain function smoother
                                                as records of supplies requested and those delivered were not necessary. If a company
                                                did not receive an item/items, he would resubmit the following day, if the requirement
                                                still existed. If the requirement did not exist the following day the item/items were
                                        deleted.</li>
                                        </ol>

                                    </li>
                                </ol>

                                <p class="ion-text-right">
                                    <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/p-a-wickwire-signature.png" alt="P.A. Wickwire signature" /><br /> P. A. WICKWIRE
                        </p>

                                <p class="ion-text-center">
                                    <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/op-overlay-2-encl-2.jpg" alt="Operation Overlay Diagram" />
                                </p>


                            </div>

                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-content>

        ];
    }
}
