//using UnityEngine;
//using System.Collections;
	
	enum RotationAxes { MouseXAndY, MouseX, MouseY}
	var axes = RotationAxes.MouseXAndY;
	var sensitivityX:float = 15.0f;
	var sensitivityY:float = 15.0f;
	
	var minimumX:float = -360.0f;
	var maximumX:float = 360.0f;
	
	var minimumY:float = -60.0f;
	var maximumY:float = 60.0f;
	
	var rotationX:float = 0.0f;
	var rotationY:float = 0.0f;
	
	var originalRotation:Quaternion;

	function Update ()
	{
		if (axes == RotationAxes.MouseXAndY)
		{
			// Read the mouse input axis
			rotationX += Input.GetAxis("Mouse X") * sensitivityX;
			rotationY += Input.GetAxis("Mouse Y") * sensitivityY;

			rotationX = ClampAngle (rotationX, minimumX, maximumX);
			rotationY = ClampAngle (rotationY, minimumY, maximumY);
			
			var xQuaternion = Quaternion.AngleAxis (rotationX, Vector3.up);
			var yQuaternion = Quaternion.AngleAxis (rotationY, Vector3.left);
			
			transform.localRotation = originalRotation * xQuaternion * yQuaternion;
		}
		else if (axes == RotationAxes.MouseX)
		{
			rotationX += Input.GetAxis("Mouse X") * sensitivityX;
			rotationX = ClampAngle (rotationX, minimumX, maximumX);

			xQuaternion = Quaternion.AngleAxis (rotationX, Vector3.up);
			transform.localRotation = originalRotation * xQuaternion;
		}
		else
		{
			rotationY += Input.GetAxis("Mouse Y") * sensitivityY;
			rotationY = ClampAngle (rotationY, minimumY, maximumY);

			yQuaternion = Quaternion.AngleAxis (rotationY, Vector3.left);
			transform.localRotation = originalRotation * yQuaternion;
		}
	}
	
	function Start ()
	{
		// Make the rigid body not change rotation
		if (rigidbody)
			rigidbody.freezeRotation = true;
		originalRotation = transform.localRotation;
	}
	
	function ClampAngle (angle:float, min:float, max:float)
	{
		if (angle < -360F)
			angle += 360F;
		if (angle > 360F)
			angle -= 360F;
		return Mathf.Clamp (angle, min, max);
	}