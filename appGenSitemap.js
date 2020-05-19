'use strict';

const fs = require('fs');

// (err, data) is the callback function that will be executed 
// once the file has been read...
fs.readFile('./src/assets/data/site-data.json', (err, data) => {

    if (err) throw err;

    let siteData = JSON.parse(data);

    let siteMapText = '';
    let count = 5;

    siteMapText += 'https://codyburleson.com\r\n';
    siteMapText += 'https://codyburleson.com/blog\r\n';
    siteMapText += 'https://codyburleson.com/books\r\n';
    siteMapText += 'https://codyburleson.com/about\r\n';
    siteMapText += 'https://codyburleson.com/contact\r\n';

    siteData.content.forEach((item) => {
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

console.log('Finished!');