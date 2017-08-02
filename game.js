function OnTriggerEnter (other : Collider){
     if (other.gameObject.tag == "Player") {
     renderer.enabled = true;
     yield WaitForSeconds(2);
     renderer.enabled = false;
     }
 }