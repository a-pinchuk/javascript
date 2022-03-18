"use strict";

let num = 20;

function showFirstMassage(text) {
    console.log(text);
    console.log(num);
}

showFirstMassage('a');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4,3));
console.log(calc(5,3));

function ret(){
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function(){
    console.log('Hello');
};

logger();

const calc1 = (a, b) => a + b;