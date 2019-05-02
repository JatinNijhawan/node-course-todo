//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");
//let obj=new ObjectID();

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to Connect to MongoDb Server");
  }
  console.log("Connected to MongoDB Server");
  const db = client.db("TodoApp");

  //   db.collection("Todos").insertOne({
  //     text: "Something to insert",
  //     completed: false
  //   }, (err, res) => {
  //     if (err) {
  //       return console.log("Unable to insert todo", err);
  //     }
  //     console.log(JSON.stringify(res.ops, undefined, 2));
  //   });
  db.collection("Users").insertOne({
    name: "Jatin Nijhawan",
    age: 23,
    location: "Hisar"
  }, (err, res) => {
    if (err) {
      return console.log("Unable to insert todo", err);
    }
    console.log(JSON.stringify(res.ops, undefined, 2));
  });

  client.close();
});
