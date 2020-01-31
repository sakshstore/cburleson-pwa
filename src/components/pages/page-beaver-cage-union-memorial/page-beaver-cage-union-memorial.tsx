import { Component, Element, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

@Component({
    tag: 'page-beaver-cage-union-memorial',
})
export class PageBeaverCageUnionMemorial {

    @Element() el: HTMLElement;

    title = 'Operation Beaver Cage/Union - Memorial Program';

    componentWillLoad() {
        if (isLocal()) {
            console.log('> PageBeaverCageUnionMemorial.componentWillLoad');
        }
        document.title = this.title + ' | ' + SITENAME;
        document.getElementById("meta-desc").setAttribute("content", "A program (booklet) for memorial service held aboard the USS Okinawa on May 16, 1967.");
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

            <ion-content>
                <ion-grid fixed>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="12" size-lg="12" size-xl="12">

                            <h1>Beaver Cage/Union memorial service program</h1>

                            <p>
                                On May 16, 1967, after Operation(s) Beaver Cage/Union, a memorial service was held aboard the USS Okinawa (LPH-3) to
                                honor those who gave their lives. Following is a digitized copy of the actual program that was
                                printed and used for the service. The program was donated by Ray &quot;Machine Gun&quot; Kelley, a Delta Co. 1/3 Marine and
                                recipient of the Silver Star.
                            </p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/beaver-cage-union-memorial-1.jpg" alt="" /></p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/beaver-cage-union-memorial-2.jpg" alt="" /></p>

                            <p>Dr. Don Teal, the Chief Medical Officer on the USS Okinawa, provided the following picture of the memorial service, which was 
                                taken from the bridge. Aligned across the deck are helmets of those who gave their lives.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/beaver-cage-union-memorial-service-photo.jpg" alt="" /></p>

                            <p>Following is a textual reproduction of the memorial program shown above for the purposes of aiding digital research.</p>

                            <div style={{ borderTop: `2px solid #CCC` }}>
                                <h2 class="aligncenter">MEMORIAL SERVICE</h2>
                                <p class="aligncenter">16 MAY 1967</p>
                                <p class="aligncenter">ABOARD USS OKINAWA (LPH-3)</p>
                                <p class="aligncenter">ORDER OF SERV ICE</p>
                                <table class="table table-bordered">
                                    <tr>
                                        <td>OLD TESTAMENT READING</td>
                                        <td>Psalm 27</td>
                                    </tr>
                                    <tr>
                                        <td>EULOGY</td>
                                        <td>Chaplain Poul Uhles, USN</td>
                                    </tr>
                                    <tr>
                                        <td>NEW TESTAMEN T READING</td>
                                        <td>John, Chapter 14</td>
                                    </tr>
                                    <tr>
                                        <td>PRAYERS</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>THE BLESSING</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>FIRING SQ.JAD: THREE VOLLEYS</td>
                                        <td></td>
                                    </tr>
                                </table>
                                <p class="aligncenter"><strong>IN MEMORIAM</strong></p>
                                <ion-grid>
                                    <ion-row>
                                        <ion-col size-xs="12" size-sm="12" size-md="6" size-lg="6" size-xl="6">
                                            <p class="aligncenter">(BLT 1/3)</p>
                                            <ul>
                                                <li>2nd LT Thomas W. Mallon</li>
                                                <li>SSgt Elpidio A. Arquero</li>
                                                <li>Sgt Milton L. Hall</li>
                                                <li>Sgt Donnie D. Jacobs</li>
                                                <li>Sgt Reinaldo A. Castro</li>
                                                <li>L/Cpl Eugene Murry</li>
                                                <li>L/Cpl Eugene D. Spicer</li>
                                                <li>L/Cpl Troy M. Carnline</li>
                                                <li>L/Cpl Melvin L. Allen</li>
                                                <li>L/Cpl Jose M. Gomez</li>
                                                <li>L/Cpl Mchoel M. Gukich</li>
                                                <li>L/Cpl James E Lakey</li>
                                                <li>L/Cpl William M Shaw, JR.</li>
                                                <li>L/Cpl Harold T. Gillis</li>
                                                <li>L/Cpl Delaney D. Tolbert</li>
                                                <li>L/ Cpl David M. Hart</li>
                                                <li>L/Cpl James M. Bishop</li>
                                                <li>L/Cpl Blenn C. Dyer</li>
                                                <li>L/Cpl Gene Vaughn</li>
                                                <li>L/Cpl Ronald K. Pennington</li>
                                                <li>Cpl Luciano P. Plesokov</li>
                                                <li>Cpl John W. Urick</li>
                                                <li>Cpl Frederick A. Mcmahon</li>
                                                <li>Cp I Martin Cavazos</li>
                                                <li>Cpl Don W. Minton </li>
                                                <li>Cpl Henry L. Turn</li>
                                                <li>Cpl Thomas Sonders </li>
                                                <li>Cpl Alfred L. Brown </li>
                                                <li>Cpl John M. Reid </li>
                                                <li>Cpl Sterling S. Woods </li>
                                                <li>PFC Phillip D. Munday</li>
                                                <li>PFC Clarence J. Simmons</li>
                                                <li>PFC Robert J. Rose </li>
                                                <li>PFC David Verbilla </li>
                                                <li>PFC Joseph R. Larose</li>
                                                <li>PFC Mounty D. Button</li>
                                                <li>PFC Tommy E. Dickerson</li>
                                                <li>PFC John E. Sweesy </li>
                                                <li>PFC Donald W. Falwell</li>
                                                <li>PFC Rickey M. Gilbertson</li>
                                                <li>PFC Dennis J. Mannion</li>
                                                <li>PFC Don R. Hollingsworth</li>
                                                <li>PFC David A. Hickman</li>
                                                <li>PFC Harry L. Hissong</li>
                                            </ul>
                                        </ion-col>
                                        <ion-col size-xs="12" size-sm="12" size-md="6" size-lg="6" size-xl="6">
                                            <p class="aligncenter">(BLT 1/3)</p>
                                            <ul>
                                                <li>PFC David L. Rowell</li>
                                                <li>PFC Albert J. Darling III</li>
                                                <li>PFC Donald A. Pittenger</li>
                                                <li>PFC Allan F. Berweger</li>
                                                <li>PFC Frank X. Cuzzo</li>
                                                <li>PFC Jomes R. Cooper</li>
                                                <li>PFC Thomas L. Foy</li>
                                                <li>PFC Brian C. Hewitt</li>
                                                <li>PFC Randall R. Grueber</li>
                                                <li>PFC Kenneth W. Mcgee</li>
                                                <li>PFC James C. Riley</li>
                                                <li>PFC Russell P. Miller</li>
                                                <li>PFC James A. Benton</li>
                                                <li>PFC Samuel W. Osborne JR.</li>
                                            </ul>
                                            <p class="aligncenter">(HMM-263)</p>
                                            <ul>
                                                <li>Capt Jefferson J. Chesnutt</li>
                                                <li>1stLT Jon D. Baker</li>
                                                <li>L/Cpl Richard H. Dallas</li>
                                                <li>Cpl Phillip R. Vanasse</li>
                                            </ul>
                                            <p class="aligncenter">(NAVY)</p>
                                            <ul>
                                                <li>HM3 Elwood C. Sovey</li>
                                                <li>JR. HN Jomes I. Bolch</li>
                                                <li>HN Steven D. Chambers</li>
                                            </ul>
                                        </ion-col>
                                    </ion-row>
                                </ion-grid>




                            </div>


                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-content>

        ];
    }
}
