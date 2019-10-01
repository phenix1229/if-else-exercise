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

}

function instructorHeight() {

}




module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}