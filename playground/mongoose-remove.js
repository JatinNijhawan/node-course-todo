const { mongoose } = require("./../server/db/mongoose");
const { Todos } = require("./../server/models/todos");
const { MongoClient, ObjectID } = require("mongodb");

// Todos.remove({}).then((result)=>{
//     console.log("result>>>",result)
// });
// Todos.findOneAndRemove({}).then((result)=>{
//     console.log("result>>>",result)
// });

Todos.findByIdAndRemove("5ce4e1aede46ef7698eac1ee").then(result => {
  console.log("result>>>", result);
});
