function addingEventListener(){
	const input = document.getElementById('button');
	
	function ev() {
	  console.log('I was clicked!');
	}

	input.addEventListener('click', ev);

}


	

