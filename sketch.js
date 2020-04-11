const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rain;
var l,i,c;
var interval, time, droplimit;
var num; //random colour
function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;
  rain = [];
  i = 0;
  c = 0;
  num = 0;
  droplimit = 150; //to prevent game slowing down
  l = rain.length;
  interval = 1; //can be tweaked to change rain spawn rate, decimal values don't affect anything
  time = 0;
}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  l = rain.length;
  while(i<l) {
    rain[i].display();
    i++;
  }
  if(i>=l) {
    i = 0;
  }
  num = random()*16777216;
  num-=1;
  num=num.toString(16);
  num=num.slice(0,6);
  num="#"+num;
  if(time>=interval) {
    time = 0;
    rain.push(new Raindrop(random()*600,random()*600,random()*20));
  }
  if(c>=droplimit) {
    rain.shift();
  }
  time++;
  c++;
}