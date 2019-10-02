function isItLong(str) {
  if (str.length > 20){
    return "That's a long string!";
  }
}

function isItMedium(str) {
  if (str.length >=10 && str.length <= 20){
    return "That's a regular sized string!";
  }
}

function isItShort(str) {
  if (str.length < 10){
    return "That's a small string!";
  }
}

function howLongIsMyString(str) {
  if (isItShort(str)){
    return isItShort(str);
  }
  else if (isItMedium(str)){
    return isItMedium(str);
  }
  else if (isItLong(str)){
    return isItLong(str);
  }

}

function instructorHeight(str) {
  const colin = 62
  const mesuara = 67

  if (str === 'Colin') {
    return colin;
  }
  else if (str === 'Mesuara') {
    return mesuara;
  }
  else {
    return "I don't know that instructor!"
  }
}




module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}