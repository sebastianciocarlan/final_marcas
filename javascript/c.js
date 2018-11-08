var c = document.getElementById("c");
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
var chinese = "彼女は窓から星空を見上げた";
chinese = chinese.split("");
var font_size = 10;
var columns = c.width / font_size; 
var drops = [];
for (var x = 0; x < columns; x++)
    drops[x] = 1;
function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#43287a"; 
    ctx.font = font_size + "px Noto Sans JP";
    for (var i = 0; i < drops.length; i++) {
        var text = chinese[Math.floor(Math.random() * chinese.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        if (drops[i] * font_size > c.height && Math.random() > 0.980)
            drops[i] = 0;
        drops[i]++;
    }
}
setInterval(draw, 33);