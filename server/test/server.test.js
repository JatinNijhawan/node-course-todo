const expect = require("expect");
const request = require("supertest");

const { app } = require("./../server");
const { Todos } = require("./../models/todos");

beforeEach(done => {
  Todos.deleteMany({}).then(() => done());
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
        Todos.find()
          .then(todos => {
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();
          })
          .catch(e => done(e));
      });
  });
});
