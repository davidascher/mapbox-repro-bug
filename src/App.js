import React, { Component } from "react";
import ReactMapboxGl from "react-mapbox-gl";

class App extends Component {
  render() {
    return (
      <ReactMapboxGl
        style="mapbox://styles/mapbox/streets-v8"
        accessToken="pk.eyJ1IjoiZGF2aWRhc2NoZXIiLCJhIjoiY2l2dTBlc2swMDAzcjJ0bW4xdTJ1ZGZhZSJ9.uxbzY-xlJ1FJ7lu95S_9cw"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}
      />
    );
  }
}

export default App;
