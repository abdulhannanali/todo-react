var Todo = React.createClass({
  handleDone: function (el) {
    console.log(el)
  },
  render: function () {
    return (
      <tr>
        <td>{this.props.todo.description}</td>
        <td>
          <input type="checkbox" checked={this.props.todo.done}  onChange={this.handleDone}/>
          <label>Done</label>
        </td>
        <td>
          <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">cross</i></a>
        </td>
      </tr>
    )
  }
})
