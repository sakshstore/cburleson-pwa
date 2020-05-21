import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-apply-different-materials-to-subtools-in-zbrush',
})
export class PageZbrushApplyDifferentMaterials {

    header: any;

    async componentWillLoad() {
        let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/" />
                    </ion-buttons>
                    <ion-title>Blog</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content class="ion-padding">
                <ion-grid>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
                            <h1>{this.header.title}</h1>
                            <app-entry-meta header={this.header} />
                            <p>Here's how can you apply different materials to different subtools in ZBrush.</p>
                            <h2>Overview</h2>
                            <p>You apply different materials to different SubTools in ZBrush with the following simple steps, which are demonstrated on this page.</p>
                            <ol>
                                <li>Select a Given SubTool</li>
                                <li>Choose a Material</li>
                                <li>Select Mrgb to Ensure a Material and Color Fill</li>
                                <li>Select Color and FillObject</li>
                                <li>Repeat for Other SubTools</li>
                            </ol>
                            <h2>Select a Given SubTool</h2>
                            <p>Select a given SubTool in the Tool &gt; SubTool palette...</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/04/zbrush-apply-mats-to-subtools-1.jpg" alt="" width="226" height="722" /></p>
                            <h2>Choose a Material</h2>
                            <p>Click on the Material icon to open the material picker. The Material icon is on the left-hand side of the interface, just above the color picker...</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/04/zbrush-apply-mats-to-subtools-2.jpg" alt="" width="86" height="86" /></p>
                            <p>From the material picker, click to select a desired material from the options. In this example, as shown below, I am selecting the SkinShade4 material...</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/04/zbrush-apply-mats-to-subtools-3.jpg" alt="" width="802" height="273" /></p>
                            <h2>Select Mrgb to Ensure a Material and Color Fill</h2>
                            <p>In the next step, we're going to fill the SubTool. However, it is possible to fill the SubTool with only the color from the material (if only Rgb is selected). To ensure that the next operation will fill the Subtool with the material and the color, select Mrgb as shown below.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/04/zbrush-apply-mats-to-subtools-4.jpg" alt="" width="419" height="86" /></p>
                            <h2>Select Color and FillObject</h2>
                            <p>1) Click the Color menu to open the Color palette,  2) choose a desired color in the color picker, then 3) click FillObject. The material and color should be applied to the active SubTool as shown below...</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/04/zbrush-apply-mats-to-subtools-5.jpg" alt="" width="643" height="635" /></p>
                            <h2>Repeat for Other SubTools</h2>
                            <p>You can now select another given SubTool under Tool &gt; SubTool and repeat the process.</p>
                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

                            

                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-content>
        ];
    }
}
