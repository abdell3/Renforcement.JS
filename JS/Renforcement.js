
// let emptyArray = [];
// let array = [1, 2, 3, 4, 5];



// let length = array.length;

// console.log(length); //afficher la longeur de array dans le console pour le moment

// function test(){

// //    console.log("1st exo"); //juste pour tester le console
//    for(let value of array){
//     console.log(value);
//    }

//    array.forEach(element => {
//     array(element);
//    });
// }


// let a = 7 ;


// function isEvenOrOdd(a) {
//    if( a % 2 == 0){
//       return `${a} is odd` ;
//    }else {
//       return `${a} is even ` ;
//    }
// }

// console.log(isEvenOrOdd());


// let str = 'hello' ; 

// let array  = str.split('');
// console.log(array);

// console.log(array.reverse().join(''));
// // function reverseString(str) {
// //    let tab = '';

// //    // let l = str.length;
// //    // for(let i = l -1 ; i>=0; i--){
// //    //    tab += str[i];
// //    // }
// //    return reverse;
// // }


// // console.log(reverseString(str));

// let array = [1,2,3,4,5,6,7,8,9];


// function findLargestElement(array) {
//    let largest;
//    for(let i = 0; i< array.length; i++){
//       if(array[i]<array[i+1]){
//          largest = array[i+1];
//       }
//    }
//    return largest;
// }

// console.log(findLargestElement(array))



// let arr = [2,1,16,0,4,4];

// function findMinMaxElement(arr) {
//    let min = arr[0];
//    let max = arr[0];

//    for(let i = 0; i< arr.length -1; i++){
//       if(arr[i]<min){
//          min = arr[i];   
//       }
//       if(arr[i]>max){
//          max = arr[i];
//       }
//    }

//    return [min , max];
// }


// console.log(findMinMaxElement(arr));





// let year = 2024;

// function isLeapYear(year) {
//    if(year % 4 == 0 || year % 100 == 0 && year % 400 == 0){
//       return ` ${year} is a leap year`;
//    }else {
//      return ` ${year} is not a leaper year`;
//    }
// }


// console.log(isLeapYear(year));

// let word = 'fokook';

// function reverseWords(word) {
//    let reversed = '';
//    for(let i = word.length -1; i >=0 ; i--){
//       reversed += word[i];
//    }
//    return reversed;
// }


// console.log(reverseWords(word));


// let word = 'hello';

// console.log(word.split('').reverse().join(''));


// let number = 10;

// function calculateFactorial(number) {
//    if(number<0) {
//       return 'number has not the factorial';
//    }

//    else if(number == 0) {
//       return ` factorial of ${number}! is 1`;
//    }

//    else if(number > 0) {
//       let f = 1 ;
//       for(let i = number; i>=2; i--) {
//          f *= i;
//       }
//       return ` ${number}! is ${f}`;
//    }
// }

// console.log(calculateFactorial(number));


// let word = 'hello test' ;

// function capitalizeFirstLetter(word) {
//    if (word.length == 0){
//       return word;
//    }
//    let s = word.split(' ');
//    let capitalizedWord = [];
//    for(let i = 0; i < s.length ; i++){
//       let word = s[i];

//       if(word.length === 0) {
//          capitalizedWord.push(word);
//          continue;
//       }

//       let fLetter = word.charAt(0).toUpperCase();

//       let rest = word.slice(1);

//       capitalizedWord.push(fLetter + rest);
//    }
//    return capitalizedWord.join('');
// }

// console.log(capitalizeFirstLetter(word));

// let array = [1,8,9,3,4,9,7];


// function sumOfArray(array) {
//    let sum =0;
//    for(let i = 0; i<array.length; i++) {
//       sum += array[i];
//    }
//    return sum;
// }


// console.log(sumOfArray(array));

// let number = 1215;

// function isPalandrome(number) {
//    '// if (number == 0) {
//    //    return number;
//    // }'
//    let strnumber = number.toString();
//    let reversedNumber = '' ;
//    for(let i = strnumber.length -1 ; i >= 0; i--) {
//       reversedNumber += strnumber[i];
//    }
   
//    if (strnumber === reversedNumber) {
//       return `${number} is a palandrome .`;
//    } else {
//       return `${number} is not a palandrome .`;
//    }
// }

// console.log(isPalandrome(number));


// let input = 'AAAAAAAAA';


// function countVowels(input) {
//    let count = 0;
//    let lowerCase = input.toLowerCase();
//    for(let i = 0; i<lowerCase.length; i++) {
//       if(lowerCase[i] == 'i' || lowerCase[i] == 'o' || lowerCase[i] == 'u' || lowerCase[i] == 'e' || lowerCase[i] == 'a' ) {
//          count += 1;
//       }
//    }
//    return `${input} has ${count} vowels .`;
// }

// console.log(countVowels(input));



// let array = [1,2,5,2,5,8,9,9,6,4];
// let char = ['t','o','o','p','u','n','p'];


// function removeDuplicate(table) {
//    let newTable = [];
//    let index = 0;
//    for(let i = 0; i < table.length; i++) {

//       let compteur =0;


//       for(let j = 0; j < index; j++) {
//          if(table[i] === newTable[j]) {
//             compteur++;
//          }
//       }

//       if(compteur === 0){
//          newTable[index] = table[i];
//          index++;
//       }
//    }
//    return newTable;
// }
// console.log(removeDuplicate(char));


// let char = 't';

// function isAlphanumeric(char) {
//    for(let i = 0; i < char.length; i++) {
//       let code = char.charCodeAt(i);
//       if (!(code >= 48 && code <= 57)  &&  !(code >= 65 && code <= 90)  &&  !(code >= 97 && code <= 122)) {
//          return false; 
//       }
//    }

//    return char.length > 0;
// }
//  console.log(isAlphanumeric(char));


// let email = 'abdo.abdell.2000';

// function isValideEmail(email) {
//    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
// }


// console.log(isValideEmail(email));


// let color = '#fff';

// function isValidHexColor(color) {
//    return /^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/.test(color);
// }

// console.log(isValidHexColor(color));



// function convertTemperature(value, fromUnit, toUnit) {
//    let result;

//    if (fromUnit === 'C' && toUnit === 'F') {
//       result = (value * 9/5) + 32;
//       console.log(`${value}°C is equivalent to ${result}°F.`);
//    } else if (fromUnit === 'F' && toUnit === 'C') {
//       result = (value - 32) * 5/9;
//       console.log(`${value}°F is equivalent to ${result}°C.`);
//    } else if (fromUnit === toUnit) {
//       result = value;
//       console.log(`No conversion needed. ${value}°${fromUnit} = ${result}°${toUnit}.`);
//    } else {
//       console.log("Unsupported unit. Use 'C' or 'F'.");
//    }

//    return result;
// }

// console.log(convertTemperature(10, 'C', 'F'));


// function generateRandomPassword(length) {
//    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}<>?/|~';
//    let password = '';

//    for (let i = 0; i < length; i++) {
//       let randomIndex = Math.floor(Math.random() * characters.length);
//       password += characters[randomIndex];
//    }

//    console.log(`Generated random password: ${password}`);
   
// }

// console.log(generateRandomPassword(8));



// let array = [1,2,5,9,7,8,6];


// function findMissingNumbers(array) {
//    let missing = [];

   
//    let max = array[0];
//    for (let i = 1; i < array.length; i++) {
//       if (array[i] > max) {
//          max = array[i];
//       }
//    }

  
//    for (let i = 1; i <= max; i++) {
//       let found = false;
//       for (let j = 0; j < array.length; j++) {
//          if (array[j] === i) {
//             found = true;
//             break;
//          }
//       }
//       if (!found) {
//          missing.push(i);
//       }
//    }

//    console.log("Missing numbers are:", missing);
//    return missing;
// }
// console.log(findMissingNumbers(array));


// function calculeFacto(number) {
//    if(number<0) {
//       return 'entrer un nombre positif';
//    }

//    if (number == 0) {
//       return 'le factorial de 0 est 1';
//    }

//    let num = 1;
//    for(let i = 2; i <= number; i++) {
//       num = num * i;
//       console.log(num);
//    }
//    return `${number}! = ${num}`;
// }

// console.log(calculeFacto(5))


// function isPrime(number) {
//    let num;
//    if(number<0) {
//       num = (-number);
//       if(num %2 == 0) {
//          console.log(`${number} is prime`);
//       }
//       else {
//          console.log(`${number} is not prime`)
//       }
//    }else {
//       if(num%2 == 0) {
//          console.log(`${number} is prime`);
//       }
//       else {
//          console.log(`${number} is not prime`)
//       }
//    }
// }

// console.log(isPrime(-7));

// let array = [1,5,4,1,5,6,3,2,4,7,7,7];


// function sortAscending(array) {
//    let sorted = [];

//    for (let i = 0; i < array.length; i++) {
//       sorted[i] = array[i];
//    }

//    for (let i = 0; i < sorted.length; i++) {
//       for (let j = i + 1; j < sorted.length; j++) {
//          if (sorted[i] > sorted[j]) {
//             let temp = sorted[i];
//             sorted[i] = sorted[j];
//             sorted[j] = temp;
//          }
//       }
//    }

//    return sorted;
// }
// console.log(sortAscending(array));

// let arr = ['a','b','a','r','z','p','b','z','t','r'];


// function removeDup(array) {
//    let newA = [];


//     for(let i = 0; i<array.length; i++) {
//       if(array[i] === array[i+1]) {

//          let exist = false; 
//          for(let j = 0; j < newA.length; j++) {
//             if(newA[j] === array[i]) {
//                exist = true; 
//                break;
//             }
//          }
//          if(!exist) {
//             newA[newA.length] = array[i];
//          }
      
//       }else {
//          let exist = false;
//          for(let j = 0; j < newA.length; j++) {
//             if(newA[j] === array[i]) {
//                exist = true; 
//                break;
//             }
//          }
//          if(!exist) {
//             newA[newA.length] = array[i];
//          }
//       }
//    }
//    return newA;
// }


// console.log(removeDup(arr));


// function basicCalculator(num1, num2, operator) {
//    let result;
//    if(operator == '+') {
//       result = num1 + num2;
//       return `${num1} ${operator} ${num2} = ${result}`;
//    }else if(operator == '-') {
//       result = num1 - num2;
//       return `${num1} ${operator} ${num2} = ${result}`;
//    }else if(operator == '*') {
//       result = num1 * num2;
//       return `${num1} ${operator} ${num2} = ${result}`;
//    }else if(operator == '/') {
//       if(num2 == 0) {
//          return 'on paut pas diviser sur 0';
//       }
//       result = num1 / num2;
//       return `${num1} ${operator} ${num2} = ${result}`;
//    }
// }

// console.log(basicCalculator(0,1,'/'));

// let array = [1,8,44,6,1000,449,8,7,1]


// function findSecondLargest(array) {
//    let secondLargest = array[1];
//    let firstLargest = array[0];
//    for(let i = 0; i < array.length; i++) {
//       if(firstLargest < array[i]) {
//          firstLargest = array[i];
//       }
//       for (let j = 0; j < array.length; j++) {
//          if(array[j] >secondLargest && array[j] < firstLargest) {
//             secondLargest = array[j];
//          }
//       }
//    }
//    return `First largest in the array is : ${firstLargest}
//            and the second largest is : ${secondLargest}`;
// }


// console.log(findSecondLargest(array));





// function isPalandrome(word) {
//    let string = word.toString();
//    let last = '';
//    let reversed = '';
//    for(let i = 0 ; i<string.length; i++) {
//       let char = string[i];
//       if(char >= 'a' && char <= 'z'
//          || char >= '0' && char <= '9'
//          || char >= 'A' && char <= 'Z'
//       ) {
//          last += char;
//       }
//    }
//    for(let j = last.length - 1; j >= 0; j--) {
//       reversed += last[j];
//    }

//    return last === reversed;
// }

// console.log(isPalandrome('le.,78el'));



// function isPerfectNumber(input) {
//    let string = input.toString();
//    let deviseur = [];
//    let sum = 0;
//    let result = '';
//    if(string > '0') {
//       for(let i = 0; i<=string/2; i++) {
         
//          if(string%i === 0) {
//             deviseur[i] = i;
//             sum += deviseur[i];
//          }
//       }
//       result = sum.toString();
//       if(result === string) {
//          return `${input} is a perfect number`;
//       }else {
//          return `${input} is not a perfect number`;
//       }
//    }
// }


// console.log(isPerfectNumber(6));



// function findLongestWord(sentence) {


//    if (typeof sentence !== 'string') {
//       return 'Input must be a string.';
//    }

//    if (!/[a-zA-Z]/.test(sentence)) {
//       return 'Must contain at least one word.';
//    }

//    sentence = sentence.replace(/[.,!?]/g, '');
//    let array = sentence.split(' ');
//    let largest = '';
  
//    for(let i = 0; i < array.length; i++) {
//       let a = array[i];
//       let b = array[i+1];
//       if(a.length < b.length) {
//          largest = b;
//          return `the largest word in the input is ${largest}`
//       }else {
//          largest = a;
//          return `the largest word in the input is ${largest}`
//       }
//    }

// }



// console.log(findLongestWord('hello testin!g'));


// let array1 = [1,8,5,99,6]
// let array2 = [4,5,7,100,65,23]

// function mergeStoredArray(array1, array2) {
//    let mergedArray = [];
//    for(let i = 0; i<array1.length; i++) {
//       mergedArray[i] = array1[i];
//    }

//    for(let i = 0; i<array2.length; i++) {
//       mergedArray[mergedArray.length] = array2[i];
//    }
   
//    for(let i = 0; i<mergedArray.length; i++) {
//       for(let j = 0; j<mergedArray.length; j++) {
//          if(mergedArray[i]<mergedArray[j]) {
//             let sort = mergedArray[j];
//             mergedArray[j] = mergedArray[i];
//             mergedArray[i] = sort;
//          }
//       }
//    }
//    return mergedArray;
// }

// console.log(mergeStoredArray(array1, array2));


function longestCommonPrefix(sentence) {
   let prefix = sentence[0];
   let newPrefix = '';


   for(let i = 1; i<sentence.length; i++) {
      let element = sentence[i];
      
      for(let j = 0; j<element.length; j++) {
         if(prefix[j] == element[j]) {
            newPrefix += element[j];
            // console.log(newPrefix);
         }
      }
   }
   return newPrefix;
}


console.log(longestCommonPrefix(['hello', 'hetet', 'test']));

























































































