const slugster = require('./index');
const test = '❤️ Étretat & Ille-sur-Têt!';
const no_separator = slugster(test)
const with_separator = slugster(test, '*')

console.log('No separator:', no_separator);
console.log('With separator:', with_separator);;