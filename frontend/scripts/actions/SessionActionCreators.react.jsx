var MainAppDispatcher = require('../dispatcher/MainAppDispatcher.js');
var MainConstants = require('../constants/MainConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = MainConstants.ActionTypes;

module.exports = {

  signup: function(id, password, passwordConfirmation) {
    MainAppDispatcher.handleViewAction({
      type: ActionTypes.SIGNUP_REQUEST,
      id: id,
      password: password,
      passwordConfirmation: passwordConfirmation
    });
    WebAPIUtils.signup(id, password, passwordConfirmation);
  },

  login: function(id, password) {
    MainAppDispatcher.handleViewAction({
      type: ActionTypes.LOGIN_REQUEST,
      id: id,
      password: password
    });
    WebAPIUtils.login(id, password);
  },

  logout: function() {
    MainAppDispatcher.handleViewAction({
      type: ActionTypes.LOGOUT
    });
  }

};