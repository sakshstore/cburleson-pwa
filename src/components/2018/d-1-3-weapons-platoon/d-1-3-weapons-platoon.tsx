import { Component, Element, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-d-1-3-weapons-platoon',
})
export class PageD13WeaponsPlatoon {

    @Element() el: HTMLElement;

    header: any;

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

                <h1>{this.header.title}</h1>
                <app-entry-meta header={this.header} />

                <a href="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/vietnam-weapons-d13/weapons-platoon-numbered.jpg"><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/vietnam-weapons-d13/weapons-platoon-numbered.jpg" alt="Weapons Platoon - Delta Company, 1st Battalion, 3rd Marines, Vietnam" /></a>

                <ion-list>
                    <ion-item><ion-label text-wrap>1. Jerry Crabtree</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>2. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>3. Morgan</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>4. Sgt. David R. Brackins</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>5. Paul A. Kekahuna (Deceased)</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>6. Sam Orlando</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>7. Sergeant Lee</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>8. Mike Meeker</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>9. Doc Slade</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>10. Jerry Carrero</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>11. McKeon ("Ricky Recon")</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>12. Frank Delaney</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>13. unidentified; Could be Alfredo Ortega?</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>14. Don Baker ("Ollie")</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>15. John Connor</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>16. Ollie Baker</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>17. Cantu</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>18. Mike Brugh</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>19. Robert (Bob) Gallo</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>20. Carroll Giles</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>21. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>22. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>23. Ralph Carter</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>24. Jim Atten</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>25. Burt Kees</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>26. Tim Heard</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>27. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>28. Glen Close</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>29. Don Minton</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>30. Frank Cauzzo</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>31. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>32. Martinez</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>33. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>34. Ron Marinucci</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>35. Newhouse</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>36. Martin Cavazos?</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>37. Frank Ortiz</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>38. Raymond M. Kelley</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>39. Bob Law</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>40. Perez</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>41. Bill Peters</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>42. Bill Jackson</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>43. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>44. Bill Hibbard</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>45. Berry</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>46. Bob LaBarge</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>47. Wally Drewa</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>48. Bill Caughy</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>49. Jim Shipp</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>50. Harry L. Hissong</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>51. Kenneth L. Hicks</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>52. Gary Jenkins</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>53. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>54. Perry Gosset</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>55. Mike Logue</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>56. Alan Burleson</ion-label></ion-item>
                </ion-list>

            </ion-content>

        ];
    }
}