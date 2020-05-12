import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import Dashboard from './components/Dashboard';
import CustomerCare from './frontend/CustomerCare';
import Cart from './frontend/Cart';
import About from './frontend/About';
import Membership from './frontend/Membership';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/cart' component={Cart} />
            <Route path='/customercare' component={CustomerCare} />
            <Route path='/about' component={About} />
            <Route path='/membership' component={Membership} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/create' component={Create} />
            <Route path='/show/:id' component={Show} />
        </div>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();