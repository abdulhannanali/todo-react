var React = require("react")
var Todo = require("./Todo")

class Todos extends React.Component {
  constructor(props) {
    super(props)

    this.handleAllDone = this.handleAllDone.bind(this)
    this.handleDeleteAll = this.handleDeleteAll.bind(this)
  }

  state = {
    allDone: false
  };

  handleAllDone () {
    var allDone = !this.state.allDone
    this.setState(
      {allDone: allDone}
    )
    this.props.checkAllTodos(allDone)
  }

  handleDeleteAll () {
    this.props.deleteAllTodos()
  }


  render() {
    // rendering a todo for each todo in the component
    var todos = this.props.todos.map((todo, index) => {
      return (<Todo todo={todo} key={todo.id} removeTodo={this.props.removeTodo} checkTodo={this.props.checkTodo}/>)
    })

    return (
        <table>
          <thead>
            <tr>
              <th>Task Description</th>
              <th>
                <div class="input-field" onClick={this.handleAllDone} >
                  <input type="checkbox" checked={this.state.allDone} />
                  <label>Done</label>
                </div>
              </th>
              <th>
                <a className="tooltipped btn btn-sm waves-effect waves-light red"
                   onClick={this.handleDeleteAll}
                   data-position="top"
                   data-tooltip="Delete all todos">Delete</a>
              </th>
            </tr>
          </thead>
          <tbody>
            {todos}
          </tbody>
      </table>
    )
  }
}


module.exports = Todos
