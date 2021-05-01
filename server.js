const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({
   extended: true 
 })),


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);



app.listen(PORT, function(){
  console.log(`App listening on: https://localhost:${PORT}`);
});