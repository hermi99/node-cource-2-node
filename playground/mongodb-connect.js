// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('mongo db에 접속할 수 없습니다');
  }
  console.log('mongo db에 접속되었습니다');

  const db = client.db();


  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('todo를 입력할 수 없습니다', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'hermis',
    age: 43,
    location: 'bundang'
  }, (err, result) => {
    if (err) {
      return console.log('user를 입력할 수 업습니다');
    }
    console.log(result.ops[0]._id.getTimestamp());
  });

  client.close();
});
