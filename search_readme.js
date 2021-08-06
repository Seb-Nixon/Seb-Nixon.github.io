
/**
 * Function to search through 'README.md' file, searching for a given name.
 * Once the person is found the nameid, username and login are presented to the user.
 */
async function search(word){
	var count = 0;
	var nameid = word + " not found";
	var username = "";
	var login = "";
	
	//Read the 'README.md' file and get the text.
	const response = await fetch('JSON/names.json');
	const names = await response.json();
	const parseData = names;
	edges = parseData.data.organization.samlIdentityProvider.externalIdentities.edges;
	for (var i = 0; i < edges.length; i++){
		console.log(i.node.samlIdentity.nameId);
	}
	/*
	//Split the text into each persons name username and login.
	const textSplit = text.split("\n\n");
	for(let i = 0; i < textSplit.length; i++){
		//If the person is found.
		if (textSplit[i].toUpperCase().includes(word.toUpperCase())){
			count = count + 1;
			var nameArr = textSplit[i].split("\n")
			
			//Log each person found by their nameid.
			console.log("Found " + nameArr[0].split("\"")[3]);
			
			nameid = "Name: " + nameArr[0].split("\"")[3];
			username = "Username: " + nameArr[1].split("\"")[3];
			login = "Login: " + nameArr[2].split("\"")[3];
		}
		
	}
	
	
	
	
	
	//If multiple people were found under the search word.
	if (count > 1){
		console.log("Multiple people found for " + word + ". Please refine search");
		document.getElementById("nameid").innerHTML = "Multiple people found for " + word + ". Please refine search";
		document.getElementById("username").innerHTML = "";
		document.getElementById("login").innerHTML = "";
	}
	//Show the person to the user.
	else{
		document.getElementById("nameid").innerHTML = nameid;
		document.getElementById("username").innerHTML = username;
		document.getElementById("login").innerHTML = login;
	}
	*/
}
