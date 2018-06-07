let canvas = document.getElementById("starlight");
let context = canvas.getContext("2d");
let w = screen.width;
let h = screen.height/2;
let colors = [
  ["#b03941", "#843f43", "#c56077", "#f27c73", "#e6c4c1"], //orange pink
  ["#74af9d", "#6dd2c5", "#b3c3c3", "#c1cec4", "#cdeeed"], //green blue
  ["#599af5", "#375aa6", "#2c3c6c", "#54478f", "#090b18"], //purple blue
  ["#0d4b74", "#6691ab", "#213a55", "#bed0cb", "#7f486b"], //pink blue
  ["#642329", "#671b23", "#984d4a", "#6d4f40", "#251a19"], //dark pink
  ["#402b21", "#966a57", "#934a3f", "#24201c", "#d1987e"], //dark orange
  ["#161114", "#333433", "#424348", "#9d9d97", "#ababaa"], //dark grey
  ["#27424d", "#344243", "#364143", "#203f49", "#021623"], //dark blue
]
let color = colors[Math.floor(Math.random()*8)]
canvas.setAttribute('width', w)
canvas.setAttribute('height', h)

function run(star, x, y, c) {
  star.save()
  star.clearRect(0,0, w, h);
  for (let i = 0 ; i < 300; i++) {
    star.beginPath();
    for (let j = 0; j < 5; j++) {
      star.lineTo(Math.cos((18+j*72)/180*Math.PI)*10+x[i],
        -Math.sin((18+j*72)/180*Math.PI)*10+y[i]);
      star.lineTo(Math.cos((54+j*72)/180*Math.PI)*5+x[i],
        -Math.sin((54+j*72)/180*Math.PI)*5+y[i]);
    }
    star.closePath();
    star.globalAlpha = 0.6
    star.shadowOffsetX = 2;
    star.shadowOffsetY = 2;
    star.shadowBlur = 4;
    star.shadowColor = "rgba(0, 0, 0, 0.15)";
    star.fillStyle = color[c[i]];
    star.rotate(y[i]*Math.PI/180/150);
    star.fill();
  }
  star.restore()
}

let x = [], y = [], c = []
for (let i = 0 ; i < 300; i++) {
  x.push(Math.random()*w)
  y.push(Math.random()*h)
  c.push(Math.floor(Math.random()*6))
  context.beginPath();
  for (let j = 0; j < 5; j++) {
    context.lineTo(Math.cos((18+j*72)/180*Math.PI)*10+x[i],
      -Math.sin((18+j*72)/180*Math.PI)*10+y[i]);
    context.lineTo(Math.cos((54+j*72)/180*Math.PI)*5+x[i],
      -Math.sin((54+j*72)/180*Math.PI)*5+y[i]);
  }
  context.closePath();
  context.globalAlpha = 0.6
  context.shadowOffsetX = 2;
  context.shadowOffsetY = 2;
  context.shadowBlur = 4;
  context.shadowColor = "rgba(0, 0, 0, 0.15)";
  context.fillStyle = color[c[i]];
  context.fill();
}

(function drawFrame(){
  y = y.map(o => {
    return o + Math.random()*0.35
  })
  window.requestAnimationFrame(drawFrame);
  context.fillRect(0, 0, w, h);  //注意这
  run(context, x, y,c);
}())