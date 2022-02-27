/*
// 1 Declare 2 variables a and b, such that a &gt; b, and define values for them. Output their
//a. sum
//b. difference (between a and b)
//c. product
//d. quotient (between a and b)
//e. remainder (between a and b)
let a = prompt();
let b = prompt();
if(a > b){
console.log(a+b);  //a.sum 
console.log(a-b);  //b.difference  
console.log(a*b);  //c.poduct
console.log(a/b);  //d.quotient
console.log(a%b);  //e.remainder 
}
*/
/*
 // 2 Print your name and age in the following format: “My name is ____, I am ____ .”
let name = "Harutyun";
let age = 29;
let result ='"'+'My name is ' + name + ',' + ' I am ' + age +'."';
console.log(result)
*/
/* 
//3 Declare a variable with defined value. Print the last digit of the number.
let number = prompt();
let result = number%10;
console.log(result)
*/
/*
 // 4 Check whether a given number is negative. Print “yes”, if it is negative, print “no”
otherwise.

let number = prompt();
if(number<0){
	console.log('yes')
} else {
	console.log('no')
}
*/
/* 
// 5 Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

let number1 = prompt();
let number2 = prompt();
if(number1%number2===0 || number2%number1===0){
	console.log(1)
} else {
	console.log(0)
}
*/
/* 
// 6 Given any number between 1 and 12. Print the name of the respective month.

let number = +prompt()
 switch(number){
 	case 1 :
 	console.log('JANUAY');
 	break
 	case 2 :
 	console.log('FEBRUARY');
 	break
 	case 3 :
 	console.log('MARCH');
 	break
 	case 4 :
 	console.log('APRIL');
 	break
 	case 5 :
 	console.log('MAY');
 	break
 	case 6 :
 	console.log('JUNE');
 	break
 	case 7 :
 	console.log('JULY');
 	break
 	case 8 :
 	console.log('AUGUST');
 	break
 	case 9 :
 	console.log('SEPTEMBER');
 	break
 	case 10 :
 	console.log('OCTOBER');
 	break
 	case 11 :
 	console.log('NOVEMBER');
 	break
 	case 12 :
 	console.log('DECEMBER');
 	break
 }
 */
 /* 
 // 7 Given three numbers. Find the maximum one.

 let number1 = prompt()
 let number2 = prompt()
 let number3 = prompt()
 let number;
 if(number1<=number2){
 	number=number2;
 } else {
 	number=number1
 };
 if(number<=number3){
 	number=number3
 }
 let result = number+' is maximum'
 console.log(result)
*/