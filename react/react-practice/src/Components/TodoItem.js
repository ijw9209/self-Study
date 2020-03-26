import React, { Component } from 'react';

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.item !== this.props.item;
    }
    render() {
        console.log("todoitem render!!")
        const { item, handleDelete, handleEdit } = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{item.title}</h6>
                <div className="todo-icon">
                    <span
                        className="mx-2 text-success"
                        onClick={handleEdit}>
                        <i className="fas fa-pen"></i>
                    </span>
                    <span
                        className="mx-2 text-danger"
                        onClick={handleDelete}>
                        <i className="fas fa-trash"></i>
                    </span>
                </div>
            </li>
        );
    }
}

export default TodoItem;