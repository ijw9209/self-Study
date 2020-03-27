import React, { Component } from 'react';
import produce from 'immer';
class App extends Component {
  id = 4;
  state = {
    input: '',
    todos: [
      {
        id: 1,
        text: '리액트 기초',
        done: true
      },
      {
        id: 2,
        text: '리액트 스타일링',
        done: true
      },
      {
        id: 3,
        text: '리액트 라우터',
        done: true
      },
      {
        id: 4,
        text: '다양한 활용',
        done: false
      }
    ]
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    })
  }

  handleInsert = e => {
    this.setState(
      produce(draft => {
        draft.todos.push({
          id: ++this.id,
          text: this.state.input,
          done: false
        })
        draft.input = '';
      })
    )
  }

  handleToggle = id => {
    this.setState(
      produce(draft => {
        const todo = draft.todos.find(todo => todo.id === id);
        console.log('todo > ' + todo);
        todo.done = !todo.done;
        console.log('draft > ' + draft);
      })
    )
  }

  handleRemove = id => {
    this.setState(
      produce(draft => {
        const Index = draft.todos.findIndex(todo => todo.id === id);
        draft.todos.splice(Index, 1);
      })
    )

  }
  render() {
    return (
      <div>
        <div>
          <input value={this.state.input} onChange={this.handleChange}></input>
          <button onClick={this.handleInsert}>추가</button>
        </div>
        <ul>
          {this.state.todos.map(todo => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.done ? 'line-through' : 'none'
              }}
              onClick={() => this.handleToggle(todo.id)}
              onContextMenu={e => {
                e.preventDefault();
                this.handleRemove(todo.id);
              }}
            >{todo.text}</li>
          ))}

        </ul>
      </div>
    );
  }
}

export default App;