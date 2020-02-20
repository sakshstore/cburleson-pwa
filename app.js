#!/usr/bin/env node
// Run this application like this:
// node app.js help
// node app.js v patch
// node app.js create page <slug>

const fs = require('fs');
const program = require('commander');
const inquirer = require('inquirer');
const { exec } = require("child_process");
const lineReplace = require('line-replace')

// (patch, major, or minor): npm version <update_type>
program
    .command('version <update_type>')
    .alias('v')
    .description('Change the version number with one of the semantic versioning release types (patch, major, or minor). The version number is changed in both package.json and helpers/utils.js')
    .action(function(update_type){
        console.log('Updating version; update_type: %s', update_type);
        
        if(update_type == 'patch' || update_type == 'major' || update_type == 'minor' ) {
            // First, we update package.json with the normal npm command for updating the project version:
            exec("npm version " + update_type, (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);

                // (err, data) is the callback function that will be executed 
                // once the file has been read...

                let newVersion;

                fs.readFile('./package.json', (err, data) => {
                    if (err) throw err;
                    let package = JSON.parse(data);
                    console.log('Version is now: %s', package.version);
                    newVersion = package.version;
                });


                lineReplace({
                    file: './src/helpers/utils.ts',
                    line: 2,
                    text: 'export const SITEVERSION = "' + newVersion + '";',
                    addNewLine: true,
                    onReplace
                  })
                  

            });

        } else {
            console.log('%s is an unrecognized update type. Please use one of patch, major, or minor.', update_type);
        }
        

    });



    function onReplace({file, line, text, replacedText}) {
        console.log(line);                  
    }


program
    .command('create <type> <slug>') // sub-command name, coffeeType = type, required
    .alias('c') // alternative sub-command is `o`
    .description('Create a new component of type [page|post].') // command description
    //.option('-s, --sugar [value]', 'Sugar level', "Low") // args.sugar = value, optional, default is 'Low'
    //.option('-d, --decaf', "Decaf coffee") // args.decaf = true/false, optional, default is `undefined`
    //.option('-c, --cold', "Cold coffee") // args.cold = true/false, optional, default is `undefined`
    //.option('-S, --served-in [value]', "Served in", "Mug") // args.servedIn = value, optional, default is 'Mug'
    //.option('--no-stirrer', 'Do not add stirrer') // args.stirrer = true/false, optional, default is `true`

    // function to execute when command is uses
    .action(function (componentType, componentSlug, args) {
        console.log("YOUR ORDER");
        console.log('------------------');

        console.log('Component type is %s', componentType);
        console.log('Component slug is %s', componentSlug);
        //console.log('args.sugar %s', colors.green(args.sugar));
        //console.log('args.decaf %s', colors.green(args.decaf));
        //console.log('args.cold %s', colors.green(args.cold));
        //console.log('args.servedIn %s', colors.green(args.servedIn));
        //console.log('args.stirrer %s', colors.green(args.stirrer));
        
        // Before creating a new post or page, we need to load the 
        // site-data file, which contains all the headers (metadata) for 
        // all content items. Having that in memory, we can insert the 
        // new metadata at the appropriate position and then save the 
        // site-data json back to file.
        fs.readFile('./src/assets/data/site-data.json', (err, data) => {
            if (err) throw err;
            let siteData = JSON.parse(data);

            // console.log(siteData);

            const questions = [
                { type: 'input', name: 'title', message: 'Title:'},
                { type: 'input', name: 'teaser', message: 'Teaser (press ENTER to skip):'},
                { type: 'list', name: 'thumbnail', message: 'Thumbnail:', choices: [
                        {
                        value: 'Select from existing...',
                        checked: true
                      },
                      {
                        value: 'Create new...',
                      },
                ] },
                //{ type: 'input', name: 'datePublished', message: 'Date published (yyyy/mm/dd; press ENTER for NOW):'},
                //{ type: 'input', name: 'dateModified', message: 'Date modified (yyyy/mm/dd; press ENTER to skip):'},
                //{ type: 'input', name: 'topics', message: 'Topic names (enter for "Uncategorized"):'}
            ];

            inquirer
            .prompt(questions)
            .then(function (answers) {
                console.log(answers);
                if(answers.thumbnail == 'Select from existing...') {
                    // Create a menu of all existing thumbnails...
                   let thumbnails = [];
                    // For each content item...
                    siteData.content.forEach((item) => {
                        // If it has thumbnail...
                        if (item.thumbnail) {
                            // Push into array if the thumbnail does not already exist in the array...
                            if (thumbnails.indexOf(item.thumbnail) < 0) {
                                thumbnails.push(item.thumbnail);
                            }
                        }
                    });
                    // console.log(thumbnails.sort());
                    let thumbnailOpts = { type: 'list', name: 'thumbnail', message: 'Thumbnail:', choices: thumbnails.sort()}
                    inquirer.prompt(thumbnailOpts).then(function (ans) {
                        console.log(ans);
                    });
                } else {
                    inquirer.prompt({ type: 'input', name: 'thumbnail', message: 'Thumbnail URL (press ENTER to leave blank):'}).then(function (anz) {
                        console.log(anz);
                    });
                }
            });

        });

    });

// allow commander to parse `process.argv`
program.parse(process.argv);


