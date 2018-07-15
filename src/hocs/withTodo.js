import React from 'react';
import DataSource from 'store/datasource';

export default function withTodos(WrappedComponent, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleTodoChange = this.handleTodoChange.bind(this);
      this.state = {
        data: selectData(DataSource, props),
      };
    }

    componentDidMount() {
      // fetch data
      DataSource.addTodoListener(this.handleTodoChange);
    }
    componentWillUnmount() {
      DataSource.removeTodoListener(this.handleTodoChange);
    }

    handleTodoChange = () => {
      this.setState({ data: selectData(DataSource, this.props) });
    };

    render() {
      return <WrappedComponent todos={this.state.data} {...this.props} />;
    }
  };
}
