
/**
 * Function to search through 'names.json' file, searching for a given name.
 * Once the person is found the nameid, username and login are presented to the user.
 */
async function search(word){
	var found = false;
	var searchWord = "";
	
	if (word.includes("@newcastle.ac.uk")){
		searchWord = word
	}
	else{
		searchWord = word + "@newcastle.ac.uk"
	}
	
	//Read the 'names.json' file and get the text.
	const response = await fetch('JSON/names.json');
	const names = await response.json();
	const parseData = names;
	edges = parseData.data.organization.samlIdentityProvider.externalIdentities.edges;
	
	//For each person object in the organisation.
	for (var i = 0; i < edges.length; i++){
		var person = edges[i].node;
		if ((person.samlIdentity != null && person.samlIdentity.nameId == searchWord) ||
			(person.scimIdentity != null && person.scimIdentity.username == searchWord) ||
			(person.user != null && person.user.login == word)){
			
			found = true;
			var hypLink = "https://github.com/" + person.user.login;
			var username =  person.scimIdentity.username.replace('@newcastle.ac.uk','');
			
			//Add all search results to the corresponding places.
			document.getElementById("notInOrg").style.display = "none";
			document.getElementById("nameid").innerHTML = "University email: " + person.samlIdentity.nameId;
			document.getElementById("username").innerHTML = "B number: " + username;
			document.getElementById("login").innerHTML = "Github username: " + person.user.login.link(hypLink);
			document.getElementById("searchResults").style.display = "block";
			console.log("Found: " + word);
			break;
		}
	}
	
	//If no person is found hide the searchResults div and reveal teh notInOrg div to show possible reasons.
	if (!found){
		document.getElementById("searchResults").style.display = "none";
		document.getElementById("notInOrg").style.display = "block";
	}
	
}
