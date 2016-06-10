var http = require('http');
var url = require("url");
var querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;

var server = http.createServer(function(req, res) {
  var page = url.parse(req.url).pathname;
  var params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  res.writeHead(200, {"Content-Type": "text/plain"});
    if (page == '/') {
      if ('prenom' in params && 'nom' in params) {
          res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
        }
      else {
        res.write('Vous devez bien avoir un prénom et un nom, non ?');
      }
    }
    else if (page == '/sous-sol') {
        res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
    }
    else if (page == '/etage/1/chambre') {
        res.write('Hé ho, c\'est privé ici !');
    }else {
      res.writeHead(400, {"Content-Type": "text/plain"});
      res.write('message d\'erreur');
    };
    res.end();
});

var jeu = new EventEmitter();

jeu.on('gameover', function(message){
    console.log(message + 'test');
});

jeu.emit('gameover', 'Vous avez perdu !');

server.on('close', function() { // On écoute l'évènement close
    console.log('Bye bye !');
})

server.listen(8080);
