//1. Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements
//starting from a to b spaced by step.

function newArr(a,b,step){
    let arr = []
    for(let i = a; i<=b; i+=step){
        arr.push(i)
    }
    return arr
}
let result = newArr(1,8,0.5);
console.log(result);
//2. Given a string and a symbol. Find the number of occurrences of the symbol in the string.

function getNumSymbol(str,symbol){
    let num = 0;
    for(let i = 0;i<str.length; i++){
        if(str[i]===symbol){
            num++
        }
    }
    return num
}
let result = getNumSymbol('barev Harut','a');
console.log(result);

//3. Given a string. Check whether the string is palindrome or not.

function palindrom(str){
    for(let i = 0; i<str.length; i++){
        if(str[i]==str[str.length-1-i]){
            return 'Yes'
        }else{
            return 'No'
        }
    }
}
let result = palindrom('ara');
console.log(result);

//4. Given an array of numbers. Find the maximum element in array.

function arrMax(arr){
    let max=arr[0]
    for(let i = 0; i<arr.length;i++){
        if(max<=arr[i]){
            max=arr[i]
        }
    }
    return max
}
let result = arrMax([37,12,9,1,2,3,7,23]);
console.log(result);
//5. Given an array. Create the array which elements are products between two neighbours.

function newArr(arr){
    let arrNew = [];
    for(let i = 0; i<arr.length-1; i++){
        arrNew.push(arr[i]*arr[i+1])
    }
    return arrNew
}
let result = newArr([1,2,3,3,10])
console.log(result);
//6. Given a string and symbols. Change first symbol by the second one in the string.

function newStr(str,symbol1,symbol2){
    let strNew = '';
    for(let i = 0;i<str.length; i++){
        if(str[i]!=symbol1){
            strNew+=str[i]
        }else{
            strNew+=symbol2
        }
    }
    return strNew
}
let result = newStr('Barev harut','h','H')
console.log(result);

//7. Print the following number pattern:

function printNum(num){
    let arr=[]
    let k=2*num-2
    let num1=''
    for(let i = 1; i<=num; i++){
        num1 += i;
        arr[i-1]=num1
        arr[k--]=num1
    }
    let print =''
    //return arr
    for(let i = arr.length; i>0; i--){
        print+=arr.pop()+'\n'
    }
  return print
}
let result = printNum(9)
console.log(result)