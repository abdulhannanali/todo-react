var React = require("react")

// pretty sure this component just makes use of the props
// it doesn't maintain it's own state

class Todo extends React.Component {
  // default props and PropTypes can be the static stuff now
  static defaultProps = {
    done: false,
    description: "Description was not provided"
  };

  // as a replacement for ComponentWillMount
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleDelete (el) {
    this.props.removeTodo(this.props.todo.id)
  }

  handleCheck (el) {
    this.props.checkTodo(this.props.todo.id)
  }

  render () {
    var description;
    var doneButton;

    // strikethrough depending on if it's done
    if (this.props.todo.done) {
      description = <strike>{this.props.todo.description}</strike>
      doneButton = <a onClick={this.handleCheck} className="btn-floating waves-effect waves-light blue"><i className="material-icons">close</i></a>
    }
    else {
      description = this.props.todo.description
      doneButton = <a onClick={this.handleCheck} className="waves-effect waves-light btn-floating green"><i className="material-icons">check</i></a>
    }

    return (
      <tr>
        <td>{description}</td>
        <td>
          {doneButton}
        </td>
        <td>
          <a className="btn-floating btn-sm waves-effect waves-light red" onClick={this.handleDelete}>
            <i className="large material-icons">delete</i>
          </a>
        </td>
      </tr>
    )
  }
}

module.exports = Todo
