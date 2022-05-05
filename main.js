function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kyC2wx0pH/modal.json', modelReady);


function modelReady() {
    classifier.classify(gotResults);
}
dog = 0;
cat = 0;

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML = "Detected Voice Is of - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2)+"%"
        document.getElementById("result_label").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        var img = document.getElementById("animal_image");
        if (results[0].label == "Barking") {
            img.src = dog gif.gif;
        }

        
        if (results[0].label == "Meowing") {
            img.src = cat gif.gif;
        }

        else  {
            img.src = ear gif.gif;
        }