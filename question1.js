// Add two number  

// Static addition 

let a = prompt("please enter first number","");
let b = prompt("please enter second number","");


var c = parseInt(a) + parseFloat(b);
 
console.log("The sum of   "+a+" and "+b+" is  : "+c);


// square root 

var a = prompt("please enter a number ", "")

var b = Math.sqrt(-36)
console.log(b);

//  3 Area of triangle 

var base = prompt("please enter the base value " , );
var height = prompt("enter the height of triangle ");

var area =  (1/2)*base*height;
console.log(`The base of triangle is:  ${ base } and   height of triangle is:  ${height }  and area of traianle is :  ${area}`);
 
// 4 any type of trianl 

var a = 10;
var b =  10;
var c = 10;

var s = (a+b+c)/2;

var temp = s*(s-a)*(s-b)*(s-c);
var area = Math.sqrt(temp)
console.log(`the area of triangle is ${area}`);
 
// swapping of two numbwr using temp variable 

var a = prompt('please enter first value ');
var b = prompt('Enter the value of second number ');
console.log(`the value of a is :${a} , the value of b is : ${b}`);
var temp 
temp = a;
a = b ;
b = temp;

console.log(`after swapping the value of a : ${a} \n and  value of b is : ${b}`);

// swapping without temp 

var a = parseInt(prompt('please enter first value '));
 var b =  parseInt(prompt('Enter the value of second number '));
 console.log(`the value of a is :${a} , the value of b is : ${b}`);
 a = a + b;
 b = a - b;
 a = a - b ;
 console.log(`after swapping the value of a : ${a} \n and  value of b is : ${b}`);