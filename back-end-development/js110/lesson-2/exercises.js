// let words = ['go', 'ahead', 'and', 'jump'];
// words.sort((a, b) => a.length - b.length);
// console.log(words);

// let words = ['go', 'ahead', 'and', 'jump'];
// words.sort((a, b) => {
//   if (a.length < b.length) {
//     return -1;
//   } else if (a.length > b.length) {
//     return 1;
//   } else {
//     return 0
//   }
// });
// console.log(words);





// let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
// scores.sort((a, b) => a.reduce((acc, elem) => acc + elem, 0) - b.reduce((acc, elem) => acc + elem, 0));
// console.log(scores);

// let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
// scores.sort((a, b) => {
//   let totalAScore = a.reduce((acc, elem) => acc + elem);
//   let totalBScore = b.reduce((acc, elem) => acc + elem);
//   return totalAScore - totalBScore;
// });
// console.log(scores);





// let a = [1, 3];
// let b = [2];
// let arr = [a, b];

// console.log(arr); // => [ [ 1, 3 ], [ 2 ] ]

// a[1] = 5;
// a.push(3);
// console.log(arr); // => [ [ 1, 5 ], [ 2 ] ]





// let obj = { a: { b: 'foo' }, c: ['bar'] };
// let copyOfObj = Object.assign({}, obj);
// copyOfObj.e = 'hello';

// obj['a']['d'] = 'baz';
// console.log(copyOfObj); // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }
// console.log(obj);       // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }






























