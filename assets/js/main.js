
function getDate(date){
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minutes = date.getMinutes();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return day + "-" + month + "-" + year + "-" + hour + "h" + minutes;
};

function checkIfOpen(date) {
  var closedDays= ['Sunday', 'Monday', 'Saturday']
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var day = date.getDay();
  if (closedDays.includes(days[day])) {
    return 'FERME'
  } else {
    return 'OUVERT'
  }
}

function setDate() {
  elem = document.getElementById("date");
  const date = new Date();
  elem.innerText = "Nous sommes le" + getDate(date) + ", le restaurant est " + checkIfOpen(date);
  console.log(date)
}

window.onload = () => {
  setDate();
};
