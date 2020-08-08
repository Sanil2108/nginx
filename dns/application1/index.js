const express = require('express')
const app = express();

app.get('/', (req, res, next) => {
	res.send("Hello world from application 1");
})

app.listen(8000, () => console.log("Application 1 listening on port 8000"));
