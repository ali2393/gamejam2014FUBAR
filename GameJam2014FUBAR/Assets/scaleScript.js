#pragma strict

var width : float = Screen.width;
var height : float = Screen.height;

function Start () 
{
}

function Update ()
{
		this.gameObject.transform.localScale = Vector3(Screen.width/2,Screen.height/2,2);
		width = Screen.width;
		height  = Screen.height;
}