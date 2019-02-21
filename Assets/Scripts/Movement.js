#pragma strict

var Speed : int;
var lerpToObjFront : Transform;
var lerpToObjBack : Transform;
var lerpToObjLeft : Transform;
var lerpToObjRight : Transform;
var lerpToObjUp : Transform;
var lerpToObjDown : Transform;

function Start()
{
lerpToObjFront = GameObject.Find("LerpPointFront").transform;
lerpToObjBack = GameObject.Find("LerpPointBack").transform;
lerpToObjLeft = GameObject.Find("LerpPointLeft").transform;
lerpToObjRight = GameObject.Find("LerpPointRight").transform;
lerpToObjUp = GameObject.Find("LerpPointUp").transform;
lerpToObjDown = GameObject.Find("LerpPointDown").transform;
}

function Update () 
{	if(this.camera.depth == 2)
	{
		if(Input.GetKey (KeyCode.W))
		{
	        transform.position = Vector3.Lerp (transform.position, lerpToObjFront.position, Time.deltaTime * Speed);
		}
		
		if(Input.GetKey (KeyCode.S))
		{
	        transform.position = Vector3.Lerp (transform.position, lerpToObjBack.position, Time.deltaTime * Speed);
		}
		
		if(Input.GetKey (KeyCode.A))
		{
	        transform.position = Vector3.Lerp (transform.position, lerpToObjLeft.position, Time.deltaTime * Speed);
		}
		
		if(Input.GetKey (KeyCode.D))
		{
	        transform.position = Vector3.Lerp (transform.position, lerpToObjRight.position, Time.deltaTime * Speed);
		}
		
		if(Input.GetKey (KeyCode.Space))
		{
	        transform.position = Vector3.Lerp (transform.position, lerpToObjUp.position, Time.deltaTime * Speed);
		}
		
		if(Input.GetKey (KeyCode.LeftControl))
		{
	        transform.position = Vector3.Lerp (transform.position, lerpToObjDown.position, Time.deltaTime * Speed);
		}
		
		if(Input.GetKeyDown (KeyCode.LeftShift))
		{
			Speed = 15;
		}
		if(Input.GetKeyUp (KeyCode.LeftShift))
		{
			Speed = 5;
		}
	}
		if(Input.GetKeyDown (KeyCode.G))
		{
			this.camera.depth = 2;
		}
		if(Input.GetKeyUp (KeyCode.F))
		{
			this.camera.depth = -1;
		}
}