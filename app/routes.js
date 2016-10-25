var Song = require('./models/song');
module.exports = function(app) {
	// server routes
	// handle things like api calls
	// authentification routes

	// get first two songs for voting
  // /api/songs
	app.get('/api/songs', function(req, res) {
		Song.find(function(err, songs){
			// if there is an error, send the error
			if (err) {
				res.send(err);
			}
			res.json(songs); // return all songs
		});
	});

	app.get('/api/savesong', function(req, res) {
		var lordi = new Song({
			title: 'One Message Waiting',
			artist: 'Lordi',
			cover: 'http://fs138.www.ex.ua/show/272847013/272847013.jpg',
			url: 'http://fs137.www.ex.ua/get/517cc6e2518df76273ddf485310be0bb/272846894/01.%20Scg8-%20One%20Message%20Waiting.mp3'
		});
		// lordi.save(function(err){
		// 	if(err) {
		// 		throw err;
		// 	}
		// 	console.log('Lordi saved');
		// });

		var sum41 = new Song({
			title: 'Hell song',
			artist: 'Sum 41',
			cover: 'http://fs105.www.ex.ua/show/59192/59192.jpg',
			url: 'http://fs106.www.ex.ua/get/33538816546528431cc37a3f32dd62f4/59193/01%20Hell%20Song.mp3'
		});
		// sum41.save(function(err) {
		// 	if(err) {
		// 		throw err;
		// 	}
		// 	console.log('Sum 41 saved');
		// });

	});

  // get next song by rating
  // POST /api/song/ with id param

  // Tank.findByIdAndUpdate(id, { $set: { size: 'large' }}, { new: true }, function (err, tank) {
  // if (err) return handleError(err);
  // res.send(tank);
  // });
  app.post('/api/song', function(req, res) {
    var songId = req.body.id;
    Song.findById(songId, function(err, song) {
      if (err) {
        res.send(err);
      }
      song.rating = getNewRating(song.rating);
      song.save(function (err, upSong){
        if(err) {
          res.send(err);
        }
        res.json(upSong); // return song
      });
    })
  });

	// route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)

	// app.get('/songs', function(req, res){
	// 	console.log('server songs route');
	// 	res.render('./public/views/song.html');
	// });

  // frontend routes
  // route to handle all angular requests
  // ('*' - catch-all routes)
  app.get('*', function(req, res){
  	res.sendfile('./public/index.html');
  });

  function getNewRating(rating) {
    return rating * 0.1;
  }
}