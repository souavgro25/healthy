const notification = document.querySelector("#note");
const closenote = document.querySelector("#closenote");
const closeside = document.querySelector("#closeside");
const sidebar = document.querySelector("#sidebar");
const openside = document.querySelector("#openside");
closenote.addEventListener("click", hide);

closeside.addEventListener("click", closesiddebar);
openside.addEventListener("click", opensidebar);
function hide() {
  notification.classList.add("hidden");
}

function closesiddebar() {
  sidebar.classList.add("hidden");
}

function opensidebar() {
  sidebar.classList.remove("hidden");
}

var countDownDate = new Date("oct 5, 2021 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("#day").innerHTML = days;
  document.querySelector("#hour").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
