// Set up routes for the app
module.exports = function(app) {

	var index = require('../app/routes/index');
  var about = require('../app/routes/about'); 
  var directory = require('directory'); 
  var serveIndex = require('serve-index'); 
	app.use('/', index);
	app.use('/about', about);

//  app.use('/files', serveIndex('../public/files', {'icons': true}));
//  app.use('/dropbox', directory('/home/abrahamq/Documents/classes/Fall15/cms.309/haappyCo/public'));


}
