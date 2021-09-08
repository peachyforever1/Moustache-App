nose_X = 0
nose_Y = 0

function preload() {
    clown_nose = loadImage("https://th.bing.com/th/id/R055773ab22b1d882b4ec239a6ea2d646?rik=6oEXj7LK%2fV0ddw&riu=http%3a%2f%2fimages.clipartpanda.com%2fmoustache-clipart-RiA6aqa9T.png&ehk=XJZ09xLWEYPFKnVy5Ue1jOCAxFbxMn4NGBHgtI8RXhk%3d&risl=&pid=ImgRaw")
}
//preload is used to load the assets, audio , video, images
function setup() {
    canvas = createCanvas(500, 350)
    canvas.position(620, 350)
    //loading camera
    video = createCapture(VIDEO)
    video.size(500, 350)
    video.hide()
    //loading Posenet model
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotResults)

}
//setup is used to setup camera and canvas and models
function modelLoaded() {
    console.log("The Model has Loaded")
}

function gotResults(result) {
    if (result.length > 0) {
        console.log(result)
        nose_X = result[0].pose.nose.x-40
        nose_Y = result[0].pose.nose.y
    }
}

function draw() {
    image(video, 0, 0, 500, 350)
    image(clown_nose, nose_X, nose_Y, 80, 30)
}
//draw function is used to add content on the screen
function download(){
    save('mustache_filter')
}