// ./scripts/utils/WebAPIUtils.js
var ServerActionCreators = require('../actions/ServerActionCreators.react.jsx');
var request = require('superagent');

module.exports = {

  login: function(id, password) {
    request.post('http://localhost:3002/v1/login')
      .send({ id: id, password: password, grant_type: 'password' })
      .set('Accept', 'application/json')
      .end(function(error, res){
        if (res) {
          if (res.error) {
            var errorMsgs = _getErrors(res);
            ServerActionCreators.receiveLogin(null, errorMsgs);
          } else {
            json = JSON.parse(res.text);
            ServerActionCreators.receiveLogin(json, null);
          }
        }
      });
  },
  // ...
};