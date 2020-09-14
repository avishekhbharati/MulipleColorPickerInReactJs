import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";

class App extends React.Component {
  state = {
    containers: []
  };

  AddNew = () => {
    let { containers } = { ...this.state };
    this.setState({
      containers: containers.concat({ id: new Date().getTime() })
    });
    console.log(this.state.containers);
  };

  handleRemove = (id) => {
    console.log(id);
    let { containers } = { ...this.state };
    console.log(containers);
    let newcontainers = containers.filter((x) => x.id !== id);
    console.log(newcontainers);
    this.setState({
      containers: newcontainers
    });
  };

  render() {
    return (
      <Grid>
        <button onClick={this.AddNew}>Add Colors</button>
        <div>
          <input type="number" />
          <input type="color" onChange={(e) => console.log(e.target.value)} />
          <button onClick={() => this.handleRemove(new Date().getTime())}>
            x
          </button>
        </div>
        {this.state.containers.map((con) => (
          <div>
            {/* <label>{con.id}</label> */}
            <input type="number" />
            <input
              id={con.id}
              type="color"
              onChange={(e) => console.log(e.target.value)}
            />
            <button onClick={() => this.handleRemove(con.id)}>x</button>
          </div>
        ))}
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
