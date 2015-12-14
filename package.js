Package.describe({
  name: 'fuse',
  version: '1.0.1',
  summary: 'fusejs lightweight fuzzy search',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.addFiles('fuse.js', ['server']);
  api.export('Fuse');
});

Npm.depends({
  'fuse.js': '1.3.1'
});
