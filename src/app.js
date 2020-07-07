import express from 'express';

const app = express();
const port = 3000;

app.get('/', function(req, res) {
	res.send('Heyooooo!');
});

app.listen(port, function() {
	console.log(`Example app listening at http://localhost:${port}`);
});