const x = parseInt(process.argv[2], 10);

if (!isNaN(x)) {
	for (let i = 0; i < x; i++) { 
		console.log("C is fun");
	}
} else { 
	console.log("Missing numbre of occurrences");
}
