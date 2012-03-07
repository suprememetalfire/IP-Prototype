#pragma strict

var rockObject : Transform; 
var woodObject : Transform;
 
var playerStatsScript: PlayerStats;

function Awake()
{
	playerStatsScript = GetComponent(PlayerStats);
}

function Update()
{
	// If left mouse button is pressed
	if( Input.GetMouseButtonDown(0) )
	{
		var centreScreen:Vector2 ;// = Input.mousePosition;
		centreScreen.x = Screen.width/2;
		centreScreen.y = Screen.height/2;
	
		var ray = Camera.main.ScreenPointToRay( centreScreen );
		var hit : RaycastHit;
    	
    	// If clicked on an object that has a collider
    	if( Physics.Raycast( ray, hit, 10 ) ) 
    	{
    		// If clicked on a Tree
    		if( hit.collider.gameObject.tag == "Tree" )
    	  	{
	        	//Destroy( hit.collider.gameObject, 4 );
	        	hit.collider.gameObject.GetComponent(TreeDeletionHandler).Hit();
	        	
	        	var woodBody : Rigidbody = hit.collider.attachedRigidbody;   
	        	
	        	hit.collider.gameObject.rigidbody.isKinematic = false; 
    	
    			// Calculate push direction from move direction, 
    			// we only push objects to the sides never up and down
    			var woodPushDir : Vector3 = Vector3( 1, 0, 1 );
    
    			// Apply the push
    			woodBody.velocity = woodPushDir * 2;
    			
    			playerStatsScript.addWoodBlocks(5);    			    		
	      	}
	      	// If clicked on a rock
	      	if( hit.collider.gameObject.tag == "Rock" )
    	  	{
	        	hit.collider.gameObject.GetComponent(RockDeletionHandler).Hit();
    			
    			playerStatsScript.addRockBlocks(1);	
	      	}
	    }
   	}
   	if( Input.GetMouseButtonDown(1) )
	{
		if( playerStatsScript.getWoodBlocks() > 0 )
		{
			playerStatsScript.removeWoodBlocks(1);
		
			Instantiate( woodObject, transform.position, Quaternion.identity );
		}
		if( playerStatsScript.getRockBlocks() > 4 )
		{
			playerStatsScript.removeRockBlocks(1);
		
			Instantiate( rockObject, transform.position, Quaternion.identity );
		}
	}
}