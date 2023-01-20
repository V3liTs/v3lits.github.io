import React from "react";
import Button from "react-bootstrap/Button"; 

class BottoneContatore extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 10,
        negativ: -1
      };
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} add</p>
          <p>You clicked {this.state.negativ} negativ</p>
          <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
            +
          </Button>
          <Button onClick={() => this.setState({ negativ: this.state.negativ - 1 })}>
            -
          </Button>
        </div>
      );
    }
  }

  export default BottoneContatore;