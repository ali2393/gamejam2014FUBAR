
#pragma strict

var tilt : Vector3 = Vector3.zero;
var speed : float;
private var circ : float;
private var previousPosition : Vector3;

@script RequireComponent(Rigidbody)
function Start()
{
	//Find the circumference of the circle so that the circle can be rotated the appropriate amount when rolling
	circ = 2 * Mathf.PI * collider.bounds.extents.x;	
	previousPosition = transform.position;
}


function Update () {

	tilt.x = Input.acceleration.x;
	tilt.y = Input.acceleration.y;

	//tilt.x = Input.acceleration.x;
	//tilt.z = -Input.acceleration.y;
			
	rigidbody.AddForce(tilt * speed * Time.deltaTime);
}

function LateUpdate()
{
	var movement : Vector3 = transform.position - previousPosition;
	
	movement = Vector3(movement.z,0,  -movement.x);
	
	transform.Rotate(movement / circ * 360, Space.World);
	
	previousPosition = transform.position;	
	
}