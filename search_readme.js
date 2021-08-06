

async function search(){
	
	const response = await fetch('README.md');
	const text = await response.text();
	const textSplit = text.split("\n");
	for(let i = 0; i < textSplit.length; i++){
		console.log(textSplit[i]);
	}
	
}
