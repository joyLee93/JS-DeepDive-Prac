// 참고문서 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
// 템플릿 리터럴 내에서는 이스케이프 시퀀스를 사용하지 않아도 된다. 

console.log("string text line 1\n"+"string text line 2");
console.log(`string text line 1 
string text line 2`);

console.log("tabTest\n\t tab1");
console.log(`tabTest
        tab1`);      


// 표현식 삽입 (Expression interpolaton)
var a = 5;
var b = 10;

console.log("Fifteen is"+(a+b)+"and\nnot"+(2*a+b)+".");
console.log(`Fifteen is ${a+b} and 
not ${2*a+b}.`);


//Nesting templates 
var classes = 'header';
classes += (isLargeScreen()?'' : item.isCollapsed ? 'icon=expander':'icon-collapser');

const classes1 = `header ${ isLargeScreen() ? '' : (item.isCollapsed ? 'icon-expander' : 'icon-collapser')}`;
const classes2 = `header ${ isLargeScreen() ? '':`icon-${item.isCollapsed ? 'expander':'collapser'}`}`;



