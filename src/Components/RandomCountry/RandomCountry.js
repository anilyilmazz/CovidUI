import React, { Component } from 'react'
import uuid from 'react-uuid'
import "./randomcountry.css"
import moment from 'moment'
import { connect } from "react-redux"

import { setLoading, getCountries, getCountriesRandom, getCountryDetail } from "../../redux/actions/randomcountryactions"

export class RandomCountry extends Component {
    componentDidMount() {
        this.props.getCountriesRandom(5)
    }
    render() {
        return (
            <div>
                <button type="button" className="btn btn-secondary" onClick={() => this.props.getCountriesRandom(5)}>Refresh Country</button>

                {this.props.countries && this.props.countries.length > 0 ? this.props.countries.map(country => (
                    <button key={country.Country} type="button" className="btn btn-info ml-2" onClick={() => this.props.getCountryDetail(country.Slug)}>{country.Country ? country.Country:null}</button>
                )) : null}

                {this.props.countryDetail && this.props.countryDetail.length > 0 ? <p className="h3 mt-3">{this.props.countryDetail[0].Country} Data</p> : null}
                {this.props.countryDetail && this.props.countryDetail.length > 0 ? <table className="table table-borderless table-hover mt-3 col-md-6 offset-md-3">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.countryDetail.map(country => (
                            <tr key={uuid()}>
                                <td>{moment(country.Date).format('DD-MM-YYYY')}</td>
                                <td>{country.Recovered}</td>
                                <td>{country.Deaths}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> : null}
                {this.props.clicked && this.props.countryDetail.length === 0 ? <p className="text-muted mt-3 h3">Data is not found.</p> : null}
            </div>
        )
    }
}
function mapStateToProps({ randomCountryState: { isLoading, countries, countryDetail, selectedCountry, clicked } }) {
    return ({ isLoading: isLoading, countries: countries, countryDetail: countryDetail, selectedCountry: selectedCountry, clicked: clicked })
}
const mapDispatchToProps = {
    setLoading,
    getCountries,
    getCountriesRandom,
    getCountryDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomCountry);
