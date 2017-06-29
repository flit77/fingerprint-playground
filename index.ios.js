import React, { Component } from "react";
import { AppRegistry } from "react-native"
import TouchID from "react-native-touch-id"

class Fingerprints extends Component {
  componentDidMount() {
    TouchID.authenticate("Trying TouchID")
      .then(success => {
        alert("Success")
      })
      .catch(error => {
        alert("Failure")
      })
  }

  render() {
    return null
  }
}

AppRegistry.registerComponent("Fingerprints", () => Fingerprints)