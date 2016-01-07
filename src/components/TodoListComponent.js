var React = require("react")
var Todos = require("./Todos")

var todosData = [
  {description: "Take a bath", done: false},
  {description: "Blah!", done: false},
  {description: "Why?", done: false}
]

var TodoListComponent = React.createClass({
  render: function () {
    return (
      <div>
        <Todos todos={todosData}/>
      </div>
    )
  }
})


module.exports = TodoListComponent
