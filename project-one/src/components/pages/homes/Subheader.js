import React from "react";

class Subheader extends React.Component {
  render() {
    return(
      <div className="container">
      	<div className="row">
          <div className="jumbotron">
      		<h1>MATERIAL DESIGN BUTTONS</h1>
              <p>Buttons based on default Boostrap classes edited to look like Googles Material Design</p>
          </div>
          <center>
              <button className="btn btn-lg btn-default">Default</button>
              <button className="btn btn-lg btn-secondary">Secondary</button>
              <button className="btn btn-lg btn-primary">Primary</button>
              <button className="btn btn-lg btn-info">Info</button>
              <button className="btn btn-lg btn-warning">Warning</button>
              <button className="btn btn-lg btn-danger">Danger</button>
              <button className="btn btn-lg btn-success">Success</button>
              <button className="btn btn-lg btn-link">Link</button>
          </center>
      	</div>
      </div>
    );
  }
}

export default Subheader;
