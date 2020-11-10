import React from 'react';
import {Component} from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {

  state = {
    viewport: {
      width: '100vw',
      height: '800px',
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken="pk.eyJ1IjoibWRhem1hbCIsImEiOiJja2g5a3I5YTIwdmNvMnFvODZiM25sNm02In0.CA9elIGQW4XeHIIGD5fgmQ"
        {...this.state.viewport}
        onViewportChange={(viewport: any) => this.setState({viewport})}
      />
    );
  }
}

export default Map;