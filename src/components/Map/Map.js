// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// const Location = ({ text }) => (
//   <div style={{
//     color: 'white', 
//     background: 'grey',
//     padding: '15px 10px',
//     display: 'inline-flex',
//     textAlign: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: '100%',
//     transform: 'translate(-50%, -50%)'
//   }}>
//     {text}
//   </div>
// )

// class Map extends Component {
//   static defaultProps = {
//     center: [ 37.9567109, -121.2892553 ],
//     zoom: 16,
//     stockmarket: { lat: 37.9567109, lng: -121.2892553 }
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '34vh', width: '100%' }}>
//         <GoogleMapReact
//           center={this.props.center}
//           zoom={this.props.zoom}
//         >
//           <Location
//             lat={37.9567109}
//             lng={-121.2892553}
//             text={'Stock Market'}
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default Map;