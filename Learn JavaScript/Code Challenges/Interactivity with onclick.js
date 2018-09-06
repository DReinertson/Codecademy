let element = document.querySelector("button");

element.onclick = function turnButtonRed (){
  element.style.backgroundColor = 'red';
  element.style.color = 'white';
  element.innerHTML = 'Red Button';

}

