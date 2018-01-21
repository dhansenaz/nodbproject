import React, { Component } from 'react';
import Theater from "./components/Theater"
import './App.css';



class App extends Component {

  constructor (props){
    super(props);
    this.state = {
      theaters: []
    };
  }
  render() {
    const theater = {
      id: 1,
      name: "Harkins City Center",
      location: "Las Vegas, NV",
      imageUrl: "https://farm3.staticflickr.com/2589/4143322920_51c7d22e2e.jpg",
      review: "Seats are super plush. Large oversized seats with cupholders. If you don't like crowds, stay away on the weekend!"

    };

    const theaters = [theater, theater, theater, theater];

    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
            <div className="theaters">
            {theaters.map((theater) => {
              return <Theater theater={theater} />
            })}
           
            
            
            
            </div>
          </div>
        <div className="map">
              {/* <Theater theater = {theater} />
              <Theater theater = {theater} />
              <Theater theater = {theater} /> */}
            
          </div>
        </div>
      
     
    );
  }
}

export default App;
