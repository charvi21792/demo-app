import React from 'react';

class Name extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "some content"
        };
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