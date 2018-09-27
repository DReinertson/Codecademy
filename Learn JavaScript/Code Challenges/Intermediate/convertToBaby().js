// Write your code here:

/*function convertToBaby(arr){
  let newArr = [];
  for (let x in arr){
    newArr.push('baby ' + arr[x]);
  }
  return newArr;
}*/

convertToBaby = (arr) =>{
  let newArr = [];
  for (let x in arr){
    newArr.push('baby ' + arr[x]);
  }
  return newArr;
}








// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 

