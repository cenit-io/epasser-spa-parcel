/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'React.Component',
      choices: () => [
        'React.PureComponent',
        'React.Component',
      ],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (!/.+/.test(value)) return 'The name is required';

        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: false,
      message: 'Do you want to load the component asynchronously?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: './src/components/{{properCase name}}/index.js',
        templateFile: './internals/generators/component/class.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: './src/components/{{properCase name}}/styles.jss.js',
        templateFile: './internals/generators/component/styles.jss.js.hbs',
        abortOnFail: true,
      },
    ];

    // If they want a i18n messages file
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: './src/components/{{properCase name}}/messages.js',
        templateFile: './internals/generators/component/messages.js.hbs',
        abortOnFail: true,
      });
    }

    // If want Loadable.js to load the component asynchronously
    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: './src/components/{{properCase name}}/loadable.js',
        templateFile: './internals/generators/component/loadable.js.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      path: './src/components/',
    });

    actions.push({
      type: 'eslint',
      path: './src/components/',
    });

    return actions;
  },
};
