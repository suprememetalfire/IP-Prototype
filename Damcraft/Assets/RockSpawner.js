#pragma strict

var Rock : GameObject;

function Start () {

}

function Update () {

}

function spawnRock (position:Vector3)
{
	Instantiate(Rock, position, Quaternion.identity);
}