

async function search(word){
	var count = 0;
	var nameid = word + " not found";
	var username = "";
	var login = "";
	
	const response = await fetch('README.md');
	const text = await response.text();
	const textSplit = text.split("\n\n");
	for(let i = 0; i < textSplit.length; i++){
		if (textSplit[i].includes(word)){
			count = count + 1;
			var nameArr = textSplit[i].split("\n")
			
			console.log("Found " + nameArr[0].split("\"")[3]);
			nameid = "Name: " + nameArr[0].split("\"")[3];
			username = "Username: " + nameArr[1].split("\"")[3];
			login = "Login: " + nameArr[2].split("\"")[3];
		}
		
	}
	if (count > 1){
		console.log("Multiple people found for " + word + ". Please refine search");
		document.getElementById("nameid").innerHTML = "Multiple people found for " + word + ". Please refine search";
		document.getElementById("username").innerHTML = "";
		document.getElementById("login").innerHTML = "";
	}
	else{
		document.getElementById("nameid").innerHTML = nameid;
		document.getElementById("username").innerHTML = username;
		document.getElementById("login").innerHTML = login;
	}
}
