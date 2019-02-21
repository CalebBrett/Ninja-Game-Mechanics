#pragma strict

var Text : GUIText;
var num : short;
var SpawnPoint : GameObject;
var menuLocation : Rect = Rect(300, 10, 1200, 700);
var skin : GUISkin;

function Start () {

}

function Update () 
{

}

function OnGUI()
{
	if(Input.GetKeyDown (KeyCode.Tab))
	{
		print("khfda");
		GUI.skin = skin;
		GUI.Window(0, menuLocation, Controls, "Controls");
	}
}
	 
function Controls() 
{
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("Storm"))
	{
		print("khfda");
	}
}

function OnTriggerEnter(other : Collider)
{
	if(other.tag == "CheckPoint")
	{
		other.enabled = false;
		num++;
		if(num == 1)
		{
			Text.transform.position.x = 0.41;
			Text.text = "Space to jump";
		}
		if(num == 2)
		{
			Text.transform.position.x = 0.4;
			Text.text = "Hold shift to sprint";
			yield WaitForSeconds(5);
			Text.transform.position.x = 0.35;
			Text.text = "Sprint to the end of the hallway";
		}
		if(num == 3)
		{
			Text.transform.position.x = 0.4;
			Text.text = "Hold control to crouch";
			yield WaitForSeconds(20);
			Text.text = "Crouch under the barrier";
		}
		if(num == 4)
		{
			Text.transform.position.x = 0.45;
			Text.text = "Press Z to lie down";
			yield WaitForSeconds(10);
			Text.transform.position.x = 0.43;
			Text.text = "Crawl under the barrier";
		}
		if(num == 5)
		{
			Text.transform.position.x = 0.3;
			Text.text = "If you lie down while sprinting you will slide";
		}
		if(num == 6)
		{
			SpawnPoint.transform.position.z = -40;
			SpawnPoint.transform.position.x = -200;
			Text.transform.position.x = 0.3;
			Text.text = "Now sprint against a wall and jump to wall run";
			yield WaitForSeconds(20);
			if(num == 6)
			{
				Text.text = "Try running parallel but still close to the wall";
				yield WaitForSeconds(10);
				if(num == 6)
				{
					Text.transform.position.x = 0.2;
					Text.text = "Don't jump into the wall. Start by running beside it then jump";
				}
			}
		}
		if(num == 7)
		{
			Text.transform.position.x = 0.5;
			Text.text = "Keep going!";
			yield WaitForSeconds(20);
			if(num == 7)
			{
				Text.transform.position.x = 0.2;
				Text.text = "You can stay against the wall and jump befor the next hole";
			}
		}
		if(num == 8)
		{
			Text.transform.position.x = 0.3;
			Text.text = "Go to the table on your left";
		}
	}
}