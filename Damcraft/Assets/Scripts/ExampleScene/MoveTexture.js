//Improvised script to anim the water
var Speed = 0.5;
function Update () {

var offset : float = Time.time * Speed;
renderer.material.SetTextureOffset ("_MainTex", Vector2(offset,0));
renderer.material.SetTextureOffset ("_BumpMap", Vector2(-offset,-offset*2));

}