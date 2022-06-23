// App.js

import React, { Component } from "react";
import Overview from './components/Overview'
import uniqid from "uniqid"
import "./style.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: {
        text: '',
        id: uniqid(),
        number: '',
      },
      tasks: [],
    };
  }

  handleInputChange = (event) => {
    this.setState({
      task: 
      {
        text: event.target.value,
        id: this.state.task.id,
        number: this.state.tasks.length + 1,
      }
    })
  }

  onSubmitTask = (event) => {
    event.preventDefault()
    if (this.state.task.text) {
      this.setState({
        tasks: this.state.tasks.concat(this.state.task),
        task: {
          text: '',
          id: uniqid(),
          number: { ...this.state.tasks }.length,
        },
      })
    }
  }

  handleDelete = (e, id) => {
    e.preventDefault()
    this.setState({
      tasks: this.state.tasks.map((task) => {
        return task.id !== id && task  
      })
    })
  }

  updateTaskText = (event, id, newText) => {
    event.preventDefault()
    this.setState({
      tasks: this.state.tasks.map((task, counter) => {
        if (task.id === id) {
          return (task = {
            text: newText,
            id: this.state.tasks[counter].id,
            number: this.state.tasks[counter].number,
          })
        }
        else {
          return task
        }
      })
    })
  }



  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form className="task-form">
          <label htmlFor="taskInput">Enter task</label>
          <input 
            type="text"
            id="taskInput"
            onChange={this.handleInputChange}
            value={task.text}
          />
          <button type="submit" onClick={this.onSubmitTask}>
          Add task
          </button>
        </form>
        <Overview tasks={tasks} handleDelete={this.handleDelete} updateTaskText={this.updateTaskText}/>
      </div>
    )
  }
}

export default App;