import React from 'react';

class Name extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "some content",
            todoList: [],
        };
        this.changeName = this.changeName.bind(this);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if(this.props.age !== nextProps.age) {
    //         return true
    //     }
    //     if(this.state.name !== nextState.name) { //name value in state has changed
    //         return true;
    //     }
    //     return false;
    // }

    changeName(e) {
        this.setState({ name: e.target.value });

        // const promise = fetch('');
        // promise
        //     .then(data => console.log(data))
        //     .then(..)
        //     .then(..)
            // .catch(err => log);

        // console.log("something");

    }

    render() {
        let { name, todoList } = this.state;
        let { age } = this.props;
        return (
            <div>
                <input value={name} onChange={this.changeName} />
                <p>{name}</p>
                <p>{age}</p>
                <button onClick={() => this.setState(prevState => ({todoList: [...prevState.todoList, prevState.name]}))}>Add</button>
                <ul>
                    {todoList.map((listItem, i) => <li key={i}><span>{listItem}</span> <button onClick={() => this.setState({ todoList: [...todoList.map((item, index) => i !== index && item )] })}>X</button></li>)}
                </ul>
            </div>
        );
    }

}

export default Name;