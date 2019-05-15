const { mongoose } = require("./../server/db/mongoose");
const { Todos } = require("./../server/models/todos");
const { MongoClient, ObjectID } = require("mongodb");

let id = "5cd5305644d7de3fce2a08b52";

if (!ObjectID.isValid(id)) {
  console.log("Id Not Valid");
}

// Todos.find({_id:id}).then((todos)=>{
//     console.log("Todos>>",todos);
// });

// Todos.findOne({_id:id}).then((todo)=>{
//     console.log("Todo>>",todo);
// })

Todos.findById(id)
  .then(todo => {
    if (!todo) {
      return console.log("Id Not Found");
    }
    console.log("Todo by Id>>", todo);
  })
  .catch(e => console.log("error", e));
