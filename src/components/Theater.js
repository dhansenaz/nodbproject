import React, { Component } from 'react';
import axios from'axios';
import "./theater.css";


class Theater extends Component {

    
    deleteHandler = (id) =>{
        axios.delete('/api/theater/'+id)
        .then(res => console.log(res))
        

    }
  
    
    render() {
        const title = this.props.theater.name + " - " + this.props.theater.location;

        const review = this.props.theater.review;

        

        return (
            <div className="theater">
                <img className="theater-picture" src = {this.props.theater.imageUrl}/>
                <div className="theater-name"></div>
                        {title}  
                <div className="review"></div>
                        {review}
                        <button onClick ={() =>this.deleteHandler(this.props.theater.id)}>Delete</button>

                
                
                 
            </div>
        )
    }
}


export default Theater;