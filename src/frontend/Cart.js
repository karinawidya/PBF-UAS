import React, { Component } from 'react';
import Navbar from './Navbar';

export class Cart extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h2 className="mt-5 d-flex justify-content-center">
                Tidak ada produk yang ditambahkan
                </h2>
                <h3 className="mt-5 d-flex justify-content-center">
                0 produk </h3>
            </div>
        )
    }
}

export default Cart;