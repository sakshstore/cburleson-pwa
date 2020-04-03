'use strict';

const fs = require('fs');

// (err, data) is the callback function that will be executed 
// once the file has been read...
fs.readFile('./src/assets/data/site-data.json', (err, data) => {

    if (err) throw err;

    let siteData = JSON.parse(data);

    let siteMapText = '';
    let count = 13;

    siteMapText += 'https://codyburleson.com\r\n';
    siteMapText += 'https://codyburleson.com/photos\r\n';
    siteMapText += 'https://codyburleson.com/photos/curt-bruce\r\n';
    siteMapText += 'https://codyburleson.com/photos/ed-kalwara\r\n';
    siteMapText += 'https://codyburleson.com/photos/gary-culp\r\n';
    siteMapText += 'https://codyburleson.com/photos/jack-depope\r\n';
    siteMapText += 'https://codyburleson.com/photos/james-haight\r\n';
    siteMapText += 'https://codyburleson.com/photos/jim-shipp\r\n';
    siteMapText += 'https://codyburleson.com/photos/ken-hicks\r\n';
    siteMapText += 'https://codyburleson.com/photos/kevin-brooks\r\n';
    siteMapText += 'https://codyburleson.com/photos/ray-kelley\r\n';
    siteMapText += 'https://codyburleson.com/photos/stanley-hall\r\n';
    siteMapText += 'https://codyburleson.com/photos/cavazos-center\r\n';

    /*
    siteMapText += 'https://codyburleson.com/blog\r\n';
    siteMapText += 'https://codyburleson.com/books\r\n';
    siteMapText += 'https://codyburleson.com/about\r\n';
    siteMapText += 'https://codyburleson.com/about/life-events\r\n';
    siteMapText += 'https://codyburleson.com/about/experience\r\n';
    siteMapText += 'https://codyburleson.com/contact\r\n';
    siteMapText += 'https://codyburleson.com/beaver-cage-command-chron\r\n';
    siteMapText += 'https://codyburleson.com/beaver-cage-union-memorial\r\n';
    siteMapText += 'https://codyburleson.com/cage\r\n';
    siteMapText += 'https://codyburleson.com/book-review-more-than-everything-by-vanessa-foster\r\n';
    siteMapText += 'https://codyburleson.com/d-1-3-weapons-platoon\r\n';
    siteMapText += 'https://codyburleson.com/ray-kelley-silver-star\r\n';
    siteMapText += 'https://codyburleson.com/vietnam-1967-amphibious-combat\r\n';
    siteMapText += 'https://codyburleson.com/sea-tiger-newspapers\r\n';
    siteMapText += 'https://codyburleson.com/beaver-cage-union-memorial\r\n';
    */
    
    siteData.content.forEach((item) => {
        siteMapText += 'https://codyburleson.com/' + item.id + '\r\n';
        count ++;
    });

    fs.readFile('./src/assets/data/page-data.json', (err, data2) => {
        siteData = JSON.parse(data2);
        siteData.pages.forEach((item) => {
            if(typeof item.parent == 'undefined') {
                siteMapText += 'https://codyburleson.com/' + item.id + '\r\n';
            } else {
                siteMapText += 'https://codyburleson.com/' + item.parent + '/' + item.id + '\r\n';
            }
            count ++;
        });

        console.log(siteMapText);
        console.log('Generating sitemap.txt with %s URLs.',count);
        //console.log(siteData);

        // (err) is the callback function that will be executed 
        // once the file has been written...
        fs.writeFile("./sitemap.txt", siteMapText, "utf-8", (err) => {
            if (err) throw err;
            console.log('sitemap.txt written successfully.');
        });

    });

});

console.log('Finished!');