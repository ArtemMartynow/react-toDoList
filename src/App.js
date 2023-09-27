import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [
                {
                    id: 1,
                    title: 'asdsaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa',
                },
            ]
        }
        this.addTask = this.addTask.bind(this)
    }
    render() {
    return (
      <div className='app'>
        <Header text='TO DO LIST' />
        <Tasks tasks={this.state.tasks} />
        <AddTask addTask={this.addTask} />
      </div>
    )
  }

  addTask(Task) {
    const id = this.state.tasks.length + 1
    this.setState({ tasks: [...this.state.tasks, {id, ...Task}] })
}

}

export default App