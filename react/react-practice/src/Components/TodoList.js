import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    render() {
        console.log("todolist render!!")
        const { items, clearList, handleDelete, handleEdit } = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {items.map(item => (
                    <TodoItem
                        key={item.id}
                        item={item}
                        handleDelete={() => handleDelete(item.id)}
                        handleEdit={() => handleEdit(item.id)}
                    />
                ))}
                <button
                    type="button"
                    className="btn btn-danger btn-block text-captialize mt-5"
                    onClick={clearList}
                >
                    Clear List
            </button>
            </ul>
        );
    }
}

export default TodoList;