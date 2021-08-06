
/**
 * Function to search through 'README.md' file, searching for a given name.
 * Once the person is found the nameid, username and login are presented to the user.
 */
async function search(word){
	var count = 0;
	var nameid = word + " not found";
	var username = "";
	var login = "";
	var searchWord = "";
	
	if (word.includes("@newcastle.ac.uk")){
		searchWord = word
	}
	else{
		searchWord = word + "@newcastle.ac.uk"
	}
	
	//Read the 'README.md' file and get the text.
	const response = await fetch('JSON/names.json');
	const names = await response.json();
	const parseData = names;
	edges = parseData.data.organization.samlIdentityProvider.externalIdentities.edges;
	for (var i = 0; i < edges.length; i++){
		var person = edges[i].node;
		if (person.samlIdentity != null && person.samlIdentity.nameId == searchWord ||
			person.scimIdentity != null && person.scimIdentity.username == searchWord ||
			person.user != null && person.user.login == word){
				
			document.getElementById("nameid").innerHTML = "University email: " + person.samlIdentity.nameId;
			document.getElementById("username").innerHTML = "B number: " + person.scimIdentity.username;
			document.getElementById("login").innerHTML = "Github username: " + person.user.login;
			console.log("Found: " + edges[i].node.samlIdentity.nameId);
			break;
		}
	}
	
	document.getElementById("nameid").innerHTML = word + " not inside organization";
	document.getElementById("username").innerHTML = "";
	document.getElementById("login").innerHTML = "";
}
