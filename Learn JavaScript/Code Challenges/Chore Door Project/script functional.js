let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"
let startButton = document.getElementById('start');
let currentlyPlaying = true;

//Check to see if bot is behind door. 
const isBot = door =>{
  if (door.src === botDoorPath){
    return true;
  }
  else{
    return false;
  }
}

//Checked to see if door is closed. To prevent player from clicking on same door 3 times to win. 
const isClicked = door => {
  if (door.src === closedDoorPath){
    return false;
  }
  else{
    return true;
  }
}

//Reduced number of opendoors, if open doors gets to 0 (i.e. doesn't open a bot door) player will win and run gameOver with 'win' as string, if bot is behind door, run gameOver with no argument
playDoor = door => {
  numClosedDoors --;
  if (numClosedDoors === 0){
    gameOver('win');
  }
  else if (isBot(door)){
    gameOver();
  }
}

//Each door image will check to make sure the door hasn't been already clikced and will change image on click
doorImage1.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage1)){
  	doorImage1.src = openDoor1;
  	playDoor(doorImage1);
  }
}
doorImage2.onclick = () =>{
  if (currentlyPlaying && !isClicked(doorImage2)){
  	doorImage2.src = openDoor2
  	playDoor(doorImage2);
  }
};
doorImage3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)){
  	doorImage3.src = openDoor3
  	playDoor(doorImage3);
  }
};

const gameOver = str => {
  if (str === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  }
  else{
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
}

//Function to randomly put each image into each door using Math.random. 
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if (choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  }
  else {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}
const startRound = () =>{
  console.log('starting round');
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

startButton.onclick = () =>{
  if (currentlyPlaying === false){
  startRound();
  }
}
