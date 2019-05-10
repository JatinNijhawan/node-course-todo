const expect = require("expect");
const request = require("supertest");

const { app } = require("./../server");
const { Todos } = require("./../models/todos");

const todos = [{ text: "First Todo" }, { text: "second Todo" }];
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
