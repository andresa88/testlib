const mylib = require('./mylib');
module.exports = {
  say: function() {
    console.log('say');
    console.log(mylib);
  }
};
