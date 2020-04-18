module.exports = {
  name: 'playground-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/playground-ui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
