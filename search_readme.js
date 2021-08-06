

async function search(){
	
	const word = "Ralsph.Luke@newcastle.ac.uk"
	
	const response = await fetch('README.md');
	const text = await response.text();
	const textSplit = text.split("\n\n");
	for(let i = 0; i < textSplit.length; i++){
		if (textSplit[i].includes(word)){
			var nameArr = textSplit[i].split("\n")
			for(let j = 0; j < nameArr.length; j++){
				console.log(nameArr[j]);
			}
			return nameArr;
		}
		
	}
	console.log("Person not found");
	return "Person not found";
}
