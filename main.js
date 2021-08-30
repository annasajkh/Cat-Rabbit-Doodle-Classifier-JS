
function setup() {
    createCanvas(500, 500);
    border();
    background(255);
    document.addEventListener('touchmove', function() { e.preventDefault(); }, { passive:false });
}

function mouseDragged() {
    line(mouseX, mouseY,pmouseX, pmouseY);
}

function mouseReleased() {
    strokeWeight(0)
    rect(0,0,500,40)
    let img = get();
    img.resize(28, 28)
    img.filter(INVERT)
    image(img, 500 - 28 ,0)
    img.loadPixels()
    let string = ""

    for(let i = 0; i < 28 * 28; i++) {
        string += img.pixels[i * 4] / 255   
        
        if(i < 28 * 28 - 1) {
            string += ","
        }
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://cat-rabbit-doodle-classifier.annasvirtual.repl.co/predict_str", true);

    xhr.send(JSON.stringify({"img_str": string}));

    

    xhr.onload = () => {
        let result = JSON.parse(xhr.responseText);
        textSize(20)
        text("cat: " + result["cat"], 10, 20)
        text("rabbit: " + result["rabbit"], 10, 40)
    }


}

function clear_screen() {
    background(255);
}

function draw() {
    strokeWeight(15);
}