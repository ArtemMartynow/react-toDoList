import React from 'react';
import Task from './Task';


class Tasks extends React.Component {
  render() {
    return (
    <div className='tasks'>
        {this.props.tasks.map((el) => (
            <Task key={el.id} task={el} />
        ))}
    </div>
    )
  }
}

export default Tasks