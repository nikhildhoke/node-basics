console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);


const names = require('./names');
const sayHi = require('./utils');
const data = require('./modules');
require('./mind-grenade');
console.log(data.singlePerson.name);

console.log(module);
sayHi('Susan');
sayHi(names.bruce);
sayHi(names.clark);

