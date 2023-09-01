//Inicialize as variaveis constantes com os elementos do mundo da fisica
//Os elementos engine, world, bodies e constraint são da biblioteca matter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//Inicialize variáveis para os sprites
var engine, world;
var canvas;
var player, playerBase;
var backgroundImg, baseImg, playerImg;

//Vamos definir a função que carrega os ativos
function preload(){

    //Vamos carregar a imagem do fundo, a base e o jogador
    backgroundImg = loadImage("./assets/background.png");
    baseImg = loadImage("./assets/base.png");
    playerImg = loadImage("./assets/player.png");

}

//Vamos definir a função que define os parâmetros
function setup() {
    
    //Vamos criar a tela de jogo na resolução do dispositivo
    canvas = createCanvas(windowWidth, windowHeight);
    //Vamos criar o motor e atribuila a var engine
    engine = Engine.create();
    //vamos adicionar o motor ao mundo
    world = engine.world;
    //vamos definir a unidade de medida para ângulo
    angleMode(DEGREES);
    //vamos definir uma característica estática
    var options = {
        isStatic: true
    };
    //vamos criar um corpo retangular
    //.rectangle(x, y, width, heigth, options);
    playerBase = Bodies.rectangle(200, 350, 180, 150, options);
    //Vamos adicionar o corpo ao mundo
    World.add(world, playerBase);
    //vamos criar um corpo retangular
    player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
    //Vamos adicionar o corpo ao mundo
    World.add(world,player)
}

//Vamos definir a função que repete constatemente]
function draw() {
    //vamos definir a imagem de fundo
    background(backgroundImg);
    //vamos carregar o motor da física
    Engine.update(engine);
    //vamos adicionar a tela os sprites
    image(baseImg,playerBase.position.x,playerBase.position.y,180,150)
    image(playerImg,player.position.x,player.position.y,50,180)
  
    // Título
    //Vamos definir a cor da fonte
    fill("#FFFF");
    //vamos definir o alinhamento do texto
    textAlign("center");
    //vamos definir o tamanho da fonte
    textSize(40);
    //vamos exibir o texto
    //text("texto", x, y);
    text("ARQUEIRO ÉPICO", width / 2, 100);
  }