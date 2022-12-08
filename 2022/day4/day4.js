// Day 4 Part 1

const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .split('\n')
    .map(line =>  line.split(','))
;

let sum = 0;

const isFullyContained = (a1, b1, a2, b2) => {
    return (a1 <= b1 && a2 >= b2) || (b1 <= a1 && b2 >= a2);
}

for (let line of input) {
    let a1 = 0;
    let a2 = 0;
    let b1 = 0;
    let b2 = 0;
    const digitA = line[0].split('-');
    a1 = parseInt(digitA[0], 10);
    a2 = parseInt(digitA[1], 10);
    const digitB = line[1].split('-');
    b1 = parseInt(digitB[0], 10);
    b2 = parseInt(digitB[1], 10);
    if (isFullyContained(a1,b1,a2,b2)) {
        sum = sum + 1;
    }
}

console.log(sum)

// Day 4 Part 2 // + de 721

let sum2 = 0;

const isOverlapping = (a1, b1, a2, b2) => {
    return (a1 >= b1 && a1 <= b2) || (b1 >= a1 && b1 <= a2);
}

for (let line of input) {
    let a1 = 0;
    let a2 = 0;
    let b1 = 0;
    let b2 = 0;
    const digitA = line[0].split('-');
    a1 = parseInt(digitA[0], 10);
    a2 = parseInt(digitA[1], 10);
    const digitB = line[1].split('-');
    b1 = parseInt(digitB[0], 10);
    b2 = parseInt(digitB[1], 10);
    if (isOverlapping(a1,b1,a2,b2)) {
        sum2 = sum2 + 1;
    }
}

console.log(sum2)