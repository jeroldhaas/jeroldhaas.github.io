//
// for now this mostly just does: copy development source files to production-ready locations
//

var md          = require('markdown').markdown;
var fs          = require('fs');
// var helpers = require('helpers'); // TODO: include this some day...


//
// files to copy: array of source-destination objects
//
var srcDestArray = [
    // FOUNDATION
    // css
    // { source: 'node_modules/zurb-foundation-6-prebuilt/css/app.css',                  destination: 'content/css/app.css'            },
    { source: 'node_modules/zurb-foundation-6-prebuilt/css/foundation.css',           destination: 'content/css/foundation.css'             },
    { source: 'node_modules/zurb-foundation-6-prebuilt/css/foundation.min.css',       destination: 'content/css/foundation.min.css'         },
    // js
    // { source: 'node_modules/zurb-foundation-6-prebuilt/js/app.js',                    destination: 'content/js/app.js'              },
    { source: 'node_modules/zurb-foundation-6-prebuilt/js/vendor/jquery.js',          destination: 'content/js/jquery.js'                   },
    { source: 'node_modules/zurb-foundation-6-prebuilt/js/vendor/what-input.js',      destination: 'content/js/what-input.js'               },
    { source: 'node_modules/zurb-foundation-6-prebuilt/js/vendor/foundation.js',      destination: 'content/js/foundation.js'               },
    { source: 'node_modules/zurb-foundation-6-prebuilt/js/vendor/foundation.min.js',  destination: 'content/js/foundation.min.js'           },

    // REACT
    // js
    { source: 'node_modules/react/dist/react-with-addons.js',                         destination: 'content/js/react-with-addons.js'        },
    { source: 'node_modules/react/dist/react-with-addons.min.js',                     destination: 'content/js/react-with-addons.min.js'    },
    { source: 'node_modules/react/dist/react.js',                                     destination: 'content/js/react.js'                    },
    { source: 'node_modules/react/dist/react.min.js',                                 destination: 'content/js/react.min.js'                }
];


//
// copy file using source-destination object
//
var copyFile = ({source: src, destination: dest}) => {
    fs.exists(src, (exists) => {
        if (exists) {
            fs.createReadStream(src)
              .pipe(fs.createWriteStream(dest))
              .end(() => console.log('copied file: ' + dest));
        } else {
            console.error('Error (\x1b[1mcopyFile\x1b[0m): file ' + src + ' doesn\'t exist');
        }
    });
};
srcDestArray.forEach(copyFile);


//
// obtain list of markdown files to copy to content area 
//
// TODO: since mdConvert isn't likely to be used (instead, lifted into this), the mdFiles array is likely to be deprecated & instead use in an _ad hoc_ manner
// TODO: deprecate server-side code, this could ostensibly be done by the client!
let mdFiles = [];
let mdSrcDir = 'content/md/';
let mdDestDir = './';
fs.readdir(mdSrcDir, (err, files) => {
    if (err) {
        console.error('Error reading directory: ' + err.message);
    } else {
        files.forEach((v,i,a) => {
            var oldFile = mdSrcDir + v;
            var newFile = mdDestDir + v.replace(/md/i, 'html');
            fs.exists(mdSrcDir + v, (exists) => {
                if (exists) {
                    // read & convert the file to html
                    fs.readFile(oldFile, (err, data) => {
                        if (err) {
                            console.error('Error opening file: ' + err.message);
                        } else {
                            // console.info(md.toHTML(data.toString()));
                            fs.writeFile(newFile, md.toHTML(data.toString()), (err) => {
                                if (err) {
                                    console.error('Error writing file: ' + err.message);
                                } else {
                                    console.info('converted file: ' + oldFile + ' to: ' + newFile);
                                }
                            });
                        }
                    });
                } else {
                    console.error('Error: file ' + oldFile + ' doesn\'t exist');
                }
            });
        });
    }
});




