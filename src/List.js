import React from 'react';

class List extends React.Component {

    render() {
        let { list } = this.props;
        return (
            <ul>
                {list.map((item, i) => <li><span>{item}</span> <button onClick={() => this.props.deleteItem(i)}>X</button></li>)}
            </ul>
        );
    }

}

export default List;