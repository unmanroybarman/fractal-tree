var angle = 0;
var slider;

function setup(){
    createCanvas(400, 400);
    slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw(){
    background(51); // grey color background
    angle = slider.value();
    stroke(255);
    translate(200, height); // branch relative to origin by translate function, we are translating to the bottom and drawing a branch
    branch(100);
}

function branch(len){
    line(0, 0, 0, -len);
    translate(0, -len);//we are drawing at bottom line, translating up to the top nd rotating and drawing another line i.e branch
    if (len > 4){
        push(); // saving transforation state
        rotate(angle);
        branch(len * 0.67); // recursive calling
        pop(); // restoring 
        push();
        rotate(-angle);  //rotate to the negative angle 
        branch(len * 0.67); //branch to the left
        pop();
    }
}