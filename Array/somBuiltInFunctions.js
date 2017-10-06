// The mutator function for adding array elements to the beginning of an array is unshift(). Here is how the function works:
var nums = [2,3,4,5];
console.log(nums); // 2,3,4,5
var newnum = 1;
nums.unshift(newnum);
console.log(nums); // 1,2,3,4,5

// The second call to unshift() demonstrates that you can add multiple elements to an array with one call to the function.
nums = [3,4,5];
nums.unshift(newnum,1,2);
console.log(nums); // 1,2,3,4,5

// The mutator function we need to remove an element from the beginning of an array is shift(). Here is how the function works:
var nums = [9,1,2,3,4,5];
nums.shift();
console.log(nums); // 1,2,3,4,5

//adds elements to the middle of an array:
var nums = [1,2,3,7,8,9];
var newElements = [4,5,6];
nums.splice(3,0,newElements);
console.log(nums); // 1,2,3,4,5,6,7,8,9

// The elements spliced into an array can be any list of items passed to the function, not necessarily a named array of items. For example:
var nums = [1,2,3,7,8,9];
nums.splice(3,0,4,5,6);
console.log(nums);

// In the preceding example, the arguments 4, 5, and 6 represent the list of elements we want to insert into nums.
// Here is an example of using splice() to remove elements from an array:
var nums = [1,2,3,100,200,300,400,4,5];
nums.splice(3,4);
console.log(nums); // 1,2,3,4,5

//  reverse()
var nums = [1,2,3,4,5];
nums.reverse();
console.log(nums); // 5,4,3,2,1

// sort()
var names = ["Saurabh","Amit","Suman","Nibin","Karishma","Payal"];
names.sort();
console.log(names); // [ 'Amit', 'Karishma', 'Nibin', 'Payal', 'Saurabh', 'Suman' ]

var nums = [3,1,2,100,4,200];
nums.sort();
console.log(nums); // 1,100,2,200,3,4

// compare function for sorting
function compare(num1, num2) {
   return num1 - num2;
}
var nums = [3,1,2,100,4,200];
nums.sort(compare);
console.log(nums); // 1,2,3,4,100,200

//  every(), applies a Boolean function to an array and returns true if the function can return true for every element in the array. 
function isEven(num) {
   return num % 2 == 0;
}
var nums = [2,4,6,8,10];
var even = nums.every(isEven);
if (even) {
   console.log("all numbers are even");
}
else {
   console.log("not all numbers are even");
}

// some() function will take a Boolean function and
// return true if at least one of the elements in the array meets the criterion of the Boolean function.
function isEven(num) {
   return num % 2 == 0;
}
var nums = [1,2,3,4,5,6,7,8,9,10];
var someEven = nums.some(isEven);
if (someEven) {
   console.log("some numbers are even");
}
else {
   console.log("no numbers are even");
}

// The map method is used to convert each item of an array, while the filter method is used to select certain items of an array.

// The filter() function works similarly to every(), but instead of returning true if all the elements of an array satisfy
// a Boolean function, the function returns a new array consisting of those elements that satisfy the Boolean function.
function passing(num) {
   return num >= 60;
}
var grades = [];
for (var i = 0; i < 20; ++i) {
   grades[i] = Math.floor(Math.random() * 101);
}
var passGrades = grades.filter(passing);
console.log("All grades: ");
console.log(grades);
console.log("Passing grades: ");
console.log(passGrades);

// remove Duplicate elements from array
var a = [1,1,1,12,3,4,2,4,];

function removeDuplicate(arr){
  return arr.filter(function(item,index,self){
    return self.indexOf(item) == index;
  });
}
var b = removeDuplicate(a);
console.log(b); // [ 1, 12, 3, 4, 2 ]

// sum of element in array
function sum(arr){
  return arr.reduce(function(a,b){
    return a+b
  },0)
}
console.log(sum(a)); // 28

// diff between join and() toString()
/*
toString() is a method that you can find not only in Array Arr, but in every object.
join allows you to convert every element of the Array object in to a string,
and joining together using a separator. It behaves just like toString for Array Arr, 
but you can also specify the separator:
*/

var Arr = ['i', 'love', 'JS'];
console.log(Arr.join(" "))   //i love JS
console.log(Arr.toString()); // i,love,JS

/** Fibonacci number (F10 = 55) **/
let fibonacciNumber = index => {
  let a=0,b=1,temp;
  while (index>1){
    temp=b;
    b=b+a;
    a=temp;
    index--;
  }
  return b;
};

console.log('Fibonacci Number: '+fibonacciNumber(10));

/** Fibonacci series (Fn = Fn-1 + Fn-2) **/
let fibonacciSeries = index => {
  let a=0,b=1,temp,fbArray=[0,1];
  while (index>1){
    temp=b;
    b=b+a;
    a=temp;
    fbArray.push(b);
    index--;
  }
  return fbArray.join(',');
};

console.log('Fibonacci Series: '+fibonacciSeries(10));

/** Flatten an array **/
let nestedArray = [[1,2],[3,4],[12,34],[2,5],[7,89]];
let flattenArray = arr => {
  return arr.reduce((previousValue,nextValue) =>{
     return previousValue.concat(nextValue);
  });
};

console.log('Flattened Array: '+flattenArray(nestedArray));

/** Array - sorting numbers **/
let numericArray = [1,10,3,33,2,4,7,15,9];
let sortNumberCallback = (a,b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0; //if a==b;
};

console.log(numericArray.sort(sortNumberCallback));

/** Array - sorting strings **/
let stringArray = ['anna','ben','zora','Clen','Aura','Matt','BOND'];
let sortStringCallback = (a,b) => {
  if (a.toLowerCase() < b.toLowerCase()) return -1;
  if (a.toLowerCase() > b.toLowerCase()) return 1;
  return 0; //if a==b;
};

console.log(stringArray.sort(sortStringCallback));

/** Array - sorting objects on a property **/
let arrayOfObj = [{
  'name':'john',
  'age':45
},{
  'name':'kyle',
  'age':15
},{
  'name':'ammy',
  'age':35
}];
let sortOjbCallback = (a,b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0; //if a==b;
};

console.log(arrayOfObj.sort(sortOjbCallback));
