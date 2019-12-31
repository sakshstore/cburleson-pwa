# Style Guide - Images

## Favor internal images

For the prinicple of longevity, it is best not to use images that are sourced externally. Where possible, try to ensure that the image is obtained 
and served from our own server. This is simply because we cannot rely (long term) on any image that is externally sourced. When externally sourced images suddenl;y dissapear, our pages degrade.

## Thumbnails

Thumbnail images should be sized at 200px x 200px, 72 ppi, but rendered at 100px x 100px. They should be saved as JPEG, 80% compression, optimized.

The ideal image size for thumbnail images is 100px x 100px. This has been determined to be the best balance for all device screens. This presupposes that when the thumbnails are used in lists, the list item titl;es and texts remain brief too. Otherwise, the images float acquardly, or the text. You have to strike the perfect balance between THIS image size and the right amount of title and teaser text to fit with it.

Now, the size used best for Ionic thumbnails has been determined to be 100px x 100px, but because we want to always have the best possible image for retina displays, we'll upscale that to 200px by 200px. Now that's still a little bit low for some very high-end retina devices like iPhone XS +, but it strikes a balance.

TIP: If downscaling a high-resolution image, it is often helpful to run a Filter > Sharpen > Unsharp Mask (50%) after the down-scale.

## Aligning Left

`<img class="alignleft"`