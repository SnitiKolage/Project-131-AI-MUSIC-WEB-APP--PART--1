img = "";
objects = [];
statuss = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status:DetectingObjects";
}

function modelLoaded() {
    console.log("modelLoaded");

}

function draw(){
    image(img, 0, 0, 640, 420);
}