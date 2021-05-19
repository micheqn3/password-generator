const canvas = document.querySelector("canvas"), // selects the canvas tag
  $ = canvas.getContext("2d"),
  W = (canvas.width = window.innerWidth),
  H = (canvas.height = window.innerHeight);

const str = "ÖØÙÚÝâãäåæçèéëìíîïðñòôõöøùúûüýþÿĀāĂăĄąĆĈ"; // these characters will display as the canvas background
const letters = str.split("");

let font = 20,
  col = W / font,
  arr = [];

for (let i = 0; i < col; i++) arr[i] = 1;

function matrix() {
  $.fillStyle = "rgba(0,0,0,.05)";
  $.fillRect(0, 0, W, H);
  $.fillStyle = "#cc0066";
  for (let i = 0; i < arr.length; i++) {
    let txt = letters[Math.floor(Math.random() * letters.length)];
    $.fillText(txt, i * font, arr[i] * font);
    if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;
    arr[i]++;
  }
}
setInterval(matrix, 100);
window.addEventListener("resize", () => location.reload());



