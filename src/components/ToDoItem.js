import React, { Component } from 'react'

class ToDoItem extends Component {
    static defaultProps = {
      done: false
    }
    state = {
      done: this.props.done,
    }
  
    toogleDone = () => {
      this.setState({
        done: !this.state.done
      })
    }
  
    render(){
      const { text } = this.props
      return(
        <div>
          <div onClick={this.toogleDone} className={this.state.done ? 'doneTodo' : '' }>
            <p>{text}</p>
          </div>
        </div>
      )
    }
  }

  export default ToDoItem;
