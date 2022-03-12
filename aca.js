//1. Given an array․ Compute the length of the array. (without using .length)
let arr1 = [1,2,3,4,5,7,,,undefined,,,74,75];
let length1=0
for(let key in arr1){
	length1=+key+1
};
// ete  zangvacum bollor tarrer@ dasavorvac en hajordakan ev tarr@ undefind@ chi
let arr2 = [1,2,3,4,'Hello',65,76,87];
let length2=0
for(let i = 0;arr2[i]!=undefined; i++ ){
	length2++
};
console.log(`arr1-${length1}, arr2-${length2}`) 
//2 Given an array of numbers. Print the sum of the elements in array.
let arr = [1,8,9,12]
let sum=0
for(let i = 0;arr[i]!=undefined; i++ ){
	sum += arr[i]
};
console.log(sum)
//3. Given two numbers. Print powers of 2 between that numbers. (without using
//Math.pow)
let num1 = +prompt();
let num2 = +prompt();
for(let i = 0; 2**i<num2; i++ ){
	if (2**i>num1) {
	console.log(2**i)
 }
}
let num = prompt()
let num1=''
for(let i = 0; i<num.length; i++){
	if(!(num[i]%2==0&&num[i+1]%2==0)){
       num1+=num[i]
	} else {
		num1+=num[i]+'-'
	}
}
console.log(num1)
//5.Insert a n positive number. Print the n-st prime number.
let num = +prompt()
let count = 0
let result
for(let num1 = 2 ;count!==num; num1++){
let x=1
for(let i =2; i<=num1/2+1;i++){
   x*=num1%i
}
if(x||num1==2){
	result=num1
	++count
 }
}
console.log(result)