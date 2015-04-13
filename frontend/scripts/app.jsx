// app.jsx
var React = require('react');
var injectTapEventPlugin = require("react-tap-event-plugin"); // for material-ui
var router = require('./stores/RouteStore.react.jsx').getRouter();
window.React = React;

injectTapEventPlugin(); // for material-ui

router.run(function (Handler, state) {
  React.render(<Handler/>, document.getElementById('content'));
});