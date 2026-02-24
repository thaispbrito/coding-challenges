/*-----------------------------------------------------------------------------
Challenge: 00-sayHello (example)

Difficulty: Basic

Prompt:

Write a function called sayHello that returns the string "Hello!".

Examples:

sayHello() //=> Hello!
-----------------------------------------------------------------------------*/
// Your solution for 00-sayHello (example) here:


function sayHello() {
  return "Hello!";
}


/*-----------------------------------------------------------------------------
Challenge: 01-addOne

Difficulty: Basic

Prompt:

Write a function called addOne that takes a single number as an argument and 
returns that number plus 1.

Examples:

addOne(1) //=> 2
addOne(-5) //=> -4
-----------------------------------------------------------------------------*/
// Your solution for 01-addOne here:

const addOne = (num) => {
  return num + 1;
}

addOne(15);



/*-----------------------------------------------------------------------------
Challenge: 02-addTwoNumbers

Difficulty: Basic

Prompt:

- Write a function called addTwoNumbers that accepts two numeric arguments and 
  returns the sum of those two numbers.
- If either argument is not a number, return the value of NaN.

Examples:

addTwoNumbers(5, 10) //=> 15
addTwoNumbers(10, -2) //=> 8
addTwoNumbers(0, 0) //=> 0
addTwoNumbers('Hello', 5) //=> NaN
-----------------------------------------------------------------------------*/
// Your solution for 02-addTwoNumbers here:

const addTwoNumbers = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return NaN;
  }
  return num1 + num2;
}

addTwoNumbers(2, 'Nature');


/*-----------------------------------------------------------------------------
Challenge: 03-sumNumbers

Difficulty: Basic

Prompt:

- Write a function called sumNumbers that accepts a single array of numbers and 
  returns the sum of the numbers in the array.
- If the array is empty, return 0 (zero).

Examples:

sumNumbers([10]) //=> 10
sumNumbers([5, 10]) //=> 15
sumNumbers([2, 10, -5]) //=> 7
sumNumbers([]) //=> 0
-----------------------------------------------------------------------------*/
// Your solution for 03-sumNumbers here:

const sumNumbers = (arrayNums) => {
  if (arrayNums.length === 0) {
    return 0;
  }
  let arraySum = 0;
  for (let i = 0; i < arrayNums.length; i++) {
    arraySum += arrayNums[i];
  }
  return arraySum;
}

sumNumbers([15, 2, 6]);


/*-----------------------------------------------------------------------------
Challenge: 04-addList

Difficulty: Basic

Prompt:

- Write a function called addList that accepts any quantity of numbers as 
  arguments, adds them together, and returns the resulting sum.
- Assume all parameters will be numbers.
- If called with no arguments, return 0 (zero).

Examples:

addList(1) //=> 1
addList(1,50,1.23) //=> 52.23
addList(7,-12) //=> -5
-----------------------------------------------------------------------------*/
// Your solution for 04-addList here:

const addList = (...nums) => {
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }
  return totalSum;
}

addList(5, 2, 7, 4);


/*-----------------------------------------------------------------------------
Challenge: 05-computeRemainder

Difficulty: Basic

Prompt:

- Write a function named computeRemainder that accepts two numeric arguments 
  and returns the remainder of the division of those two numbers.
- The first argument should be the dividend, and the second argument should be 
  the divisor.
- If a 0 is passed in as the second argument, you should return JavaScript's 
  special numeric value: Infinity.
- For extra fun, complete this challenge without using the modulus (%) operator.

Examples:

computeRemainder(10,2) //=> 0
computeRemainder(4,0) //=> Infinity
computeRemainder(10.5, 3) //=> 1.5
-----------------------------------------------------------------------------*/
// Your solution for 05-computeRemainder here:

const computeRemainder = (num1, num2) => {
  if (num2 === 0) {
    return Infinity;
  }
  return num1 - num2 * Math.trunc(num1 / num2);  // formula for calculating the remainder
}


/*-----------------------------------------------------------------------------
Challenge: 06-range

Difficulty: Basic

Prompt:

- Write a function called range that accepts two integers as arguments and 
  returns an array of integers starting with the first argument up to one 
  less than the second argument.
- The range function must be called with the first argument less than or equal 
  to the second argument; otherwise, return the string "First argument must be 
  less than second".

Examples:

range(1,4) //=> [1,2,3]
range(-2, 3) //=> [-2,-1,0,1,2]
range(1,1) //=> []
range(5,2) //=> "First argument must be less than second"
-----------------------------------------------------------------------------*/
// Your solution for 06-range here:

const range = (int1, int2) => {
  const arr = [];
  if (int1 <= int2) {
    for (let i = int1; i < int2; i++) {
      arr.push(i);
    }
    return arr;
  }
  return "First argument must be less than second"
}

range(2, 7);

/*-----------------------------------------------------------------------------
Challenge: 07-reverseUpcaseString

Difficulty: Basic

Prompt:

- Write a function called reverseUpcaseString that accepts a single string 
  argument.
- The reverseUpcaseString function should return the string with its characters 
  in reverse order and convert all characters to uppercase.

Examples:

reverseUpcaseString("SEI Rocks!") //=> "!SKCOR IES" 
-----------------------------------------------------------------------------*/
// Your solution for 07-reverseUpcaseString here:

const reverseUpcaseString = (str) => {
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse.toUpperCase();
}

reverseUpcaseString("ENJOY the little things!");

/*-----------------------------------------------------------------------------
Challenge: 08-removeEnds

Difficulty: Basic

Prompt:

- Write a function called removeEnds that accepts a single string argument, 
  then returns a string with the first and last characters removed.
- If the length of the string argument is less than 3, return an empty string.

Examples:

removeEnds('SEB Rocks!') //=> "EB Rocks"
removeEnds('a') //=> "" (empty string)
-----------------------------------------------------------------------------*/
// Your solution for 08-removeEnds here:

const removeEnds = (str) => {
  if (str.length < 3) {
    return '';
  }

  // Option 1: Just use the slice method
  return str.slice(1, str.length - 1);

  // Option 2: array, for loop and two methods
  // let arr = [];
  // for (let i = 0; i < str.length; i++) {
  //   if (i !== 0 && i !== str.length - 1) {
  //     arr.push(str[i]);
  //   }
  // }
  // return arr.join('');
};

removeEnds("ENJOY the little things!");

/*-----------------------------------------------------------------------------
Challenge: 09-charCount

Difficulty: Basic

Prompt:

- Write a function named charCount that accepts a single string argument and 
  returns an object that represents the count of each character in the string.
- The returned object should have keys representing the character with its 
  value set to the number of times the character appears in the string argument.
- Upper and lower case characters should be counted separately.
- Space characters should be counted too.

Examples:

charCount('hello') 
//=> { h: 1, e: 1, l: 2, o: 1 }

charCount('Today is fantastic!') 
//=> { 
  T: 1, 
  o: 1, 
  d: 1, 
  a: 3, 
  y: 1, 
  ' ': 2, 
  i: 2, 
  s: 2, 
  f: 1, 
  n: 1, 
  t: 2, 
  c: 1, 
  '!': 1 
}
-----------------------------------------------------------------------------*/
// Your solution for 09-charCount here:

const charCount = (str) => {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }

  return obj;
};

charCount('Happy');

/*-----------------------------------------------------------------------------
Challenge: 10-formatWithPadding

Difficulty: Basic

Prompt:

- Write a function called formatWithPadding that accepts three arguments:
  - A numeric argument (an integer) representing the number to format.
  - A string argument (a single character) representing the character used to 
    "pad" the returned string to a minimum length.
  - Another numeric argument (an integer) representing the length to pad
    the returned string to.
- The function should return the integer as a string, left padded to the 
  length of the 3rd arg using the character provided in the 2nd arg.
- If the length of the integer converted to a string is equal or greater than 
  the 3rd argument, no padding is needed - just return the integer as a string.

Examples:

formatWithPadding(123, '0', 5) //=> "00123"
formatWithPadding(42, '*', 10) //=> "********42"
formatWithPadding(1234, '*', 3) //=> "1234"
-----------------------------------------------------------------------------*/
// Your solution for 10-formatWithPadding here:

const formatWithPadding = (num1, char, num2) => {

  let numStr1 = num1.toString();   // Converting number to a string

  if (numStr1.length >= num2) {
    return numStr1;
  } else {
    return char.repeat(num2 - numStr1.length) + numStr1;
  }
};

// console.log(formatWithPadding(123, '0', 5))


/*-----------------------------------------------------------------------------
Challenge: 11-isPalindrome

Difficulty: Intermediate

Prompt:

- Write a function called isPalindrome that accepts a single string argument, 
  then returns true or false depending upon whether or not the string is a 
  palindrome.
- A palindrome is a word or phrase that is the same forward or backward.
- Casing and spaces are not included when considering whether or not a string 
  is a palindrome.
- If the length of the string is 0 or 1, return true.

Examples:

isPalindrome('SEI Rocks') //=> false
isPalindrome('rotor') //=> true
isPalindrome('A nut for a jar of tuna') //=> true
isPalindrome('') //=> true
-----------------------------------------------------------------------------*/
// Your solution for 11-isPalindrome here:

const isPalindrome = (str) => {
  if (str.length <= 1) {
    return true;
  }
  const strNew = str.toLowerCase().replaceAll(' ', '');
  let strReverse = '';

  for (let i = strNew.length - 1; i >= 0; i--) {
    strReverse += strNew[i];
  }

  return strNew === strReverse;

}

// console.log(isPalindrome('SEI Rocks'));
// console.log(isPalindrome('rotor'));

/*-----------------------------------------------------------------------------
Challenge: 12-hammingDistance

Difficulty: Intermediate

Prompt:

In information theory, the hamming distance refers to the count of the 
differences between two strings of equal length. It is used in computer science 
for such things as implementing a "fuzzy search" capability.

- Write a function named hammingDistance that accepts two arguments, which are 
  both strings of equal length.
- The function should return the count of the symbols (characters, numbers, 
  etc.) at the same position within each string that are different.
- If the strings are not of the same length, the function should return NaN.

Examples:

hammingDistance('abc', 'abc') //=> 0
hammingDistance('a1c', 'a2c') //=> 1
hammingDistance('!!!!', '****') //=> 4
hammingDistance('abc', 'ab') //=> NaN
-----------------------------------------------------------------------------*/
// Your solution for 12-hammingDistance here:
const hammingDistance = (str1, str2) => {

  if (str1.length !== str2.length) {
    return NaN;
  }

  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      count += 1;
    }
  }
  return count;

}

// console.log(hammingDistance('abc', 'abc'));
// console.log(hammingDistance('a1c', 'a2c'));
// console.log(hammingDistance('!!!!', '****'));
// console.log(hammingDistance('abc', 'ab'));


/*-----------------------------------------------------------------------------
Challenge: 13-mumble

Difficulty: Intermediate

Prompt:

- Write a function called mumble that accepts a single string argument.
- The function should return a string that has each character repeated the 
  number of times according to its position within the string arg. 
  Additionally, each repeated section of characters should be separated by a 
  hyphen (-).
- Examples describe it best..

Examples:

mumble('X') //=> 'X'
mumble('abc') //=> 'a-bb-ccc'
mumble('121') //=> '1-22-111'
mumble('!A 2') //=> '!-AA-   -2222'
-----------------------------------------------------------------------------*/
// Your solution for 13-mumble here:
const mumble = (str) => {

  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i].repeat(i + 1));
  }

  return arr.join("-");
}

// console.log(mumble('abc'))
/*-----------------------------------------------------------------------------
Challenge: 14-fromPairs

Difficulty: Intermediate

Prompt:

- Write a function named fromPairs that creates an object from an array 
  containing nested arrays.
- Each nested array will have two elements representing key/value pairs used 
  to create key/value pairs in an object to be returned by the function.
- If a key appears in multiple pairs, the rightmost pair should overwrite the 
  previous entry in the object.

Examples:

fromPairs([ ['a', 1], ['b', 2], ['c', 3] ]) 
//=> { a: 1, b: 2, c: 3 }

fromPairs([ ['name', 'Sam'], ['age', 24], ['name', 'Sally'] ]) 
//=> { name: "Sally", age: 24 }
-----------------------------------------------------------------------------*/
// Your solution for 14-fromPairs here:
const fromPairs = (arr) => {

  const obj = {};

  for (let i = 0; i < arr.length; i++) {

    const key = arr[i][0];
    const value = arr[i][1];
    obj[key] = value;

  }
  return obj;

};

// console.log(fromPairs([ ['a', 1], ['b', 2], ['c', 3] ]));
// console.log(fromPairs([['name', 'Sam'], ['age', 24], ['name', 'Sally']]));

/*-----------------------------------------------------------------------------
Challenge: 15-mergeObjects

Difficulty: Intermediate

Prompt:

- Write a function named mergeObjects that accepts at least two objects as 
  arguments, merges the properties of the second through n objects into the 
  first object, then finally returns the first object.
- If any objects have the same property key, values from the object(s) later 
  in the arguments list should overwrite earlier values.

Examples:

mergeObjects({}, {a: 1}) 
//=> {a: 1} ( returns a modified version of the object passed into the 
              function as the first argument )

mergeObjects({a: 1, b: 2, c: 3}, {d: 4}) 
//=> {a: 1, b: 2, c: 3, d: 4}

mergeObjects({a: 1, b: 2, c: 3}, {d: 4}, {b: 22, d: 44}) 
//=> {a: 1, b: 22, c: 3, d: 44}
-----------------------------------------------------------------------------*/
// Your solution for 15-mergeObjects here:

// Use the rest parameter 
const mergeObjects = (obj1, ...rest) => {

  for (let i = 0; i < rest.length; i++) {
    for (let key in rest[i]) {
      obj1[key] = rest[i][key];
    }
  }
  return obj1;

}

// console.log(mergeObjects({a: 1, b: 2, c: 3}, {d: 4}));
// console.log(mergeObjects({a: 1, b: 2, c: 3}, {d: 4}, {b: 22, d: 44})); 

/*-----------------------------------------------------------------------------
Challenge: 16-findHighestPriced

Difficulty: Intermediate

Prompt:

- Write a function named findHighestPriced that accepts a single array of 
  objects.
- The objects contained in the array are guaranteed to have a price property 
  holding a numeric value.
- The function should return the object in the array with the largest value 
  held in the price property.
- If there's a tie between two or more objects, return the first of those 
  objects in the array.
- Return the original object, not a copy.
- Do not mutate the array that is passed in.

Examples:

findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 5 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
])
//=> { sku: 'c3', price: 50 } 

findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 50 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
])
//=> { sku: 'b2', price: 50 }
-----------------------------------------------------------------------------*/
// Your solution for 16-findHighestPriced here:

const findHighestPriced = (arr) => {

  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].price > arr[index].price) {
      index = i;
    }
  }
  return arr[index];
}

// console.log(findHighestPriced([
//   { sku: 'a1', price: 25 },
//   { sku: 'b2', price: 10 },
//   { sku: 'c3', price: 50 },
//   { sku: 'd4', price: 5 }
// ]));

// console.log(findHighestPriced([
//   { sku: 'a1', price: 25 },
//   { sku: 'b2', price: 50 },
//   { sku: 'c3', price: 50 },
//   { sku: 'd4', price: 10 }
// ]));

/*-----------------------------------------------------------------------------
Challenge: 17-mapArray

Difficulty: Intermediate

Prompt:

The goal of this challenge is to write a function that performs the 
functionality of JavaScript's Array.prototype.map method.

- Write a function named mapArray that accepts two arguments: a single array 
  and a callback function.
- The mapArray function should return a new array of the same length as the 
  array argument.
- The mapArray function should iterate over each element in the array (first 
  arg). For each iteration, invoke the callback function (2nd arg), passing to 
  it as arguments, the current element, and its index.
- Whatever is returned by the callback function should be included in the new 
  array at current iteration's index.

Examples:

mapArray( [1, 2, 3], function(n) {
  return n * 2
} )
//=> [2, 4, 6] (a new array)

mapArray( ['rose', 'tulip', 'daisy'], function(f, i) {
  return `${i + 1} - ${f}`
} )
//=> ["1 - rose", "2 - tulip", "3 - daisy"]
-----------------------------------------------------------------------------*/
// Your solution for 17-mapArray here:

const mapArray = (arr, callback) => {

  let arrNew = [];

  for (let i = 0; i < arr.length; i++) {
    arrNew.push(callback(arr[i], i));
  }

  return arrNew;

}

// console.log(mapArray( [1, 2, 3], function(n) {
//   return n * 2
// } ))

// console.log(mapArray( ['rose', 'tulip', 'daisy'], function(f, i) {
//   return `${i + 1} - ${f}`
// } ))

/*-----------------------------------------------------------------------------
Challenge: 18-reduceArray

Difficulty: Intermediate

Prompt:

The goal of this challenge is to write a function that performs the 
functionality of JavaScript's Array.prototype.reduce method.

- Write a function named reduceArray that accepts three arguments: 
    1. An array
    2. A callback function
    3. value used as the initial value of the accumulator
- The reduceArray function should return whatever is returned by the callback
  function on the last iteration.
- The reduceArray function should iterate over each element in the array 
  (first arg). For each iteration, invoke the callback function (2nd arg), 
  passing to it three arguments: 
    1. The "accumulator", which is the value returned by the callback during 
      the previous iteration 
    2. The current element
    3. The index of the current iteration
- On the first iteration, provide the third argument passed to reduceArray as 
  the first argument when invoking the callback. For subsequent iterations, 
  provide the value returned by the callback during the previous iteration.

Examples:

reduceArray( [1, 2, 3], function(acc, n) {
  return acc + n
}, 0)
//=> 6

reduceArray( [1, 2, 3], function(acc, n, i) {
  return acc + n + i
}, 0)
//=> 9

reduceArray( ['Yes', 'No', 'Yes', 'Maybe'], function(acc, v) {
  acc[v] = acc[v] ? acc[v] + 1 : 1
  return acc
}, {} )
//=> {"Yes": 2, "No": 1, "Maybe": 1}
-----------------------------------------------------------------------------*/
// Your solution for 18-reduceArray here:

const reduceArray = (arr, callback, acc) => {

  for (let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i], i);
  }

  return acc;
}

console.log(reduceArray([1, 2, 3], function (acc, n) {
  return acc + n
}, 0)) //=> 6

/*-----------------------------------------------------------------------------
Challenge: 19-flatten

Difficulty: Intermediate

Prompt:

- Write a function named flatten that accepts a single array that may contain nested arrays and returns a new "flattened" array.
- A flattened array is an array that contains no nested arrays.
- Arrays maybe nested at any level.
- If any of the arrays have duplicate values those duplicate values should be present in the returned array.
- The values in the new array should maintain their ordering as shown in the examples below.

Hint: This assignment provides an excellent opportunity to use recursion (a
function that calls itself). You can also solve it by using an inner function.

Examples:

flatten( [1, [2, 3]] );
//=> [1, 2, 3]  (a new array) 
flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] );
//=> [1, 2, 3, 4, 1, 'a', 'b', 'c']
-----------------------------------------------------------------------------*/
// Your solution for 19-flatten here:

const flatten = (arr) => {

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {

    if (Array.isArray(arr[i])) {

      newArr.push(...flatten(arr[i]));  // using the spread operator

    } else {
      newArr.push(arr[i]);
    }

  }
  return newArr;
}

/*-----------------------------------------------------------------------------
Challenge: 20-primeFactors

Difficulty: Intermediate

Prompt:

Now that you have solved the last challenge of determining if a whole number is
prime, let's expand upon that concept to...

- Write a function named primeFactors that accepts a whole number greater than
  one (1) as an argument and returns an array of that argument's prime factors.
- The prime factors of a whole number are the prime numbers that, when
  multiplied together, equals the whole number.
- If the argument provided is not greater than 1, or not a whole number, then
  primeFactors should return an empty array.

Examples:

primeFactors(2) //=> [2]
primeFactors(3) //=> [3]
primeFactors(4) //=> [2, 2]
primeFactors(18) //=> [2, 3, 3]
primeFactors(29) //=> [29]
primeFactors(105) //=> [3, 5, 7]
primeFactors(200) //=> [2, 2, 2, 5, 5]

Hint: Code a nested isPrime(n) helper function that returns true if n is prime, otherwise it returns false
-----------------------------------------------------------------------------*/
// Your solution for 20-primeFactors here:

function primeFactors(num) {

  if (num <= 1 || !Number.isInteger(num)) return [];

  let primes = [];
  let numCopy = num; // make a working copy of the original number
  let divisor = 2;  // smallest possible divisor (smallest prime number)

  // Loop until the numCopy is completely factored
  while (numCopy > 1) {
    // Check if the divisor is a valid prime factor
    if (isPrime(divisor) && numCopy % divisor === 0) {
      primes.push(divisor);
      numCopy = numCopy / divisor;
      // Increase the divisor, when it's not working anymore
    } else {
      divisor++;
    }
  }

  return primes;

}

// console.log(primeFactors(2)) //=> [2]
// console.log(primeFactors(3)) //=> [3]
// console.log(primeFactors(4)) //=> [2, 2]
// console.log(primeFactors(18)) //=> [2, 3, 3]
// console.log(primeFactors(29)) //=> [29]
// console.log(primeFactors(105)) //=> [3, 5, 7]
// console.log(primeFactors(200)) //=> [2, 2, 2, 5, 5]

/*-----------------------------------------------------------------------------
Challenge: 21-isPrime

Difficulty: Intermediate

Prompt:

- Write a function named isPrime that returns true when the integer argument 
  passed to it is a prime number and false when the argument passed to it is 
  not prime.
- A prime number is a whole number (integer) greater than 1 that is evenly 
  divisible by only itself.

Examples:

isPrime(2) //=> true
isPrime(3) //=> true 
isPrime(4) //=> false
isPrime(29) //=> true
isPrime(200) //=> false
-----------------------------------------------------------------------------*/
// Your solution for 21-isPrime here:

function isPrime(num) {

  if (!Number.isInteger(num)) return false;
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;

}

/*-----------------------------------------------------------------------------
Challenge: 22-intersection

Difficulty: Intermediate

Prompt:

- Write a function named intersection that accepts two arguments, which are 
  both arrays. The array arguments may contain any mixture of strings, numbers, 
  or booleans - but no reference types (objects).
- The function should return a new array containing all elements in common, 
  including repeating element values.
- The ordering of the elements in the returned array is not important.
- If there are no elements in the arrays in common, the intersection function 
  should return an empty array.
- The function should not mutate (change) either argument.

Examples:

intersection(['a', 1], []) //=> []
intersection(['a', 1], [true, 'a', 15]) //=> ['a']
intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]) //=> [1, true, 1]
-----------------------------------------------------------------------------*/
// Your solution for 22-intersection here:

function intersection(arr1, arr2) {

  let resultElements = [];
  let arr2Copy = arr2.slice()

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2Copy.length; j++) {

      if (arr1[i] === arr2Copy[j]) {
        resultElements.push(arr1[i]);
        // Consume this element
        arr2Copy.splice(j, 1);
        // Stop inner loop after match
        break
      }
    }
  }
  return resultElements;
}

// console.log(intersection(['a', 1], [])) //=> []
// console.log(intersection(['a', 1], [true, 'a', 15])) //=> ['a']
// console.log(intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1])) //=> [1, true, 1]

/*-----------------------------------------------------------------------------
Challenge: 23-balancedBrackets

Difficulty: Intermediate

Prompt:

- Write a function called balancedBrackets that accepts a single string as an 
  argument.
- The input string is composed entirely of parentheses, brackets, or curly 
  braces, i.e., (), [], or {}. Referred to as "braces" from this point forward.
- The balancedBrackets function should return true if the string's braces are 
  "balanced" and false if they are not.
- The brackets are considered unbalanced if any closing bracket does not close 
  the same type of opening bracket, ignoring already matched brackets between 
  them. These examples may explain it best:

Examples:

balancedBrackets( '()' ) // => true
balancedBrackets( '(]' ) // => false
balancedBrackets( '[{}]' ) // => true
balancedBrackets( '[(])' ) // => false
balancedBrackets( '[({}[])]' ) // => true
-----------------------------------------------------------------------------*/
// Your solution for 23-balancedBrackets here:

function balancedBrackets(str) {
  const stack = [];
  const match = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let char of str) {
    // If opening bracket, push to stack
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    }
    // If closing bracket
    else {
      // Stack empty or top doesn't match
      if (stack.pop() !== match[char]) {
        return false;
      }
    }
  }

  // If stack is empty, everything matched
  return stack.length === 0;
}

// console.log(balancedBrackets('()')) // => true
// console.log(balancedBrackets('(]')) // => false
// console.log(balancedBrackets('[{}]')) // => true
// console.log(balancedBrackets('[(])')) // => false
// console.log(balancedBrackets('[({}[])]')) // => true


/*-----------------------------------------------------------------------------
Challenge: 24-isWinningTicket

Difficulty:Intermediate

Prompt:

- Write a function called isWinningTicket that accepts a single array as an
  argument.
- The input array represents a 'lottery ticket' consisting of one or more
  nested 2-value arrays. The first value of a nested array will be a string,
  the second an integer.
- The isWinningTicket function should return true if all of the nested arrays
  have a character in the string whose numeric character code equals the
  integer (2nd value).
- If any of the nested arrays have a string where all of the character's
  character code does not match the integer, then return false.

Hints:

- A character/string can be created from a character code using the String.
  fromCharCode() class method.
- A character within a string's character code can be obtained using the
  charCodeAt() string method.

Examples:

isWinningTicket( [ ['ABC', 65] ] ) // => true
isWinningTicket( [ ['ABC', 999], ['XY', 89] ] ) // => false
isWinningTicket( [ ['ABC', 66], ['dddd', 100], ['Hello', 108] ] ) // => true
isWinningTicket( [ ['ABC', 66], ['dddd', 15], ['Hello', 108] ] ) // => false
-----------------------------------------------------------------------------*/
// Your solution for 24-isWinningTicket here:
function isWinningTicket(arr) {

  for (let i = 0; i < arr.length; i++) {

    // array destructuring
    const [str, num] = arr[i];
    let hasValidChar = false;

    for (let j = 0; j < str.length; j++) {
      if (str.charCodeAt(j) === num) {
        hasValidChar = true;
        break;
      }
    }
    if (!hasValidChar) return false;
  }
  return true;
}

// Solution #2
// function isWinningTicket(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const [str, num] = arr[i];
//     const char = String.fromCharCode(num);

//     if (!str.includes(char)) return false;
//   }
//   return true;
// }

// Solution #3
// function isWinningTicket(arr) {
//   for (let [str, num] of arr) {
//     const char = String.fromCharCode(num);

//     if (!str.includes(char)) return false;
//   }
//   return true;
// }

console.log('------------------');
console.log(isWinningTicket([['ABC', 65]])) // => true
console.log(isWinningTicket([['ABC', 999], ['XY', 89]])) // => false
console.log(isWinningTicket([['ABC', 66], ['dddd', 100], ['Hello', 108]])) // => true
console.log(isWinningTicket([['ABC', 66], ['dddd', 15], ['Hello', 108]])) // => false

/*-----------------------------------------------------------------------------
Challenge: 25-getNumForIP

Difficulty: Intermediate

Prompt:

- Write a function called getNumForIP that accepts a single string as an
  argument.
- The input string is formatted as an IPv4 address used in networking, such as
  '192.156.99.15'. To the computer, IP addresses are 32-bit binary numbers.
  However, people usually find it more convenient to work with these numbers as
  four sets of 8-bit integers in their decimal form. Each set is separated by a
  '.' character.
- The getNumForIP function should return the numeric value of the string IP
  address being passed in as an argument.

Hints:

- Each 8-bit number can hold a value between 0 and 255.
- An IP's right most 8-bit number represents how many of 256 raised to the
  power of 0 (equals 1) there are. The next 8-bit number represents how many of
  256 raised to the power of 1 (256) there are, etc.

  For example, if you took the right-most two 8-bit numbers of the IP address
  192.156.99.15, you would have 15 * (256 ** 0), which equals 15, and 99 *
  (256**1), which equals 25344.
- To compute the numeric value for an IP address, you first compute the value
  for each of the four 8-bit chunks (as described in the above hint), and add
  them together!

Examples:

getNumForIP( '0.0.0.1' ) // => 1
getNumForIP( '0.0.2.0' ) // => 512
getNumForIP( '192.156.99.15' ) // => 3231474447
getNumForIP( '10.0.0.1' ) // => 167772161
-----------------------------------------------------------------------------*/
// Your solution for 25-getNumForIP here:

function getNumForIP(str) {
  const numParts = str.split('.');
  let result = 0;
  for (let i = 0; i < numParts.length; i++) {
    result += Number(numParts[i]) * (256 ** (3 - i));
  }

  return result;
}

// Solution #2
// function getNumForIP(string) {
//   let split = string.split('.')
//   let sum = 0
//   for (let [index, number] of split.entries()) {
//     sum += number*(256**(3-index))
//   }
//   return sum
// }

console.log(getNumForIP('0.0.0.1')) // => 1
console.log(getNumForIP('0.0.2.0')) // => 512
console.log(getNumForIP('192.156.99.15')) // => 3231474447
console.log(getNumForIP('10.0.0.1')) // => 167772161

/*-----------------------------------------------------------------------------
Challenge: 26-toCamelCase

Difficulty: Intermediate

Prompt:

- Write a function called toCamelCase that accepts a single string as an
  argument.
- The toCamelCase function should return the string as camel-cased, removing
  each _ or - characters and capitalizing the character following the _ or -.
- If the string argument does not contain a "_" or a "-", return the same
  string.

Hints:

- This is a great challenge for using regular expressions combined with the
  String.replace() method.

Examples:

toCamelCase( 'sei' ) // => 'sei'
toCamelCase( 'sei-rocks' ) // => 'seiRocks'
toCamelCase( 'banana_Turkey_potato' ) // => 'bananaTurkeyPotato'
toCamelCase( 'Mama-mia' ) // => 'MamaMia'
toCamelCase( 'A_b_c' ) // => 'ABC'
-----------------------------------------------------------------------------*/
// Your solution for 26-toCamelCase here:

const toCamelCase = (str) => {

  const regex = /[-_](.)/g; // [] define a character class; (.) capturing group
  const callback = (_, char) => {
    return char.toUpperCase();
  }
  return str.replace(regex, callback)
}

// const toCamelCase = (str) => {

//   return str.replace(/[_-](.)/g, (group, char) => char.toUpperCase())

// }


console.log(toCamelCase('sei')) // => 'sei'
console.log(toCamelCase('sei-rocks')) // => 'seiRocks'
console.log(toCamelCase('banana_Turkey_potato')) // => 'bananaTurkeyPotato'
console.log(toCamelCase('Mama-mia')) // => 'MamaMia'
console.log(toCamelCase('A_b_c')) // => 'ABC'

/*-----------------------------------------------------------------------------
Challenge: 27-countTheBits

Difficulty: Intermediate

Prompt:

- Write a function called countTheBits that accepts a single numeric argument
  that will be an integer.
- The function should return the number of bits set to 1 in the number's binary
  representation.

Hints:

- We typically work with "decimal" numbers daily. Decimal is "base 10", where
  there are 10 digits available - 0 thru 9. However, it's binary that computers
  understand - 1's and 0's. The 1's and 0's are called bits.
- As an example, the decimal value of 13 is represented in binary as 1101.
  There are 3 one bits and 1 zero bit in the decimal number of 13.
- Carefully read the documentation for the Number.prototype.toString() method.

Examples:

countTheBits( 0 ) // => 0
countTheBits( 13 ) // => 3
countTheBits( 256 ) // => 1
countTheBits( 255 ) //=> 8
countTheBits( 65535 ) //=> 16
-----------------------------------------------------------------------------*/
// Your solution for 27-countTheBits here:

// 13 ÷ 2 = 6 remainder 1
// 6 ÷ 2  = 3 remainder 0
// 3 ÷ 2  = 1 remainder 1
// 1 ÷ 2  = 0 remainder 1

const countTheBits = (num) => {

  let bits = [];

  while (num > 0) {
    if (num % 2 === 1) {
      bits.push(1);
    }
    num = Math.floor(num / 2);
  }

  return bits.length;
}

console.log(countTheBits(0)) // => 0
console.log(countTheBits(13)) // => 3
console.log(countTheBits(256)) // => 1
console.log(countTheBits(255)) //=> 8
console.log(countTheBits(65535)) //=> 16
/*-----------------------------------------------------------------------------
Challenge: 28-gridTrip

Difficulty: Intermediate

Prompt:

- This challenge uses an imaginary grid where the y coordinate increases when
  you move up and decreases when you move down. Similarly, the x coordinate
  increases when you move right and decreases when you move left.
- Write a function called gridTrip that accepts two arguments.
- The first argument is an array containing two integers. The value in the
  first index of the array represents the starting x position on the grid. The
  second value in the array represents the starting y position.
- The second argument is a string representing "moves" using the characters
  'U', 'D', 'R' & 'L' to mean moving Up, Down, Right & Left, respectively. Each
  direction character is followed by digits representing how many units to move
  in that direction. For example, a string of 'D15R2U4' moves down 15 units
  right 2 units, and finally, up 4 units from the starting coordinates.
- The direction characters will always be upper case.
- The gridTrip function should return a new array of two integers: the final x
  position and the final y position. Do not modify the array argument.

Hint:
- Using the String.match() method to return an array of regular expression
  matches can be helpful if you want to break the single string of moves into
  an array of distinct moves by direction. Be sure to use the global flag, for example: /cat/g, when defining the regexp.

Examples:

gridTrip( [0, 0], 'U2R1' ) // => [1, 2]
gridTrip( [10, 5], 'D5L15U2' ) //-> [-5, 2]
gridTrip( [100, -22], 'L2L15D50U1D9') //=> [83, -80]
-----------------------------------------------------------------------------*/
// Your solution for 28-gridTrip here:


const gridTrip = (arr, str) => {

  let x = arr[0];
  let y = arr[1];

  const moves = str.match(/[UDLR]\d+/g);

  // Example with gridTrip([0, 0], 'U2R1')
  // moves = ['U2', 'R1'];

  for (const move of moves) {
    const direction = move[0];
    const distance = Number(move.slice(1));

    if (direction === 'U') y += distance;
    if (direction === 'D') y -= distance;
    if (direction === 'R') x += distance;
    if (direction === 'L') x -= distance;
  }

  return [x, y];

}

// Solution #2 (include default?)
// const gridTrip = (arr, str) => {

//   let [x, y] = arr;

//   const moves = str.match(/[UDLR]\d+/g);

//   for (let move of moves) {
//     const direction = move[0];
//     const distance = Number(move.slice(1));

//     switch (direction) {
//       case 'U':
//         y += distance;
//       case 'D':
//         y -= distance;
//       case 'R':
//         x += distance;
//       case 'L':
//         x -= distance;
//     }
//   }

//   return [x, y];

// }

console.log(gridTrip([0, 0], 'U2R1')) // => [1, 2]
console.log(gridTrip([10, 5], 'D5L15U2')) //-> [-5, 2]
console.log(gridTrip([100, -22], 'L2L15D50U1D9')) //=> [83, -80]
/*-----------------------------------------------------------------------------
Challenge: 29-addChecker

Difficulty: Intermediate

Prompt:

- Write a function called addChecker that accepts two arguments.
- The first argument is an array containing at least two integers. The integers
  in the array have been pre-sorted in ascending order.
- The second argument is an integer.
- The addChecker function should return true if there are two integers in the
  array of integers (first argument) that, when added together, equals the
  integer passed in as the second argument.
- If there are no two integers in the array with a sum equal to the second
  argument, addChecker should return false.

Hint:

- An efficient solution can leverage the fact that the integers in the array
  come sorted for you.

Examples:

addChecker( [1, 2], 3 ) // => true
addChecker( [-3, 2], 9 ) // => false
addChecker( [10, 15, 16, 22], 32 ) // => true
addChecker( [10, 15, 16, 22], 19 ) // => false
-----------------------------------------------------------------------------*/
// Your solution for 29-addChecker here:

const addChecker = (arr, num) => {

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === num) return true;
    if (sum < num) left++;
    else right--;
  }
  return false
}

console.log(addChecker( [1, 2], 3 )) // => true
console.log(addChecker( [-3, 2], 9 )) // => false
console.log(addChecker( [10, 15, 16, 22], 32 )) // => true
console.log(addChecker( [10, 15, 16, 22], 19 )) // => false

/*-----------------------------------------------------------------------------
Challenge: 30-totalTaskTime

Difficulty: Difficult

Prompt:

- Write a function called totalTaskTime that accepts two arguments.
- The first argument is an array of integers referred to as a "queue".
- Each integer in the queue represents a "task" - specifically, the amount of
  time to complete that task.
- The second argument is an integer representing the number of CPU "threads"
  available to  process all of the tasks in the queue.
- The totalTaskTime function should return an integer representing the total
  time it will take to complete all of the tasks in the queue.
- You may mutate the "queue" array (first argument) if you wish.

Hint:

- Solve it with paper and pencil first. Look for patterns and generalize. Pseudocode!

Examples:

totalTaskTime( [], 1 ) // => 0
totalTaskTime( [4, 2, 5], 1 ) // => 11
totalTaskTime( [5, 8], 2 ) // => 8
totalTaskTime( [4, 2, 10], 2 ) // => 12
totalTaskTime( [2, 2, 3, 3, 4, 4], 2 ) //=> 9
totalTaskTime( [5, 2, 6, 8, 7, 2], 3 ) // => 12
-----------------------------------------------------------------------------*/
// Your solution for 30- here:

const totalTaskTime = (arr, num) => {
  // Empty queue
  if (arr.length === 0) return 0;

  // If only one CPU: sum all the task times
  if (num === 1) return arr.reduce((sum, n) => sum + n, 0);

  // If there are more CPU threads than tasks, the total time is the longest task
  if (num >= arr.length) return Math.max(...arr);

  // If there are more tasks than threads, tasks will get queued (FIFO). 
  // Threads will pick tasks as they become free.

  // Initialize threads with 0 time
  const threads = new Array(num).fill(0); 

  for (let task of arr) {
    // Find the thread that becomes free first
    let nextThread = threads.indexOf(Math.min(...threads));
    // Assign this task to that thread
    threads[nextThread] += task;
  }
  // Total time is when the last thread finishes
  return Math.max(...threads);
}

console.log(totalTaskTime( [], 1 )) // => 0
console.log(totalTaskTime( [4, 2, 5], 1 )) // => 11
console.log(totalTaskTime( [5, 8], 2 )) // => 8
console.log(totalTaskTime( [4, 2, 10], 2 )) // => 12
console.log(totalTaskTime( [2, 2, 3, 3, 4, 4], 2 )) //=> 9
console.log(totalTaskTime( [5, 2, 6, 8, 7, 2], 3 )) // => 12