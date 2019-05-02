//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");
//let obj=new ObjectID();

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to Connect to MongoDb Server");
  }
  console.log("Connected to MongoDB Server");
  const db = client.db("TodoApp");
  //   db.collection("Todos").find({ _id: new ObjectID("5cc93d4c8f57fc02618df61a") }).toArray().then(
  //     docs => {
  //       console.log("Todas");
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     err => {
  //       console.log("unable to Fetch Todas", err);
  //     }
  //   );
  db.collection("Todos").find().count().then(
    count => {
      console.log(`Todas count : ${count}`);
    },
    err => {
      console.log("unable to Fetch Todas", err);
    }
  );
  client.close();
});
