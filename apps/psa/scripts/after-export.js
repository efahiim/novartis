const fs = require('fs');

fs.copyFile('public/robots.txt', 'out/robots.txt', (err) => {
  if (err) throw err;
  console.log('source robots.txt was copied to destination robots.txt');
});

fs.copyFile('web.config', 'out/web.config', (err) => {
  if (err) throw err;
  console.log('source web.config was copied to destination web.config');
});

fs.copyFile('rewriteRules.config', 'out/rewriteRules.config', (err) => {
  if (err) throw err;
  console.log('source rewriteRules.config was copied to destination rewriteRules.config');
});

console.log('File successfully copied!');