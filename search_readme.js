

async function search(){
	
	const response = await fetch('README.md');
	const text = await response.text();
	for(let i = 0; i < text.length; i++){
		console.log(text[i]);
	}
	
	
}
