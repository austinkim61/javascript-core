// 1 - Uppercase Check
// function isUppercase(string) {
//   return string.split('').find(element => element.match(/[a-z]/g)) ? false : true;
// }

// console.log(isUppercase('t'));               // false
// console.log(isUppercase('T'));               // true
// console.log(isUppercase('Four Score'));      // false
// console.log(isUppercase('FOUR SCORE'));      // true
// console.log(isUppercase('4SCORE!'));         // true
// console.log(isUppercase(''));                // true

// Launch School Solution
// function isUppercase(string) {
//   return string.toUpperCase() === string;
// }

// console.log(isUppercase('t'));               // false
// console.log(isUppercase('T'));               // true
// console.log(isUppercase('Four Score'));      // false
// console.log(isUppercase('FOUR SCORE'));      // true
// console.log(isUppercase('4SCORE!'));         // true
// console.log(isUppercase(''));                // true





// 2 - Delete Vowels
// function removeVowels(array) {
//   return array.map(string => string.replaceAll(/[aeiou]/gi, ''));
// }

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]



// Launch School Solution
// function removeVowels(stringArray) {
//   return stringArray.map(string => {
//     let chars = string.split(""); // [g r e e n]
//     let removedVowels = deleteVowels(chars);
//     return removedVowels.join("");
//   });
// }

// function deleteVowels(array) {
//   const VOWELS = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   return array.map(char => { // g
//     if (VOWELS.indexOf(char) >= 0) {
//       return "";
//     } else {
//       return char;
//     }
//   });
// }

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]





// 3 - Lettercase Counter
// function letterCaseCount(string) {
//   let obj = {};
  
//   obj.lowercase = string.replace(/[^a-z]/g, '').length;
//   obj.uppercase = string.replace(/[^A-Z]/g, '').length;
//   obj.neither = string.replace(/[a-z]/gi, '').length;

//   return obj;
// }

// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }



// Launch School Solution
// function letterCaseCount(string) {
//   let counts = { lowercase: 0, uppercase: 0, neither: 0 }

//   for (let index = 0; index < string.length; index += 1) {
//     let char = string[index];
//     if ((char >= 'a') && (char <= 'z')) {
//       counts.lowercase += 1;
//     } else if ((char >= 'A') && (char <= 'Z')) {
//       counts.uppercase += 1;
//     } else {
//       counts.neither += 1;
//     }
//   }

//   return counts;
// }

// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }





// 4 - Capitalize Words
// function wordCap(string) {
//   return string
//     .split(' ')
//     .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// }

// console.log(wordCap('four score and seven'));       // "Four Score And Seven"
// console.log(wordCap('the javaScript language'));    // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'



// Launch School Solution
// function wordCap(words) {
//   return words
//     .split(" ")
//     .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
//     .join(" ");
// }

// console.log(wordCap('four score and seven'));       // "Four Score And Seven"
// console.log(wordCap('the javaScript language'));    // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'





// 5 - Swap Case
// function swapCase(string) {
//   return string
//     .split('')
//     .map(char => {
//       if (char.toLowerCase() === char) {
//         return char.toUpperCase();
//       } else if (char.toUpperCase() === char) {
//         return char.toLowerCase();
//       } else {
//         return char;
//       }
//     })
//     .join('');  
// }

// console.log(swapCase('CamelCase'));              // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"





// 6 - Staggered Caps (Part 1)
// function staggeredCase(string) {
//   return string
//     .split('')
//     .map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
//     .join('');
// }

// console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"





// 7 - Staggered Caps (Part 2)
// function staggeredCase(string) {
//   let count = 0;
//   let result = '';
//   [...string].forEach(char => {
//     if ((count % 2 === 0) && char.match(/[a-z]/gi)) {
//       result += char.toUpperCase();
//       count++;
//     } else if ((count % 2 !== 0) && char.match(/[a-z]/gi)) {
//       result += char.toLowerCase();
//       count++;
//     } else {
//       result += char;
//     }
//   });

//   return result;
// }

// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );

// Further Exploration
// function staggeredCase(string, countOnlyAlpha = 'no') {

//   if (countOnlyAlpha === 'no') {
//     return string
//       .split('')
//       .map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
//       .join('');
//   }

//   let count = 0;
//   let result = '';
//   [...string].forEach(char => {
//     if ((count % 2 === 0) && char.match(/[a-z]/gi)) {
//       result += char.toUpperCase();
//       count++;
//     } else if ((count % 2 !== 0) && char.match(/[a-z]/gi)) {
//       result += char.toLowerCase();
//       count++;
//     } else {
//       result += char;
//     }
//   });
//   return result;
// }

// console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
// console.log(staggeredCase('I4I4I4I4I4'));

// console.log(staggeredCase("I Love Launch School!", 'yes')); // "I lOvE lAuNcH sChOoL!"
// console.log(staggeredCase("ALL CAPS", 'yes')); // "AlL cApS"
// console.log(staggeredCase("ignore 77 the 444 numbers", 'yes')); // "IgNoRe 77 ThE 444 nUmBeRs"
// console.log(staggeredCase('I4I4I4I4I4', 'yes'));





// 8 - How long are you?
// function wordLengths(string) {
//   if (Boolean(string) === false) {
//     return [];
//   }

//   return string.split(' ').map(word => word + ' ' + word.length);
// }

// console.log(wordLengths('cow sheep chicken'));
// // ["cow 3", "sheep 5", "chicken 7"]

// console.log(wordLengths('baseball hot dogs and apple pie'));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// console.log(wordLengths("It ain't easy, is it?"));
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// console.log(wordLengths('Supercalifragilisticexpialidocious'));
// // ["Supercalifragilisticexpialidocious 34"]

// console.log(wordLengths(''));      // []
// console.log(wordLengths());        // []



// Launch School Solution
// const wordLengths = (...args) => {
//   if (args.length === 0 || args[0].length === 0) {
//     return [];
//   }

//   return args[0].split(" ").map(function(word) {
//     return `${word} ${word.length}`;
//   });
// };

// console.log(wordLengths('cow sheep chicken'));
// // ["cow 3", "sheep 5", "chicken 7"]

// console.log(wordLengths('baseball hot dogs and apple pie'));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// console.log(wordLengths("It ain't easy, is it?"));
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// console.log(wordLengths('Supercalifragilisticexpialidocious'));
// // ["Supercalifragilisticexpialidocious 34"]

// console.log(wordLengths(''));      // []
// console.log(wordLengths());        // []





// 9 - Search Word (Part 1)
// function searchWord(str, text) {
//   let regex = new RegExp(str, 'gi');
//   let matches = text.match(regex);
//   return matches ? matches.length : 0;
// }

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// console.log(searchWord('sed', text));      // 3

// Further Exploration
// function searchWord(str, text) {
  // let regex = new RegExp(`(?<=\\s|^)${str}(?=\\s|$|[^\\w\\s])`, 'gi');
  // let matches = text.match(regex);
  // return matches ? matches.length : 0;
// }

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// console.log(searchWord('qui', text));





// 10 - Search Word (Part 2)
// function searchWord(str, txt) {
//   let regex = new RegExp(`(?<=\\s|^)${str}(?=\\s|$|[^\\w\\s])`, 'gi');
//   return txt.replaceAll(regex, `**${str.toUpperCase()}**`);
// }

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

// console.log(searchWord('sed', text));
// // returns
// // "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"



// Launch School Solution

// function searchWord(str, txt) {
//   let regex = new RegExp(`\\b${str}\\b`, "gi");
//   return txt.replace(regex, `**${str.toUpperCase()}**`);
// }

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

// console.log(searchWord('sed', text));
// // returns
// // "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"