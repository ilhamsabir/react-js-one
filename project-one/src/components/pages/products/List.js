import React from "react";
import axios from 'axios';

class List extends React.Component {
  constructor() {
       super();
       this.state = {
         data: []
       };
   }

   componentRequestProductData() {
    //  var url = 'http://localhost:9000/api/product';
     axios.get('http://localhost:9000/api/product')
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
   }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="col-sm-3">

            <div className="card-block">
                <h4 className="card-title">Card title</h4>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default List;
