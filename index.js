import React from "react";
import ReactDOM from "react-dom";
import { Grid } from "react-flexbox-grid";

class App extends React.Component {
  state = {
    containers: []
  };

  AddNew = () => {
    if (this.state.containers.length > 5)
      return alert("Can't have more than 5 color schemes");
    this.setState({
      ...this.state,
      containers: this.state.containers.concat({ id: new Date().getTime() })
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
      ...this.state,
      containers: newcontainers
    });
  };

  render() {
    return (
      <Grid>
        <button onClick={this.AddNew}>Add Colors</button>
        {this.state.containers.map((con) => (
          <div id={con.id} key={con.id}>
            <input type="text" value={con.id} />
            <input type="color" onChange={(e) => console.log(e.target.value)} />
            <button onClick={() => this.handleRemove(con.id)}>x</button>
          </div>
        ))}
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
