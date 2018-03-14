import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MessageBox from './components/MessageBox';
import * as firebase from "firebase";



class App extends Component {

    constructor(props) {
        super(props);
        const config = {
            apiKey: "",
            authDomain: "",
            databaseURL:"",
            projectId: "",
            storageBucket: "",
            messagingSenderId: "",
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <MessageBox db={firebase}/>
            </div>
        );
    }
}

export default App;
