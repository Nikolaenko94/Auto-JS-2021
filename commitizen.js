'use strict';

module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat:      A new feature',
    },
    {
      value: 'fix',
      name: 'fix:       A bug fix',
    },
  ],
  allowCustomScopes: true,
  allowBreakingChanges: false,
  footerPrefix: 'METADATA:',
  subjectLimit: 72,
};
