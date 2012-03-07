/* 
-> BUOYANCY PHYSICS v1 <-
Configure the water, create a new tag named "Water" and tag your water. Add a trigger collider to your water
(cube collider triggered recommended) and its strongly recommended that change the collider Y size and position,
making something like a "pool" to avoid bugs.
Also you can use the water prefab that I leave you in the project, but I recommend that make your own.

Attach this script to each object that you want water physics with a Rigidbody and a collider at less.
Configure the rigidbody mass, drag and angular drag, and then the floater sinking, center of mass (if you want)
and damper (default value is ok)

You can use the animation with your object, so when it enters the water play a balancing animation.
+ Is VERY recommended the use of a parent when using an animation:
 If you are using a parent, attach this script to it, activate "Is Parent Of Mesh" and attach a rigidboy too.
Then in you children, you must have a child called "MeshContainer" and then into this child every object you want.

You can auto-simulate the physics just activating "Use Collider Material". Go to the object collider (the object
or the MeshContainer) and select one material. Default materials are Metal, Wood and Bouncy. Then the water
physics will be simulated relative to the mass, drag and center of mass.

TRICK: if you have a parent, the parent object acts as a float point, so for bigger objects that sink
more than expected or vice versa, you can move the JUST parent at the desired point and then
attach their children to it (Check the Big Crate, Gondola or Base prefab). Be careful with this method,
it can ruin your animation or mesh ingame if your object has.

NOTE: the buoyancy physics depend of a lot of things, mass, drag, angular drag, sinking, factor, gravity
but also the collider. So if you can't get the desired physics try changing the collider or adding/removing
it. An expample of this is the Gondola prefab, I use a box collider into the parent and a mesh collider 
into the mesh, but this is optional.
*/

//Public vars
var Sinking : float = 0.07;
var Damper = 0.3;
var Factor = 0.7;
var CenterOfMass : Vector3;
var Balancing : boolean;
var BalancingAnimation : AnimationClip;
var useColliderMaterial : boolean;
var IsParentOfMesh : boolean;
//Private vars
private var MeshContain : Transform;
private var body : GameObject;
private var Center : Vector3;
private var Triggered : boolean;

//START
function Start(){
//Find the mesh container
if(Balancing && !IsParentOfMesh)MeshContain = gameObject.transform;
else if (IsParentOfMesh) MeshContain = transform.Find("MeshContainer");
//Apply animation if its activated
if(Balancing){MeshContain.gameObject.AddComponent(Animation);
MeshContain.gameObject.animation.playAutomatically = false;
MeshContain.gameObject.animation.clip=BalancingAnimation;
MeshContain.gameObject.animation.AddClip(BalancingAnimation,"Balancing");}
//Recalculate the center of mass and apply buoyancy
rigidbody.centerOfMass = CenterOfMass;
Center = -CenterOfMass;

//PREMADE  COLLIDER MATERIAL SIMULATION, you can add more materials here
if(useColliderMaterial){
 //Wood
if(IsParentOfMesh && MeshContain.collider.material.name == "Wood (Instance)" ){
if(rigidbody.mass != 1){Sinking = 1 / (rigidbody.mass/5);}else{Sinking=1;}Damper=0.5;Factor=rigidbody.mass - (rigidbody.mass / 100) ;
 }
 //Metal (Heavy material, do not use animation)
 if(!IsParentOfMesh && collider.material.name == "Metal (Instance)" || IsParentOfMesh && MeshContain.collider.material.name == "Metal (Instance)"){
Sinking =  10 / rigidbody.mass ;Damper=0.6;Factor=0;
 }
 //Bouncy (Plastic)
 if(!IsParentOfMesh && collider.material.name == "Bouncy (Instance)"  || IsParentOfMesh && MeshContain.collider.material.name == "Bouncy (Instance)"){
Sinking = 1 / rigidbody.mass;Damper=0.2;Factor=rigidbody.mass * 0.97;
 }
 
 }

}
//Apply Physics
function FixedUpdate () {

if(Triggered){
var Point = transform.position + transform.TransformDirection(Center);
var Force = Factor - ((Point.y - body.transform.position.y) / Sinking);
if (Force > Factor) {var buoyancy= -Physics.gravity * (Force - rigidbody.velocity.y * Damper);
rigidbody.AddForceAtPosition(buoyancy, Point);}
}else if(Balancing){MeshContain.animation.Stop("Balancing");}
if(!Triggered)rigidbody.AddForce(transform.up * 0.001, ForceMode.Acceleration);
}

function OnTriggerStay (collider : Collider) {
if(Balancing && collider.tag == "Water"){
MeshContain.animation.Play("Balancing");
}
if(collider.tag == "Water")body = collider.gameObject;
if(collider.tag == "Water")Triggered = true;
}

function OnTriggerExit(collider : Collider){
if(collider.tag == "Water")Triggered = false;
}

