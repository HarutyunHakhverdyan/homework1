//1 For a given number calculate the sum of its digits.

let num = +prompt();
let sum = 0;
for(;;){
	let x = num%10;
	num = (num-num%10)/10
	sum+= x 
	if(num==0) break
}
console.log('sum: '+sum)

// 2. Given three sides of a triangle. Check whether the triangle is valid or not. Print “yes” if it is valid
//and “no&quot; otherwise. (Triangle is valid if the sum of its two sides are greater than the third side).

const a = +prompt();
const b = +prompt();
const c = +prompt();
if((a+b)>c && (a+c)>b && (b+c)>a){
	console.log('yes')
} else {
	console.log('no')
}

// 2-rd  tarberak
const a = +prompt();
const b = +prompt();
const c = +prompt();
if(2*Math.max(a,b,c) < a+b+c){
	console.log('yes')
} else {
	console.log('no')
}

//3. Given a number print its digits count.
let num = +prompt();
let count = 0;
for(;;){
	num = (num-num%10)/10
	count++ 
	if(num==0) break
}
console.log('count: '+count)

//4. Count numbers of digit 9 in a number.
let num = +prompt();
let nine = 0;
for(;;){
	let x = num%10;
	num = (num-num%10)/10
	if(x==9){
		nine++
	}
	if(num==0) break
}
console.log('nine: '+nine)
//5 Given a positive number. Print it in reverse order.
let num = +prompt();
let sum = '';
for(;;){
	let x = num%10;
	num = (num-num%10)/10
	sum+= x 
	if(num==0) break
}
console.log('New numer: '+sum)

