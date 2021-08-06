

async function search(){
	
	const response = await fetch('README.md');
	const text = await response.text();
	console.log(text)
	
}
