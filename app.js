'use strict';

const fs = require('fs');
const name = "SPACE_EXCALIBUR";

let rawdata = fs.readFileSync("./assets/" + name + ".json");
let metadata = JSON.parse(rawdata);
metadata.forEach(element => {
    element.attributes.forEach(attribute => {
        if(attribute.trait_type === 'number' && attribute.value === '1') {
            element.attributes.push({ trait_type: "colour", value: "red"});
            element.attributes.push({ trait_type: "background", value: "star system"});

        } else if(attribute.trait_type === 'number' && attribute.value === '2') {
            element.attributes.push({ trait_type: "colour", value: "black"});
            element.attributes.push({ trait_type: "background", value: "blackhole"});

        } else if(attribute.trait_type === 'number' && attribute.value === '3') {
            element.attributes.push({ trait_type: "colour", value: "blue"});
            element.attributes.push({ trait_type: "background", value: "planet desert ring"});

        } else if(attribute.trait_type === 'number' && attribute.value === '4') {
            element.attributes.push({ trait_type: "colour", value: "green"});
            element.attributes.push({ trait_type: "background", value: "forming planet"});

        } else if(attribute.trait_type === 'number' && attribute.value === '5') {
            element.attributes.push({ trait_type: "colour", value: "purple"});
            element.attributes.push({ trait_type: "background", value: "gas giant"});

        } else if(attribute.trait_type === 'number' && attribute.value === '6') {
            element.attributes.push({ trait_type: "colour", value: "red"});
            element.attributes.push({ trait_type: "background", value: "star system"});

        } else if(attribute.trait_type === 'number' && attribute.value === '7') {
            element.attributes.push({ trait_type: "colour", value: "white"});
            element.attributes.push({ trait_type: "background", value: "blackhole"});

        } else if(attribute.trait_type === 'number' && attribute.value === '8') {
            element.attributes.push({ trait_type: "colour", value: "yellow"});
            element.attributes.push({ trait_type: "background", value: "planet desert ring"});

        } else if(attribute.trait_type === 'number' && attribute.value === '9') {
            element.attributes.push({ trait_type: "colour", value: "black"});
            element.attributes.push({ trait_type: "background", value: "forming planet"});

        } else if(attribute.trait_type === 'number' && attribute.value === '10') {
            element.attributes.push({ trait_type: "colour", value: "blue"});
            element.attributes.push({ trait_type: "background", value: "gas giant"});

        } else if(attribute.trait_type === 'number' && attribute.value === '11') {
            element.attributes.push({ trait_type: "colour", value: "green"});
            element.attributes.push({ trait_type: "background", value: "star system"});

        } else if(attribute.trait_type === 'number' && attribute.value === '12') {
            element.attributes.push({ trait_type: "colour", value: "purple"});
            element.attributes.push({ trait_type: "background", value: "blackhole"});

        } else if(attribute.trait_type === 'number' && attribute.value === '13') {
            element.attributes.push({ trait_type: "colour", value: "red"});
            element.attributes.push({ trait_type: "background", value: "planet desert ring"});

        } else if(attribute.trait_type === 'number' && attribute.value === '14') {
            element.attributes.push({ trait_type: "colour", value: "white"});
            element.attributes.push({ trait_type: "background", value: "forming planet"});

        } else if(attribute.trait_type === 'number' && attribute.value === '15') {
            element.attributes.push({ trait_type: "colour", value: "yellow"});
            element.attributes.push({ trait_type: "background", value: "gas giant"});

        } else if(attribute.trait_type === 'number' && attribute.value === '16') {
            element.attributes.push({ trait_type: "colour", value: "black"});
            element.attributes.push({ trait_type: "background", value: "star system"});

        } else if(attribute.trait_type === 'number' && attribute.value === '17') {
            element.attributes.push({ trait_type: "colour", value: "blue"});
            element.attributes.push({ trait_type: "background", value: "blackhole"});

        } else if(attribute.trait_type === 'number' && attribute.value === '18') {
            element.attributes.push({ trait_type: "colour", value: "green"});
            element.attributes.push({ trait_type: "background", value: "planet desert ring"});

        } else if(attribute.trait_type === 'number' && attribute.value === '19') {
            element.attributes.push({ trait_type: "colour", value: "purple"});
            element.attributes.push({ trait_type: "background", value: "forming planet"});

        } else if(attribute.trait_type === 'number' && attribute.value === '20') {
            element.attributes.push({ trait_type: "colour", value: "red"});
            element.attributes.push({ trait_type: "background", value: "gas giant"});
        }
    })
});
fs.writeFileSync("./new/" + name + ".json", JSON.stringify(metadata));