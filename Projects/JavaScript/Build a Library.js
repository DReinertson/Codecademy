class Media{
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
    
  }
  
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }
  set isCheckedOut(status){
    this._isCheckedOut = status;
  }
  
  getAverageRating(){
    let sum = this._ratings.reduce((a,b) => a + b);
    let arrLength = this._ratings.length;
    return sum / arrLength 
  }
  
  addRating(rating){
    if (typeof rating === 'number' && rating > 0 && rating <= 5){
    	this._ratings.push(rating);
    }
  }
  
  toggleCheckOutStatus(){    
    if (this._isCheckedOut === false){
      this._isCheckedOut = true;
    }
    else{
      this._isCheckedOut = false;
    } 
  }
  
}

class Book extends Media{
  constructor(title, author, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media{
  constructor(title, director, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}

class CD extends Media{
  constructor(title, artist, songs){
    super(title);
    this._artist = artist;
    this._songs = songs;
    this._shuffledSongs = [];
  }
  
  get artist(){
    return this._artist;
  }
  get songs(){
    return this._songs;
  }
  // Fisher-Yates (aka Knuth) Shuffle
  /*shuffle(){
    this._shuffledSongs = this._songs;
    let input = this._shuffledSongs;
    
    for (let x = input.length - 1; x >= 0; x--){
      let ranInd = Math.floor(Math.random() * (x +1));
      let itemAtInd = input[ranInd];
      
      input[ranInd] = input[x];
      input[x] = itemAtInd;
    }
    return this._shuffledSongs;
  }*/
  
  shuffle(){
    let arrayLength = this._songs.length;
    let indexArr = [];
    //Create array with values of indices availabe. Will remove number at index when shuffling song and attribute this to new object proprety in order to preserve the original order. 
    for (let x = 0; x < arrayLength; x++){
      indexArr.push(x);
    }
    //For loop to pull song at random from this._songs. Will remove index of random song from indexArr(to prevent repeats), continue until indexArr.length = 0;
    for (let y = 0; y < arrayLength; y++){
      let randomNumber = Math.floor(Math.random() * indexArr.length);
     let randomIndex = indexArr[randomNumber];
      console.log('indexArr:', indexArr, 'randomNumber:', randomNumber, 'randomIndex: ', randomIndex);
      this._shuffledSongs.push(this._songs[randomIndex]);
      indexArr.splice(randomNumber, 1)
    }
    
    
  }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544 );
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

const U2 = new CD('U2', 'U2', ['track1', 'track2','track3', 'track4', 'track5', 'track6', 'track7']);
console.log(U2.shuffle());
console.log(U2);
