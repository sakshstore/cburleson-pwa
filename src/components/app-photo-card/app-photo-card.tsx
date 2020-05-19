import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'app-photo-card',
    styleUrl: 'app-photo-card.css'
})
export class AppPhotoCard {

    @Prop() imagePath: string;
    @Prop() item: any;

    createSubTitle(item) {
        // innerHTML used so that HTML encoded chars get rendered...
        if (item.subtitle) {
            return <ion-card-subtitle innerHTML={item.subtitle}></ion-card-subtitle>;
        }
    }

    createTitle(item) {
        if (item.title) {
            return <ion-card-title innerHTML={item.title}></ion-card-title>;
        }
    }

    createHiResLink(item) {
        console.log('createHiResLink() > item: %o', item);
        if(! item.skipHiRes) {
            var hiResImagePath = this.imagePath + this.item.id + '.jpg';
            return <p><a href={hiResImagePath} class="button">View hi-res image...</a></p>
        }
    }

    render() {

        var smallImagePath = this.imagePath + this.item.id + '-sm.jpg';

        return (
            <ion-card>
                <ion-img src={smallImagePath}></ion-img>
                <ion-card-header>
                    {this.createSubTitle(this.item)}
                    {this.createTitle(this.item)}
                </ion-card-header>
                <ion-card-content>
                    <div innerHTML={this.item.content}></div>
                    {this.createHiResLink(this.item)}
                </ion-card-content>
            </ion-card>
        );
    }
}