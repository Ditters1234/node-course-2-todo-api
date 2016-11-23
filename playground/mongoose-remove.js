const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5836064d1df36e1056ba1803';

// Todo.remove({}).then((res) => {
//   console.log(res)
// })

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()
Todo.findByIdAndRemove(id).then((todo) => {
  console.log(todo);
});
