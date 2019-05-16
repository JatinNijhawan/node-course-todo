const expect = require("expect");
const request = require("supertest");
const { MongoClient, ObjectID } = require("mongodb");
const { app } = require("./../server");
const { Todos } = require("./../models/todos");

const todos = [{ _id: new ObjectID(), text: "First Todo" }, { _id: new ObjectID(), text: "second Todo" }];
beforeEach(done => {
  Todos.deleteMany({})
    .then(() => {
      return Todos.insertMany(todos);
    })
    .then(() => done());
});

describe("Post /todos", () => {
  it("Should create a new Todo", done => {
    let text = "Test todo Text";

    request(app)
      .post("/todos")
      .send({ text })
      .expect(200)
      .expect(res => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todos.find({ text })
          .then(todos => {
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();
          })
          .catch(e => done(e));
      });
  });
});

describe("GET /todos", () => {
  it("Should get all Todos", done => {
    let text = "Test todo Text";

    request(app)
      .get("/todos")
      .expect(200)
      .expect(res => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});

describe("GET /todos/:id", () => {
  it("Should return Todos doc", done => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect(res => {
        expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done);
  });
  it("Should return 404 if Todos not found", done => {
    let hexId = new ObjectID().toHexString();
    request(app).get(`/todos/${hexId}`).expect(404).end(done);
  });

  it("Should return 404 if Todos not found", done => {
    request(app).get("/todos/123").expect(404).end(done);
  });
});
