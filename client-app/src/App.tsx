import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Header, Icon, List } from "semantic-ui-react";
class App extends Component {
  state = {
    Values: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/values").then(res => {
      this.setState({ Values: res.data });
    });
  }

  render() {
    return (
      <div>
        <Header as="h2">
          <Icon name="users" />
          <Header.Content>Reactivities</Header.Content>
        </Header>

        <List>
          {this.state.Values.map((c: any) => (
            <List.Item key={c.id}>{c.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
