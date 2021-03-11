import React from 'react';

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoItem: '',
        }
    }

    render() {
        return (
            <div>
                <input value={this.state.todoItem} onChange={(e) => this.setState({ todoItem: e.target.value })} />
                <button onClick={() => this.props.addItem(this.state.todoItem)}>Add</button>
            </div>
        );
    }

}

export default Input;