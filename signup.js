import React from 'react';
import { Link } from 'react-router';
import {hashHistory} from 'react-router';
import './App.css';


var Signup = React.createClass({
    getInitialState: function () {
        return {username: 'this.state.username', password: 'this.state.password',reenterpassword:'', phone:'', loading: false, errors: {}}
    },
    handleUsernameChange: function(e) {
        this.setState({username: e.target.value});
    },
    handlePasswordChange: function(e) {
        this.setState({password: e.target.value});
    },
	handleReenterPasswordChange: function(e) {
        this.setState({reenterpassword: e.target.value});
    },
    handlePhoneNumberChange: function(e) {
        this.setState({phone: e.target.value});
    },
	
    /*handleChange: function(e) {
        var state = {};
        state[e.target.name] =  e.target.value;
        this.setState(state);
    }, */
    /*_onChange: function (e) {
        var state = {};
        state[e.target.name] =  e.target.value;
        this.setState(state);
    },*/
    /*_onError: function (data) {
        var message = "Failed to create the user";
        var res = data.responseJSON;
        if(res.message) {
            message = data.responseJSON.message;
        }
        if(res.errors) {
            this.setState({
                errors: res.errors
            });
        }
    },*/
    _validate: function () {
        var errors = {}
        if(this.state.username === "") {
            errors.username = "Username is required";
        }
        if(this.state.password === "") {
          errors.password = "Password is required";
        }
		if(this.state.reenterpassword === "") {
          errors.reenterpassword = "Password is required";
        }
		if(this.state.phone === "") {
          errors.phone = "Phone Number is required";
        }
        return errors;
    },
    _formGroupClass: function (field) {
        var className = "form-group ";
        if(field) {
          className += " has-error"
        }
        return className;
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var errors = this._validate();
        if(Object.keys(errors).length !== 0) {
            this.setState({
                errors: errors
            });
            return;
        }
        var username = this.state.username;
        var password = this.state.password;
		var reenterpassword = this.state.reenterpassword;
		var phone = this.state.phone;
        if (username!== ''){
			console.log(username);
						   }
		if (password!== ''){
            console.log(password);
							}
		if (reenterpassword!== ''){
			console.log(reenterpassword);
								}
		if (phone!== ''){
			console.log(phone);
		
            console.log('signup success!');
            
            this._login();
            hashHistory.push('/profile');
        }
        // TODO: send request to the server
        this.setState({username: '', password: '',reenterpassword:'', phone:''});
    },
    _login: function () {
        /*return $.ajax({
            url: '/api/login',
            type: 'POST',
            data: {
                username: this.state.username,
                password: this.state.password
            },
            beforeSend: function () {
                this.setState({loading: true});
            }.bind(this)
        })*/
    },
    render() {
        return (
            <div className="login">
                <div className="container" onSubmit={this.handleSubmit}>
                    <div className="row">   
                        <div className="col-lg-offset-3 col-lg-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">SignupForm</h3>
                                </div>
                                <div className="panel-body">
                                    <div>
                                        <form className="form-vertical">
                                            <div className={this._formGroupClass(this.state.errors.username)}>
                                                <label className="control-label">Username</label>
                                                <div>
                                                    <input type="text" className="form-control input-lg" value={this.state.username} onChange={this.handleUsernameChange}/>
                                                    <span className="help-block">{this.state.errors.username}</span>
                                                </div>
                                            </div>
                                            <div className={this._formGroupClass(this.state.errors.password)}>
                                                <label className="control-label">Password</label>
                                                <div>
                                                    <input type="password" className="form-control input-lg" value={this.state.password} onChange={this.handlePasswordChange}/>
                                                    <span className="help-block">{this.state.errors.password}</span>
                                                </div>
                                            </div>
													 <div className={this._formGroupClass(this.state.errors.reenterpassword)}>
                                                <label className="control-label">Re-enter Password</label>
                                                <div>
                                                    <input type="password" className="form-control input-lg" value={this.state.reenterpassword} onChange={this.handleReenterPasswordChange}/>
                                                    <span className="help-block">{this.state.errors.reenterpassword}</span>
													</div>
													</div>
													
													 <div className={this._formGroupClass(this.state.errors.phone)}>
                                                <label className="control-label">Phone Number</label>
                                                <div>
                                                    <input type="text" className="form-control input-lg" value={this.state.phone} onChange={this.handlePhoneNumberChange}/>
                                                    <span className="help-block">{this.state.errors.phone}</span>
													</div>
													</div>
                                            <div className="form-group">
                                                <input type="submit" className="btn btn-success btn-lg" value="Signup" />
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
})
export default Signup;