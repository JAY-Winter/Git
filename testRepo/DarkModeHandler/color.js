// Part of Body
var Body = {
  setColor: function(color) {
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor : function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
// ModeChangeHandler
function ModeChangeHandler(self) {
  if(self.value === 'DARK'){
    Body.setColor('white');
    Body.setBackgroundColor('black');
    self.value ='DAY';
  } else {
    Body.setColor('black');
    Body.setBackgroundColor('white');
    self.value ='DARK';
  }
}
