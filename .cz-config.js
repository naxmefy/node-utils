'use strict';

module.exports = {
    types: [
        {value: 'feat',     name: 'feat:     A new feature'},
        {value: 'fix',      name: 'fix:      A bug fix'},
        {value: 'docs',     name: 'docs:     Documentation only changes'},
        {value: 'style',    name: 'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, etc)'},
        {value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature'},
        {value: 'test',     name: 'test:     Adding missing tests'},
        {value: 'chore',    name: 'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation'},
        {value: 'revert',   name: 'revert:   Revert to a commit'}
    ],

    scopes: [
        {name: 'core'},
        {name: 'vendor'}
    ],

    allowCustomScopes: false,
    allowBreakingChanges: ['feat']
};
