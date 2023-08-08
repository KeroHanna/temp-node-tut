//JS will read this code line by line "Synchrously", this takes longer to process especially if there is multiple users

const {readFileSync, writeFileSync} = require('fs');
console.log("start")

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');


writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
     {flag: 'a'}    //this appends to the file

)

console.log('done with this task');
console.log('starting the next one');