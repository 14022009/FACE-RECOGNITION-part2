Webcam.set({
    width:500,
    height: 380,
    image_format: 'png',
    png_quality: 90    
});

Webcam.attach(document.getElementById("webcam_dis"));
console.log("ml5 version", ml5.version);
var classfiys = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-ouN2Qanm/modal.json', model_load);
function take_pic() {
    Webcam.snap(function (snap) {
        document.getElementById("webcam_dis_s").innerHTML = "<img id='webcamera' src = " + snap + ">";
    });
}