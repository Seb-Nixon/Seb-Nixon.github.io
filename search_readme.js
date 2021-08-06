

async function search(){
	
	const word = "Ralph.Luke@newcastle.ac.uk"
	var found = false;
	
	const response = await fetch('README.md');
	const text = await response.text();
	const textSplit = text.split("\n\n");
	for(let i = 0; i < textSplit.length; i++){
		if (textSplit[i].includes(word)){
			found = true;
			var nameArr = textSplit[i].split("\n")
			for(let j = 0; j < nameArr.length; j++){
				console.log(nameArr[j]);
			}
			document.getElementById("demo").innerHTML = nameArr;
		}
		
	}
	if (!found){
		console.log("Person not found");
		document.getElementById("demo").innerHTML = "Person not found";
	}
}
