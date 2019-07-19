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
	find(collectionName,json,args,callback){
		this._connect((err,db)=>{
			if(err) return console.log("数据库连接失败")
			// console.log(arguments.length == 3 && typeof args == "function")
			if(arguments.length == 3 && typeof args == "function"){
				callback = args;
				var skipAmount = 0;
				var limitNumber = 0;
				var sortObj = {};
			}else{
				var skipAmount = args.pageSize * args.page;
				var limitNumber = args.pageSize;
				var sortObj = args.sort;
			}
			// console.log(`limit(${limitNumber}).skip(${skipAmount}).sort(${sortObj})`)
			let dbase = db.db(this.databaseName)
			dbase.collection(collectionName).find(json).limit(limitNumber).skip(skipAmount).sort(sortObj).toArray((err,result)=>{
				callback&&callback(err,result)
			})
		})
	}
}



module.exports = xiaoye_db



let xiaoye = new xiaoye_db("mongodb://localhost:27017","xiaoye")
