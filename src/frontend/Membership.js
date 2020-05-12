import React, { Component } from 'react';
import Navbar from './Navbar';

export class Membership extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1 className="mt-4 d-flex justify-content-center">
                You can found us on:
                </h1>
                <h2 className="mt-4 d-flex justify-content-center"> @amberleedhia </h2>
                <h2 className="mt-4 d-flex justify-content-center"> +62899234789</h2>
                <h3 className="mt-4 d-flex justify-content-center"> </h3>
            </div>
        )
    }
}

export default Membership;