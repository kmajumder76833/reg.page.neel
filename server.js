var express=require('express');
var app=express();
var mongojs=require('mongojs');
var db=mongojs('exam',['studentList']);
var bodyParser= require('body-parser');


app.use(express.static(__dirname +"/public"));
app.use(bodyParser.json());


app.get('/studentslist',function(request,response){
	console.log("received GET req");

	db.studentList.find(function(err,docs){
		console.log(docs);
		response.json(docs);
	});
});

app.post('/studentslist',function(request,response){
	console.log(request.body);
	db.studentList.insert(request.body,function(err,docs){
		response.json(docs);
	});
});

app.listen(8000,function(){
	console.log("server running on port 8000");
});
