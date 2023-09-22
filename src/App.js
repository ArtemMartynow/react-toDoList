import React from 'react';
import Header from './components/Header';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header text='TO DO LIST' />
      </div>
    )
  }
  Click() {alert('asd')}
}

export default App