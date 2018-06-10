//let canvas = document.getElementById("starlight");
//let context = canvas.getContext("2d");
var w = screen.width;
var h = screen.height/2;
var colors = [
  ["#b03941", "#843f43", "#c56077", "#f27c73", "#e6c4c1"], //orange pink
  ["#74af9d", "#6dd2c5", "#b3c3c3", "#c1cec4", "#cdeeed"], //green blue
  ["#599af5", "#375aa6", "#2c3c6c", "#54478f", "#090b18"], //purple blue
  ["#0d4b74", "#6691ab", "#213a55", "#bed0cb", "#7f486b"], //pink blue
  ["#642329", "#671b23", "#984d4a", "#6d4f40", "#251a19"], //dark pink
  ["#402b21", "#966a57", "#934a3f", "#24201c", "#d1987e"], //dark orange
  ["#161114", "#333433", "#424348", "#9d9d97", "#ababaa"], //dark grey
  ["#27424d", "#344243", "#364143", "#203f49", "#021623"] //dark blue
]
var color = colors[Math.floor(Math.random()*8)]
//canvas.setAttribute('width', w)
//canvas.setAttribute('height', h)

var setting = {
  width: screen.width,
  height: screen.height/2,
  canvas: document.getElementById("starlight"),
  content: null,
  starArr: [],
  number: 50
}

setting.canvas.setAttribute("width", setting.width)
setting.canvas.setAttribute("height", setting.height)
setting.content = setting.canvas.getContext("2d")
for (var i = 0; i < setting.number; i++) {
  var minus = Math.random() < 0.5?-1:1;
  setting.starArr.push({
    x: Math.random()*w,
    y: Math.random()*h,
    c: Math.floor(Math.random()*6),
    deg: Math.random()*6*minus,
    scale: 3+Math.random()*3,
    alpha: 0.1+Math.random()*0.2
  })
}

function updateStar() {
  setting.content.clearRect(0, 0, setting.width, setting.height)
  setting.content.save()
  for (var i = 0; i < setting.starArr.length; i++) {
    var h = 0.35*setting.starArr[i].scale
    setting.starArr[i].x += Math.tan(setting.starArr[i].deg*Math.PI/180)*h/2
    setting.starArr[i].y = setting.starArr[i].y + h
    
    if (setting.starArr[i].x < 0 || setting.starArr[i].x > setting.width || setting.starArr[i].y > setting.height) {
      setting.starArr.splice(i--, 1)
      continue;
    }
    
    setting.content.beginPath()
    for (var j = 0; j < 5; j++) {
      setting.content.lineTo(Math.cos((18+j*72)/180*Math.PI)*10+setting.starArr[i].x,
        -Math.sin((18+j*72)/180*Math.PI)*10+setting.starArr[i].y)
      setting.content.lineTo(Math.cos((54+j*72)/180*Math.PI)*5+setting.starArr[i].x,
        -Math.sin((54+j*72)/180*Math.PI)*5+setting.starArr[i].y)
    }
    setting.content.closePath();
    setting.content.globalAlpha = 0.6
    setting.content.shadowOffsetX = 2
    setting.content.shadowOffsetY = 2
    setting.content.shadowBlur = 4
    setting.content.shadowColor = "rgba(0, 0, 0, 0.15)"
    setting.globalAlpha = setting.starArr[i].alpha
    setting.content.fillStyle = color[setting.starArr[i].c]
    setting.content.fill()
  }
  setting.content.restore()
  window.requestAnimationFrame(updateStar)
}

updateStar()

function createNewStar() {
  setTimeout(function() {
    if (setting.starArr.length < 50) {
      for (var i = 0; i < 6; i++) {
        var minus = Math.random() < 0.5?-1:1;
        setting.starArr.push({
          x: Math.random()*w,
          y: 0,
          c: Math.floor(Math.random()*6),
          deg: Math.random()*6*minus,
          scale: 3+Math.random()*3,
          alpha: 0.1+Math.random()*0.2
        })
      }
    }
    createNewStar()
  }, Math.random()*200 + 500)
}

createNewStar()
