import { Component, Element, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-slf-after-action-cage-union',
    styleUrl: 'page-slf-after-action-cage-union.css'
})
export class PageSLFAfterActionCageUnion {

    @Element() el: HTMLElement;

    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('>> PageAvoidTracking.componentWillLoad');
        }
        
        let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);

 
        document.title = this.header.title + ' | ' + SITENAME;
        if (this.header.teaser) {
            document.getElementById("meta-desc").setAttribute("content", this.header.teaser);
        }
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
                            <ion-icon slot="icon-only" name="search-outline"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
                <gls-gcse-searchbox-only id="searchbar" class="hidden" />
            </ion-header>,

            <ion-content class="ion-padding">

                <h1>Special Landing Force, After Action Report, BEAVER CAGE/UNION</h1>
                <h5>1 April 1967 through 13 May 1967</h5>
                <hr />

                <p>
                    This document is a declassified record of the Vietnam War from the period of Apr 1, 1967 to May 13, 1967, which generally pertains to the operation known as &quot;Beaver Cage/Union&quot;. The document was transcribed from a PDF file for the purpose of making it more useful for research (i.e. more legible, hyperlinked, and searchable). In some places, the scanned source document was somewhat illegible. The following symbology is used to reflect what was questionable during the transcription:</p>

                <ul>
                    <li><code>[?]</code> = One character exists here that is completely illegible or highly questionable.</li>
                    <li><code>[X?]</code> = Character here looks like character in brackets, but is questionable to some degree.</li>
                    <li><code>[O or 0]</code> = May be first of second character within brackets.</li>
                    <li><code>[…]</code> = Several characters or words of unrecognizable text.</li>
                </ul>

                <p class="entry-meta">Last modified: April 4, 2020</p>

                <p class="entry-meta">

                    Source: SPECIAL LANDING FORCE ALFA COMMAND CHRONOLOGY [TASK GROUP 79.4], 01 April 1967, Box __, Folder 063, US Marine Corps History Division Vietnam War Documents Collection, Vietnam Center and Sam Johnson Vietnam Archive, Texas Tech University, <a href="https://www.vietnam.ttu.edu/virtualarchive/items.php?item=1201063028" target="_blank">https://www.vietnam.ttu.edu/virtualarchive/items.php?item=1201063028</a>, Accessed 04 Apr 2020.

               </p>

                <div id="command-chronology" style={{ borderTop: `1px solid #CCC`, paddingTop: `40px` }}>

                    <p class="text-center red"><strong>DECLASSIFIED</strong></p>

                    <p class="ion-text-center">
                        HEADQUARTERS<br />
                        Special Landing Force ALFA (CTG 79.4)<br />
                        Fleet Marine Force, SEVENTH Fleet<br />
                        FPO, San Francisco 96601</p>

                    <p class="ion-text-right">
                        3:PJM:jtl<br />
                        Ser: 00114867<br />
                        28 May 1967</p>

                    <p>From: Commanding Officer<br />
                    To: Commandant of the Marine Corps (Code A02D)<br />
                    Via:&nbsp;(1) Commanding General, 9th Marine Amphibious Brigade, FMF<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2) Commanding General, Fleet Marine Force, Pacific
                    </p>

                    <h2>Subj: Command Chronology for the period 1 April 1967 through 13 May 1967, Submission of</h2>

                    <p>Ref:</p>
                    <ol class="list-lower-latin">
                        <li>MCO 5750.2</li>
                        <li>BrigO 5750.1A</li>
                        <li>CG FMFPac msg 261950Z Jul66</li>
                    </ol>

                    <p>Encl:<br />
                    (1) Battalion Landing Team 1/3 Command Chronology<br />
                    (2) Command Chronology - BLT 1/3<br />
                    (3) Command Chronology - HMM 263<br />
                    (4) After Action Report, BEAVER CAGE/UNION</p>

                    <ol>
                        <li>In accordance with references (a) through (c), the Command Chronology for Special Landinf Force ALFA is submitted as enclosures (1) through (4)</li>
                        <li>The period was extended through 13 May in order to include the termination of Operation BEAVER CAGE/UNION.</li>
                    </ol>

                    <p class="ion-text-right"><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/james-a-gallo-signature.png" alt="JAMES A. GALLO, JR. signature" /></p>

                    <h2 class="ion-text-center">AFTER ACTION REPORT<br />
                    BEAVER CAGE/UNION</h2>

                    <p class="ion-text-center">
                        DOWNGRADED AT 12 YEAR INTERVALS<br />
                    NOT AUTOMATICALLY DECLASSIFIED<br />
                    DOD DIR 5200.10
                    </p>

                    <h3 class="ion-text-center">28 APRIL-13 MAY 1967</h3>

                    <p class="ion-text-center">
                        SPECIAL LANDING FORCE ALFA
                    </p>

                    <p class="ion-text-center">
                        COMMAND CHRONOLOGY
                    </p>

                    {/* NOTE ENCLOSURE NUMBERS ON BOTTOM-RIGHT OF PAGES!!! */}
                    <ol>
                        <li><span class="text-underline">Organizational Data</span>
                            <ol class="list-lower-latin">
                                <li><span class="text-underline">Designation</span>. The Special Landing Force has the Task Designation Task Group 79.4.</li>
                                <li><span class="text-underline">Composition</span>. The Special Landing Force was composed as follows:<br /><br />
                                1 April - 13 May 1967 - SLF alfa - Colonel J.A. GALLO Jr.<br />
                                3 April - 13 May 1967 - BLT 1/3 - LtCol P.A. WICKWIRE<br />
                                3 April - 13 May 1967 - HMM 263 - LtCol E.K. KIRBY
                                </li>
                                <li><span class="text-underline">Locations</span>. The Special Landing Force was embarked aboard the Amphibious Ready Group consisiting of the following:<br /><br />
                                USS OKINAWA (LPH 3) <span class="ion-text-right">3 April - 13 May 1967</span><br />
                                USS BAYFIELD (APA 33) <span class="ion-text-right">3 April - 13 May 1967</span><br />
                                USS SEMINOLE (AKA 104) <span class="ion-text-right">3 April - 23 April 1967</span><br />
                                USS POINT DEFIANCE (LSD 31) <span class="ion-text-right">3 April - 13 May 1967</span><br />
                                USS WHITEFIELD COUNTY (LST 1169) <span class="ion-text-right">29 April - 13 May 1967</span>
                                </li>
                                <li><span class="text-underline">Average Monthly Strength0</span>. (Does not include TAD personnel)<br /><br />
                                SLF STAFF:&nbsp;&nbsp;USMC Off - 9&nbsp;&nbsp;&nbsp;USMC Enl - 23&nbsp;&nbsp;&nbsp;USN Off - 0&nbsp;&nbsp;&nbsp;USN Enl - 0<br />
                                BLT 1/3&nbsp;&nbsp;USMC Off - 56&nbsp;&nbsp;&nbsp;USMC Enl - 1610&nbsp;&nbsp;&nbsp;USN Off - 7&nbsp;&nbsp;&nbsp;USN Enl - 92<br />
                                HMM 263&nbsp;&nbsp;USMC Off - 51&nbsp;&nbsp;USMC Enl - 168&nbsp;&nbsp;USN Off - 1&nbsp;&nbsp;USN Enl - 3
                                </li>
                                <li><span class="text-underline">Commanding Officer and Staff</span>. (Does not include TAD personnel)<br /><br />
                                Commanding Officer <span class="ion-text-right">Col&nbsp;&nbsp;J.A. GALLO Jr.</span><br />
                                Executive Officer/Air Officer <span class="ion-text-right">LtCol&nbsp;&nbsp;R.C. MARSH</span><br />
                                S-2 <span class="ion-text-right">Major&nbsp;&nbsp;W.D. BENTON</span><br />
                                S-3 <span class="ion-text-right">Major&nbsp;&nbsp;R.W. EDWARDS</span><br />
                                Asst <span class="ion-text-right">S-3 Major&nbsp;&nbsp;R.M.BROWNE</span><br />
                                CommO <span class="ion-text-right">Capt&nbsp;&nbsp;F.D. KELLY</span><br />
                                S-1/Adjutant <span class="ion-text-right">Capt&nbsp;&nbsp;M.L. WILKINSON</span><br />
                                Asst S-2/AO <span class="ion-text-right">2ndLt&nbsp;&nbsp;S.E. DURHAM</span>
                                </li>
                                <li><span class="text-underline">TAD to the SLF for Special Operations</span>.
                                27 Apr - 10 May 67 - Capt AUSTIN - 5th Mar Liason Officer<br />
                                28 Apr 67 - Col AMERINE - cofS 9th MAB, Observer<br />
                                28 Apr 67 - Maj COYLE - Asst G-3, 9th MAB, Observer<br />
                                5 - 6 May 67 - LtCol RINEHART - Air Officer, 9th MAB, Observer<br />
                                6 - 7 May 67 - 1stLt D.G. CAPPS - CAS RPT, 1st Mar Div, Observer<br />
                                8 - 10 May 67 - LtCol E.V. EASTER - G-1, 9th MAB, Observer<br />
                                8 - 10 Maay 67 - Capt C. WIEDEN Jr. - Adjutant, 9th MAB, Observer
                                </li>
                            </ol>
                        </li>
                        <li><span class="text-underline">Chronology of Significant Events During the Period 1 April - 13 May 1967</span>
                            <ol class="list-lower-latin">
                                <li>The following is a concise review of the activities of the Special Landing Force ( TG 79.4 ). Detailed information of BLT 1/3 and HMM 263 is shown in the appropriate command chronology, enclodures (2) and (3). Detailed information on Operation BEAVER CAGE/UNION is shown in enclosure (4).</li>
                                <li><span class="text-underline">1 - 15 April 1967</span>
                                    <ol>
                                        <li>On 3 APril TG 79.4 departed Camp Hansen, Okinawa and boarded the USS OKINAWA (LPH 3). Continued planning for BEACH BARON I.</li>
                                        <li>On 3 April BLT 1/3 and HMM 263 reported to CTG 79.4 for OPCON 031500Z (CG 9th MAB msg 030810Z Mar67). BLT 1/3 embarked aboard ARG shipping USS OKINAWA, USS SEMINOLE, USS BAYFIELD, and USS POINT DEFIANCE. HMM 263 embarked aboard USS OKINAWA.</li>
                                        <li>On 4 April Col Gallo briefed LtGen BUSE on operations of the SLF.</li>
                                        <li>From 5 - 8 April SLF ALFA participated in combined CTF 76/79 Operation BEACH BARON I.</li>
                                        <li>On 6 April BGen METZGER visited Col GALLO aboard USS OKINAWA.</li>
                                        <li>On 7 April Capt. M.L. WILKINSON joined for duty AS s-1/Adj.</li>
                                        <li>On 8 April SLF conducted backloading from Exercise BEACH BARON I.</li>
                                        <li>From 9 - 10 April ARG/SLF arrived and remained Buckner Bay, Okinawaw. Commenced planning MUD PUPPY exercise.</li>
                                        <li>On 10 April departed Okinawa. USS OKINAWA and USS POINT DEFIANCE enroute to Keelung, Taiwan, USS BAYFIELD and USS SEMINOLE enroute to Kaohsiung, Taiwan.</li>
                                        <li>On 11 April enroute to Keelung/Kaohshung, Taiwan.</li>
                                        <li>On 12 April received distress call from SS SILVER PEAK which had run aground vicinity Minami Ko Shima Island. Arrived Minami Ko SHima Island 141915H April, unable to conduct rescue due to adverse weather. Crew of SS SILVER PEAK reported safe ashore.</li>
                                        <li>On 14 April helicopters from HMM 263 picked up crew od SS SILVER PEAK at 0800. Departed enroute to Taipei, Taiwan with crew of SS SILVER PEAK aboard USS OKINAWA. Transferred survivors of SS SILVER PEAK to SUNG SHAN Air Force Base, Taipei, Taiwan by helicopter.</li>
                                        <li>On 14 April departed Taipei, Taiwan enroute to Subbic Bay, R.P.</li>
                                        <li>On 15 April enroute to Subic Bay, R.P.</li>
                                    </ol>
                                </li>
                                <li><span class="text-underline">16 - 30 April 1967</span>
                                    <ol>
                                        <li>On 16 April all ARG shipping  enroute to Subic Bay, R.P.</li>
                                        <li>On 17 April received alert to proceed to position of DMZ, I CTZ. All shipping departed SUbic Bay, R.P. enroute to I CTZ RVN.</li>
                                        <li>On 18 April arrived on station vicinity DMZ, I CTZ RVN. Advised at 182300H that upon arrival TG 79.5, TG 79.4 to return to Subic Bay, R.P. for upkeep.</li>
                                        <li>On 19 April departed I CTZ RVN enroute to Subic Bay, R.P.</li>
                                        <li>On 20 April arrived Subic Bay, R.P. for upkeep. BLT 1/3 offloaded and set up camp at SLF Camp Cubi Point, R.P. HMM 263 flew helicopters off USS OKINAWA to sea plane landing, Cubi Point p R.P..</li>
                                        <li>On 21 - 22 April upkeep Subic Bay, R.P. BLT conducted training ashore.</li>
                                        <li>On 22 April Capt KELLY departed for III MAF in connection with communications planning.</li>
                                        <li>On 23 April received message alert to proceed to I CTZ RVN. Col GALLO, Maj TAYLOR and Maj BENTON departed with representatives of CTG 76.4 for III MAF and were further directed to 1st Mar Div for detailed planning for upcoming SpecOps. Fire was reported aboard USS SEMINOLE. Backload of BLT and HMM completed.</li>
                                        <li>On 24 April planning representatives were directed by III MAF to report 3rd Mar Div for planning forthcoming SpecOps. All shipping less USS SEMINOLE departed Subic Bay, R.P. enroute I CTZ RVN.</li>
                                        <li>On 25 April planning representatives directed by III MAF to report to 1st Mar Div for planning of forthcoming SpecOps. ARG/SLF arrived off the coast of I OTZ RYN.</li>
                                        <li>On 26 April planning representatives returned from III MAF. ARG/SLF continued steaming off the coast of I CTZ RVN.</li>
                                        <li>On 27 April CTG 76.4 and CTG 79.4 planning representatives made final planning visits to III MAF, 1st Mar Div and 5th Mar. Initiating Directive received for Operation BEAVER CAGE COMSEVENTHFLT msg (262324Z April 67). As 272000H April one UH-34 helicopter, HMM 263 crashed at sea on take off from USS PT DEFIANCE (LSD 31) with four crew and seven passengers aboard. Immediate search conducted by L<code>[C?]</code>M-6 and helicopters within two minutes of helicopter settling in water. Three crew and two passenger survivors. One crew and five passengers missing. Capt AUSTIN 9th MAB arrived aboard the USS OKINAWA for duty as liaison officer 5th Mar during Operation BEAVER CAGE.</li>
                                        <li>On 28 April Operation BEAVER CAGE commenced in conjunction with Operation UNION with landing of BLT 1/3 by helicopter and landing craft. Col AMERINE, CofS, 9th MAB, and Maj COYLE, Asst G-3 Operations, arrived aboard for visit with CTG 79.4.</li>
                                        <li>From 28 - 30 April the ARG/SLF conducted Operation BEAVER CAGE in Quang Tin Province, southern I CTZ RVN.</li>
                                        <li>On 29 and 30 April Col GALLO made liaison visits to CG 1st Mar Div.</li>
                                    </ol>
                                </li>
                                <li><span class="text-underline">1 - 13 May 1967</span>
                                    <ol>
                                        <li>From 1 - 13 May ARG/SLF continued to conduct Operation BEAVER CAGE in Quang Tin and Quang Nam Provinces, southern I CTZ RVN.</li>
                                        <li>On 1 May operational control of the SLF passed to CG 1st Mar Div, via COMSEVENTHFLT and CG III MAF. (COMSEVENTHFLT msg 301020Z April 67 and III MAF msg 010856Z May 67.)
                                        </li>
                                        <li>On 2 May CTG 79.4 forward elements established ashore.</li>
                                        <li>On 3 May CTG 79.4 met with CG FMFPAC and CG 1st Mar Div at BLT 1/3 CP.</li>
                                        <li>From 5 - 6 May LtCol RINEHART, 9th MAB Air Officer, aboard USS OKINAWA to visit CTG 79.4.</li>
                                        <li>On 6 May 1stLt D.G. CAPP 1st Mar Div boarded the USS OKINAWA for C<code>[as?]</code> Rpt visit.</li>
                                        <li>From 8 - 10 May LtCol EASTER, G-1 9th MAB, and Capt WIEDEN, Adjutant 9th MAB, cam aboard as observers.</li>
                                        <li>12 May BLT 1/3 commenced backload from Operation BEAVER CAGE and CTG 79.4 Forward Command Group returned to USS OKINAWA.</li>
                                        <li>On 13 May Operation BEAVER CAGE was terminated by CTG 79.4 msg 121524Z May 67. Col GALLO, Maj TAYLOR, Maj BENTON, and Capt KELLY with CTG 76.4 representatiuves met at III MAF for planning for forthcoming SpecOps.</li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                    </ol>

                    <p class="text-center red" style={{ borderTop: `1px solid #CCC`, paddingTop: `40px` }}><strong>DECLASSIFIED</strong></p>

                    <p class="ion-text-center">
                        HEADQUARTERS<br />
    Special Landing Force ALFA (TG 79.4)<br />
    USS OKINAWA (LPH 3)<br />
    C/O FPO, San Francisco 96601</p>

                    <p class="ion-text-right">
                        3:PJM:jtl<br />
    Ser: 00214867<br />
    28 May 1967</p>

                    <p>SECRET <code>[...]</code></p>

                    <p>From: Commanding Officer<br />
To: Commanding General, Fleet Marine FOrce, SEVENTH Fleet</p>

                    <p>Subj: Command After Action Report, Operation BEAVER CAGE/UNION</p>

                    <p>Encl:<br />
(1) Special Landing Force, After Action Report, BEAVER CAGE/UNION<br />
(2) HMM 263, After Action Report, BEAVER CAGE/UNION<br />
(3) BLT 1/3, After Action Report, BEAVER CAGE/UNION<br />
(4) Operations Overlay</p>

                    <ol>
                        <li>Enclosure (1) contains the Special Landing Force ALFA After Action Report for BEAVER CAGE/UNION.</li>
                        <li>Enclosures (2) through (4) amplify enclosure (1). Comments on appropriate portions of subordinate unit After Action Reports are contained in paragraph (10) OF ENCLOSURE (1).</li>
                        <li>This letter may be downgraded to unclassified upon removal of enclosures (1) through (4).</li>
                    </ol>

                    <p class="ion-text-right"><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/james-a-gallo-signature.png" alt="JAMES A. GALLO, JR. signature" /></p>

                    <p><span class="text-underline">COMBAT AFTER ACTION REPORT, BEAVER CAGE/UNION</span></p>

                    <p>Map Reference: VIETNAM, AMS Series L7014, Sheets <a href="https://www.vietnam.ttu.edu/reports/images.php?img=/maps/PDF/6740-3.pdf">6740 III</a> and <a href="https://www.vietnam.ttu.edu/reports/images.php?img=/maps/PDF/6740-4.pdf">IV</a>, <a href="https://www.vietnam.ttu.edu/reports/images.php?img=/maps/PDF/6640-1.pdf">6640 I</a>, <a href="https://www.vietnam.ttu.edu/reports/images.php?img=/maps/PDF/6640-2.pdf">II</a>, and <a href="https://www.vietnam.ttu.edu/reports/images.php?img=/maps/PDF/6640-3.pdf">III</a>.</p>

                    <ol>
                        <li>Operation BEAVER CAAGE was a unilateral amphibious operation utilizing waterborne and heleborne assault forces. It was conducted in accordance with NWP-22(A).</li>
                        <li>The operation was conducted in the TAM KY - QUE SON - THANG BHIN District, QUANG TIN Province, I CTZ, REPUBLIC OF VIETNAM. The operation commenced 28 April 1967 at 0700h with the landing of heliborne forces in LZ THRUSH (BT 198265), and LZ ORIOLE (BT 299379). Operations of SLF ALFA ashore were in conjunction with Operation UNION, already in progress at the time of the landing. The operation terminated at 131400H May 1967.</li>
                        <li><span class="text-underline">Task Organization</span><br /><br />
                        Special Landing Force&nbsp;&nbsp;&nbsp;Colonel J.A. GALLO Jr.<br />
                        &nbsp;&nbsp;BLT 1/3&nbsp;&nbsp;&nbsp;LtCol P.A. WICKWIRE<br />
                        &nbsp;&nbsp;HMM 263&nbsp;&nbsp;&nbsp;Lt.Col E.K. KIRBY<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;D<code>[e?]</code>t, VMO-6 (UH-1E)
                        </li>
                        <li><span class="text-underline">Intelligence</span>
                            <ol class="list-lower-latin">
                                <li><span class="text-underline">Terrain</span>
                                    <ol>
                                        <li><span class="text-underline">General</span>. The assigned force beachhead is within the boundaries id QUANG TIN Privince. The entire area is made up of coastal plains and some low hills in the southwest sector. The force beachhead covers a ten mile radius from DONG TRI (2) coord BT 2993<code>[...]</code>. The area extends from TRUNG PHUONG coord BT 223548 south to coord BT 403229. There is only one major landing beach (NIS Beach No. 8), which is 38 kilometers long and fronmts the entire objective area. To the west and southwest outside the force beachhead this terrain develops from low hills to mountain ranges.</li>
                                        <li><span class="text-underline">Relief</span>. The area is primarily a lowland coastal plain with reliefs that seldom exceed 20 meters except the low hills to the southwest. The coastal plains are sectioned in many areas by rice paddies bounded by dikes 2 to 5 feet high and 8 to 10 feet wide. The eastern edge of the plains consist of a belt of beach and sand dunes from 3 to 20 meters high. To the rear of the coastal plains the terrain changes to low hills to rugged inland mountains. Drainage in this area consists of three principal streams, numerous short streams, small irrigation canals and ditches. The rivers run mainly north and south and are 90 to 700 meters wide, the depth and current subject to tidal variations.</li>
                                        <li><span class="text-underline">Beach Study</span>. NIS Beach number eight is a slightly concave beach 39.7 kilometers long extending in a northwest-southeast direction (UTM BT 220565) to (BT 403220). The width varies 160 meters at low water and 39-90 meters at high water. Composition is soft white sand, firm when wet, and has an average gradient of 1:15. The offshore approach is partially obstructed by an island 14 miles off the central part of the beach and by islands, shoals, and rocks 5-10 miles off the northwest portion of the beach. The TROUNG CIANG river is parallel to the beach to within 900-7000 meters of the beach. Fording areas are available along the river.</li>
                                    </ol>
                                </li>
                                <li><span class="text-underline">Enemy Situation</span>
                                    <ol>
                                        <li><span class="text-underline">Composition</span><br />&nbsp;&nbsp;&nbsp;(a) <span class="text-underline">Ground</span>. Enemy ground units in the objective area were identified as 71st NVA Bn, 72nd and 74th LF Bn's and the K50, K51 and 74th LF Co's.</li>
                                    </ol>
                                </li>
                                <li><span class="text-underline">Order of Battle</span>
                                    <ol>
                                        <li>71st NVA Bn<br />
                                        Strength: Approximately 400<br />
                                        Locations: BT 1728</li>
                                        <li>72nd LF Bn<br />
                                        Strength: Approximately 300<br />
                                        Location: Bt 2220</li>
                                        <li>74th LF Co<br />
                                        Strength: Approximately 60<br />
                                        Location: Bt 1823</li>
                                        <li>K51 LF Co<br />
                                        Strength: Approximately 70<br />
                                        Location: Bt 2445</li>
                                        <li>K50 LF Co<br />
                                        Strength: Approximately 70<br />
                                        Location: Bt 2224</li>
                                    </ol>
                                </li>
                                <li> The above units are equipped with 82 mm mortaars, 60 mm mortars, 57 recoilless rifles, 12.7 AA/MG, automatic weapons and individual small arms.</li>
                                <li><span class="text-underline">Enemy Contact</span>
                                    <ol>
                                        <li>On D-day the waterborne forces made an unopposed landing over RED BEACH. The heloborne forces landed at LZ THRUSH and ORIOLE and received light small arms fire. From D+1 through D+6 only light contact was made and the SLF received light small arms fire while conducting S &amp; D operations. On D+7 elements of the SLF were attacked by an estimated reinforced VC platoon, contact was maintained throughout the night but broken at day-break. On D+8 contact becomae moderate to heavy and mortar fire was received at coord BT 041215. The enemy appeared to be defending certain areas in order to evacuate supplies and then break ccontact. From D+9 to D+12 only light contact was made, the majority of the time while elements of the SLF were being extracted from LZ's. On D+12 the SLF CP received 10 rounds of 82 mm mortars. From D+12 to the end of the operation the enemy activit;y consisted of sporadic sniper and harassing acions. No mines were employed by the enemy and few surprise firing devices were used.</li>
                                        <li>Enemy tactics included: sniping and harassing fires, night probes of positions in conjunction with mortar attaacks, firing from trenches in the nature of delaying action, night attacks in strenghts up to one reinforced platoon, and light to moderate fires when units were being extracted from LZ's. The SLF made maaximum use of artillery and mortar fire against the enemy as well as maximum use of CAS.
                                        </li>
                                        <li>Numerous helicopters received hits by automatic weapons and small arms fire and two were forced down by enemy fire.</li>
                                        <li>During BEAVER CAGE there were 181 VC's killed (Confirmed) and 136 KIA (probables) and 66 detainees were transported to HILL #29 (BT 2232).</li>
                                    </ol>
                                </li>
                                <li><span class="text-underline">Weather</span>
                                Weather was characterized by partly cloudy skies. Ceiling generally unlimited and averaging 1500 to 2000 feet, occasionally lowering to less than 1000 feet during early morning hours. Visbility generally was unrestricted throughout operation period, occasionally lowering to 3 - 5 miles in ground fogs and haze during early morning hours, and becoming unrestricted by 0800 local. Winds light and variable throughout entire period with sea breeze developing around 1000 local and reaching it's maximum of 15 knots around 1400 local. Precipitation averaging less that 0.1 inch throughout entire operation. Seas light and breakers averaging less that 3 feet throughout entire period.
                                </li>
                            </ol>
                        </li>
                        <li><span class="text-underline">Mission</span>. As direceted by COMSEVENTHFLT message 262324Z April 1967 (Initiating Directive), the mission of SLF ALFA was to conduct a search and destroy amphibious operation against VC/NVA in the Amphibious Objective Area south of HOI AN in QUE SON - THANG BINH Districts, southern QUANG TIN Province and/or other operations as agreed upon with III MAF or his designated representatives.
                        </li>
                        <li><span class="text-underline">Concept of Operations</span>. Operation BEAVER CAGE was a unilateral amphibious operation conducted by ARG/SLF ALFA. The o~ra;tion was a planned ten day search and destroy operation, utilising both waterborne and heloborne assault landings. Initially, the inherent mobility of SLF ALFA was to be utilized to the maximum extent possible to ensure a rapid build-up of combat power ashore, thereby gaining surprise and shock action. Subsequently aggressive search and destroy operations were to be conducted within the designated TAOR and the, additional zones of action within and outside of the AO<code>[A?]</code>. Mutual support and maximum utilisation of supporting fires was an essential part of this concept. Fire support was to be provided by the organic artillery of the BLT in conjunction with "in-country" forces. Naval gunfire consisting of the USS ST PAUL (CA 73), and the usa FOREST ROYAL (DD 872) was available, but utilized only by "D" Company, 1/3 due to the depth inland of operations by other units. SLF ALFA was prepared to chop to III MAF or his designated subordinate commander for employment in conjunction with operation UNION. The concept of operations provided for the following L-hour was scheduled at first light; beach and landing zones were not prepared by fire, however, air and NG<code>[F?]</code> were "on call" in the event fires were necessary.
                        </li>
                        <li><span class="text-underline">Execution</span>
                            <ol class="list-lower-latin">
                                <li>Operation BEAVER CAGE was executed in accordance with CTG 79.4 OPLAN 120A-67, supplemented by a Frag Order published for operations in the TAM KY - QUE SON - THANG BINH District.</li>
                                <li>D-day was established as 28 April 1967 with L-hour at 0700 and H-hour at 0800.</li>
                                <li>The SLF landed its heloborne and waterborne assault forces on schedule and by nightfall on D-day the BLT was established ashore, and prepared to conduct, at first light, search and destroy missions as assigned. (ENclosures (2), (3), and (4) outline detailed execution of the operation.</li>
                            </ol>
                        </li>
                        <li><span class="text-underline">Results</span>. Enclosures (2) and (3).</li>
                        <li><span class="text-underline">Commanders Analysis</span>. This analysis is limited to matters at the SLF level. BLT and Squadron Commanders'analyses are contained in their respective reports, enclosures (2) and (3).
                        <ol class="list-lower-latin">
                                <li><span class="text-underline">Planning</span>. The planning phase for BEAVER CAGE commenced on 25 April 67 at III MAF Headquarters  awhen TG 79.4 and 76.4 representatives were briefed by III MAF G-3 spokesmen. This was followed by a visit to the prospective area of operations by CLTG 79.4 and a detailed briefing of projected operations/operations in progress at 1st Marine Divisionm FMF.</li>
                                <li><span class="text-underline">Intelligence</span>.
                                Prior to BEAVER CAGE, arrrangements were made for maps, area <code>[...]</code>, daily intelligence summaries and information in handling civilian detainees. Area study and OOB were provided by III MAF and 1st Mar div. ITT personnel were provided by 1st Mar Div.
                                </li>
                                <li><span class="text-underline">Command Relashionships</span>
                                Operation BEAVER CAGE was a unilateral amphibious operation <code>[...]</code> relationships in accordance with NWP-ss(A). At 301600Z Ap<code>[...]</code>. CTG 76.4 passed OPCON of the SLF to CG, III MAF (CTG 76.4 msg 300625, Apr67) CG III MAF passed OPCON to CG 1st Mar Div (CG III MAF msg 010856Z May67).[...]830Z May 1967 CG 1st Mar Div passed OPCON of the BLT to CO, <code>[...] [...ed]</code> under OPCON of the <code>[...]</code> throughout the operation,OPCON of <code>[...]</code> to SLF ALFA at 1100<code>[...]</code> 121000Z May 1967, CG 1st Mar Div passed OPCON to <code>[...]</code> III MAF (CG 1st Mar Div msg 121019Z May 67). At 13<code>[...]</code>Z May67, Operation BEAVER CAGE was terminated (CTG 76.4 msg 121524Z May67).
                                </li>
                                <li><span class="text-underline">Supporting Arms</span>
                                    <ol>
                                        <li>Naval gunfire support for BEAVER CAGE was provided by the USS ST. PAUL (CA 73), USS HENDERSON (DD 785), USS FOREST ROYAL (DD 872), and was available during the periods 281615H to 290647H April and 020400H to 021400H May. Due to the distance of the helicopter lift inland and the proximity of previously emplaced artillery of the 2nd Bn, 11th Mar, NGF support was placed in direct support of Company "D", the company landed across RED BEACH.</li>
                                        <li>Fixed wing close air support was provided by 1st Marine Aircraft Wing and was considered timely and effective. In addition two UH-1E's armed were provided to TG 79.4 and operated from the USS OKINAWA (LPH 3). The performance of these aircraft in a helo escort, suppressive fire and TAC(A) role was both invaluable and outstanding.</li>
                                        <li>Artillery was organized into a battery groupment under the Commanding Officer Btry A, 12th Marines. Due to the deep insertion inland and the lack of trafficable terrain, movement of artillery pieces and all logistical support was accomplished by helicopter. Displacement of the 105mm howitzers was accomplished by CH-53 external lifts with ammunition for the displacement accomplished by internal CH-53 lifts. The burden of ammunition resupply then fell to the UH-34 due to the lack of cargo helicopters. ~he long distance of the resupply lift created extreme demands on the UH-34 pointing up the requirement for CH-46 aircraft augmentation to provide a balanced logistic capability for the heliborne force.</li>
                                        <li>Fire support coordination was initially accomplished for the amphibious objective area (AOA) east of National Highway 1 by SACC aboard the USS OKINAWA with the area west of National Highway 1 being coordinated by the 5th Marines FSCC located within the AOA. While such a situation may be considered somewhat unorthodox, under the situation prevailing, where the SLF was making an entry into an established operating area this arrangement provided the most acceptable means of coordination available to both parties. After the SLF chopped to III MAF and thence to 1st Mar Div the senior FSCC in the area was the FSCC of the 5th Marines. During this phase the incident described in TAB A occured.</li>
                                    </ol>
                                </li>
                                <li><span class="text-underline">Logistics</span>
                                    <ol>
                                        <li>Prior to the commencement of Operation BEAVER CAGE liaison was established with the 1st Marine Division to coordinate logistic support from in-country sources. Force Logistic Support Group BRAVO had previously established a logistic support area at TAM KY in support of Operation UNION. This LSA was designated as the primary resupply point for the SLF during BEAVER CAGE. All classes of supplies were available at this LSA, including a bulk fuel dispensing system used for the refueling of helicopters. Additional logistic support was provided from supplies and equipment embarked aboard the ARG shipping.</li>
                                        <li>Initially, distribution of resupply was made directly to the using unit from the LSA at TAM KY. As the xone of action (ZOA) moved further from the LSA and as the tactical situation changed, <code>[...]</code> were delivered directly to the BLT command post and local unit ressuply was effected by helicopters as feasible. A detachment from the Shore Party Platoon was sent to the <code>[...]</code> on D-day to receive resupply requests from the BLT and to coordinate the staging of supplies. This Shore Party detachment was provided communications with the BLT <code>[...]</code> as well as the T<code>[...]</code>L<code>[...]</code> groups aboard all ships of the ARG so as to ensure complete coordination of the logistic support effort. In so much as the ZOA was located well inland, and since the area between the ZOA and LSA was not secure enough to allow for overland transport, surface resupply was not feasible. This placed the entire burden for resupply on the UE-34 helicopters of the SLF, as CH-46 helicopters were not made available for logistic purposes, even though reequested. Extremely heavy resupply leads were experienced due to the requirement to helilift ammunition to the 105mm artillery batttery and the 107mm howtar battery. Additionaly, a considerable amount of 107mm mortar ammunition carried ashore by the howtar battery was found to be defective because of moist incr<code>[...]</code>nt charges and rusty f<code>[uses?]</code> and had to be exchanged for fresh ammunition from the LSA. Daily resupply lifts normally totalled from 30,000 to 50,000 pounds. Considering the lift capability of the UH-34 helicopter (approximately 1,000 pounds, and the distance from the LSA to the ZOA, (from 13,000 to 20,000 meters) the SLF helicopters of HMM 263 were heavily taxed for this purpose. Had a detachment of CH-46 helicopters been made available in support of the logistic effort, the situation would have been greatly eased.</li>
                                        <li>Emergency resupply was effected on several occasions from the LPH using OPRES/LFORM supplies embarked. Additionally, water, in 5 gallon skins, was provided from the LPH during the initial period ashore when local water was not available.</li>
                                        <li>Through prior liason with the 5th Marine Regiment on Operation UNION,  evacuation of SLF casualties was integrated with the system already in effect. In so much as the LPH was not provided with a surgical team and a hospital ship was not initially available, all serious casualties were evacuated to the 1st Medical Battalion or the NSA Hospital in DA NANG. When the hospital ship, USS SANCTUARY, arrived in the AOA in D+2, all serious casualties were evacuated directly there. Minor casualties, such as heat exhaustion and similar cases, were evacuated to the LPH. Military KIA's were evacuated to the LPH for further evacuation to 1st Medical Battalion, Graves Registration Section, in DA NANG. Seriously injured civilians were evacuated to RVN hospitals in TAM KY and/or DA NANG.</li>
                                        <li>All detainees, VC suspects, and confirmed POW's weree evaacuaated to the 5th Marines command post for interrogation and further disposition. ITT personnel were available to the BLT and, in some insstances, detainees, suspects and POW's were initially interrrogated at that level before further evacuation to the 5th Marines' compound.</li>
                                    </ol>
                                </li>
                                <li><span class="text-underline">Cusualty Reporting</span>. Casualty reporting was conducted in accordance with existing regulations. The LPH was designated as the CECS, howaever, due to the absense of a surgical team on the LPH, it was necessary to evacuate the majority of the battlefield casualties directly to the USS SANCTUARY. Initial KIA's were also evacuated to the SANCTUARY, however, early in the operation it was obvious this would pose a problem due to the lack of facilities, refridgeration available and the additional burden of masss WIA's being received. The problem of evacuating the KIA's to the SANCTUARY for processing and forwarding to the 1st Medical Battalion Graves Registration Section was made more serious in that personnel of each unit available to make personal identification were located on the LPH and the BLT and HMM adminidtrative centers holding the service records and health records were located on the LPH. Early in the operation a decision was reached to evacuate the KIA's directly to the LPH for processing and preparation, both medically and administratively, prior to forwarding of the remains to 1st Medical Battalion. Although the majority of the WIA's were evacuated to the SANCTUARY the CRCC remained on the LPH. It was necessary to staion medical liaison personnel at the 1st Hospital Company, CHU LA; Naval Support Activity Hospital, DA NANG, 1st Medical Battalion Hospital, DA NANG, and the USS SANCTUARY at sea to receive, coordinate and report on the casualties received in those facilities. This system proved to be most effective in controlling the floe in all directions of the casualties. Extensive use of naval communications made it possible to coordinate all the many facets of casualty reporting in order to ensure timely and accurate reporting both to higher Headquarters and between medical facilities. The presence of a surgical team on the LPH would almost totally eliminate any need for the procedure employed during this operation. It should be stressed at all echelons that personnel going into battle must wear their ID tags. In the case of 2 KIA's lack of ready identification delayed recognition and subsewuent reporting. This problem was also true of approximately 30 percent of the WIA's evacuated. A problem in communications between the battalion in the field and the battalion admin rear aboard the LPH was encountered and made it impossible to receive information regarding WIANE, therefore, reporting was accomplished on receipt of casualty reporting <code>[coms?]</code> from the field.
                                </li>
                                <li><span class="text-underline">Communications</span>
                                    <ol>
                                        <li>The USS OKINAWA had insufficient FM radio communications during the conduct of the entire operation. The ship was scheduled to have eight radio sets, AN/VRC-46, installed at US Naval Base SUBIC R.P., however, the installation was not completed before the commencement of Operation BEAVER CAGE. Only two AN/VRC-46 radio equipments were available for use by BLT 1/3 but this equipment had been proven unreliable during Exercise BEACH BARON I. This necessitated the use of deck mounted AN/MRC-110 to enable the BLT to establish the TAC-LOG and BLT tactical nets. Further, communication requirements to 5th Marines and 1st Mar Div necessitated use of deck mounted AN/PRC-25. These conditions will continue to exist so long as the USS OKINAWA is unable to complete installation of all the programed AN/VRC-46's.</li>
                                        <li>Mutual interferance and cross talk existed on virtually all circuits. This can be held to a minimum by close liaison with in-country units to determine if assigned frequencies will cause mutual interference.</li>
                                        <li>Extracts from the SLF Communication Operating Instructions were compromised by BLT 1/3 on D+4. As a result, interference and jamming was experienced on the BLT tactical net (both primary and secondary frequencies). This was reported to 1st Mar Div and two new frequencies were assigned. Closer control of the material by holders can prevent compromise during future operations.</li>
                                        <li>Should it be necessary far the SLF Commander to move his CP ashore during future opcratiors, personnel augmentation of at least three radio operators should bo provided by 9th MAB. The present T/O for the Communications section is not adaptable to manning a forward and rear CP. Further, at least two additional AN/PRC-25's will be required to provide communicntions to the forward command post and various liaison officers.</li>
                                    </ol>
                                </li>
                            </ol>

                        </li>
                        <li>The following comments are included on subordinate commanders's combat after action reports:
                            <ol class="list-lower-latin">
                                <li><span class="text-underline">HMM 263 After Action Report</span>:
                                    <ol>
                                        <li>Paragraph 2.a of enclosure (2). Concur that high utilization combined with excessive battle damage reduced helicopter availability. Thenature of the operation; i.e., supporting forces deployed at a distance (30-35 miles one way) inland from the LPH and lifting heavy supplies over a long distance with only UH-34 aircraft available combined to cause the problem. The solution lies in proper augmentation of the force; i.e., CH-46 helicopters as required for each operation.</li>
                                        <li>Paragraph 2.b of enclosure (2). The problem of ground unit and helicopters communications is a common and thorny one throughout South Vietnam. One of the principal problems involved stems from the incompatibility of radios installed in helicopters with those employed by ground units. Current UH-34 and CH-46 FM radio sets cannot tune to a frequency above tenths; i.e., (34.5), whereas ground units issued the AN/PRC-25 are issued frequencies in the bundredths; i.e., (34.55). This in itself renders communications marginal. Companies operating on the ground are often slow to attempt communications with helicopters, due in part to the volume of helicopter operations which confuses personnel on the ground as to their contact rospnnsibilities. Several solutions have been tried, none with complete success. An LZ frequency used throughout a given area is normally overcrowded. Helicopters have difficulty dialing oompany frequencies for the above stated reasons. Ground radio operators are not always at liberty to change to helicopter frequencies upon the approach of aircraft. Attachment of an HST to each rifle company with necessary communication equipment on a continuing basis, and use of an LZ common frequency appear to present the most feasible solution. Attempts to improve these procedures continue. Sufficient lights are now possessed by each rifle company to properly mark LZ's at night.</li>
                                        <li>Paragraph 2.c of enclosure (2). Concur regarding desireability of heavy lift capaibility when logistic support is to be primarily by helicopters. The lack of coordination between TAC-LOG and LSA resulted primarily because the BLT continued to request supplies direct from the LSA throughout the day without TAC-LOG being informed. Inadequate communications during first several days of the operation contributed to this confusion. After about the first four days this problem eased somewhat.</li>
                                        <li>Paragraph 2.d of enclosure (2). Concur. Until the BLT made a determined effort to resupply during noon-time (i.e., stop moving and select suitable LZ) the initial resupply effort was difficUlt to accomplish prior to nightfall.</li>
                                    </ol>
                                </li>
                                <li><span class="text-underline">BLT 1/3 After Action Report</span>:
                                    <ol>
                                        <li>Paragraph 9.a, of enclosure (3). Do not concur. The concept of BLT employment by surface and air is basic with an eventual linkup. In this instance when a linkup was determined not to be feasible the surface element vas helolifted to join the main body and the beach was cleared. Briefings from higher headquarters rather than not being adequate were contradictory; i.e., the original order was for a "thorough" search and destroy operation but subsequent orders held to a rigid time schedule. The two are not compatrible.</li>
                                        <li>Earagraph 9.b of enclosure (3). The Frag Order issued for Operation BEAVER CAGE by this Headquarters did not provide instructions for the conduct of either civic action or psychological operations because it was purely a search and destroy mission. Verbal instructions were issued on the metbod of collecting captured rice and were carried out.</li>
                                        <li>Paragraph 10.1, - 10.5 of enclosure (3). Concur.</li>
                                        <li>Paragraph 10.6 of enclosure (3). Concur that the SLF must be augmented on occasion with additional communications personnel in order to meet requirements when forces are deployed at a distance inland and heavy liaison requirements are levied, on both the BLT and HMM. Such augmentation is not required during more conventional SLF deployments.</li>
                                        <li>Paragraph 10.7 of enclosure (3). Generally concur with all statements. Inexperience and unforseen tactical situations caused minor resupply problems - but considering the logistical support rendered, resupply was more than adequate. However, as stated, helicopter resupply by UH.3.4 caused eztreme utilization of the helicopters.</li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                    </ol>

                    <p class="text-center red" style={{ borderTop: `1px solid #CCC`, paddingTop: `40px` }}><strong>DECLASSIFIED</strong></p>

                    <p class="ion-text-center">
                        UNITED STATES MARINE CORPS<br />
                        HEADQUARTERS, FLEET MARINE FORCE, PACIFIC<br />
                        FPO, San Francisco 96610</p>

                    <p class="ion-text-right">
                        IN REPLY REFER TO:<br />
                        28/JKM/dlp<br />
                        [5?]750<br />
                        3[?] AUG 1967</p>

                    <p>From: Commanding General, Fleet Marine Force, Pacific<br />
                    To: Commanding General, 9th Marine Amphibious Brigade, Fleet<br />
                  Marine Force, Pacific, FPO San Francisco, Calif. 96602
                    </p>

                    <p>Subj: Special Landing Force Alfa, Command Chronology for the periods 14-3     May and 1-30 June, submission of</p>

                    <p>Ref: (a) CTG 79.4 ltr 3/PJM/jtl, Ser: 00<code>[...]</code>617 dtd 10Jun67<br />
                    (b) CTG 79.4 ltr 3/PJM/jtl, Ser: 00214A-67 dtd 2Aug67
                    </p>

                    <p>
                        1. Information copies of references (a) and (b) have been received by this headquarters and are being held aeaiting the original with your endorsements.
                        2. Please expedite forwarding of references (a) and (b).
                    </p>

                    <p>Copy to: CMG(AO3D)</p>

                    <p class="ion-text-right"><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/c-f-widdecke-signature.png" alt="C.F. WIDDECKE, Chief of Staff signature" /></p>

                </div>
            </ion-content>

        ];
    }
}
