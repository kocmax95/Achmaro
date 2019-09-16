import React, { Component } from 'react'
import ToDoItem from './ToDoItem'

const NewTodoForm = (props) =>{
    return(
        <div>
            <input value={props.draft} type="text" onChange={props.onChange}/>
            <button onClick={props.onSubmit}>Add</button>
        </div>
    )
}

class ToDoList extends Component {
    state = {
      tasks: this.props.tasks,
      draft: '',
    }
  
    updateDraft = (event) => {
      this.setState({
        draft: event.target.value
      })
    }
  
    addToDo = () => {
      const { tasks, draft } = this.state
      const list = tasks 
      list.push({text: draft, done: false})
      this.setState({
        tasks: list,
        draft: ''
      })
    }
  
    render(){
      const { title } = this.props
      const { tasks, draft } = this.state
      return(
        <div>
          <h1>{title}</h1>
          {tasks.map(task => <ToDoItem text={task.text} done={task.done} />)}
          <NewTodoForm
            onSubmit={this.addToDo}
            onChange={this.updateDraft}
            draft={draft}
          />
        </div>
      )
    }
  }

export default ToDoList;
