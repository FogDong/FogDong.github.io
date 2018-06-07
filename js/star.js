var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.beginPath();
//设置是个顶点的坐标，根据顶点制定路径
for (var i = 0; i < 5; i++) {
  context.lineTo(Math.cos((18+i*72)/180*Math.PI)*10+30,
    -Math.sin((18+i*72)/180*Math.PI)*10+30);
  context.lineTo(Math.cos((54+i*72)/180*Math.PI)*5+30,
    -Math.sin((54+i*72)/180*Math.PI)*5+30);
}
context.closePath();

context.shadowOffsetX = 2;
context.shadowOffsetY = 2;
context.shadowBlur = 4;
context.shadowColor = "rgba(0, 0, 0, 0.15)";

context.fillStyle = "#f8efea";
context.fill();