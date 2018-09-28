const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums = (arr) => {
  const newArr = arr.map(toSquare);
  return newArr;
}

console.log(squareNums(numbers));
