//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");
//let obj=new ObjectID();

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to Connect to MongoDb Server");
  }
  console.log("Connected to MongoDB Server");
  const db = client.db("TodoApp");

  db
    .collection("Todos")
    .findOneAndUpdate(
      { _id: new ObjectID("5ccbeaefd3974bbdb349aa72") },
      { $set: { completed: true } },
      { returnOriginal: false }
    )
    .then(res => {
      console.log("res>>", res);
    });

  client.close();
});
