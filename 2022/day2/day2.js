// Day 2 Part 1

const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')
;

const matchResults = new Map();
matchResults.set ('A X', 4);
matchResults.set ('A Y', 8);
matchResults.set ('A Z', 3);
matchResults.set ('B X', 1);
matchResults.set ('B Y', 5);
matchResults.set ('B Z', 9);
matchResults.set ('C X', 7);
matchResults.set ('C Y', 2);
matchResults.set ('C Z', 6);

const totalScore = input
    .reduce((accumulator, currentValue) => accumulator + matchResults.get(currentValue), 0);

console.log(totalScore);

// Day 2 Part 1

const strategyGuide = new Map();
strategyGuide.set ('A X', 3);
strategyGuide.set ('A Y', 4);
strategyGuide.set ('A Z', 8);
strategyGuide.set ('B X', 1);
strategyGuide.set ('B Y', 5);
strategyGuide.set ('B Z', 9);
strategyGuide.set ('C X', 2);
strategyGuide.set ('C Y', 6);
strategyGuide.set ('C Z', 7);

const strategyScore = input
    .reduce((accumulator, currentValue) => accumulator + strategyGuide.get(currentValue), 0);

console.log(strategyScore);