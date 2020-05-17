import React, { Component } from 'react'

export class CountryInput extends Component {
    render() {
        return (
            <div className="input-group">
                {/* <select className="custom-select" id="inputGroupSelect04">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select> */}
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Button</button>
                </div>
            </div>

        )
    }
}

export default CountryInput
