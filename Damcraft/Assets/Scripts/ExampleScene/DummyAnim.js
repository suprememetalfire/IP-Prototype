/*
Improvised script for the example scene to animate the "Dummy" character.
The Dummy is a bipedal character animated, I recommend do not use it into your project,
cause it's the example character for other projects.
*/
function Update () {
if(Input.GetKey(KeyCode.W) ||Input.GetKey(KeyCode.UpArrow)  ){if(!animation.IsPlaying("turn") || !animation.IsPlaying("rem")){animation.CrossFade("rem");}}
else if(Input.GetAxis("Horizontal") || Input.GetKey(KeyCode.S) ){if(!animation.IsPlaying("turn") || !animation.IsPlaying("rem")){animation.CrossFade("turn");}}
if(!Input.GetAxis("Horizontal") && !Input.GetAxis("Vertical")){animation.CrossFade("idle");}
}