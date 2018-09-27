// Write your code here:
function reverseArray(arr){
  let newArr = [];
  for (let x = arr.length - 1; x >= 0; x--){
    newArr.push(arr[x]);
  }
  return newArr;
}







// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];



