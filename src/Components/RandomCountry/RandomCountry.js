import React, { Component } from 'react'
import "./randomcountry.css"
export class RandomCountry extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-danger">Get Random Country</button>
                <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </div>
        )
    }
}

export default RandomCountry
