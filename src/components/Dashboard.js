import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import firebase from '../Firebase';

class App extends Component {
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
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading" text align="center">
                        <h3 class="panel-title">
                            Fillea Shop
                        </h3>
                    </div>
                    <div class="panel-body" text align="center">
                        <h4><Link to="/create">Add Product</Link></h4>
                        <table class="table table-stripe">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.boards.map(board =>
                                    <tr>
                                        <td><Link to={`/show/${board.key}`}>{board.title}</Link></td>
                                        <td>{board.description}</td>
                                        <td>{board.author}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;