const size = parseInt(process.argv[2], 10);

if (!isNaN(size)) {
	for (let i = 0; i < size; i++) {
		console.log("X".repeat(size));
	}
} else {
	console.log("Missing size");
}

