var React = require("react")
var Todo = require("./Todo")

var Todos = React.createClass({
  render: function () {
    // rendering a todo for each todo in the component
    var todos = this.props.todos.map((todo, index) => {
      return (<Todo todo={todo} key={index}/>)
    })

    return (
      <table>
        <thead>
          <tr>
            <th>Task Description</th>
            <th>Done?</th>
          </tr>
        </thead>
        <tbody>
          {todos}
        </tbody>
      </table>
    )
  },
})

module.exports = Todos
