import React, { Component } from 'react';
import Theater from "./components/Theater";
import axios from "axios";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer"



class App extends Component {

  constructor (props){
    super(props);
    this.state = {
      theaters: [],
      userInput: ""
    };
  } 

  postHandler = () =>{
    this.state.userInput
console.log('post button')
        axios.post("/api/theater/review",{review: this.state.userInput})
        .then((res) => {
          this.setState ({theaters: res.data})
          

        })
        

  }
  handleInputChange(e){
    this.setState({userInput:e} , () => console.log(this.state))


  }

componentDidMount(){
axios.get('/api/theater')
.then( (res) => {
    this.setState({theaters:res.data})
})
}


  render() {
    

  

    const theaters = this.state.theaters.map((theater) => {
      return <Theater theater={theater} />
    })

    return (
      <div className="app">
       <Header/>
        <div className="main">
         <input onChange = {(e) => this.handleInputChange(e.target.value)}type="text"/>
         <button onClick = {this.postHandler}> Post Review</button>
            <div className="theaters">
                  {theaters}

            
            </div>
          </div>
        <div className="side">
              <Footer/>
            
          </div>
        </div>
      
     
    );
  }
}

export default App;
