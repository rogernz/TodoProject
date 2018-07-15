import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, List, Icon } from 'antd';
import 'components/todo/todo.css';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pendingTodo: '' };
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo() {
    this.props.addTodo(this.state.pendingTodo);
  }
  render() {
    return (
      <div>
        <Input
          className="Todo-add-todo-input"
          size="large"
          placeholder="What needs to be done?"
          disabled={this.props.addingTodo}
          onChange={evt => this.setState({ pendingTodo: evt.target.value })}
          value={this.state.pendingTodo}
          onPressEnter={this.addTodo}
          required
        />
        <Button
          className="Todo-add-todo-button"
          size="large"
          type="primary"
          onClick={this.addTodo}
          loading={this.props.addingTodo}
        >
          Add Todo
        </Button>
        <List
          className="Todo-todos"
          size="large"
          bordered
          dataSource={this.props.todos}
          renderItem={todo => (
            <List.Item>
              {todo.content}
              <Icon
                onClick={evt => this.props.completeTodo(todo.id)}
                className="Todo-todo-complete"
                type="check"
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({ content: PropTypes.string, id: PropTypes.string })),
  addTodo: PropTypes.func,
  completeTodo: PropTypes.func,
  addingTodo: PropTypes.bool,
};

Todo.defaultProps = {
  todos: [],
  addTodo: () => {},
  completeTodo: () => {},
  addingTodo: false,
};
