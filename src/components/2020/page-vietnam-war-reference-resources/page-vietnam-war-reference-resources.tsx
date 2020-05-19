import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-vietnam-war-reference-resources',
})
export class PageVietnamWarReferenceResources {

    header: any;

    webresources = [
        {
            id: "https://onethreemarines.com/",
            title: "onethreemarines.com",
            teaser: "1st Battalion / 3rd Marines Gathering Space providing a variety of resources (history, photos, company rosters, etc.)",
            thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/one-three-marines-com_thumb.jpg",
            dateListed: "2020/04/21",
        },
        {
            id: "http://dlagrza.com/1stBn3rdMar.htm",
            title: "dlagrza.com - 1st Battalion, 3rd Marines (Vietnam 21Dec66 to 11Dec67)",
            teaser: "Historical info and photos from the personal website of Oscar De La Garza, Jr. USMC (deceased, Oct 17, 2010, pancreatic cancer).",
            thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/dlagrza-com_thumb.jpg",
            dateListed: "2020/05/11",
        },
        {
            id: "http://326marinesinvietnam.com/KevinsLibrary.aspx",
            title: "List of Viet Nam Books",
            teaser: "A searchable database of about 400 books on the Vietnam War published on the 326marinesinvietnam.com website.",
            thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/list-of-nam-books_thumb.jpg",
            dateListed: "2020/05/12",
        },
        {
            id: "https://www.archives.gov/research/pentagon-papers",
            title: "Pentagon Papers",
            teaser: "Available from the National Archives and officially titled &quot;Report of the Office of the Secretary of Defense Vietnam Task Force,&quot; this is the complete report commissioned by Secretary of Defense Robert McNamara in 1967 - a comprehensive and formerly top-secret study of the history of United States involvement in Vietnam from World War II to the present.",
            thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/pentagon-papers_thumb.jpg",
            dateListed: "2020/05/12",
        },
        {
            id: "http://www.recordsofwar.com/vietnam/usmc/1stBn3rdMarines.htm",
            title: "Records of War - 1st Battalion, 3rd Marines",
            teaser: "A list of declassified records pertaining to the 1st Battalion, 3rd Marines (primary source of the listed documents is the Texas Tech University Virtual Vietnam Archive). ",
            thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/records-of-war_thumb.jpg",
            dateListed: "2020/05/12",
        },
        {
            id: "http://www.recordsofwar.com/vietnam/usmc/TaskGroupRpts.htm",
            title: "Records of War - Task Group Reports",
            teaser: "A list of declassified records pertaining to various Task Groups including 79.4 Special Landing Force &quot;ALFA.&quot; (primary source of the listed documents is the Texas Tech University Virtual Vietnam Archive). ",
            thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/records-of-war_thumb.jpg",
            dateListed: "2020/05/15",
        },
        {
            id: "https://www.cah.utexas.edu/news/materials_in_action/kb_the_vietnam_war.php",
            title: "Vietnam War Resources at the Briscoe Center",
            teaser: "Published by the University of Texas at Austin, this archive contains News Media History, Photojournalism, Congressional and Political Collections, and Oral Histories.",
            thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/briscoe-center_thumb.jpg",
            dateListed: "2020/04/21",
        },
        {
            id: "https://www.vietnam.ttu.edu/virtualarchive/",
            title: "The Virtual Vietnam Archive - Vietnam Center and Archive",
            teaser: "Published by Texas Tech University, this archive contains 7 million pages of documents, photographs, slides, negatives, oral histories, artifacts, moving images, sound recordings, and maps.",
            thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/texas-tech_thumb.jpg",
            dateListed: "2020/04/21",
        }
    ]

    books = [
        {
            id: "http://13months.net/",
            title: "13 Months",
            teaser: "Memoir of Charlie Co., 1/3 Marine, William (Bill) Taylor; soon to be published",
            thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/books/book_13-months_thumb.jpg",
            hiddenImage: ""
        },
        {
            id: "https://www.amazon.com/gp/product/081735445X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=081735445X&linkCode=as2&tag=burtecgrollc-20&linkId=4bc9680db4f725854d5a796407d6a520",
            title: "Con Thien: The Hill of Angels",
            teaser: "by James P. Coan (2004)",
            thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/books/book_con-thien_thumb.jpg",
            hiddenImage: "//ir-na.amazon-adsystem.com/e/ir?t=burtecgrollc-20&l=am2&o=1&a=081735445X"
        },
        {
            id: "https://www.amazon.com/gp/product/0891418490/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0891418490&linkCode=as2&tag=burtecgrollc-20&linkId=00b2ec1097e1eecd18726c994696ea51",
            title: "The Hill Fights: The First Battle of Khe Sanh",
            teaser: "by Edward F. Murphy (2003).",
            thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/books/book_first-battle-khe-sanh_thumb.jpg",
            hiddenImage: "//ir-na.amazon-adsystem.com/e/ir?t=burtecgrollc-20&l=am2&o=1&a=0891418490"
        },
        {
            id: "https://www.amazon.com/gp/product/0700621105/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0700621105&linkCode=as2&tag=burtecgrollc-20&linkId=059eebc0363906fa87a97587b7e7bff9",
            title: "The Morenci Marines: A Tale of Small Town America and the Vietnam War",
            teaser: "by Kyle Longley (2013).",
            thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/books/book_morenci-marines_thumb.jpg",
            hiddenImage: "//ir-na.amazon-adsystem.com/e/ir?t=burtecgrollc-20&l=am2&o=1&a=0700621105"
        },
        {
            id: "https://www.amazon.com/gp/product/044021310X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=044021310X&linkCode=as2&tag=burtecgrollc-20&linkId=9a889f403486e065b0e20f230a7769db",
            title: "Operation BUFFALO: USMC Fight for the DMZ",
            teaser: "by Keith William Nolan (1991).",
            thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/books/book_operation-buffalo_thumb.jpg",
            hiddenImage: "//ir-na.amazon-adsystem.com/e/ir?t=burtecgrollc-20&l=am2&o=1&a=044021310X"
        },
        {
            id: "https://www.amazon.com/gp/product/0760338019/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0760338019&linkCode=as2&tag=burtecgrollc-20&linkId=79b00920641b37b1781e5c7b6e24493f",
            title: "Road of 10,000 Pains: The Destruction of the 2nd NVA Division by the U.S. Marines, 1967",
            teaser: "by Otto J. Lehrack (2010).",
            thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/books/book_road-of-10000-pains_thumb.jpg",
            hiddenImage: "//ir-na.amazon-adsystem.com/e/ir?t=burtecgrollc-20&l=am2&o=1&a=0760338019"
        },
        {
            id: "https://www.amazon.com/gp/product/1555716253/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1555716253&linkCode=as2&tag=burtecgrollc-20&linkId=3e52a0e0984267221658d2e2cfa741af",
            title: "Where We Were in Vietnam: A Comprehensive Guide to the Firebases and Militar",
            teaser: "by Michael P. Kelley (2002)",
            thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/books/book_where-we-were-in-vietnam_thumb.jpg",
            hiddenImage: "//ir-na.amazon-adsystem.com/e/ir?t=burtecgrollc-20&l=am2&o=1&a=1555716253"
        }
    ]

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
                        <ion-back-button defaultHref="/cage" />
                    </ion-buttons>
                    <ion-title>The Cage - Vietnam</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content class="ion-padding">

                <ion-grid>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
                            <h1>{this.header.title}</h1>
                            <app-entry-meta header={this.header} />

                            <p>As part of my research for a book I've been writing (working title: <a href="/cage">The Cage</a>), I've been collecting a variety of reference resources about the Vietnam War and especially those pertaining to the history of the 1st Battalion / 3rd Marines in the war. I've decided to post what I've found here in case these resources might also be useful to others. This list is by no means exhaustive, but I'll continue to expand it as I discover new things. If you would like to suggest something for the list, please <a href="/contact">contact me</a>.</p>

                            <h2>Websites</h2>

                            <ion-list>
                                {this.webresources.map((item) =>
                                    <ion-item href={item.id} lines="none">
                                        <ion-thumbnail slot="start">
                                            <ion-img src={item.thumbnail} />
                                        </ion-thumbnail>
                                        <ion-label text-wrap>
                                            {item.title}
                                            <p innerHTML={item.teaser}></p>
                                        </ion-label>
                                    </ion-item>
                                )}
                            </ion-list>

                            <h2>Books</h2>

                            <p><em>Note: For your convenience, books are linked for purchase from Amazon. As an Amazon Associate I earn from qualifying purchases.</em></p>

                            <ion-list>
                                {this.books.map((item) =>
                                    <ion-item href={item.id} lines="none">
                                        <ion-thumbnail slot="start">
                                            <ion-img src={item.thumbnail} />
                                        </ion-thumbnail>
                                        <ion-label text-wrap>
                                            {item.title}<img src={item.hiddenImage} width="1" height="1" alt="" style={{ border: `none !important;`, margin: `0px !important;` }} />
                                            <p innerHTML={item.teaser}></p>
                                        </ion-label>
                                    </ion-item>
                                )}
                            </ion-list>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                            
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}