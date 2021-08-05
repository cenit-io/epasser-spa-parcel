const
  componentGenerator = require('./internals/generators/component'),
  containerGenerator = require('./internals/generators/container'),
  languageGenerator = require('./internals/generators/language');

module.exports = function (plop) {

  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  // plop.setGenerator('language', languageGenerator);

  plop.setActionType('prettify', (answers, config) => {
    const
      path = require('path'),
      properCase = plop.getHelper('properCase'),
      { exec } = require('child_process'),
      folderPath = `${path.join(__dirname, config.path, properCase(answers.name), '**.js')}`;

    exec(`npm run prettify -- "${folderPath}"`);

    return folderPath;
  });

  plop.setActionType('eslint', (answers, config) => {
    const
      path = require('path'),
      properCase = plop.getHelper('properCase'),
      { exec } = require('child_process'),
      folderPath = `${path.join(__dirname, config.path, properCase(answers.name))}`;

    exec(`eslint --fix "${folderPath}"`);

    return folderPath;
  });
};