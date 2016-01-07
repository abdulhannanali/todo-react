var React = require("react")

// pretty sure this component just makes use of the props
// it doesn't maintain it's own state
var Todo = React.createClass({
  handleChange: function (el) {},
  render: function () {
    var description;

    // strikethrough depending on if it's done
    if (this.props.todo.done) {
      description = <strike>{this.props.todo.description}</strike>
    }
    else {
      description = this.props.todo.description
    }

    return (
      <tr>
        <td>{description}</td>
        <td>
          <input type="checkbox" value={this.props.todo.done} checked={this.props.todo.done} onChange={this.handleChange}/>
          <lable>Done</lable>
        </td>
      </tr>
    )
  },
  getDefaultProps: function () {
    return {
      done: false,
      description: "Description was not provided"
    }
  }
})

module.exports = Todo
