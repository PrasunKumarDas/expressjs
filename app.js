/**
 * Author: Prasun Kumar Das
   TCS/1305985
 */
var express        = require('express'),
	app 		   = express(),
    path           = require('path'),
    logger         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler   = require('errorhandler'),
    config         = require('./config'),    
	fs			   = require('fs'),
	routes 		   = require('./routes')(app);

/*fs.readdirSync(__dirname+'/server/models').forEach(function(filename){
	if(~filename.indexOf('.js')){
		require('./server/models/'+filename);
	}

})*/

app.set('port', config.server.port);
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

app
  .use(logger('dev'))
  .use(bodyParser())
  .use(methodOverride())
  .use(express.static(path.join(__dirname, 'client')))
 
  .use(function (req, res) {
    res.status(404).render('404', {title: 'Not Found :('});
  });

if (app.get('env') === 'development') {
  app.use(errorHandler());
}

app.listen(app.get('port'), function () {
  console.log('Server running at http://localhost:' + app.get('port'));
});
