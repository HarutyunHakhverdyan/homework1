/* 1
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
/* 2
let name = "Harutyun";
let age = 29;
let result ='"'+'My name is ' + name + ',' + ' I am ' + age +'."';
console.log(result)
*/
/* 3
let number = prompt();
let result = number%10;
console.log(result)
*/
/* 4
let number = prompt();
if(number<0){
	console.log('yes')
} else {
	console.log('no')
}
*/
/* 5
let number1 = prompt();
let number2 = prompt();
if(number1%number2===0 || number2%number1===0){
	console.log(1)
} else {
	console.log(0)
}
*/
/* 6
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
