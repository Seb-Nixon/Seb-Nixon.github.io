<script>
const fs = require('fs');
const readline = require('readline');

async function search(){
	const stream = fs.createReadStream('README.md');
	
	const inputlines = readline.createInterface({
		input: stream,
		crlfDelay: Infinity
	});
	
	for await (const line of inputlines){
		console.log(`Line from file: ${line}`);
	}
}

</script>