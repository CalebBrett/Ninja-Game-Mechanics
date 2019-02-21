#pragma strict
var NinjaStar : GameObject;
var StarInTheAir : boolean;
var Text : GUIText;
var MainCamera : GameObject;
var zero : Vector3;
var StarInHand : boolean;

function Start () 
{
	zero = new Vector3(0,0,0);
}

function Update () 
{
	if(Input.GetMouseButtonDown (0))
	{
		StarInTheAir = true;
	}
	if(StarInTheAir)
	{
		NinjaStar.animation.Play("StarSpin");
	}
}

function OnTriggerStay(other : Collider)
{
	if(other.gameObject.tag == "Wepon")
	{
		print("star");
		Text.transform.position.x = 0.45;
		Text.text = "Press F to pick-up NinjaStar";
		
		if(Input.GetKeyDown (KeyCode.F))
		{
			var NinjaStar = Instantiate(NinjaStar, GameObject.Find("NinjaStarSpawn").transform.position, Quaternion.identity);
			NinjaStar.transform.parent = GameObject.Find("NinjaStarSpawn").transform;
			NinjaStar.transform.localScale = Vector3(0.1,0.1,0.1);
		}
		
	}
}

function OnTriggerExit(other : Collider)
{
	if(other.gameObject.tag == "Wepon")
	{
		Text.text = "";
	}
}

