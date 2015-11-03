var express = require("express");
var db = require('./queries');

var router = express.Router();

router.get('/',function(req,res){
           
        db.getAllPersons(req,res);   
});
//Handle POST requests for /persons context
router.post('/',function(req,res){
        db.saveNewPerson(req,res);
                                 });
router.put('/',function(req,res){});

router.delete('/',function(req,res){});

module.exports = router;