import React from 'react';
import PropTypes from 'prop-types';

class Todo extends Components {
	render() {
		return (
			<li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none'}}> {text} </li>
		)
	}
}

export default Todo;