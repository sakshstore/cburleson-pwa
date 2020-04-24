import { Component, Element, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

@Component({
    tag: 'page-d-1-3-platoon',
})
export class PageD13Platoon {

    @Element() el: HTMLElement;

    title = '3rd Platoon - D 1/3 Marines, Vietnam';

    componentWillLoad() {
        if (isLocal()) {
            console.log('> PageD13WeaponsPlatoon.componentWillLoad');
        }
        document.title = this.title + ' | ' + SITENAME;
        document.getElementById("meta-desc").setAttribute("content", "Photograph of Delta Co Platoon with most individuals identified.");
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

                <h1>{this.title}</h1>

                <a href="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/vietnam-jh-platoon/j-h-platoon.jpg"><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/vietnam-jh-platoon/j-h-platoon.jpg" alt="Delta Company, 1st Battalion, 3rd Marines, Vietnam" /></a>

                <ion-list>
                    <ion-item><ion-label text-wrap>1. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>2. Frank Nolan Holsomback (KIA, Operation Bastion Hill/Medina)</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>3. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>4. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>5. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>6. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>7. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>8. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>9. William Bittle</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>10. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>11. Tom Nollmann</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>12. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>13. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>14. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>15. Lou Tilton (WIA, Operation Beaver Cage)</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>16. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>17. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>18. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>19. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>20. Martin Cavazos (KIA, Operation Beaver Cage)</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>21. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>22. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>23. James Brown</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>24. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>25. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>26. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>27. Melvin Allen (KIA, Operation Beaver Cage)</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>28. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>29. Tom Jalbert</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>30. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>31. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>32. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>33. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>34. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>35. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>36. Dennis Mannion (KIA, Operation Beaver Cage)</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>37. Gary Culp</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>38. unidentified Corpsman</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>39. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>40. Sgt. Milton Hall (KIA, Operation Union I, a few days after Beaver Cage)</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>41. Lt. Templeton (Platoon Commander)</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>42. Bill Cansdale (WIA, Operation Beaver Cage)</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>43. unidentified</ion-label></ion-item>
                    <ion-item><ion-label text-wrap>44. unidentified</ion-label></ion-item>
                </ion-list>

            </ion-content>

        ];
    }
}