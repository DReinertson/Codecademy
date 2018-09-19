let input = 'turpentine and turtles';
console.log(input.length);

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let x = 0; x < input.length; x++){
  for (let y = 0; y < vowels.length; y++){
    if (input[x] === vowels[y]){
      resultArray.push(vowels[y]);
    }
  }
  if (input[x] === 'e'){
      resultArray.push(input[x]);
    }
    if (input[x] === 'u'){
      resultArray.push(input[x]);
    }
}

console.log(resultArray.join('').toUpperCase());
console.log(resultArray.join('').toUpperCase() ==='UUEEIEEAUUEE')
