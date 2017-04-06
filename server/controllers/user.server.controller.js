
var users = require('mongoose').model('users');

module.exports.create=function(req,res){
	console.log(req.body);
	var users_model=new users(req.body);

	users_model.save(function(err,result){
		console.log(res);
		res.json(result);
	});

}

module.exports.list=function(req,res){
	
	users.find(function(err,result){
		//console.log(result);
		res.json(result);
	});
	
}