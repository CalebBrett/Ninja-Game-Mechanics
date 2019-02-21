
var CM : CharacterMotor;
var CC : CharacterController;
var maxSpeed : short;
var SpawnPoint : GameObject;
var Player : GameObject;
var IsLying : boolean = false;
var IsSliding : boolean = false;

function Start () 
{
	CM = GetComponent.<CharacterMotor>();
	maxSpeed = 20;
	SpawnPoint.transform.position = Player.transform.position;
}

function Update () 
{
	if(this.transform.position.y < -20)
	{
		Death();
	}
	if(Input.GetKey (KeyCode.LeftShift))								//Sprinting
	{
		CM.movement.maxForwardSpeed = maxSpeed;
		if(Input.GetKeyDown (KeyCode.Z))
		{
			Sliding();
		}
	}
	if(Input.GetKeyUp (KeyCode.LeftShift))
	{
		CM.movement.maxForwardSpeed = 6;
	}
	
	if(Input.GetKeyDown (KeyCode.LeftControl))								//Crouch
	{
		this.transform.localScale.y = 0.5;
	}
	if(Input.GetKeyUp (KeyCode.LeftControl))
	{
		this.transform.position.y += 0.5;
		this.transform.localScale.y = 1;
	}
	
	if(Input.GetKeyDown (KeyCode.Z))								//Lie Down
	{
		if(IsLying == false)
		{
			this.transform.localScale.y = 0.1;
			CC.radius = 0.1;
			IsLying = true;
		}
		else if(IsLying)
		{
			this.transform.position.y += 1;
			this.transform.localScale.y = 1;
			IsLying = false;
		}
	}
	if(IsLying && IsSliding == false)
	{
		CM.movement.maxForwardSpeed = 6;
	}
}

function OnTriggerStay(other : Collider)
{
	if(other.gameObject.tag != "Wepon")
	{
		yield new WaitForFixedUpdate ();										//Wall Run
		print("HOHJ");
		if(Input.GetKeyDown (KeyCode.Space) && Input.GetKey (KeyCode.W) && Input.GetKey (KeyCode.LeftShift))
		{
			print("HIHJ");
			CM.movement.maxForwardSpeed = maxSpeed;
			CM.jumping.extraHeight = 2;
			CM.movement.gravity = 1;
		}
		if(Input.GetKeyUp (KeyCode.W))
		{
			CM.movement.gravity = 20;
		}
	}
}	
function OnTriggerExit(collision : Collider) 
{
	CM.movement.gravity = 20;
}

function Death()
{
	print("You Died! MWahahaha!!!!!!!!!!");
	this.transform.position = SpawnPoint.transform.position;
}

function Sliding()
{
	IsSliding = true;
	CM.movement.maxForwardSpeed = 40;
	yield WaitForSeconds(1);
	IsSliding = false;
}