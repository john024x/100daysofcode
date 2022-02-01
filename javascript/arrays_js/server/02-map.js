const letters = ['a', 'b', 'c'];
const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//   const element = letters[index];
//   newArray.push(element.toUpperCase());
// }
letters.map((item) => newArray.push(item.toUpperCase()));
console.log('old', letters);
console.log('new', newArray);
