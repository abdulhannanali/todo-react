var React = require("react")
var Todos = require("./Todos")
var TodoForm = require("./TodoForm")

class TodoListComponent extends React.Component {
  constructor (props) {
    super(props)
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.checkTodo = this.checkTodo.bind(this)
    this.checkAllTodos = this.checkAllTodos.bind(this)
    this.editTodoDescription = this.editTodoDescription.bind(this)
    this.deleteAllTodos = this.deleteAllTodos.bind(this)
  }

  state = {
    todos: [],
    todoId: 1
  };

  addTodo (todo) {
    if (todo) {
      this.state.todos.push({
        description: todo,
        done: false,
        id: this.state.todoId
      })
    }
    this.setState({
      todos: this.state.todos,
      todoId: this.state.todoId + 1
    })

    console.log(this.state.todos)
  }

  removeTodo(todoId) {
    if (todoId) {
      var filteredArray = this.state.todos.filter(function (value, index, array) {
        if (todoId == value.id) {
          return false

        }
        else {
          return true
        }
      })


      this.setState({
        todos: filteredArray
      })
    }
  }

  editTodoDescription(todoId, newDescription) {
    if (todoId && description) {
      var editedArray = this.state.todos.map(function (value) {
        if (todoId == value.id) {
          value.description = newDescription
        }

        return value
      })

      this.setState({
        todos: editedArray
      })
    }
  }

  checkTodo(todoId) {
    console.log(todoId)
    if (todoId) {
      var checkedArray = this.state.todos.filter(function (value, index, array) {
        if (todoId == value.id) {
          value.done = !value.done
        }

        return value
      })

      this.setState({todos: checkedArray})
    }
  }

  checkAllTodos(done) {
    var checkedArray = this.state.todos.map(function (value, index, array) {
      value.done = done
      return value
    })

    this.setState({todos: checkedArray})
  }

  deleteAllTodos () {
    this.setState({
      todos: []
    })
  }

  render () {
    return (
      <div>
        <TodoForm addTodo={this.addTodo}/>
        <Todos todos={this.state.todos}
               removeTodo={this.removeTodo}
               checkTodo={this.checkTodo}
               checkAllTodos={this.checkAllTodos}
               deleteAllTodos={this.deleteAllTodos}/>
      </div>
    )
  }
}

module.exports = TodoListComponent
