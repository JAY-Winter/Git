function setColor(color) {
  document.querySelector('body').style.color = color;
}
function setBackgroundColor(color){
  document.querySelector('body').style.backgroundColor = color;
}
function ModeChangeHandler(self) {
  if(self.value === 'DARK'){
    setColor('white');
    setBackgroundColor('black');
    self.value ='DAY';
  } else {
    setColor('black');
    setBackgroundColor('white');
    self.value ='DARK';
  }
}
