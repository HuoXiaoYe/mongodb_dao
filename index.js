const  MongoClient = require("mongodb").MongoClient


class xiaoye_db {
	constructor(urlName,databaseName){
		this.urlName = urlName;
		this.databaseName = databaseName;
	}
	_connect(callback){
		MongoClient.connect(this.urlName,{useNewUrlParser : true},(err,db)=>{
			callback(err,db)
		})
	}
}







let xiaoye = new xiaoye_db("mongodb://localhost:27017")
xiaoye._connect((err,db)=>{
	console.log("success")
})