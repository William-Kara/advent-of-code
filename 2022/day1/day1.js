// Day 1 Part 1

const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n\n')
    .map(i => i.split('\n')
    .map(i => +i)
    .reduce((prev, curr) => prev + curr, 0))
;

const maxInput = Math.max(...input);

console.log(maxInput);

// Day 1 Part 2


const topThree = input.sort((a, b) => (a - b));

const topTotal = topThree[topThree.length-1]+topThree[topThree.length-2]+topThree[topThree.length-3];

console.log(topTotal);