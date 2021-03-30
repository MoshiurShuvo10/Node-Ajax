import React, {Component} from 'react';
import axios from "axios";

class Countries extends Component {
    constructor() {
        super();
        this.state={
            countries:[]
        }
    }

    componentDidMount(){
        const countriesUri='https://restcountries.eu/rest/v2/all';
        axios.get(countriesUri)
            .then(response=>{
                console.log("status: "+response.status);
                console.log("response data: "+response.data);
                this.setState({countries:response.data});
            })
            .catch(error=>{
                console.error("error getting data..");
            });
    }
    render() {
        const country = this.state.countries.map(country=>{
            return <ul>
                <li>{country.name}</li>
                <li>{country.capital}</li>
                <img src={country.flag} height="100 px" width="100px"/>
            </ul>
        });
        return (
            <div>
                {country}
            </div>
        );
    }
}

export default Countries;