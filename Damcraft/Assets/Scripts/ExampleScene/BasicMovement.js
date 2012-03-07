/*Improvised Script (First Person Controller with rigidbody)
This script can be improved to make a better FPS controller with water physics.
With this one you can swim and "dive".
*/

var Speed = 0.3;
var Character : boolean;
var Ball : GameObject;
var metalBox : GameObject;
var Instantiator : Transform;
private var Instantiater : boolean;
private var Triggered : boolean;
private var Grounded : boolean;
private var Speedo = Speed;
private var Drag;
private var Clone : GameObject;
Drag = rigidbody.drag;
function Update () {
if(Input.GetButtonDown("Fire1")){
if(!Instantiater)Clone = Instantiate(Ball,Instantiator.position,Instantiator.rotation);
if(Instantiater)Clone = Instantiate(metalBox,Instantiator.position,Instantiator.rotation);
Clone.rigidbody.AddForce(Instantiator.TransformDirection (0, 0, 500) * 2);
}
if(Input.GetKeyDown(KeyCode.Tab)){
if(Instantiater)Instantiater=false;else Instantiater = true;
}

if(!Grounded && !Triggered){rigidbody.drag = 0.1;Speed = Speedo / 10;}else{rigidbody.drag = Drag;Speed = Speedo;}
if(Character && Triggered){
if (Input.GetKeyDown("space"))rigidbody.AddRelativeForce(transform.up * 15, ForceMode.Impulse);
var cam : Transform = Camera.main.transform;
var cameraRelativeRight : Vector3 = cam.TransformDirection (Input.GetAxis("Horizontal") * Speed,0,Input.GetAxis("Vertical") * Speed);
// Apply a force relative to the camera's x-axis
rigidbody.AddForce (cameraRelativeRight, ForceMode.VelocityChange);
}
if(Character && !Triggered){
if (Input.GetKeyDown("space") && Physics.Raycast(transform.position, -transform.up,2))rigidbody.AddRelativeForce(transform.up * 15, ForceMode.Impulse);
var Movement : Vector3 = transform.TransformDirection(Input.GetAxis("Horizontal") * Speed,0,Input.GetAxis("Vertical") * Speed);
rigidbody.AddForce (Movement, ForceMode.VelocityChange);
}
}
function OnCollisionStay(){
Grounded = true;
}
function OnCollisionExit(){
Grounded = false;
}
function OnTriggerStay(collider : Collider){
if(collider.tag == "Water"){
Triggered = true;
}}
function OnTriggerExit(collider : Collider){
if(collider.tag == "Water"){
Triggered = false;
}

}