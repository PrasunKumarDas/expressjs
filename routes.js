//var usersController=require('./server/controllers/user.server.controller');


module.exports = function(app) {
 app.get('/',function(req,res){
	//console.log(__dirname);
	res.sendfile(__dirname+'/www/index.html');

})
//app.get('/users',usersController.list)
//app.post('/users',usersController.create)
}