import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'app-list-menu'
})
export class AppListMenu {

    @Prop() items: Array<any>;

    @Prop() lines: 'full' | 'inset' | 'none' = 'full';

    @Prop() showMetadata: false;

    createTopicList(item: any) {
        let topicString = item.topics[0];
        for (var i = 1; i < item.topics.length; i++) {
            topicString = topicString + ", " + item.topics[i];
        }
        return topicString;
    }

    createMetadataLine(item: any) {
        if(this.showMetadata) {
            if(item.topics && item.topics.length > 0) {
                return <p><em>Published {new Date(item.datePublished).toDateString()}, Tagged {this.createTopicList(item)}</em></p>;
            } else {
                return <p><em>Published {new Date(item.datePublished).toDateString()}</em></p>
            }
        } else {
            return
        }
    }

    renderItem(item: any) {

        let itemHref: string;

        if( item.id.startsWith('http') ) {
            // Items that begin with http are obviously external links, so 
            // we leave them alone...
            itemHref = item.id;
        } else {
            itemHref = '/' + item.id;
            if (item.parent) {
                itemHref = '/' + item.parent + itemHref;
            }
        }

        return (
            <ion-item href={itemHref} hidden={item.hide} lines="full">
                <ion-thumbnail slot="start">
                    <ion-img src={item.thumbnail} />
                </ion-thumbnail>
                <ion-label text-wrap>
                    {item.title}
                    <p innerHTML={item.teaser}></p>
                    {this.createMetadataLine(item)}
                </ion-label>
            </ion-item>
        )

    }

    render() {
        return (
            <ion-list>
                {this.items.map((item) =>
                    this.renderItem(item)
                )}
            </ion-list>
        );
    }

}