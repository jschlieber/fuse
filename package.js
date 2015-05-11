Package.describe({
  name: 'art1sec8:fuse',
  version: '0.0.1',
  // fusejs lightweight fuzzy search - a meteor wrapper
  summary: 'fusejs lightweight fuzzy search via a meteor npm wrapper',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('fuse.js', ['server']);
  api.export('Fuse');
});

Npm.depends({
  'fuse.js': '1.2.2'
});
