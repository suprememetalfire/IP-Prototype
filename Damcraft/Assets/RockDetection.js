#pragma strict

var rangeOfSpawnFromCentre:int;
var updateCounter:float = 10.0;
var rocksInArea:int;
var rockSpawnerScript : RockSpawner;

function Awake ()
{
	rockSpawnerScript = GetComponent(RockSpawner);
}

function Update ()
{
	updateCounter -= Time.deltaTime;
	
	if (updateCounter < 0.0)
	{
		updateCounter = 10.0;
		spawnRock();
	}
}

function OnTriggerEnter(other:Collider)
{	

	//treesInArea = 0;
	if ( other.gameObject.CompareTag("Rock"))
	{
			rocksInArea++;
			Debug.Log ("Rock Added" + rocksInArea.ToString());			
	}
}

function OnTriggerExit(other:Collider)
{
	if ( other.gameObject.CompareTag("Rock"))
	{
		rocksInArea--;
		Debug.Log ("Rock Removed" + rocksInArea.ToString());	
	}
}


function spawnRock()
{
	rockSpawnerScript.spawnRock(Vector3(this.transform.position.x + Random.Range(-rangeOfSpawnFromCentre,
	 rangeOfSpawnFromCentre), this.transform.position.y - 5,
	  this.transform.position.z + Random.Range(-rangeOfSpawnFromCentre, rangeOfSpawnFromCentre)));
}