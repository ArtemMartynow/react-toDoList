import React from 'react';


class AddTask extends React.Component {
  render() {
    return (
      <form>
        <input placeholder='your task' />
        <button type='button'>add task</button>
      </form>
    )
  }
}

export default AddTask