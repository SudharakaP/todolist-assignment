import React from "react";
import { Todo } from "@/types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    deleteTodo: (id: number) => void;
    toggleComplete: (id: number) => void;
    toggleUrgent: (id: number) => void;
}

/*
 * TodoList: Create a ul element and render a TodoItem element for each todo supplied
 */
function TodoList({ todos, deleteTodo, toggleComplete, toggleUrgent }: TodoListProps) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id} // each child in a list should have a unique "key" prop as otherwise there will be a React warning
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                    toggleUrgent={toggleUrgent}
                />
            ))}
        </ul>
    );
}

export default TodoList;