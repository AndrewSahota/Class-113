function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(350,300);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw(){
    image(video,150,120,300,300);
    tint(tint_color);
    fill("blue")
    circle(95,80,70);
    fill("lime")
    circle(470,80,70);
    fill("red")
    circle(490,450,70);
    fill("yellow")
    circle(95,450,70);
    fill("grey");
    rect(95, 80, 55, 390, 40);
    rect(440, 80, 55, 390, 40);
    rect(95, 70, 400, 55, 40);
    rect(95, 420, 400, 55, 40);

}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}
