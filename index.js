const path = require('path');
const cwd = process.cwd();
const downloadImage = require('./lib/download');
const data = require('./data.json');
let downloaded = 0;
const outDir = path.join(cwd, 'output');
require('./lib/prep')(outDir);
console.log('🚀 Launching image downloader');

// Begin Editable Content

const totalDownloads = data.data.model.panoLocations.length;

// End Editable Content

console.log(`💾 Batch downloading ${totalDownloads} panoramas / ${totalDownloads * 6} cubefaces`);
for (let i = 0; i < totalDownloads; i++) {
  for (let x = 0; x < 6; x++) {
    const url = data.data.model.panoLocations[i].skybox.children[x];
    const fileName = data.data.model.panoLocations[i].label + '-' + data.data.model.panoLocations[i].id + '_' + x + '.jpg';
    if (url) {
      downloadImage(url, path.join(outDir, `${fileName}`))
        .then(() => {
          downloaded++;
          console.log(`✔️  Downloaded ${fileName} / (${downloaded} of ${totalDownloads * 6})`);
          if (downloaded === totalDownloads * 6) {
            console.log('✔️  Downloads completed');
            process.exit(0);
          }
        })
        .catch((e) => {
          console.log(e);
          process.exit(1);
        });
    } else {
      downloaded++;
      console.log(`❌ Missing URL for ${fileName} (${downloaded} of ${totalDownloads * 6})`);
      if (downloaded === totalDownloads * 6) {
        console.log('✔️  Downloads completed');
        process.exit(0);
      }
    }
  }
}
