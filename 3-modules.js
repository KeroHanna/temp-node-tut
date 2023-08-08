//Modules
//CommonJS, every file is a module (by default)
//Modules - Encapsulated Code (only share minimum)

//importing modules
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

require('./7-mind-grenade');    //writing a import like that will immediately execute a import, its almost similar to writing a func literal. 


sayHi("rober");
sayHi(names.john);
sayHi(names.peter);

console.log(data.singlePerson.name);

console.log(data.items);
 