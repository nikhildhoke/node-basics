const { readFileSync, writeFileSync } = require('fs');

const first =  readFileSync('./content/first.txt', 'utf-8');

const second =  readFileSync('./content/second.txt', 'utf-8');

const resultFile =  readFileSync('./content/new-result.txt', 'utf-8');

writeFileSync(  './content/new-result.txt', 
                `This is the result : ${first}, ${second} \n`,
                {flag: 'a'}
            );

// console.log(first, second, resultFile);?