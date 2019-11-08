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
    
    addZeroToInput = val => {
      if(this.state.input !== ""){
        this.setState({ input : this.state.input + val });
      }
    };

    addDecimal = val => {
      if(this.state.input.indexOf(".") === -1) {
        this.setState({ input : this.state.input + val });
      }
    };

    clearInput = () => {
      this.setState({ input : "" });
    };

    add = () => {
      this.state.previousNumber = this.state.input;
      this.setState({ input : ""})
      this.state.operator = "plus";
    };

    subtract = () => {
      this.state.previousNumber = this.state.input;
      this.setState({ input : ""})
      this.state.operator = "minus";
    };

    multiply = () => {
      this.state.previousNumber = this.state.input;
      this.setState({ input : ""})
      this.state.operator = "multiply";
    };

    division = () => {
      this.state.previousNumber = this.state.input;
      this.setState({ input : ""})
      this.state.operator = "divide";
    };


    evaluate = () => {
      this.state.currentNumber = this.state.input;
      if(this.state.operator == "plus") {
        this.setState({
          input:
            parseFloat(this.state.previousNumber) +
            parseFloat(this.state.currentNumber)
      });
      } else if(this.state.operator == "minus") {
        this.setState({
          input:
            parseFloat(this.state.previousNumber) -
            parseFloat(this.state.currentNumber)
      });
      } else if(this.state.operator == "multiply") {
        this.setState({
          input:
            parseFloat(this.state.previousNumber) *
            parseFloat(this.state.currentNumber)
      });
      } else if (this.state.operator == "divide") {
        this.setState({
          input:
            parseFloat(this.state.previousNumber) /
            parseFloat(this.state.currentNumber)
      });
      } 
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
                <Button handleClick={this.addToInput}>8</Button>
                <Button handleClick={this.addToInput}>9</Button>
                <Button handleClick={this.division}>/</Button>
              </div>

              <div className="row">
                <Button handleClick={this.addToInput}>4</Button>
                <Button handleClick={this.addToInput}>5</Button>
                <Button handleClick={this.addToInput}>6</Button>
                <Button handleClick={this.multiply}>*</Button>
              </div>

              <div className="row">
                <Button handleClick={this.addToInput}>1</Button>
                <Button handleClick={this.addToInput}>2</Button>
                <Button handleClick={this.addToInput}>3</Button>
                <Button handleClick={this.add}>+</Button>
              </div>

              <div className="row">
                <Button handleClick={this.addDecimal}>.</Button>
                <Button handleClick={this.addZeroToInput}>0</Button>
                <Button handleClick={this.evaluate}>=</Button>
                <Button handleClick={this.subtract}>-</Button>
              </div>

              <div className="row">
                <Clear  handleClear={this.clearInput}>Clear</Clear>
              </div>
        </div>
      </div>
    );
  }
}

export default App;
