'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('./assets/ASTRO_EAGLE.json');
let student = JSON.parse(rawdata);
console.log(student);