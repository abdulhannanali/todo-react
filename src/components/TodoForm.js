var React = require("react")


class TodoForm extends React.Component {
    constructor(props) {
      super(props)

      // binding this to methods
      this.textChange = this.textChange.bind(this)
    }

    state = {
        description: ""
    };

    textChange (el) {
      this.setState({
        description: el.target.value
      })
    }

    handleSubmit (el) {
      el.preventDefault()
      this.props.addTodo(this.state.description)
      this.setState({
        description: ""
      })
    }

    render () {
      return (
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="row">
              <div className="col s10">
                <input type="text" value={this.state.description} onChange={this.textChange}/>
              </div>
              <div className="col s2">
                <input type="submit" className="btn waves-effect waves-light" value="add this todo"/>
              </div>
            </div>
          </form>
        </div>
      )
    }
}


module.exports = TodoForm
