import React, { Component } from 'react';
import axios from'axios';
import "./theater.css";


class Theater extends Component {
    
componentWillMount(){
    axios.get('/api/theater')
    .then( (res) => {
        this.setState({theaters:res.data})
    })
}
    render() {
        const title = this.props.theater.name + " - " + this.props.theater.location;

        const review = this.props.theater.review;

        const style = {
            backgroundImage:`url('${this.props.theater.imageUrl}')`
        };


        return (
            <div className="theater">
                <div className="theater-picture" style={style}></div>
                <div className="theater-name"></div>
                        {title}  
                <div className="review"></div>
                        {review}
                          
                
                
                
            </div>
        )
    }
}


export default Theater;