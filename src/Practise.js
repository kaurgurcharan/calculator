import React from 'react';

class Practise extends React.Component {
  render() {
    
    return(
      <div>
        <h1>Hello {this.props.name}</h1>
        <h1>My age is {this.props.age}</h1>
      </div>
    );
  }

}

export default Practise;