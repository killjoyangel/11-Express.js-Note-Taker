const path = require('path');
const router = require('express').Router();
//routing
module.exports =
 (app) => {
  router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes'));
  });
  
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index'));
  });

  module.exports = router 
 }