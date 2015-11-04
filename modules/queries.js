var db = require('./database');
/**
*This function gets all documents from person collection
*/
exports.getAllPersons = function(req,res){

    db.Person.find(function(err,data){
    
        if(err){
        
            console.log(err.message);
            res.send("Error in database");
        }
        else{
            res.send(data);
        }
    });
}

//This function saves new person information to person collection
exports.saveNewPerson = function(req,res){

    var personTemp = new db.Person(req.body);
    //save it to database
    personTemp.save(function(err,ok){
    res.send("Database action done");
    });
}

//This function deltes one person from collection

exports.deletePerson = function(req,res){
   
    //what happens here is req.params.id returns string "id=2472847294424dsd"
    //split function splits the string from "=" and creates an array where [0] contains "id"
    //and [1] contains "2472847294424dsd"
    var id = req.params.id.split("=")[1];
    console.log(id);
    db.Person.remove({_id:id},function(err){
        
        if(err){
            res.send(err.message);
        }
        else{
            res.send("Delete ok");
        }
});
    
}

//This method updates one person's info
exports.updatePerson = function(req,res){

        var updateData = {
        name:req.body.name,
            address:req.body.address,
            age:req.body.age
        };
   
    db.Person.update({_id:req.body.id},updateData,function(err){
        

            res.send("Update ok");
    
});

}
