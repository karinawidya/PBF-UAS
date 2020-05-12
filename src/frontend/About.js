import React, { Component } from 'react';
import Navbar from './Navbar';

export class About extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1 className="mt-4 d-flex justify-content-center">
                You can found us on:
                </h1>
                <h2 className="mt-4 d-flex justify-content-center"> @amberleedhia </h2>
                <h2 className="mt-4 d-flex justify-content-center"> +62899234789</h2>
                <h4 className="mt-5 d-flex justify-content-center"> Dont forget to tag us on Instagram! </h4>
            </div>
        )
    }
}

export default About;