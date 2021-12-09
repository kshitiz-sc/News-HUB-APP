import React, { Component } from 'react'
import Roller from './Roller.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={Roller} alt="spinner"/>
            </div>
        )
    }
}
