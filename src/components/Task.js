import React from 'react';
import { AiOutlineClose } from "react-icons/ai"


class Task extends React.Component {
  render() {
    return (
      <div className='task'>
        <AiOutlineClose className='icon' />
        <h1>{this.props.task.title}</h1>
      </div>
    )
  }
}

export default Task