import React, { Component } from 'react'
import Navbar from './Navbar';
import firebase from '../Firebase';

class Membership extends Component {

    constructor() {
        super();;
        this.state = {
            fullname: '',
            username: '',
            phone: '',
            email: ''
        };
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { fullname, username, phone, email } = this.state;

        firebase.database().ref("/Report Summary").push().set(this.state);
        this.props.history.push("/")
    }

    render() {
        const { fullname, username, phone, email } = this.state;
        return (
            <div>
                <Navbar />
                <br />
                <form class="col-sm-6 mx-auto" onSubmit={this.onSubmit}>
                    <h3><strong>Membership Page</strong></h3>
                    <div class="form-group">
                        <input type="text" class="form-control" id="fullname" name="fullname" value={fullname} onChange={this.onChange} placeholder="Input Name" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="username" name="username" value={username} onChange={this.onChange} placeholder="Input Username" />
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-control" id="phone" name="phone" value={phone} onChange={this.onChange} placeholder="Input Your Mobile Phone" />
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" id="email" name="email" value={email} onChange={this.onChange} placeholder="Input Your Email" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Membership;