let width = screen.width , height = screen.height;
let drops = [], x = false, y = false, scene, raindrop;

function setup() {
    createCanvas(width, height);
    scene = loadImage('https://upload.wikimedia.org/wikipedia/en/0/06/Cumulus_Cloud.jpg');
    
    for(let i = 0; i < width; i++){
        drops[i] = new Drop();
    }
    stroke('purple');
}

function draw() {
    background(scene);
    for(let i = 0; i < width; i++){
       drops[i].render();
       drops[i].fall();
    }
}

function mousePressed(){
    x = mouseX;
    y = mouseY;
}