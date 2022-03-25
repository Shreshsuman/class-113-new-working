function preload() {
}

function setup() {
    var canvas = createCanvas(640, 480);
    canvas.position(300, 250);
    video = createCapture(VIDEO);
    video.hide();
    var tint_color = "";
}

function draw(){
    image(video,0,0640,480);
    tint(tint_color);
}

function take_snapshot(){
    save('photo.png')
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}
