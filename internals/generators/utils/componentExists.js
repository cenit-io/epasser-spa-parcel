/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');
let components;

components = fs.readdirSync(path.join(__dirname, '../../../src/components'));
components = components.concat(fs.readdirSync(path.join(__dirname, '../../../src/containers')))
components = components.concat(fs.readdirSync(path.join(__dirname, '../../../src/containers/pages')))

const componentExists = (comp) => components.indexOf(comp.replace(/^pages\//, '')) >= 0;

module.exports = componentExists;
