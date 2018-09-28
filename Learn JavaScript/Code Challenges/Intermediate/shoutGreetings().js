// Write your code here:
const toShout = (word) => {
  return word.toUpperCase() + "!";
}

const shoutGreetings = (arr) => {
  let newArr = arr.map(toShout);
  return newArr;
}






// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

