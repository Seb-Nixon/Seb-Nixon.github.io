

async function search(){
	
	fetch('README.md').then(response => response.md()).then(text => console.log(text))
	
}
