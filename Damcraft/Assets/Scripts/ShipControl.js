/*
-> SIMPLE SHIP CONTROL v1 <-
Very simple code to simulate the ship movement. Your ship must contain Constant Force component.
Simply attach this script to your ship parent and configure it as you like.
We use the default axes, Horizontal and Vertical.
*/
var Speed = 20.0;
var Torque= 20.0;
var TorqueInclination = 20.0;
function Update () {
constantForce.relativeForce.x = -Input.GetAxis("Vertical") * Speed;
constantForce.relativeTorque.y = Input.GetAxis("Horizontal") * Torque;
constantForce.torque.z = -Input.GetAxis("Horizontal") * TorqueInclination * Time.deltaTime;
}


