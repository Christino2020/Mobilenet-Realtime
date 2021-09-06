function setup(){
    canvas = createCanvas(300, 280)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    classifier = ml5.imageClassifier('MobileNet', modelLoaded)
}
function modelLoaded(){
    console.log("Model Loaded!")
}
function draw(){
    image(video, 0, 0, 300, 280)
    classifier.classify(video, classifyVideo)
}
function classifyVideo(error, results){
if(error){
    console.error(error)
}
else{
    document.getElementById("object_name").innerHTML = results[0].label
    document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3) *100
}
}