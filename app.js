// 1. Ixtiyoriy arrow function yarating va unga beriladigan argument 
// promt yordamida kiritilgan son bo'lsin. Kiritilgan sonning raqamlari yig'indisi topilsin

// let number = prompt("Son kiriting:");


// const sumOfDigits = (num) => {
//   return num.split('').map(Number).reduce((a, b) => a + b); 
// };
// console.log(sumOfDigits(number));



// 2. Ixtiyoriy arrow function yarating va uning parametriga bi nechta sonlar berilsin. 
// va o'sha sonlar yig'indisini arrayning element lari ko'rinishida ifodalang:
//  masalan: [1, 22, 3] yigindisi: 26 result=> [2,6] 


// const totalArray = (...numbers) => {

//     const sum = numbers.reduce((acc, num) => acc + num, 0);
//     const resultArray = [];
 
//     for (let i = 0; i < sum.toString().length; i++) {
//       resultArray.push(parseInt(sum.toString()[i]));
//     }
  
//     return resultArray;
//   };
  
//   console.log(totalArray(1, 10, 3));
  


// 3.Promt yordamida ixtiyoriy son kiritilsin va o'sha 
// sonning kvadradi palindrome yoki palindrome emasligi 
// topilsin algorithm function ichida bo'lsin


// const isPalindromeSquare = () => {

//     const number = parseInt(prompt("Son kiriting:"));
  
//     const square = number * number;
//     const squareStr = square.toString();
//     const reversedStr = squareStr.split('').reverse().join('');
  
//     if (squareStr === reversedStr) {
//       console.log(`${square} - bu palindrome.`);
//     } else {
//       console.log(`${square} - bu palindrome emas.`);
//     }
//   };
//   isPalindromeSquare();



// 4.Ixtiyoriy 2 ta funciton yaratilsin 1-function ichida random sonning 
// raqamlari yig'indisi topilsin va mana shu 1-function 2-funciton ni 
// ichida ishlasin masala callback function yordamida bajarilsin


// const totalRandomNum = () => {
//     const randomNumber = Math.floor(Math.random() * 100);

//     let sum = 0;
//     for (let digit of randomNumber.toString()) {
//       sum += parseInt(digit);
//     }
  
//     console.log(`Random raqam: ${randomNumber}`);
//     console.log(`Raqamlari yig'indisi: ${sum}`);
  
//     return sum;
//   };
  

//   const callbackFunction = (callback) => {
//       const result = callback();
//       console.log(`Callback funksiyasi: ${result}`);
//   };
//   callbackFunction(totalRandomNum);
  
  

//  5.Promt va funciton yarating promt ichida yozilgan so'zning
//  palindome yoki palindrome emasligi topilsin


// const word = prompt("So'z kiriting:");

// const isPalindrome = (str) => {
//   const reversed = str.split('').reverse().join('');

//   if (str === reversed) {
//     return true;
//   } else {
//     return false;
//   }
// };

// if (isPalindrome(word)) {
//   console.log(`${word}  bu palindrome.`);
// } else {
//   console.log(`${word}  bu palindrome emas.`);
// }



//  6. Ixtiyoriy object yarating => {a:1,b:22} value larinig
//  yig'indisini toping => 23 value larining 
// yigindising yig'indisini toping => 2 + 3 = 5


// const obj = { a: 1, b: 22 };

// let totalValuesSum = Object.values(obj).reduce((acc, val) => acc + val, 0);
// console.log(totalValuesSum,"Yig'indi");
// const totalString = totalValuesSum.toString();

// let digitSum = 0;
// for (let digit of totalString) {
//   digitSum += parseInt(digit);
// }

// console.log(`Natija: ${digitSum}`);
