import React, {Component} from 'react';
import Name from './Name';

const list = ["India", "Australia", "China", "Pakistan", "Russia"];

const obj = {
    property1: "some value",
    property2: "som other value"

};

// obj["property1"]; //some value -> onclick - javascript / onClick - reactjs

export class Country extends Component {

    constructor(props) {
        super(props);
        this.state = { //default state values
            countryList: [...list],
            selectedCountry: "Russia",
            selectedCountryList: [],
        };
    }

    onSelect(e) {
        console.log(e); //view it in browser's console
        this.setState((prevState) => ({ 
            selectedCountry: e.target.value,
            selectedCountryList: [...prevState.selectedCountryList, e.target.value]
        }));
    }

    onOptionSelection() {

    }

    render() {
        let { countryList, selectedCountryList, selectedCountry } = this.state;
        return (<div>
            <select onChange={(element) => this.onSelect(element)} value={selectedCountry}>
                {countryList.map((country, index) => (<option onClick={(e) => this.onOptionSelection(country)} key={index}>{country}</option>))}
            </select>
            <ul>
                {selectedCountryList.map((country, i) => (<li key={i}>{country}</li>))}
            </ul>
            <Name name={selectedCountry} />
        </div>);
    }

}

// export default Country;