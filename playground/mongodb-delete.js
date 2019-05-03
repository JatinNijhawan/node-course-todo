//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");
//let obj=new ObjectID();

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to Connect to MongoDb Server");
  }
  console.log("Connected to MongoDB Server");
  const db = client.db("TodoApp");

  //   db.collection("Todos").deleteMany({text:"tse"}).then((res)=>{
  //       console.log("res>>",res);
  //   });

  //   db.collection("Todos").deleteOne({ text: "tse" }).then(res => {
  //     console.log("res>>", res);
  //   });

  db.collection("Todos").findOneAndDelete({ text: "tse" }).then(res => {
    console.log("res>>", res);
  });
  client.close();
});
