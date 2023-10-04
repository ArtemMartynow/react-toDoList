import React from 'react';
import { AiOutlineClose } from "react-icons/ai"
import { IoCheckmarkSharp } from 'react-icons/io5'


class Task extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
        done: 'circle-done'
    }
  }

  render() {
    return (
      <div className='task'>
        <AiOutlineClose className='icon' onClick={() => this.props.deleteTask(this.props.task.id)} />
        <h1>{this.props.task.title}</h1>
        <span className={this.state.done} onClick={() => {
          if(this.state.done === 'circle-done') {
            this.setState({done: 'circle-done-active'})
          } else {
            this.setState({done: 'circle-done'})
          }
        }}><IoCheckmarkSharp /></span>
      </div>
    )
  }

}

export default Task