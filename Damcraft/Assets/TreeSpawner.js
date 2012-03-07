#pragma strict

var SycamoreTree : GameObject;
var PineTree : GameObject;

function Start () {

}

function Update () {

}

function spawnTree (treeType:int, position:Vector3)
{
	if (treeType == 0)
	{
		Instantiate(SycamoreTree, position, Quaternion.identity);
		SycamoreTree.rigidbody.WakeUp();
	}
	
	else if (treeType == 1)
	{
		Instantiate(PineTree, position, Quaternion.identity);
		PineTree.rigidbody.WakeUp();
	}
}