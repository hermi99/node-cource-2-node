// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('mongo db에 접속할 수 없습니다');
  }
  console.log('mongo db에 접속되었습니다');

  const db = client.db();

  // db.collection('Todos')
  //   .find({
  //     _id: new ObjectID('5b14d5cca35e3e210e1d78ef')
  //   })
  //   .toArray()
  //   .then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     console.log('Unable to fetch todos', err);
  //   });
  //
  // db.collection('Todos')
  //   .find()
  //   .count()
  //   .then((count) => {
  //     console.log('Todos count', count);
  //   }, (err) => {
  //     console.log('Unable to fetch todos', err);
  //   });

  db.collection('Users')
    .find({name: 'hermis'})
    .toArray()
    .then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch Users', err);
    });

  client.close();
});
