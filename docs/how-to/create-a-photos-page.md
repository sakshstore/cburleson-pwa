# How to create a photos page

In `src/assets/data` create a new JSON page and name it using the following syntax:

`photos-<unique-name>.json`

Copy one of the existing files in order to have the proper JSON structure in the contents.

In the JSON file...
- The `id` should be the same as the `unique-name` created for the file name (without `photos-` or `.json`).
- The `imagesURL` should point to the URL of the containing folder of all the images.

After creating the photos JSON file, you just need to create a menu item linking to it somewhere, such as on the `pages/page-cage.tsx` page like this:

```
    {
      id: "/photos/cavazos-center",
      title: "Vietnam War Photographs from the Martin Cavazos Center",
      teaser: "A collection of photos presented in honor of Martin Cavazos (Delta Co., 1st Batallion / 3rd Marines; KIA May 5, 1967); originally from the Martin Cavazos Center in Sebastian, Texas.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/cavazos-center_thumb.jpg",
      datePublished: "Mar 13, 2020",
      dateModified: ""
    },
```