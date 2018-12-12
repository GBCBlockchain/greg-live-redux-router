import React from 'react';
import { connect } from 'react-redux';

import Header from "../components/header/header";
import TodoList from '../components/todo/todoList';
import AddTodo from "../components/todo/addTodo";

class Todo extends React.Component {

	render() {
		return (
			<div>
				<Header title="Todo"/>
				<h1>Todo Page</h1>
				<AddTodo />
				<TodoList todos={this.props.todos}/>
			</div>
		)
	}
}

const MapStateToProps = ({ todo }) => {
	const { todos } = todo;
	return { todos };
};
export default connect(MapStateToProps, null)(Todo);
