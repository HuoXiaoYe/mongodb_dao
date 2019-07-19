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
	insert(collectionName,json,callback){
		this._connect((err,db)=>{
			if(err) return console.log("连接数据库失败");
			let dbase = db.db(this.databaseName);
			if(!Array.isArray(json)){ // 添加一条数据
				dbase.collection(collectionName).insertOne(json,(err,result)=>{
					return callback&&callback()
				})
			}
			// 添加多条数据
			dbase.collection(collectionName).insertMany(json,(err,result)=>{
				return callback&&callback()
			})
		})
	}
}







let xiaoye = new xiaoye_db("mongodb://localhost:27017","xiaoye")
// xiaoye._connect((err,db)=>{
// 	console.log("success")
// })
xiaoye.insert("student",{"name":"xiaobai","age":14},(err, result)=>{
	if(err) return console.log("添加失败")
	return console.log(123345)
})

xiaoye.insert("student",[{"name":"xiaobai2","age":14},{"name":"xiaobai3","age":14}],(err, result)=>{
	if(err) return console.log("添加失败")
	return console.log(123345)
})