#pragma strict

var swingActive:boolean = false;
var swingDownComplete:boolean = false;

function Start () {

}

function Update ()
{
	if(Input.GetMouseButtonDown(0))
	{
    	if (swingActive == false)
		{
			swingActive = true;
		}
	}

	if ( swingActive == true)
	{
		if (swingDownComplete == false)
		{
			if (this.transform.localPosition.x > 0.0)
			{
				this.transform.localPosition.x -= 2 * Time.deltaTime;
				this.transform.localPosition.y -= 2 * Time.deltaTime;
				this.transform.localPosition.z += 2 * Time.deltaTime;
			}
			else
			{
				swingDownComplete = true;
			}
			//this.transform.localPosition.x = 0.0;
			//this.transform.localPosition.y = 0.05;
			//this.transform.localPosition.z = 0.5;
			
		}
		else
		{
			if (this.transform.localPosition.x < 0.25)
			{
				this.transform.localPosition.x += 2 * Time.deltaTime;
				this.transform.localPosition.y += 2 * Time.deltaTime;
				this.transform.localPosition.z -= 2 * Time.deltaTime;
			}
			else
			{
				swingActive = false;
				swingDownComplete = false;
			}
				
			//	this.transform.localPosition.x = 0.25;
			//this.transform.localPosition.y = 0.05;
			//this.transform.localPosition.z = -0.45;
			
		}
	}
}

function AxeStrike()
{
	if (swingActive == false)
	{
		swingActive = true;
	}
}