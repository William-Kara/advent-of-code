// Day 3 Part 1

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

// Day 3 Part 2

const input2 = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .split('\n')
;

let score2 = 0;
let totalScore2 = 0;

for(let i =0; i < input2.length; i+=3) {
    let first = input2[i];
    let second = input2[i + 1];
    let third = input2[i + 2];
    for (const char of first) {
        if (second.includes(char)) {
            if (third.includes(char)) {
                score2 = getCharScore(char);
            }
        }
    }
    totalScore2 += score2;
};

console.log(totalScore2)