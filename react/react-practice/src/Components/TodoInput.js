import React, { Component } from 'react';

class TodoInput extends Component {
    state = {
        input: ''
    };

    render() {
        console.log("todoinput render!!")
        const { title, handleChange, handleSubmit, editItem } = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>
                        <input
                            className="form-control text-capitalize"
                            placeholder="add a todo item"
                            type="text"
                            value={title}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className={
                            editItem
                                ? "btn btn-block btn-success mt-3 text-capitalize"
                                : "btn btn-block btn-primary mt-3 text-capitalize"}
                    >
                        {editItem ? "edit Item" : "add Item"}</button>
                </form>
            </div>
        );
    }
}

export default TodoInput;
