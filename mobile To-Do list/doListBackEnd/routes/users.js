var express = require('express');
var router = express.Router();
var mysql =require('mysql');

var con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'toDoList',
  port:3308,
});

con.connect((err)=>{
  if(err) throw err;
  console.log("Connected to data base!");
});

/* GET users listing. */
router.get('/', function(req, res, next) {

  con.query('SELECT * FROM list',(err,result,field)=>{
    if(err){
      console.log(err);
      res.send({'message':'Couldnt connect to db'});
    }
    else{

      const array=[];
      for(let i=0;i<4;i++){
        array.push(result[i].item)
      }
      res.send({'message':array});
      console.log(array)
    }
  })


});

module.exports = router;
