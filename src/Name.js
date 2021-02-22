import React from 'react';

class Name extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "some content"
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.age !== nextProps.age) {
            return true
        }
        if(this.state.name !== nextState.name) { //name value in state has changed
            return true;
        }
        return false;
    }

    render() {
        let { name } = this.state;
        let { age } = this.props;
        return (
            <div>
                <input value={name} onChange={(e) => this.setState({ name: e.target.value })} />
                <p>{name}</p>
                <p>{age}</p>
            </div>
        );
    }

}

export default Name;