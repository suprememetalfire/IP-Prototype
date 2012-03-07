//Improvised Script to change the control and the objects.

var Camera1 : GameObject;
var Camera2 : GameObject;
var GO1 : GameObject;
var GO2 : GameObject;
var Skin : GUISkin;
private var Name : String;
function Update(){
	if(!GO1.GetComponent("BasicMovement").Instantiater)Name = "Plastic Ball";
	if(GO1.GetComponent("BasicMovement").Instantiater)Name = "Metal Box";
}
function OnGUI () {
	GUI.skin = Skin;
	if (GUI.Button (Rect (40, 105, 70, 20), "Reset")) {
	Application.LoadLevel("Scene");
	}
	if (GUI.Button (Rect (25, 25, 100, 30), "Character")) {
	Camera1.active = true;
	Camera2.active = false;
	GO2.GetComponent("ShipControl").enabled = false;
	GO2.GetComponentInChildren(DummyAnim).enabled = false;
	GO1.GetComponent("BasicMovement").enabled = true;
	}
	if (GUI.Button (Rect (25, 65, 100, 30), "Gondola")) {
	Camera1.active = false;
	Camera2.active = true;
	GO2.GetComponent("ShipControl").enabled = true;
	GO2.GetComponentInChildren(DummyAnim).enabled = true;
	GO1.GetComponent("BasicMovement").enabled = false;
	}	
	GUI.Label (Rect (135, 25, 100, 30), "You are using a " + Name + ", press tab to change, left click to instantiate");

}
