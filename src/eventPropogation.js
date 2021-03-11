import React from 'react';

class EventEx extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showPara: false,
        };
    }

    render() {
        const { value, value2 } = this.props;
        const { showPara } = this.state;
        const Prar = () => {
            if (value) {
                return (<p>{value}</p>);
            }
            return (<p>{value2}</p>)
        }

        const Link = () => {
            if (this.props.viewLink && this.props.something || this.props.somethingElse) {
                return (
                    <a href="www.google.com" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        alert("google");
                    }}>
                        Google
                    </a>
                );
            }
            return <p>something that is not true</p>;
        }


        return (

            <div onClick={() => alert("div")} style={{ backgroundColor: 'red', width: '200px', height: '200px' }}>
                <button style={{ width: '100px', height: '100px', backgroundColor: 'green' }} onClick={(e) => {
                    e.stopPropagation();
                    this.setState({ showPara: true });
                    alert("button");
                }}>Click Me</button>
                {this.props.viewLink && <Link />}
                {this.props.viewLink && <p style={{ color: "white" }}>Conditional rndering</p>}
                {/* {<Link /> && this.props.viewLink} */}
                {showPara && <p style={{ color: "white" }}>{value || value2}</p>}
            Click Div
            </div>

        );
    }

}
export default EventEx;