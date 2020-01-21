import React from "react";
import AppLayout from "../components/app_layout/layout";
import fetch from "isomorphic-unfetch";

class Explore extends React.Component{
  _content = () => {
  	// if( !this.props.data ){
  	// 	return "Loading......";
  	// }
  	return(
      <div>
        data
      </div>
  	);
  }

  render = () => {
  	return(
      <AppLayout >
        { this._content() }
      </AppLayout>
  	);
  }
}

// Explore.getInitialProps = async () => {
// 	const res = await fetch( "http://localhost:3000/api/explore" );
// 	const json = await res.json();
// 	return { data: JSON.stringify( json ) };
// };

export default Explore ;