// Write your code below
let bobsFollowers = ['1', '2', '3', '4'];

let tinasFollowers = ['1', '2', '6'];

let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if(tinasFollowers[j] === bobsFollowers[i]){
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}

console.log(mutualFollowers);
