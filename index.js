// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>All answers are in the console</h1>`;

// . Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223 
function reverseNum(num){
  console.log((num + '').split('').reverse().join(''))
}
reverseNum(32243)
// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
let testStr = 'nurses run'
function pali(str){
    let arr = false;
    for (let i = 0; i < str.split('').length; i++) {
        str.split('')[i] === str.split('').reverse()[i] ? arr = true : arr = false;  
    }
    console.log(arr)
}
pali(testStr)
// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g 
let dog = 'dog'
function combo(str){
    let arr = str.split('');
    let resultArr = [];
    resultArr.push(str)
    for (let i = 0; i < arr.length; i++) {
        resultArr.push(arr[i])
        for (let j = i; j < arr.length; j++) {
            if(arr[i] != arr[j]){
            resultArr.push(`${arr[i]}${arr[j]}`)
        }
        } 
    }
    console.log(resultArr)
}

combo(dog)
// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function sortStr(str){
  console.log(str.split('').sort().join(''))
  }
  
  sortStr('webmaster')
// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '
let longStr = 'the quick brown fox jumps over the lazy dog'
function firstLetterCap(str){
    let strArr = str.split(' ')
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = `${strArr[i].charAt(0).toUpperCase()}${strArr[i].substring(1)}`        
    }
    console.log(strArr.join(' '))
}

firstLetterCap(longStr)
// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'
let word = 'Web development tutorial'

function longestWord(str){
    let strArr = str.split(' ')
    let output = []
    for (let i = 0; i < strArr.length; i++) {
        output.push(strArr[i].length)   
    }   
    console.log(strArr[output.indexOf(Math.max(...output))])
}

longestWord(word)
// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5

let expectedString = 'The quick brown fox' 
function vowelCounter(str){
  let strArr = str.split('')
  let count = 0;
  for (let i = 0; i < strArr.length; i++) {
      if(strArr[i] === 'a' || strArr[i] === 'e' || strArr[i] === 'i' || strArr[i] === 'o' || strArr[i] === 'u'){
          count++
      }
  }
  console.log(count)
}

vowelCounter(expectedString)
// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function isPrime(num){
  let count = 0;
  for (let i = 2; i < num/2; i++) {
      if(num % i === 0){
          count++
      } 
  }
  count > 0 ? console.log(`${num} is not prime`) : console.log(`${num} is prime`)
}

isPrime(11)
// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function returnType(arg){
  return typeof arg
}
console.log(returnType(0))
// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. ???????????

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 
function secLowHigh(arr){
  console.log(`${arr.sort()[1]}, ${arr.sort()[arr.length - 2]}`)
}

secLowHigh([5,4,8,3,1,2,6]) 
// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function perfectNumber(num){
  let arr = [];
  for (let i = 1; i < num; i++) {
      if(num % i === 0){
          arr.push(i)
      } 
  }
  let result = arr.reduce((a,b) => a + b)
  result === num ? console.log(`${num} is a perfect square`) : console.log(`${num} is not a perfect square`)
}

perfectNumber(28)

// 13. Write a JavaScript function to compute the factors of a positive integer. 
function factors(num){
  let arr = [];
  for (let i = 1; i < num; i++) {
      if(num % i === 0){
          arr.push(i)
      } 
  }
  arr.push(num)
  console.log(arr)
}

factors(28)
// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1
function amountTocoins(num, arr){
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
      if(num / arr[i] >= 1){
          for (let j = 0; j < Math.floor(num / arr[i]); j++) {
              resultArr.push(arr[i]) 
          } 
          num = num % arr[i]
      }   
  }
  console.log(resultArr)
}

amountTocoins(46, [25,10,5,1])
// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
function exponent(b, n){
  let c = b;
  for (let i = 0; i < n; i++) {
     c *= b   
  }
console.log(c)
}

exponent(2, 5)


// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
function uniqueChar(str){
  let concArr = str.toLowerCase().split(' ').join('').split('')
  let unique = concArr.filter((v, i, a) => a.indexOf(v) === i)
  console.log(unique.join(''))
}

uniqueChar("The qUick brown fox jumps over the lazy dog")


// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

// 19. Write a JavaScript function that returns array elements larger than a number. 
function largerThan(arr, num){
  let resArr = []
  arr.forEach(element => {
      if(element > num){
          resArr.push(element)
      }
  });
  console.log(resArr);
}

largerThan([25,10,5,1], 8)
// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function randomChar(num){
  let sample = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let rArr = []
  for (let i = 0; i < num; i++) { 
      rArr.push(sample.split('')[Math.floor(Math.random() * 62)])
  }
  console.log(rArr.join(''))
}

randomChar(15)
// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]
function subset(arr){
  let resultArr = []
  for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++){
          if(arr[i] != arr[j]){
          resultArr.push([arr[i], arr[j]])
      }
      }
  }
  console.log(resultArr)
  }
  
  subset([1,2,3])

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 
function findCharCount(str, letter){
  let strArr = str.split('')
  let charCount = 0
  strArr.forEach((element) => element === letter ? charCount++ : charCount);
  console.log(charCount)
}

findCharCount('microsoft.com', 'o')
// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
function longestCountryName(arr){
  let lengthArr = [];
  arr.forEach((ele) => lengthArr.push(ele.length))
  console.log(arr[lengthArr.indexOf(Math.max(...lengthArr))])
}

longestCountryName(["Australia", "Germany", "United States of America"])
// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
function longestSubstring(string) {
  let initNum = 0,
    ind = [0, 1],
    charObj = {};
    let result = ''
  for (let i = 0; i < string.length; i++) {
    let initChar = string[i];
    if (initChar in charObj) {
      initNum = Math.max(initNum, charObj[initChar] + 1);
    }
    if (ind[1] - ind[0] < i + 1 - initNum) {
      ind = [initNum, i + 1];
    }
    charObj[initChar] = i;
  }
  result = string.slice(ind[0], ind[1])
  console.log(result);
};
// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 


// 29. Write a JavaScript function to get the function name. 
function nameOfFunc(){
  console.log(nameOfFunc.name)
}
nameOfFunc()