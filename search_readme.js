

async function search(){
	
	fetch('README.md').then(response => response.text()).then(text => console.log(text))
	
}
