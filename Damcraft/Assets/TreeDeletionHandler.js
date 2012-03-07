#pragma strict

var destroyTimer:float = 5.0;
var destroyStarted:boolean;

function Start () {
	destroyTimer = 5.0;
	destroyStarted = false;
}

function Update () 
{
	if (destroyStarted == true)
	{
		if (destroyTimer < 0.0)
		{
			Debug.Log("destory Started");
			this.transform.position.y += 10000;
			Destroy(this.gameObject, 2);
			destroyStarted = false;
		}
		else
		{
			destroyTimer -= Time.deltaTime;
		}
	}
}

function Hit()
{
	Debug.Log("Tree Hit");
	destroyStarted = true;
}