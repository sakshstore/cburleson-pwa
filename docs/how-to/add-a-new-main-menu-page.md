# How to add a new main menu page

- Add the page to src/assets/data/page-data.json
- Copy a page folder such as `pages/about`
- Rename the folder, the css file, and the tsx file
- In the tsx file, change the @Component tag and styleUrl
- Change the `title = 'x';`
- Change the `<ion-title>Contact</ion-title>`
- Edit the content accordingly
- Add the route to `app-route.tsx`
- Add the page in `appGenSitemap.js`; an entry like: `siteMapText += 'https://codyburleson.com/contact\r\n';`

```
<ion-route url="/about" component="tab-about">
    <ion-route component="page-about"></ion-route>
</ion-route>
```