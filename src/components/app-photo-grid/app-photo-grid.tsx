import { Component, Prop, h } from '@stencil/core';
// import { isLocal } from '../../helpers/utils';

@Component({
    tag: 'app-photo-grid'
})
export class AppPhotoGrid {

    /**
     * photos property expects an array of photos with the given structure, for example:
     * 
     * "photos": [
     *   {
     *     "id": "jack-depope-2",
     *     "subtitle": "Jack &quot;Doc&quot; DePope",
     *     "content": "<p>2nd Platoon, Delta Company, 1st Battalion, 3rd Marines (1/3)</p>"
     *   },
     *   {
     *     "id": "ch34-stirring-up-dust",
     *     "subtitle": "CH34 Stirring up dust",
     *     "content": ""
     *   }
     * ]
     * 
     * ...where id is expected to be the file name, without a jpg prefix. The component is 
     * limited in use case, right now to images ending in .jpg, but yeah... that could be 
     * revised easily.
     * 
     */
    
    @Prop() photos: any;

    /**
     * imagePath is expected to be the URL path upon which to append all the image 
     * file names in order to find the images (e.g. folder where the images are 
     * located). In an AWS S3 bucket folder, for example: image-path="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/vietnam-jack-depope/"
     */
    @Prop() imagePath: string;

    render() {

        // Generate an array of our elements with content first, then reduce it to groups and wrap each group with a row container:
        // See: https://stackoverflow.com/questions/34458165/how-to-surround-every-x-elements-with-a-class-using-react-js
        var groupSize = 4; // i.e. number of columns per row
        var gridRows = this.photos.map(function (item) {
            // map each item to html elements...
            return (
                <ion-col size-xs="12" size-sm="12" size-md="6" size-lg="6" size-xl="3">
                    <app-photo-card image-path={this.imagePath} item={item}></app-photo-card>
                </ion-col>
            );
        }, this).reduce(function (r, element, index) {
            // Note that "this" is passed as the second argument to the map function above. Why?
            // We are calling and using the "this" object (this class) inside the map function,
            // so we need access to it. Array.prototype.map() takes a second argument to set what "this" 
            // refers to in the mapping function, so we pass "this" as the second argument to preserve the current context.

            // Create element groups with size based on defined groupSize, result looks like:
            // [[elem1, elem2, elem3, elem4], [elem5, elem6, elem7, elem8], ...]
            index % groupSize === 0 && r.push([]);
            r[r.length - 1].push(element);
            return r;
            // Now, with the new r array of arrays, we map each inner array (every group)...
        }, []).map(function (rowContent) {
            // and surround it with 'row'
            return <ion-row>{rowContent}</ion-row>;
        });
        // Now rows contains all the rows we need for the grid and we'll just use it in the page 
        // where we need it with {rows}...

        return (
            <ion-grid class="card-grid">{gridRows}</ion-grid>
        );
    }
}