var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var songs = []; //stores our songs
var date = new Date();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: true }));
/**
 * POST /songs
 *
 * Places song into songs array
 */
app.post('/songs', function (req, res) {
  var song = req.body;
  var duplicate = false;
  var emptyField = false;
  // console.log(song);

  if (song.title == "" || song.artist == "") {
    emptyField = true;
    console.log("oops");
    res.sendStatus(400);
  }
  // check for duplicate already in song array
  for (var i = 0; i < songs.length; i++) {
    if (song.title == songs[i].title && song.artist == songs[i].artist) {
      duplicate = true;
      res.sendStatus(400);
    }
  }
  if (duplicate == false && emptyField == false) {
    songs.push(song);
    song.dateAdded = date.toUTCString();
    res.sendStatus(200);
  }
});

app.get('/songs', function (req, res) {
  res.send(songs);
});

app.get('/*', function (req, res) {
  var file = req.params[0] || '/views/index.html';

  //console.log('What is in req.params[0]?', req.params[0]);
  //console.log('dirname: ', __dirname);
  //console.log('path', path.join(__dirname, '../public', file));
  res.sendFile(path.join(__dirname, './public', file));
});

app.listen(app.get('port'), function () {
  console.log('Server now running at port ', app.get('port'));
});
