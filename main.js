video = '';
status = '';

function setup(){
    canvas = createCanvas(700, 400);
    canvas.position(755,400);
    video.hide();
}

function preload(){
    video = createVideo('video.mp4');
}

function draw(){
    image(video, 0, 0, 700, 400);
}

function start(){
    object_detector = ml5.objectDetector('cocossd', model_loaded);
    document.getElementById('status').innerHTML = 'Detecting Objects...';
//    video.hide();
}

function model_loaded(){
    console.log('Model Loaded!');
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}