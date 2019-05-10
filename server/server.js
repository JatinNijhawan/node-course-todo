const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./db/mongoose");
const { Todos } = require("./models/todos.js");
const { User } = require("./models/user.js");

let app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  console.log("req>>>>", req.body);
  let todo = new Todos({
    text: req.body.text
  });
  todo.save().then(
    doc => {
      res.send(doc);
    },
    err => {
      res.status(400).send(err);
    }
  );
});


app.get("/todos", (req, res) => {
  Todos.find().then((todos)=>{
    res.send({todos})
  },(e)=>{
    res.send(400).send(err);
  })
});

app.listen(3004, () => {
  console.log("Server started on port 3001");
});

module.exports = { app };
// let newTodo = new Todo({
//   text: " Cooking Dinner   "
// });

// let otherTodo = new Todo({
//   text: "Cooking Dinner",
//   completed: true,
//   completedAt: 123
// });

// // otherTodo.save().then((doc)=>{
// //     console.log("Todo>",doc);
// // },(err)=>{
// //     console.log("Error>>",err);
// // });

// // newTodo.save().then((doc)=>{
// //     console.log("Todo>",doc);
// // },(err)=>{
// //     console.log("Error>>",err);
// // });

// let newUser = new User({
//   email: "jatin.kumar@daffodilsw.com"
// });

// newUser.save().then(
//   doc => {
//     console.log("Todo>", doc);
//   },
//   err => {
//     console.log("Error<<<", err);
//   }
// );
