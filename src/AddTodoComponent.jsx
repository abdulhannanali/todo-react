var TodoForm = React.createClass({
  render: function () {
    return (
      <form>
        <input type="text" name="todoDescription" value={this.props.newTodo}/>
        <input type="submit" value="Add this todo"/>
      </form>
    )
  }
})
