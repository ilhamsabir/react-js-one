import React from "react";

import Subheader from './Subheader.js';
import List from '../products/List.js';

class Home extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="subheader">
          <Subheader/>
        </div>
        <div className="col-md-12">
           <List/>
         </div>
      </div>
    );
  }
}

export default Home;
