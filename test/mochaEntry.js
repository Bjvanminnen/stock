import glob from 'glob';

glob.sync(__dirname + '/../src/**/*test.js').forEach(file => {
  require(file);
});
