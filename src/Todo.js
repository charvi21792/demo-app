import React from 'react';

import Input from './Input';
import List from './List';

class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
        }
    }

    addItem(item) {
        this.setState(prevState => ({ todoList: [...prevState.todoList, item] }));
    }

    deleteItem(index) {
        console.log(index);
        this.setState(
            prevState => ({ todoList: [...prevState.todoList.filter((item,i) => i !== index)] }),
            () => console.log(this.state)
        );
    }

    render() {
        let {todoList} = this.state;
        return (
            <div>
                <Input addItem={(item) => this.addItem(item)} />
                <List list={todoList} deleteItem={(index) => this.deleteItem(index)} />
            </div>
        );
    }

}

export default TodoApp;