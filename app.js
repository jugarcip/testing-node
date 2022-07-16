'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('./assets/ASTRO_EAGLE.json');
let metadata = JSON.parse(rawdata);
console.log(metadata);