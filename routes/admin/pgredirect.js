var checksum = require('../../model/checksum');

module.exports = function (app) {

	app.get('/pgredirect', function(req,res){
   console.log("in pgdirect");
console.log("--------testtxnjs----");
res.render('pgredirect.ejs');
  });
};
//vidisha