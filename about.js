console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	const inputs = document.querySelectorAll('input');
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].value = ''
	}
	
	alert('Form has been submitted ;3')
	
	console.log('form submitted');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


function compliment(event) {
	event.preventDefault()

	alert("Don't worry, you probably don't cough like that")
}

document.querySelector('img').addEventListener('mouseover', compliment)