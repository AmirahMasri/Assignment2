
var totalP=[0,0];

var position = 15;
var fallLadder5 = 5;

var position2 = 23;
var fallLadder16=16;

var position8 = 8;
var move15=15;

var positionNew = 19;
var move24=24;

function Dice(player){
  alert();
  out = document.getElementById("display");
  rollddice = Math.floor(Math.random()*6)+1;
  totalP[player-1]+=rollddice;


var fallen="";

switch(totalP[player-1])
{
  case position: totalP[player-1]=fallLadder5;
  fallen= "you are standing on a snake, back to position "; break;

  case position2: totalP[player-1]=fallLadder16;
  fallen= "you are standing on a snake, back to position "; break;

  case position8: totalP[player-1] = move15;
  fallen= "you are standing on a ladder, move to "; break;

  case positionNew: totalP[player-1]= move24;
  fallen= "you are standing on a ladder, move to "; break;

  default:
  fallen = "move to new position"; break;

}

if(totalP[player-1]>25)
{
  out.textContent+= "You Win!!";
  inputs = document.getElementById("button1");
  inputs.disabled = true;
  inputs = document.getElementById("button2");
  inputs.disabled = true;
}

else
out.textContent +="Player rolls a dice" rollddice+fallen+totalP[player-1];

}
