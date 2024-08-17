const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<h1>Hello CodePipeline & CodeBuild!</h1><p>New line.</p>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
