// function findGreatest(numbers) {
//   let savedNumber = numbers[0];

//   numbers.forEach(num => {
//     if (num > savedNumber) {
//       savedNumber = num;
//     }
//   });
//   return savedNumber;
// }

// let array = [1, 2, 3, 55, 4, 5, 6, 7, 8, 9];

// console.log(findGreatest(array));








// EXERCISES - WRITE PSEUDOCODE (BOTH CASUAL AND FORMAL)

// function that returns the sum of two numbers
/*
START

# Given two numbers via console.log at the end of the code

SET number1 and number2 as variables

return Number(number1) + Number(number2)

PRINT via console.log

END
*/






// funciton that takes an array of strings, and returns a string that is all those strings concatenated together
/*
START

# Given an array of strings, return a string that is all those strings concatenated together

SET array = []

SET array2 = array.join('')


PRINT via console.log

END
*/



// a method that takes takes an array of integers, and returns a new array with every other element from the original array, starting with the first element
/*
START

# Given an array, return a new array with every other element from the original array, starting with the first element

SET iterator at 1
SET array
SET newArray = []

FOR iterator <= array.length

SET newArray.push(array[iterator])

iterator = iterator + 2

PRINT newArray

END
*/


// a function that determines the index of the 3rd occurance of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null.
/*
START
# Given the above

SET string
SET array = string.split('')
SET third = array[2]
SET count = 0
SET iterator = 0


FOR iterator <= array.length
IF array[i] === 'third'
count = count + 1
IF count = 3 
SET index = iterator
iterator = iterator + 1

IF count < 3
PRINT null
ELSE PRINT index

END
*/

// let string = 'axbxcdxex';
// let array = string.split('');
// let character = array[2];
// let count = 0;
// let index = 0;



// for (let i = 0; i <= array.length; i++) {
//   if (array[i] === character) {
//     count = count + 1;
//     // console.log(count);
//     if (count === 3) {
//       index = i;
//       console.log(`The 3rd occurence of ${character} is at index ${i}`)
//       break;
//     }
//   }
// }

// if (index === 0) {
//   console.log(null);
// }







// a function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes.
/*
START
# Given the above

SET array1
SET array2
SET array3
SET iterator (i) = 0
SET iterator (j) = 0
SET iterator (k) = 0
SET length = array1.length + array2.length


FOR i <= length
IF ((i % 2) === 0)
SET array3.push(array1[j])
SET iterator j = j + 1
ELSE
set array3.push(array2[k])
SET iterator k = k + 1

PRINT array3
*/

// let array3 = [];
// let j = 0;
// let k = 0;

// function merge(array1, array2) {
//   let length = array1.length + array2.length;
//   for (i = 0; i < length; i++) {
//     if ((i % 2) === 0) {
//       array3.push(array1[j]);
//       j++;
//     } else {
//       array3.push(array2[k]);
//       k++;
//     }
//   }
//   return array3;

// }



// console.log(merge([1, 2, 3], [4, 5, 6]));













































































