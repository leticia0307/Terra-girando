let terra;

function preload(){
    terra = loadImagem('terra,jpg')
}
function setup(){
    createCanvas(1920,1080, WEBGL);//plano 3D
}

function draw(){
    backgrond(205, 102, 94);//cor de fundo
    rotateY(millis()/1000);//rotaçâo da terra
    texture(terra);//texture da terra, imagem.
    sphere(80, 100);//esfera 3D
 }