import React from 'react';
import Task from './Task';
import AddTask from './AddTask';


class Tasks extends React.Component {
  render() {
      if(this.props.tasks.length > 0) {
          return (
          <div className='tasks'>
              {this.props.tasks.map((el) => (
                  <Task key={el.id} task={el} />
                  ))}
                  <AddTask />
          </div>
          )
      } else {
        return (
            <div className='tasks'>
                <h1>NO TASKS</h1>
                <AddTask />
            </div>
            )
      }
  }
}

export default Tasks