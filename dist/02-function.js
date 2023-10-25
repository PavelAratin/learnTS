"use strict";
function sum(a, b) {
    return a + b;
}
const sum2 = (a, b) => a + b;
sum(2, 4);
function log(name, userId) {
    console.log('hello', name, 'with id', userId || 'anonym');
}
log('pavel', '123');
function crash() {
    throw new Error('crash');
}
function avarage(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
