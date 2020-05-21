import { Component, Element, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
  tag: 'page-sea-tiger-newspapers',
})
export class PageSeaTigerNewspapers {

  @Element() el: HTMLElement;

  header: any;

  items = [
    {
      id: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1966-10-21_sea-tiger_vol2-no39.pdf",
      title: "Sea Tiger, Vol 2, No. 39",
      teaser: "Gen. Davis Studies Troops in Vietnam",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1966-10-21_sea-tiger_thumb.jpg",
      datePublished: "1966/10/21"
    },
    {
      id: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1966-11-30_sea-tiger_vol2-no43.pdf",
      title: "Sea Tiger, Vol II, No. 43",
      teaser: "'Prarie' frees 1,000 villagers from two years of oppression",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1966-11-30_sea-tiger_thumb.jpg",
      datePublished: "1966/11/30"
    },
    {
      id: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1966-12-21_sea-tiger_vol2-no45.pdf",
      title: "Sea Tiger, Vol II, No. 45",
      teaser: "Christmas in Vietnam and a Prayer for Peace",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1966-12-21_sea-tiger_thumb.jpg",
      datePublished: "1966/12/21"
    },
    {
      id: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1967-05-12_sea-tiger_vol3-no19.pdf",
      title: "Sea Tiger, Vol. III, No. 19",
      teaser: "Aggressive Marine Reaction Prevents NVA Take-Over",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1967-05-12_sea-tiger_thumb.jpg",
      datePublished: "1967/05/12"
    },
    {
      id: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1967-08-11_sea-tiger_vol3-no32.pdf",
      title: "Sea Tiger, Vol III, No. 32",
      teaser: "Recon Unit Pulled from NVA Trap",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1967-08-11_sea-tiger_thumb.jpg",
      datePublished: "1967/08/11"
    },

    {
      id: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1967-09-01_sea-tiger_vol3-no35.pdf",
      title: "Sea Tiger, Vol. III, No. 35",
      teaser: "GySgt. Jimmie Howard Awarded Medal of Honor",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1967-09-01_sea-tiger_thumb.jpg",
      datePublished: "1967/09/01"
    },
    {
      id: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1967-11-24_sea-tiger_vol3-no47.pdf",
      title: "Sea Tiger, Vol. III, No. 47",
      teaser: "3rd Division CG Killed in Helo Crash",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1967-11-24_sea-tiger_thumb.jpg",
      datePublished: "1967/11/24"
    },
    {
      id: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1968-02-02_sea-tiger_vol4-no5.pdf",
      title: "Sea Tiger, Vol. IV, No. 5",
      teaser: "3 NVA Soldiers Slain by Recon",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1968-02-02_sea-tiger_thumb.jpg",
      datePublished: "1968/02/02"
    },
    {
      id: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1968-02-09_sea-tiger_vol4-no6.pdf",
      title: "Sea Tiger, Vol. IV, No. 6",
      teaser: "VC/NVA Assure Viet New Year's Starts With Bang",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1968-02-09_sea-tiger_thumb.jpg",
      datePublished: "1968/02/09"
    },
    {
      id: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1968-02-16_sea-tiger_vol4-no7.pdf",
      title: "Sea Tiger, Vol. IV, No. 7",
      teaser: "NVA Bombarded by Arty, Bombs",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1968-02-16_sea-tiger_thumb.jpg",
      datePublished: "1968/02/16"
    },
    {
      id: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1968-04-19_sea-tiger_vol4-no16.pdf",
      title: "Sea Tiger, Vol. IV, No. 16",
      teaser: "Khe Sanh Siege Lifted",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1968-04-19_sea-tiger_thumb.jpg",
      datePublished: "1968/04/19"
    },
    {
      id: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1968-11-08_sea-tiger_vol4-no45.pdf",
      title: "Sea Tiger, Vol. IV, No. 45",
      teaser: "U.S.M.C. 193 Years - Birthday Recap",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1968-11-08_sea-tiger_thumb.jpg",
      datePublished: "1968/11/08"
    },
    {
      id: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1968-12-13_sea-tiger_vol4-no47.pdf",
      title: "Sea Tiger, Vol. IV, No. 47",
      teaser: "Operation Meade River Stuns Enemy",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1968-12-13_sea-tiger_thumb.jpg",
      datePublished: "1968/12/13"
    },
    {
      id: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1969-02-21_sea-tiger_vol5-no8.pdf",
      title: "Sea Tiger, Vol , No. ",
      teaser: "9th Delivers Punch to NVA Paunch",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1969-02-21_sea-tiger_thumb.jpg",
      datePublished: "1969/02/21"
    },
    {
      id: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1969-02-28_sea-tiger_vol5_no9.pdf",
      title: "Sea Tiger, Vol. V, No. 9",
      teaser: "Reds Lose 1,825 to 1stDiv",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1969-02-28_sea-tiger_thumb.jpg",
      datePublished: "1969/02/28"
    },
    {
      id: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1969-03-07_sea-tiger_vol5-no10.pdf",
      title: "Sea Tiger, Vol. V, No. 10",
      teaser: "Four Years in Country - Fightin' Third...The Hill Humpers",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1969-03-07_sea-tiger_thumb.jpg",
      datePublished: "1969/03/07"
    },
    {
      id: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1969-05-09_sea-tiger_vol5-no19.pdf",
      title: "Sea Tiger, Vol. V, No. 19",
      teaser: "With Charlie on the Run, III MAF Marks Fourth Anniversary",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1969-05-09_sea-tiger_thumb.jpg",
      datePublished: "1969/05/09"
    },
    {
      id: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1969-05-30_sea-tiger_vol5-no22.pdf",
      title: "Sea Tiger, Vol. V, No. 22",
      teaser: "Enemy Dead Top 600 in Two Weeks",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1969-05-30_sea-tiger_thumb.jpg",
      datePublished: "1969/05/30"
    },
    {
      id: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1969-06-20_sea-tiger_vol5-no25.pdf",
      title: "Sea Tiger, Vol. V, No. 25",
      teaser: "1st Div Gunmen Sweep 'Dodge City'",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1969-06-20_sea-tiger_thumb.jpg",
      datePublished: "1969/06/20"
    },
    {
      id: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1969-07-18_sea-tiger_vol5-no29.pdf",
      title: "Sea Tiger, Vol. V, No. 29",
      teaser: "Enemy Dead Top 900 in 3rd Div Ops",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1969-07-18_sea-tiger_thumb.jpg",
      datePublished: "1969/07/18"
    }
  ]

  async componentWillLoad() {
    let id = extractIdFromDocumentPath();
    this.header = BlogData.getPostHeaderById(id);
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
            <ion-back-button defaultHref="/cage"></ion-back-button>
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

        <h1>{this.header.title}</h1>
        <app-entry-meta header={this.header} />

        <p>The &quot;Sea Tiger&quot; was a weekly newspaper distributed throughout the III MAF area of northern South Vietnam and published by III MAF (Marine Amphibious Force). The first issue was published on November 10, 1965 and the last issue on April 14, 1971. This collection, donated by veteran, <a href="http://mikefishbaugh.homestead.com/">Mike Fishbaugh</a>, and others contains 20 issues of the Sea Tiger, published between December 21, 1966 and June 20, 1969 (it is not complete). According to the <a href="https://www.mcrdmuseum.org/">MCRD Museum Foundation</a>, the newspaper got its name from the Vietnamese words, &quot;Cop Bien,&quot; which mean, &quot;the Marines who came ashore from the sea to fight like tigers on their shores.&quot;</p>

        <app-list-menu items={this.items} lines="none" show-metadata/>

      </ion-content>


    ];
  }
}