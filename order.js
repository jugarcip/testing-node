'use strict';

const fs = require('fs');
const path = require('path');

const currentDir = path.join("./new/");

const readDir = (dirname) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, (error, filenames) => {
      if (error) {
        reject(error);
      } else {
        resolve(filenames);
      }
    });
  });
};

readDir(currentDir).then(filenames => {
  let shipGlobalIndex = 0;
  let globalFile = [];

  filenames.forEach((file) => {
    let rawdata = fs.readFileSync("./new/" + file);
    let metadata = JSON.parse(rawdata);

    metadata.forEach(ship => {
      ship.name = `Navecitas #${shipGlobalIndex}`;
      ship.image = `${shipGlobalIndex}.png`;
      ship.properties.files[0].uri = `${shipGlobalIndex}.png`
      shipGlobalIndex++;
    });

    globalFile.push(metadata);
  });

  fs.closeSync(fs.openSync("./ordered/" + "ordered.json", 'w'))
  fs.appendFileSync("./ordered/" + "ordered.json", '[')
  globalFile.forEach((data, index) => {
    data.forEach((ship, index) => {
      fs.appendFileSync("./ordered/" + "ordered.json", JSON.stringify(ship))
      if (index < data.length-1) {
        fs.appendFileSync("./ordered/" + "ordered.json", ',')
      }
    });

    if (index < globalFile.length-1) {
      fs.appendFileSync("./ordered/" + "ordered.json", ',')
    }
  });

  fs.appendFileSync("./ordered/" + "ordered.json", ']')
})