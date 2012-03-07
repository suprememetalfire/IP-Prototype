#pragma strict

var destroyStarted:boolean;

function Start () {
	destroyStarted = false;
}

function Update () 
{
	if (destroyStarted == true)
	{
			Debug.Log("destroy Started");
			this.transform.position.y += 10000;
			Destroy(this.gameObject, 3);
			destroyStarted = false;
	}
}

function Hit()
{
	Debug.Log("Rock Hit");
	destroyStarted = true;
}