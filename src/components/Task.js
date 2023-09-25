import React from 'react';


class Task extends React.Component {
  render() {
    return (
      <div className='task'>
        <h1>{this.props.task.title}</h1>
      </div>
    )
  }
}

export default Task