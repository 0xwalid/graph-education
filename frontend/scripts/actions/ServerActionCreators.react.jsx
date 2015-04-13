// ./scripts/actions/ServerActionCreators.react.jsx
var MainAppDispatcher = require('../dispatcher/MainAppDispatcher.js');
var MainConstants = require('../constants/MainConstants.js');

var ActionTypes = MainConstants.ActionTypes;

module.exports = {

  receiveLogin: function(json, errors) {
    MainAppDispatcher.handleServerAction({
      type: ActionTypes.LOGIN_RESPONSE,
      json: json,
      errors: errors
    });
  },

 // ...
};