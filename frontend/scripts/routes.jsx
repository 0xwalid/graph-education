// routes.jsx
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var MainApp = require('./components/MainApp.react.jsx');
var LoginPage = require('./components/session/LoginPage.react.jsx');

module.exports = (
  <Route name="app" path="/" handler={MainApp}>
    <Route name="login" path="/login" handler={LoginPage}/>
  </Route>
);