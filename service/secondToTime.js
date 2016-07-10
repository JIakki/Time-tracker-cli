module.exports = function(time) {
  var hours = (time / 3600);
  var minutes = ((time % 3600) / 60);
  var seconds = (time % 3600) % 60;

  return `${formatWithZero(hours)}:${formatWithZero(minutes)}:${formatWithZero(seconds)}`;
}

function formatWithZero(number) {
  if(number < 10) {
    return '0' +  Math.floor(number)
  } else {
    return Math.floor(number);
  }
}