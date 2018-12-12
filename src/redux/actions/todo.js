import { ADD_TODO } from "../constants/todo";

let nextTodoId = 0;

export const addTodo = content => ({
	type: ADD_TODO,
	payload: {
		id: ++nextTodoId,
		content
	}
});
