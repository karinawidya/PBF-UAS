import React, { Component } from 'react';
import Navbar from './Navbar';
import firebase from '../Firebase';

export class Cart extends Component {
    constructor() {
        super();;
        this.state = {
            username:'',
            produk:'',
            qty:''
        };
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { username, produk, qty } = this.state;

        firebase.database().ref("/Report Summary").push().set(this.state);
        this.props.history.push("/")
    }

    render() {
        const { username, produk, qty } = this.state;
        return (
            <div>
                <Navbar/>
                <br />
                <h3 className="mt-5 d-flex justify-content-center">
                Yuk, tambahkan produk ke cart Anda! </h3>
                <form class="col-sm-6 mx-auto" onSubmit={this.onSubmit}>
                <div class="form-group">
                        <input type="text" class="form-control" id="username" name="username" value={username} onChange={this.onChange} placeholder="Input Username" />
                    </div>
                <div class="form-group">
                        <input type="text" class="form-control" id="produk" name="produk" value={produk} onChange={this.onChange} placeholder="Input Product" />
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-control" id="qty" name="qty" value={qty} onChange={this.onChange} placeholder="Input Your Qty" />
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    </form>
            </div>
        )
    }
}

export default Cart;