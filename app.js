const express = require('express');
const path = require('path'); // path lets us navigate file system / folders

// heroku assigns a port wheni it deploys via the process (environment variables - comin)
// locally this will run @ port 3000; remotely it'll run wherever heroku tells it to run
const port = process.env.PORT || 3000; // a double pipe means "or"

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('Home page');
  res.sendFile(path.join(__dirname + '/views/index.html'));
  // this builds localhost:3000/views/index.html
})

app.get('/merch', (req, res) => {
  console.log('Merch Page');
  res.sendFile(path.join(__dirname + '/views/merch.html'));
  // this builds localhost:3000/views/merch.html
})


app.listen(port,  () => {
  console.log(`Server running at ${port}/`);
});