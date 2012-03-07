#pragma strict

var rangeOfSpawnFromCentre: int;
var updateCounter:float = 5.0;
var treesInArea:int;
var prefabSycamore : Transform;
var treeSpawnerScript : TreeSpawner;

function Awake ()
{
	treeSpawnerScript = GetComponent(TreeSpawner);
}

function Update ()
{
	updateCounter -= Time.deltaTime;
	
	if (updateCounter < 0.0)
	{
		updateCounter = 5.0;
		spawnTree();
	}
}

function OnTriggerEnter(other:Collider)
{	

	//treesInArea = 0;
	if ( other.gameObject.CompareTag("Tree"))
	{
		if (other.gameObject.rigidbody.isKinematic == true) 
		{
			treesInArea++;
			Debug.Log ("Tree Added" + treesInArea.ToString());
		}			
	}
}

function OnTriggerExit(other:Collider)
{
	if ( other.gameObject.CompareTag("Tree"))
	{
		treesInArea--;
		Debug.Log ("Tree Removed" + treesInArea.ToString());
	}
}


function spawnTree()
{
	treeSpawnerScript.spawnTree(0, Vector3(this.transform.position.x + Random.Range(-rangeOfSpawnFromCentre,
	 rangeOfSpawnFromCentre), this.transform.position.y - 5,
	  this.transform.position.z + Random.Range(-rangeOfSpawnFromCentre, rangeOfSpawnFromCentre)));
}