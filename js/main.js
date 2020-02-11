// view_show
const items = document.querySelectorAll('.show1, .grid');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      ((window.innerHeight || document.documentElement.clientHeight) + 200) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);




// Countdown valentine
// Set ngay ma ta dem
var countDownDate = new Date("Feb 13, 2020 23:59:00").getTime();

// Cap nhat sau khi down moi 1 s
var x = setInterval(function() {

  // Get ngay va thoi gian
  var now = new Date().getTime();

  // Tim ra so ngay tu hien tien den ngay set
  var distance = countDownDate - now;

  // Tinh toan thoi gian
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Hien thi ngay tieng phut gio va giay
  document.getElementById("dem_nao").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Neu dem xong ghi cai gi do that thu zi
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("dem_nao").innerHTML = "CHUA TIM DUOC CACH TU UPDATE .-.";
  }
}, 1000);