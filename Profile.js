import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
          <div className="col-lg-6">
     <div className='profile'>
      <div className='picture'>Picture</div>
          <div className='summary'>
          <h1><span className="glyphicon glyphicon-user" aria-hidden="true"></span></h1>
              <label>Arizona, USA</label>
      </div>
        </div>
              </div>
          <div className="col-lg-6">
      <div className='profile'>
      <div className='picture'>Picture</div>
          <div className='summary'>
          <h1><span className="glyphicon glyphicon-user" aria-hidden="true"></span></h1>
              <label>Arizona, USA</label>
      </div>
          </div>
        </div> 
      </div>
          </div>
        );
  }
}

export default Profile;
