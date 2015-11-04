console.log("here we go");

//This variable is shown to every function
//var g-person_data;

$(document).ready(function(){
    
    
    console.log("jquery onload triggered");
    $("nav").css("background-color","lightblue")
        .css("padding","20px").css("border-radius","8px");
    
    $(".about").html("<b>ggg</b>");
    $("[data-dummy]").html("<p>gg</p>");
    
    
    /*var data = document.getElementsByTagName("nav");
    for (i=0; <data.length i++){
        data[i].style.backgroundColor = "lightblue"
    }*/
    
    var setting = {
    
        method:"GET",
        url:"http://localhost:3000/persons/",
        dataType:"json",
        //jsonp:"jsonp"
    }
    
    $.ajax(setting).done(function(data){
       
        console.log(data);
        
        //get all keys(attribute names) from json object
        console.log(Object.keys(data[0]));
        
        //Create table headers dynamically
        if(data.length > 0 ){
            var headers = Object.keys(data[0]);
            
            var row = $("<tr></tr>");
            for (var i = 1; i < headers.length; i++){
                //create header and add it to row
                $("<th>" + headers[i] + "</th>").appendTo(row);
            }
            //add row to thead element
            $(row).appendTo("thead");
        }
        //Create table contents dynamically
        for(i=0; i < data.length; i++){
            
            var html = "<tr>" +
                        "<td>" +data[i].name + "</td>" +
                        "<td>" +data[i].address + "</td>" +
                        "<td>" +data[i].age + "</td>" +
                        "<td><input type='button' id=" + data[i]._id + " value='modify'/></td>" +
                        "</tr>";
            $(html).appendTo("tbody");
        }
            $("[type=button]").click(function(click_data){
    
                for( i = 0; i < data.length; i++){
                    
                    //check if id from button matches one of person id
                    if (click_data.currentTarget.id == data[i]._id)
                    {
                        buildModifyUI(data[i]);
                        break;
                    }
                    
                }
    });
    });
    
    
    // Get all elements from DOM where element has attribute 'type' with value 'button'.
    //Then add event handler for click event for each of them

});

function buildModifyUI(person_data){
    
    var html = "<input id='name' type='text' value ='" + person_data.name + "'/>";
    html += "<input id='address' type='text' value='" + person_data.address + "'/>";
    html += "<input id='age' type='text' value='" + person_data.age + "'/>";
    html += "<input type='button' value='update' id='update'/>";
    html += "<input type='button' value='delete' id='delete'/>";
    
    $("body").html(html);
    
    $("#delete").click(function(){
        
        $.ajax({
        
            method:'DELETE',
            url:'http://localhost:3000/persons/id=' + person_data._id
        }).done(function(data){location.reload(true)});
    
    });
    
        $("#update").click(function(){
        
            var temp = {
             id:person_data._id,
                name:$("#name").val(),
                address:$("#address").val(),
                age:$("#age").val()
            }
            
        $.ajax({
        
            method:'PUT',
            url:'http://localhost:3000/persons',
            datatype:'json',
            data:temp
        }).done(function(data){location.reload(true)});
            
    });
}
/*
window.onload = function(event){
    
    console.log(event);
    para1.innerHTML = "changend from JS";
    para1.style.backgroundColor = "blue"
}
    window.onload =domReady;
    
    function domReady(event){
        return 2;
    }
    */