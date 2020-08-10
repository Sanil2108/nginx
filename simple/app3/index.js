const app = require('express')()

app.get('/', (req, res) => { res.send("Application 3 listening on port 8000")  })

app.listen(8000, () => console.log("Listening to 8000"));
