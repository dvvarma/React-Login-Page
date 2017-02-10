import React from 'react';
import {hashHistory} from 'react-router';
import './App.css';
import $ from 'jquery';

var App = React.createClass({
    getInitialState: function () {
        return {username: '', password: '', loading: false, errors: {}}
    },
    _handlelogin: function(e) {
        hashHistory.push('/login')
    },
    _handlesignup: function(e) {
        hashHistory.push('/signup')
    },
 	 componentWillMount() {
      console.log('Component WILL MOUNT!')
   },

   componentDidMount() {
      console.log('Component DID MOUNT!');
      this.serverRequest = $.get("https://api.github.com/users/octocat/gists", function (result) {
        var lastGist = result[0];
        console.log(result);
        this.setState({
            username: lastGist.owner.login,
            lastGistUrl: lastGist.html_url
        });
        }.bind(this));
   },

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   },

   shouldComponentUpdate(newProps, newState) {
      return true;
   },

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   },

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   },

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!');
      this.serverRequest.abort();
   },

    render() {
        return (
            
      <div className="container">
			
			<div className="btn-toolbar text-center well">
			<div className="hero">
    <button type="button" className="btn btn-primary btn-color btn-bg-color btn-lg col-xs-2 margin-left " onClick={this._handlelogin}>
      Login
    </button>
    <button type="button" className="btn btn-success btn-color btn-bg-color btn-lg col-xs-2 margin-left " onClick={this._handlesignup}>
      Signup
    </button>
    </div>
			</div>
</div>
                                              
        );
    }  
})
export default App;