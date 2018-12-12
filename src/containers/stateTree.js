import React from 'react';
import {connect} from 'react-redux';

class StateTree extends React.Component {

	renderTree = () => {
		return this.props.todos.map(todo => (
			<div key={"state-tree-" + todo.id}>
				<span>---------</span>
				<p>Todo.id: {todo.id}</p>
				<p>Todo.content: {todo.content}</p>
			</div>
		))
	};

	render() {
		return (
			<div>
				<h1>State Tree</h1>
				{this.renderTree()}
        {this.props.foo}
			</div>
		)
	}
}

const MapStateToProps = ({ todo, test }) => {
	const {todos} = todo;
  const {foo} = test;
	return {todos, foo}
};

export default connect(MapStateToProps, null)(StateTree);
