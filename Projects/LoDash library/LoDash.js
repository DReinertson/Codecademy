let _ = {
  
  clamp (num, low, high) {
    if (num < low){
      return low;
    }
    else if (num > high){
      return high;
    }
    else{
      return num;
    };
  },
  //In switch statement, not sure which is more efficient. 
  /*
  switch(num) {
  	case (num < low):
    	return low;
      break;
    case (num > high):
    	return high;
      break;
    default:
    	return num;
      break;
  }
  */
  inRange(num, start, end){
    
    if (end === undefined){
      end = start;
      start = 0;
    }
    
    if(start > end){
      let tempstart = start;
      let tempend = end;
      start = tempend;
      end = tempstart;
    }
    
    if(num >= start && num <= end){
      return true;
    }
    else{
      return false;
    }
  },
  
  words (str) {
    let arr = str.split(' ');
    return arr;
  },
  
  pad(str, len){
    const space = ' ';
    if (str.length > len){
      return str;
    }
    let padStart = (Math.floor((len - str.length) / 2))
    let padEnd = len - (str.length + padStart);
    
    let paddedString = space.repeat(padStart) + str;
    paddedString += space.repeat(padEnd)
    /*Using for loops
    for (let x = 0; x < padStart; x++){
      str = ' ' + str;
    }
    for (let y = 0; y < padEnd; y++){
      str += ' ';
    }
    */
    return paddedString;
  },
  
  has (obj, key){
    if(obj.key === undefined){
      return false;
    }
    if(obj.key){
      return true;
    }
    return false;
  }, 
  
  invert(obj){
    let newObj = {};
    for (x in obj){
      let origVal = obj[x];
      newObj[origVal] = x;
    }
    console.log(newObj)
    return newObj;
  }, 
  
  findKey(obj, func){
    for (x in obj){
      if (func(obj[x])){
        return x;
      }
      return undefined;
    }
  },
  //Tried following directions of splice(0,1) to remove first element, but instead returned the first two elements of previous array. Was working how I understand arr.slice() to work. 
  drop(arr, num){
    console.log('arrStart:', arr);
    if(num === undefined){
      arr = arr.splice(1, arr.length);
      return arr;
    }
    else{
      console.log('num provided');
      arr = arr.splice(num, arr.length);
      return arr;
    }
  },
  
  dropWhile(arr, func){
    let dropNumber = arr.findIndex(function(element, index){
      return !func(element, index, arr);
    });
    let droppedArray = this.drop(arr, dropNumber);
    return droppedArray;
  },
  
  chunk(arr, size){
    if (size === undefined){
      size = 1;
    }
    let newArr = [];
    for(x = 0; x < arr.length; x += size){
      newArr.push(arr.slice(x, x+size));
    }
    return newArr;
  }
  
  
};




// Do not write or modify code below this line.
module.exports = _;
