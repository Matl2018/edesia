import React, { Component } from "react";
import * as api from "../../helpers/api";

export default class Notifications extends Component {
  state = {
    notifications: []
  };
  componentDidMount() {
    api.getNotifications().then(data => {
      this.setState({
        notifications: data
      });
    });
  }

  render() {
    return (
      <div>
        <h1> List of Notifications </h1>
        <div>
          {this.state.notifications.map(notification => {
            return (
              <div>
                <p> {notification.note} </p>
                <p>{notification.notificationsId}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
