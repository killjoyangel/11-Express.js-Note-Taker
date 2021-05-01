
const index = require('/public/index.html');
const notes = require('/public/notes.html');


module.exports = (app) => {
  app.get('/api/index', (req, res) => res.json(indexData));
  app.get('/api/notes', (req, res) => res.json(notesData));
  app.post('/api/notes', (req, res) => {



  app.post('/api/clear', (req, res) => {

   indexData.length = 0;
notesData.length = 0;

    res.json({ ok: true });
  });
})};
