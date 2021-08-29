
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
    get
    erase()
    rect(0,0,130,40)
    noErase()

    let img = get();
    img.resize(28, 28)
    img.loadPixels()

    let img_pixel = Array.from(img.pixels)
    let string = ""

    for(let i = 0; i < 28 * 28; i++) {
        string += 1 - (img_pixel[i * 4] / 255)
        
        if(i < 28 * 28 - 1) {
            string += ","
        }
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://cat-rabbit-doodle-classifier.annasvirtual.repl.co/predict_str", true);

    xhr.send(JSON.stringify({"img_str": string}));

    xhr.onload = () => {
        erase()
        rect(0,0,130,40)
        noErase()
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
    strokeWeight(10);
}