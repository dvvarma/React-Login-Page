import React, { Component } from 'react';

class Varma extends Component {
  render() {
    return (
            <div className="login">
                <div className="container">
                    <div className="row">   
                        <div className="col-lg-offset-3 col-lg-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Employee Details</h3>
                                </div>
                                <div className="panel-body">
                                    <div>
                                        <form className="form-vertical">
                                          
                                                <label className="control-label">First Name</label>
                                                <div>
												<input type="text" className="form-control input-lg"/>
                                                </div>
                                      			<label className="control-label">Last Name</label>
                                                <div>
                                                <input type="password" className="form-control input-lg"/>
                                                </div>
												<label className="control-label">Gender</label>
												<div>
                                                <input type="Gender" className="form-control input-lg"/>
                                                </div>
                                           <div className="form-group">
                                              <input type="submit" className="btn btn-success btn-lg" value="Submit" />
                                            </div>
                                              
                                    
                                        </form>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                                              
        );
    }  
}
export default Varma;