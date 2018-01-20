import React, { Component } from 'react';
import Theater from './Theater';
import axios from'axios';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            theaters: []
        }
        }
    
componentWillMount(){
    axios.get('/api/theater')
    .then( (res) => {
        this.setState({theaters:res.data})
    })
}

    render() {

        return (
            <div className="main">main
                <Theater/>
                
                
            </div>
        )
    }
}


export default Main;