let cor;
let posicaoHorizontal // x
let posicaoVertical //y

function setup() {
  random(0,200)
  createCanvas(400, 400);
  background("#704FACC6")
  cor = color(random(0,50),random(0,200), random(0,250));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {

  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  
  if(mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 1;
  }
   
  if(mouseX > posicaoHorizontal) {
   posicaoHorizontaL = posicaoHorizontal + 1;
  }
  
}
  
