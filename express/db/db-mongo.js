// conexion a mongoDB
const MongoClient = require('mongodb').MongoClient;

const MongoBDExample=()=>{
 MongoClient.connect('mongodb+srv://root:admin@clusterpruebas.8qmotq9.mongodb.net/ListTASK?retryWrites=true&w=majority', function(err, db) {
 
 if (err) {
    throw err;
  } 
  db.collection('mammals').find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    console.log("hola");
  });
});

}

module.exports=MongoBDExample;