import React from 'react';
import { connect } from 'react-redux';


import Header from "../components/header/header";
import TodoList from '../components/todo/todoList';
import AddTodo from "../components/todo/addTodo";

class Todo extends React.Component {

	render() {
		console.log(this.props)
		return (
			<div>
				<Header title="Todo"/>
				<h1>Todo Page</h1>
				<AddTodo />
				<TodoList todos={this.props.items}/>
			</div>
		)
	}
}

export deafult Todo;
// const MapStateToProps = ({ Todo }) => {
// 	const { items } = Todo;
// 	return { items };
// };

// export default connect(MapStateToProps, null)(Todo);
