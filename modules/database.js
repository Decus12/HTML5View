var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/oma', connectionStatus);
/**
*connection callback for fail and ok cases
*/
function connectionStatus(err, ok) {

    if(err){
    console.log(err.message);
    }else {
        console.log("we are connected");
    }
}


var Person = mongoose.model('Person',{
    name:String,
    address:String,
    age:{type:Number}
},'person');
//using exports object you expose the data to otehr modules
exports.Person = Person;