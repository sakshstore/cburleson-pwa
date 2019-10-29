import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'app-photo-card',
    styleUrl: 'app-photo-card.css'
})
export class AppPhotoCard {

    @Prop() imagePath: string;
    @Prop() item: any;

    createSubTitle(item) {
        if (item.subtitle) {
            return <ion-card-subtitle>{item.subtitle}</ion-card-subtitle>;
        }
    }

    createTitle(item) {
        if (item.title) {
            return <ion-card-title>{item.title}</ion-card-title>;
        }
    }

    render() {

        var smallImagePath = this.imagePath + this.item.id + '-sm.jpg';
        var hiResImagePath = this.imagePath + this.item.id + '.jpg';

        return (
            <ion-card>
                <ion-img src={smallImagePath}></ion-img>
                <ion-card-header>
                    {this.createSubTitle(this.item)}
                    {this.createTitle(this.item)}
                </ion-card-header>
                <ion-card-content>
                    {this.item.content}
                    <a href={hiResImagePath} class="button">View hi-res image...</a><br/>
                    ID: {this.item.id}
                </ion-card-content>
            </ion-card>
        );
    }
}