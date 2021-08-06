

async function search(word){
	var found = false;
	
	const response = await fetch('README.md');
	const text = await response.text();
	const textSplit = text.split("\n\n");
	for(let i = 0; i < textSplit.length; i++){
		if (textSplit[i].includes(word)){
			if (found){
				console.log("Multiple people found for " + word + ". Please refine search");
				document.getElementById("nameid").innerHTML = "Multiple people found for " + word + ". Please refine search";
				document.getElementById("username").innerHTML = "";
				document.getElementById("login").innerHTML = "";
				break;
			}
			
			found = true;
			var nameArr = textSplit[i].split("\n")
			for(let j = 0; j < nameArr.length; j++){
				console.log(nameArr[j]);
			}
			
			document.getElementById("nameid").innerHTML = "Name: " + nameArr[0].split("\"")[3];
			document.getElementById("username").innerHTML = "Username: " + nameArr[1].split("\"")[3];
			document.getElementById("login").innerHTML = "Login: " + nameArr[2].split("\"")[3];
		}
		
	}
	if (!found){
		console.log(word + " not found");
		document.getElementById("nameid").innerHTML = word + " not found";
		document.getElementById("username").innerHTML = "";
		document.getElementById("login").innerHTML = "";
	}
}
