// fs is a core Nodejs module, we don't need to install anything and can use it right away...
const fs = require("fs")
const path = require("path")

/*
try {
  const arrayOfFiles = fs.readdirSync("./src/components/2008")
  console.log(arrayOfFiles)
} catch(e) {
  console.log(e)
}
*/

// Recursive function gets all files under the given directory path, 
// including files within subdirectories...
// Reference: https://coderrocketfuel.com/article/recursively-list-all-the-files-in-a-directory-using-node-js
const getAllFiles = function(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath)
 
  arrayOfFiles = arrayOfFiles || []
 
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
    }
  })
 
  return arrayOfFiles
}

const allFiles = getAllFiles("./src/components/")

allFiles.forEach(function(file) {
    // extract the last part of the filename
    let lastSlashNdx = file.lastIndexOf("/");
    let slug = file.substring(lastSlashNdx + 1);
    let path = file.substring(0,lastSlashNdx);

    if(slug.indexOf('page-') > -1) {
        
        let newName = slug.substring(5);
        if (path !== '/mnt/c/repos/cburleson-pwa/src/components/app-404-page-not-found') {
            //console.log(path + " > " + newName);

            let lastNdxSlash2 = path.lastIndexOf('/');
            let strippedPath = path.substring(0, lastNdxSlash2 + 1);
            // console.log(strippedPath + ' > ' + newName);

            // First, we need to rename the inner file with newName.

            console.log('RENAME F: ' + file + ' --to-> ' + path + "/" + newName);

            // ...

            // Next we need to strip the file extension off newname...

            slug = slug.substring(0, slug.length - 4);
            console.log (slug);

            // ...

            // And then append newname to the strippedPath and rename path t0 strippedPath + newname w/o file xt
        
            /*
            fs.rename(file, '/path/to/AF.png', function(err) {
                if ( err ) console.log('ERROR: ' + err);
            });
            */
           newName = newName.substring(0, newName.length - 4);
           console.log('RENAME D: ' + strippedPath + slug + ' --to-> ' + strippedPath + newName);
        
        }



        
    }

    
  })

// console.log(result);