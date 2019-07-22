> 使用面向的方法 封装了 node中 对  mongodb 的增删改查操作

* 查找
	* find(collectionName,json,args,callback) 实例方法 可以进行分页查找，排序查找 
	* collectionName 集合名字
	* json 查找条件
	* args={page:0,pageAmount:10,sort:{}} 分页排序的配置
	* callback 回调函数 接受(err,result)两个参数
* 增加
	* insert(collectionName,json,callback) 实例方法 可以增加一条或者多条数据 
	* collectionName 集合名字
	* json 若 json 为对象，则增加一条数据，若json为数组，则增加多条数据
	* callback 回调函数，接受 err result 两个参数
* 删除(删除多个)
	* removeData(collectionName, json, callback) 
	* collectionName 集合名字
	* json 删除条件
	* callback 回调函数，接受 err result 两个参数
* 更新(更新多个)
	* update(collectionName, json1, json2, callback) 
	* collectionName 集合名字
	* json1: 更新数据的条件
	* json2: 更新后的json
	* callback 回调函数，接受 err result 两个参数