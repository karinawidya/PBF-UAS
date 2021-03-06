import React, { Component } from 'react';
import firebase from '../Firebase';

class Home extends Component {

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('boards');
        this.unsubscribe = null;
        this.state = {
            boards: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
            const { title, description, author } = doc.data();
            boards.push({
                key: doc.id,
                doc, // DocumentSnapshot
                title,
                description,
                author,
            });
        });
        this.setState({
            boards
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
        let boardsList = this.state.boards.map(boards => {
            return (
                <div class="card" style={{ width: '28rem' }}>
                    <div class="card-body">
                        <h5 class="card-title">{boards.title}</h5>
                        <p class="card-description">{boards.description}</p>
                        <p class="card-price">{boards.author}</p>
                        <a href="cart" class="btn btn-primary">Add to cart</a>
                    </div>
                </div>
            )
        })
        return (
            <div className="container">
                <h2 className="center">Our Products</h2>
                <div className="box" align="center">
                    {boardsList}
                </div>
            </div>
        )
    }

}


export default Home;