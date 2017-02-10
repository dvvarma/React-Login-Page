import React from 'react';
import { Link } from 'react-router';
import {hashHistory} from 'react-router';
import './App.css';
import $ from 'jquery';
import base64 from 'base-64';


var Login = React.createClass({
    getInitialState: function () {
        return {username: '', password: '', loading: false, errors: {}}
    },
    handleUsernameChange: function(e) {
        this.setState({username: e.target.value});
		delete this.state.errors.username;
		if(this.state.username.length==1)
			this.state.errors.username="Username is required";
    },
    handlePasswordChange: function(e) {
        this.setState({password: e.target.value});
		delete this.state.errors.password;
		console.log(this.state.password.length);
		if(this.state.password.length==1){
			console.log("inside if loop")
			this.state.errors.password="password is required";
		}
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
        if (username!== '' && password !== '') {
            console.log(username);
            console.log(password);
            console.log('login success!');
            
            this._login();
            hashHistory.push('/profile');
        }
        // TODO: send request to the server
        this.setState({username: '', password: ''});
    },
    _login: function () {
		var authdata = base64.encode(this.state.username + ':' + this.state.password);
        return $.ajax({
            url: 'https://api.github.com',
            type: 'POST',
			 headers: {
    "Authorization": "Basic " + authdata
  },
			dataType: 'json',
			success: function(data) {
				console.log(data);
			},
			/*data: {
               
            },*/
            beforeSend: function () {
                this.setState({loading: true});
            }.bind(this)
        })
		
    },
    render() {
        return (
            <div className="login">
                <div className="container" onSubmit={this.handleSubmit}>
                    <div className="row">   
                        <div className="col-lg-offset-3 col-lg-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Login</h3>
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
                                            <div className="form-group">
                                                <input type="submit" className="btn btn-primary btn-lg" value="Login" />
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
export default Login;