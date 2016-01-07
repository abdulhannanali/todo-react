var todosData = [
  {description: "this is some sample data", done: false},
  {description: "this is another sample todo", done: true},
  {description: "yo another todo", done: false}
]
var TodoList = React.createClass({
  render: function () {
    return (
      <div>
        <div>
          <Todos />
        </div>
      </div>
    )
  }
})
console.log(Todos)
ReactDOM.render(
  <Todos />,
  document.getElementById("divContainer")
)
