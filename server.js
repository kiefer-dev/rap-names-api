// Dependencies & variables
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

// Object to serve
const rappers = {
  '21 savage': {
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England',
    'age': 29,
  },
  'chance the rapper': {
    'birthName': 'Chancelor Johnathan Bennett',
    'birthLocation': 'Chicago, Illinois, USA',
    'age': 29,
  },
  'tyler the creator': {
    'birthName': 'Tyler Gregory Okonma',
    'birthLocation': 'Hawthorne, California, USA',
    'age': 31,
  },
  'mf doom': {
    'birthName': 'Daniel Dumile',
    'birthLocation': 'London, England',
    'age': 49,
  },
  'dylan': {
    'birthName': 'Dylan',
    'birthLocation': 'Dylan',
    'age': 'Dylan',
  },
  'unknown': {
    'birthName': 'unknown',
    'birthLocation': 'unknown',
    'age': 0,
  }
}


// Serve up a file (index.html) when they request the main page
app.get('/', (request, response)=>{
  response.sendFile(__dirname + '/index.html');
})


// Serve up the JSON for their information request (api)
app.get('/api/:name', (request, response)=>{
  const rapperName = request.params.name.toLowerCase();
  if (rappers[rapperName]) {
    response.json(rappers[rapperName]);
  } else {
    response.json(rappers['unknown']);
  }
  
})


// Set up server to listen on the PORT
app.listen(proceess.env.PORT || PORT, _=>{
  console.log(`The server is running on port ${PORT}. Betta go catch it!`);
})



// PUT A README on the git repo to tell how to do npm install and start the server (alex ortega readme template)
//login to heroku