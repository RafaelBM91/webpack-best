const Express = require('express');
const path = require('path');

const app = Express();

app.use(Express.static( path.resolve(__dirname, '../../public/') ));

app.get('*', (req, res) => {
	res.sendFile( path.resolve(__dirname, '../../public/index.html' ) );
});

app.listen(3000, () => {
	console.log('start server :3000');
});

