import React from 'react';


class AddTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }
  render() {
    return (
      <form>
        <input placeholder='your task' onChange={(text) => {this.setState({ title: text.target.value })}} />
        <button type='button' onClick={() =>(this.props.addTask({title: this.state.title}))}>add task</button>
      </form>
    )
  }
}

export default AddTask