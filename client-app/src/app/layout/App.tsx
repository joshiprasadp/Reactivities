import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, Container } from "semantic-ui-react";
import { IActivity } from "../models/activity";
import NavBar from "../../features/nav/NavBar";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios.get<IActivity[]>("http://localhost:5000/api/activities").then(res => {
      setActivities(res.data);
    });
    return () => {};
  }, []);
  // componentDidMount() {
  //   axios.get<IActivity[]>("http://localhost:5000/api/activities").then(res => {
  //     this.setState({ activities: res.data });
  //   });
  // }

  return (
    <React.Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <List>
          {activities.map(activity => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </Container>
    </React.Fragment>
  );
};

export default App;
