import React from 'react';
import { AiOutlineClose } from "react-icons/ai"


class AddTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }
  render() {
    return (
      <form ref={(el) => this.myForm = el}> 
        <input placeholder='your task' onChange={(text) => {this.setState({ title: text.target.value })}} />
        <button type='button' onClick={() => {
            this.myForm.reset()
            this.props.addTask({
                title: this.state.title
            })}
        }><AiOutlineClose className='add-icon' /></button>
      </form>
    )
  }
}

export default AddTask