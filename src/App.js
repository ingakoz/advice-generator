import React from "react";
import './App.css';
import axios from "axios";

class App extends React.Component {

  state = { advice: ''};

  componentDidMount(){
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      const {advice} = response.data.slip;
      const {id} = response.data.slip;

      console.log(id);
        this.setState ({ advice:advice });
        this.setState({ id:id });
       
      
    })
    .catch ((error) => {

    });
  }

  render(){
    const  {advice} = this.state;
    const {id} = this.state;
    return(  
      
      <div className="App">
      <h1 className="Name">Absolutely Fucking Useless <br />Advice Generator</h1>
        <div className="Card">
         <h4 className="id">Advice #{id}</h4>
      <h1 className="Head">{advice}</h1> 
      <button className="Button" onClick={this.fetchAdvice}>
        <span>Next Advice</span>
      </button>
      </div>
      </div>  
    )
  }
}


export default App;
