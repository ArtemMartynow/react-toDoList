import React from 'react';
import { AiOutlineClose } from "react-icons/ai"


class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        done: 'task'
    }
    this.doneTask = this.doneTask.bind(this)
}
  render() {
    return (
      <div className={this.state.done} onClick={this.doneTask}>
        <AiOutlineClose className='icon' onClick={() => this.props.deleteTask(this.props.task.id)} />
        <h1>{this.props.task.title}</h1>
      </div>
    )
  }

  doneTask() {
    if(this.state.done === 'task') {
      this.setState({ done: 'done' })
    } else {
      this.setState({ done: 'task' })
    }
  }
}

export default Task