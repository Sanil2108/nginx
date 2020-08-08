const express = require('express')
const app = express();

app.get('/', (req, res, next) => {
	res.send("Hello world from application 3");
})

app.listen(8000, () => console.log("Application 3 listening on port 8000"));
