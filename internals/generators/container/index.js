/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a container component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the base component type:',
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
      default: 'Form',
      validate: value => {
        if (!/^(pages\/)?\w+$/.test(value)) return 'The name is required';

        return componentExists(value) ? 'A component or container with this name already exists' : true;
      },
    },
    {
      type: 'confirm',
      name: 'wantHeaders',
      default: false,
      message: 'Do you want headers?',
    },
    {
      type: 'confirm',
      name: 'wantActionsAndReducer',
      default: true,
      message:
        'Do you want an actions/constants/selectors/reducer tuple for this container?',
    },
    {
      type: 'confirm',
      name: 'wantSaga',
      default: true,
      message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
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
      default: true,
      message: 'Do you want to load resources asynchronously?',
    },
  ],
  actions: data => {
    // Generate index.js

    data.pathBase = './src/containers';

    let m;
    if ((m = data.name.match(/^pages\/(\w+)/))) {
      data.name = m[1];
      data.pathBase += '/pages';
    }

    const actions = [
      {
        type: 'add',
        path: '{{pathBase}}/{{properCase name}}/index.js',
        templateFile: './internals/generators/container/class.js.hbs',
        abortOnFail: true,
      },
    ];

    // If component wants messages
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '{{pathBase}}/{{properCase name}}/messages.js',
        templateFile: './internals/generators/container/messages.js.hbs',
        abortOnFail: true,
      });
    }

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: '{{pathBase}}/{{properCase name}}/actions.js',
        templateFile: './internals/generators/container/actions.js.hbs',
        abortOnFail: true,
      });

      // Constants
      actions.push({
        type: 'add',
        path: '{{pathBase}}/{{properCase name}}/constants.js',
        templateFile: './internals/generators/container/constants.js.hbs',
        abortOnFail: true,
      });

      // Selectors
      actions.push({
        type: 'add',
        path: '{{pathBase}}/{{properCase name}}/selectors.js',
        templateFile: './internals/generators/container/selectors.js.hbs',
        abortOnFail: true,
      });

      // Reducer
      actions.push({
        type: 'add',
        path: '{{pathBase}}/{{properCase name}}/reducer.js',
        templateFile: './internals/generators/container/reducer.js.hbs',
        abortOnFail: true,
      });
    }

    // Sagas
    if (data.wantSaga) {
      actions.push({
        type: 'add',
        path: '{{pathBase}}/{{properCase name}}/saga.js',
        templateFile: './internals/generators/container/saga.js.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: '{{pathBase}}/{{properCase name}}/loadable.js',
        templateFile: './internals/generators/component/loadable.js.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      path: data.pathBase,
    });

    actions.push({
      type: 'eslint',
      path: data.pathBase,
    });

    return actions;
  },
};
