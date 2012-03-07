#pragma strict

var woodTexture : Texture;
var rockTexture : Texture;
var backgroundTexture : Texture;

var player : PlayerStats;

var woodLeft = 0;
var rocksLeft = 0;

var wood = "";
var rock = "";
var gameTime;

var time = "";

var showGui = true;

var textStyle = new GUIStyle();

function Update()
{
	//gameTime = Time.fixedTime();
	
  	if( Input.GetKeyDown( KeyCode.F1 ) )
  	{
	    woodLeft++;
  	}
}

function OnGUI()
{	
	woodLeft = player.getWoodBlocks();
	rocksLeft = player.getRockBlocks();
	
	wood = "x " + woodLeft;
	rock = "x " + rocksLeft;
	time = "Time " + Time.fixedTime;
	
	textStyle.fontSize = 15;
	
	GUI.DrawTexture( Rect( 690, 690, 300, 80 ), backgroundTexture, ScaleMode.StretchToFill, true, 10.0f );
	
	GUI.DrawTexture( Rect( 700, 700, 60, 60 ), woodTexture, ScaleMode.StretchToFill, true, 10.0f );
  	GUI.Label( Rect( 760, 740, 100, 50 ), wood, textStyle );   
       
    GUI.DrawTexture( Rect( 790, 700, 60, 60 ), rockTexture, ScaleMode.StretchToFill, true, 10.0f );
    GUI.Label( Rect( 850, 740, 100, 20 ), rock, textStyle );
    
    GUI.Label( Rect( 880, 720, 100, 20 ), time, textStyle );
}