console.log(" PREGUNTA 1 y 2:\n");


const boolLiteral = true;
const boolConstructor = new Boolean(false);
const numLiteral = 1000;
const numConstructor = new Number(2000);

const bigLiteral = 1234n;
const bigFunction = BigInt(5678);

const strLiteral = "Hello";
const strConstructor = new String("World");

const undefLiteral = undefined;


console.log(`${boolLiteral} [${typeof boolLiteral}]`);
console.log(`${boolConstructor} [${typeof boolConstructor}]`);
console.log(`${numLiteral} [${typeof numLiteral}]`);
console.log(`${numConstructor} [${typeof numConstructor}]`);
console.log(`${bigLiteral} [${typeof bigLiteral}]`);
console.log(`${bigFunction} [${typeof bigFunction}]`);
console.log(`${strLiteral} [${typeof strLiteral}]`);
console.log(`${strConstructor} [${typeof strConstructor}]`);
console.log(`${undefLiteral} [${typeof undefLiteral}]`);


console.log("\nPREGUNTA 3:\n");

const str = "1234";
const num = Number(str);
const big = BigInt(num);
const bool = Boolean(big);

console.log(`${str} [${typeof str}]`);
console.log(`${num} [${typeof num}]`);
console.log(`${big} [${typeof big}]`);
console.log(`${bool} [${typeof bool}]`);


console.log("\nPREGUNTA 4:\n");

const sumaBool = true + false;
const sumaNum = 10 + 20;
const sumaBig = 10n + 20n;
const sumaStr = "foo" + "bar";
const sumaUndef = undefined + undefined;

console.log(`${sumaBool} [${typeof sumaBool}]`);
console.log(`${sumaNum} [${typeof sumaNum}]`);
console.log(`${sumaBig} [${typeof sumaBig}]`);
console.log(`${sumaStr} [${typeof sumaStr}]`);
console.log(`${sumaUndef} [${typeof sumaUndef}]`);

console.log("\nPREGUNTA 5:\n");

const r1 = 1 + "1";
const r2 = true + 1;
const r3 = true + "1";
const r4 = 1 + undefined;

console.log(`${r1} [${typeof r1}]`);
console.log(`${r2} [${typeof r2}]`);
console.log(`${r3} [${typeof r3}]`);
console.log(`${r4} [${typeof r4}]`);


try {
    console.log(1n + 1);
} catch (e) {
    console.log("Error:", e.message);
}


const r5 = 1n + "1";
console.log(`${r5} [${typeof r5}]`);

console.log("\n PREGUNTA 6:\n");

const str1a = 42 + Number("1");
const str1b = 42 + +"1";

console.log(`${str1a} [${typeof str1a}]`);
console.log(`${str1b} [${typeof str1b}]`);