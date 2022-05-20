//1. Create a function that builds a tree.
const treeNodes = [
{id: 1, children: [3,]},
{id: 2, children: [4, 5]},
{id: 3, children: [6]},
{id: 4, children: [7]},
{id: 5, children: []},
{id: 6, children: []},
{id: 7, children: [8, 9]},
{id: 8, children: []},
{id: 9, children: [10]},
{id: 10, children: []},
{id: 'root',children: [1, 2]},
]
function treeObj(arr1,i=0,tree={}) {
arr=arr1.sort(function(a,b){
  if(a.id=='root'){
    return-1
  }
})
  if(i!=arr.length){
    let {id,children}=arr[i]
    if(id=='root'){
      for(let i=0;i<children.length;i++){
        tree[children[i]]=[];
      }
     }
    function getProp(tree,id,children,condition=1){
      for(let key in tree){
        if(id==key){
          tree[key]={}
          for(let i=0;i<children.length;i++){
            tree[key][children[i]]=[] 
          }
          condition=0
        }
          if(condition){
            getProp(tree[key],id,children)
         }
       }
      }
    getProp(tree,id,children);
    i++
    treeObj(arr,i,tree)
  }
  return tree
}
let result=treeObj(treeNodes)
console.log(result)
//2. Write a JavaScript function to get all possible subsets of given length of the given
//array.
function aaa(arr,n,newArr=[],set1=new Set(),set2=new Set()){
  for(let i=0;set2.size<n;i++){
   let el=arr[Math.round(Math.random()*(arr.length-1))]
   set2.add(el)
  }
  let arr1=[]
  for(let value of set2.values()){
    arr1.push(value)
  }
  arr1=arr1.sort((a,b)=>a-b)
  let str=arr1.reduce(function(total,curent){
    return total+curent
  },'') 
  let num=1
  let step=(n-2)*(arr.length-n)
  for(let i=0;i<arr.length-n;i++){
    let j
    for(j=0;j<=i*(n-2);j++){
         step+=arr[j];   
    }
    num+=step+arr[i]
    step=0
  }
  if(n==1){
    num=arr.length
  }
  if(set1.size<num){
    set1.add(str)
    aaa(arr,n,newArr,set1)
  }else{
    for(let value of set1.values()){
      newArr.push(value)
      newArr=newArr.sort((a,b)=>a-b)
         }
  }
newArr=newArr.map((el)=>(el.split('').map((el)=>Number(el))))
  return newArr
}
let result=aaa([1,2,3,4,5,6],4)
console.log(result)

//erkrord tarberak vor@ ashxatuma 1,2,3,depqum
function a(arr,n,newArr=[],firstI=0,nextI=1,curentI=2){    
  if(newArr.length!=n){
    newArr[0]=arr[firstI];
  }
  if(newArr.length!=n){
    newArr[1]=arr[nextI]
  }
  if(newArr.length!=n){
    newArr.push(arr[curentI])
  }
  if(newArr.length==n){
    console.log(newArr)
    if(curentI!=arr.length-1){
      curentI=arr.indexOf(newArr[2])
    }
    if(arr.indexOf(newArr[1])==-1){
      nextI=arr.length
    }
    newArr=[]
  }
   if(curentI==-1){
    curentI=arr.length
  }
   if(curentI<arr.length-1){
    curentI++;
    a(arr,n,newArr,firstI,nextI,curentI)
  }else if(nextI<arr.length-n+1){
    nextI++;
    a(arr,n,newArr,firstI,nextI,nextI+1)
  }else if(arr.length>n){
    arr.shift();
    a(arr,n)
  }
 }

 a([1,2,3,4,5,6],4)
 // 3 Create a decorator delay(f, ms) that delays each call of ‘f’ by ‘ms’ milliseconds.
  function a(x){
  console.log(x)
 }
 function dec(){
  let i=0
    return function res(fn,ms,p='hello'){
      i++
      setTimeout(()=>fn(p),ms)
    }
 }
 let delay =dec();
 delay(a,1000)
 delay(a,3000)
 delay(a,5000)
 
 //4. Implement Debounce decorator
  function b(name){
  console.log(name)
 }
 function a(){
  let name=""
  let time=0
  let arr=[]
    let i=-1
  return function res(fn,ms=0,char,msFirst=2000){
    if(ms>=msFirst){
      name='';
      i=-1;
      arr=[]
    }
    name+=char
    time=ms+msFirst 
       let timerId = setTimeout(fn,time,name) 
          arr.push(timerId)
       function clear(i){
        clearTimeout(arr[i])
       } 
       clear(i)
       i++
   }
 }
 let call=a();
 call(b,500,'H')
 call(b,800,'a')
 call(b,1000,'r')
 call(b,1200,'u')
 call(b,1300,'t')
 call(b,2000,'H.')