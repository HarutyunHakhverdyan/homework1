//1Given an object. Invert it (keys become values and values become keys). If there is
//more than key for that given value create an array.

function newObj(obj) {
    debugger
    let lastObj={};
    let arr=[]
    for(let firstKey1 in obj){
        let event1=1
        let event2=0
        for(let firstKey2 in obj){
            if(obj[firstKey1]===obj[firstKey2]){
            if(firstKey1!=firstKey2){
           event1=0
           event2=1
           arr.push(firstKey2);  
          }else if(event2){
            arr.push(firstKey1);
          }
        }
    }
    lastObj[obj[firstKey1]]=arr
        arr=[]
        if(event1){
            lastObj[obj[firstKey1]]=firstKey1
        }
    }
    return lastObj
}
let firstObj={
    g:'55',
    p:'6',
    t:'4',
    a:'2',
    c:'2',
    d:'2',
    f:'3',
    h:'98',
    b:'3',
    e:'3',
    k:'4'

};
let result = newObj(firstObj);
console.log(result)
// 2 Given two objects. Write a function that performs shallow compare.

function shallowCompare(a, b){
    debugger
    let key2
    let p=1
    let n1=0
    let n2=0
    for(let key1 in a){
        let k=0
        n2=0
        n1++
        for(key2 in b){
            n2++
          if(key1==key2&&a[key1]==b[key2]){
            k=1
          }
        }
        p*=k
  }
  if(p&&n2==n1) {
    return true
   }
   return false
}
let obj1={
    a:1,
    b:2,
    c:23
};
let obj2={
    a:1,
    b:2,
    c:23,
    f:67
};
let result = shallowCompare(obj1,obj2)
console.log(result)
//3. Given an array. Determine whether it consists only from uniques or not.

function uniqueOrNot(arr){
    for(let i =0;i<arr.length;i++){ 
       for(let j =0;j<arr.length;j++){
            if(i!=j){
              if(arr[i]==arr[j]){
                return 'There are repetitions in the mass'
             }
           }
        } 
    }
    return 'The mass consists of uniques'    
};
let arr1 = [1,2,3,4,5,6,7,8,78,]
let result = uniqueOrNot(arr1);
console.log(result)
alert(2)
//4. Determine if a word or phrase is an isogram. An isogram (also known as a &quot;non pattern
//word&quot;) is a word or phrase without a repeating letter.
function isogram(word){
    for(let i=0;i<word.length;i++){
        for(let j=0;j<word.length;j++){
            if(i!=j){
                if(word[i]==word[j]){
                    return false
                }
            }
        }
    }
    return true
}
let word1='asdfghjkla'
let result=isogram(word1);
console.log(result)
//5. Given an array of integers. All numbers are unique. Find the count of missing numbers
//between minimum and maximum elements to make integers sequence.
function count(arr){
    let max=arr[0];
    let min=arr[0];
    let n
    for(let i = 0;i<arr.length;i++){
        if(max<=arr[i]){
            max=arr[i]
        }
        if(min>=arr[i]){
            min=arr[i]
        }
    }
     n=max-min-arr.length+1
    return n
}
let arr1=[34,11,8,41,23]
let result = count(arr1);
console.log(result)