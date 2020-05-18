import React, { Component } from 'react'
import "./randomcountry.css"
import { connect } from "react-redux"
import { setLoading, getCountries,getCountriesRandom } from "../../redux/actions/randomcountryactions"

export class RandomCountry extends Component {
    componentDidMount(){
        this.props.getCountriesRandom(5)
    }
    render() {
        return (
            <div>               
                <button type="button" className="btn btn-secondary" onClick={() => this.props.getCountriesRandom(5)}>Refresh Country</button>
                    {this.props.countries ? this.props.countries.map(country => (
                        <button key={country.Country} type="button" className ="btn btn-info ml-2">{country.Country}</button>
                    )) : null}
            </div>
        )
    }
}
function mapStateToProps({ randomCountryState: { isLoading, countries } }) {
    return ({ isLoading: isLoading, countries: countries })
}
const mapDispatchToProps = {
    setLoading,
    getCountries,
    getCountriesRandom
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomCountry);
