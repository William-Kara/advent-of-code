const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .split('\n')
    .map(line => [ line.slice(0, line.length / 2), line.slice(line.length / 2) ])
;

const charsList = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let score = 0;
let totalScore = 0;

const matchingItem = (part1, part2) => {
    for (const item of part1.split('')) {
        if (part2.includes(item)) {
            score = getCharScore(item);
        }
    }
}

const getCharScore = (char) => {
    return charsList.indexOf(char);
}

for (const line of input) {
    matchingItem(line[0], line[1]);
    totalScore += score;
}

console.log(totalScore);

