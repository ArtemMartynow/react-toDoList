import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [
                
            ]
        }
        this.addTask = this.addTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
    }
    render() {
    return (
      <div className='app'>
        <Header />
        <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} />
        <AddTask addTask={this.addTask} />
      </div>
    )
  }

  addTask(Task) {
    const id = this.state.tasks.length + 1
    this.setState({ tasks: [...this.state.tasks, {id, ...Task}] })
  }

  deleteTask(id) {
    this.setState({
        tasks: this.state.tasks.filter((el) => el.id !== id)
    })
  }

}

export default App