//모두 숫자 타입 
var integer = 10;
var double = 10.12;
var negative = -20;
console.log("======Typeof01======");
console.log(typeof integer);
console.log(typeof double);
console.log(typeof negative);

//모두 10진수로 해석 
var binary = 0b0100001; 
var octal = 0o101;
var hex = 0x41;

console.log("======Typeof02======");
console.log(typeof binary);
console.log(typeof octal);
console.log(typeof hex);

console.log("======Equal======");
console.log(binary == octal);
console.log(octal == hex);

//숫자 타입 세가지 특별한 값 : Infinity / -Infinity /NaN
console.log("======Three Special Type ======");
console.log(10/0);
console.log(10/-0);
console.log(1 * 'String');

//console.clear();
var x = nan;


