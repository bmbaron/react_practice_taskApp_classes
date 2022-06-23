import React, { Component } from 'react'

class Overview extends Component {
  constructor(props) {
    super(props);
		this.state = {
			text: ""
    };
	}

	getNewInput = (event, taskId) => {
		this.setState({
      text: event.target.value
		})
		this.props.updateTaskText(event, taskId, event.target.value)
	}

	render() {
		return(
		<div className="task-container">
			{this.props.tasks.map((task) => {
				if (task) {
					return (
						<div className="task" key={task.id + 1}>
							<input 
								type="text"
								placeholder={task.text}
								onChange={(e) => this.getNewInput(e, task.id)}
								value={task.text}
							/>
							<div className="button-container">
								<button onClick={(e) => this.props.handleDelete(e, task.id)}>delete me</button>
							</div>
						</div>
					)
				}
				else {
					return false
				}
			})}
		</div>
		)
	}
}

export default Overview;