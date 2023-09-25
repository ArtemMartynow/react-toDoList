import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';


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
    }
    render() {
    return (
      <div>
        <Header text='TO DO LIST' />
        <Tasks tasks={this.state.tasks} />
      </div>
    )
  }
}

export default App