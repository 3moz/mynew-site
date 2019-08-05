const express = require('express');
const app = express();
const port = 81

app.use(express.static("public"));

app.get('/', (req, res) => res.render("index.js"));

app.listen(port, () => console.log(`listening on port ${port}`))