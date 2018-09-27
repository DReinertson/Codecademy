// Write your code here:
/*function greetAliens(arr){
  for(let x in arr){
    console.log(`Oh powerful ${arr[x]}, we humans offer our unconditional surrender!`);
  }
}*/


greetAliens = (arr) => {
  for(let x in arr){
    console.log(`Oh powerful ${arr[x]}, we humans offer our unconditional surrender!`);
  }
}








// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

