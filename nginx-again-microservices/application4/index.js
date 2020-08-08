const express = require('express')
const app = express();

app.get('/', (req, res, next) => {
	res.send("Hello world from application 4");
})

app.listen(8000, () => console.log("Application 4 listening on port 8000"));
