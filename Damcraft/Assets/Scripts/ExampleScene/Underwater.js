//Improvised script to make an underwater effect (activating fog when camera's collider enters the trigger)
function OnTriggerStay(collider : Collider){
if(collider.tag == "Water" )RenderSettings.fog = true;

}
function OnTriggerExit(collider: Collider){
if(collider.tag == "Water")RenderSettings.fog = false;
}