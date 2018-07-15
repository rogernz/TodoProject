import React from 'react';
import DataSource from 'store/datasource';

export default function withTodos(WrappedComponent, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleToChange = this.handleToChange.bind(this);
      this.state = {
        data: selectData(DataSource, props),
      };
    }

    componentDidMount() {
      // fetch data
      DataSource.addTodoListener(this.handleToChange);
    }
    componentWillUnmount() {
      DataSource.removeTodoListener(this.handleTodoChange);
    }

    handleTodoChange = () => {
      this.setState({ data: DataSource.getTodos() });
    };

    render() {
      return <WrappedComponent todos={this.state.data} {...this.props} />;
    }
  };
}
