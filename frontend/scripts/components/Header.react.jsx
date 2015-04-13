var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var ReactPropTypes = React.PropTypes;
var SessionActionCreators = require('../actions/SessionActionCreators.react.jsx');
var mui = require('material-ui');
var Toolbar = mui.Toolbar;
var ToolbarGroup = mui.ToolbarGroup;
var FlatButton = mui.FlatButton;

var Header = React.createClass({
  mixins: [Navigation],
  propTypes: {
    isLoggedIn: ReactPropTypes.bool,
    email: ReactPropTypes.string
  },
  logout: function(e) {
    e.preventDefault();
    SessionActionCreators.logout();
  },
  render: function() {

    var loginout = this.props.isLoggedIn ? (
      <FlatButton label="Logout" onClick={this.logout} primary={true} />
    ) : (
      <FlatButton label="Login" linkButton={true} href={this.makeHref('login')} primary={true} />
    );

    return (
      <Toolbar>
        <ToolbarGroup key={0} float="left">
        </ToolbarGroup>
        <ToolbarGroup key={1} float="right">
          {loginout}
        </ToolbarGroup>
      </Toolbar>
    );
  }
});

module.exports = Header;
