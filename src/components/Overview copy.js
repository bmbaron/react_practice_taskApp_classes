import React, { Component } from 'react'
import uniqid from "uniqid"

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
			text: ''
		}
	}

	render() {
		return(
		<ul>
			{this.props.tasks.map((task) => {
				if (task) {
					return (
						<div key={uniqid()}>
							<input 
								type="text"
								key={uniqid()}
								contentEditable={task.editable}
								value={task.text}
							/>
							<button onClick={(e) => this.props.handleClick(e, task.id)}>delete me</button>
						</div>
					)
				}
				else {
					return false
				}
			})}
		</ul>
		)
	}
}

export default Overview;