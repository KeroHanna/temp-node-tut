//Asynch approch allows the program to jump lines to the next task, allowing fasting processing

const {readFile, writeFile} = require('fs');

console.log("Start");
readFile('./content/first.txt', 'utf8', (err, result )=>{

    if(err){
        console.log(err);
        return;
    }
   const first = result;
   readFile('./content/second.txt', 'utf8', (err, result )=>{

        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile(                      //fs.writeFile(file, data[, options], callback)
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err,result) =>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log("Done with this task ");
            }
        )

    })
})
 console.log("Starting next task");