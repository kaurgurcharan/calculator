import React from 'react';
import './App.css';
import Button from './components/Button';
// import Practise from './Practise';
import Clear from './components/Clear';
import Input from './components/Input';


class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }

    addToInput = val => {
       this.setState({ input: this.state.input + val });
      };

  render() {
    return (
      <div className="App">
          <div className="calc-wrapper">
            <div className= "row">
                <Input>{this.state.input}</Input>
            </div>
              <div className="row">
                <Button handleClick={this.addToInput}>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button>/</Button>
              </div>

              <div className="row">
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button>*</Button>
              </div>

              <div className="row">
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>+</Button>
              </div>

              <div className="row">
                <Button>.</Button>
                <Button>0</Button>
                <Button>=</Button>
                <Button>-</Button>
              </div>

              <div className="row">
                <Clear>Clear</Clear>
              </div>
        </div>
      </div>
    );
  }
}

export default App;
