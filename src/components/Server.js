const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from the "images" directory
app.use("/images", express.static(path.join(__dirname, "your-image-folder")));

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
