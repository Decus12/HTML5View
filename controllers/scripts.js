console.log("here we go");
$(document).ready(function(){
    
    console.log("jquery onload triggered");
    $("nav").css("background-color","lightblue")
        .css("padding","20px").css("border-radius","8px");
    
    $(".about").html("<b>koivari</b>");
    $("[data-dummy]").html("<p>owpworpo</p>");
    
    
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
                        "<td>" +data[i].email + "</td>" +
                        "</tr>";
            $(html).appendTo("tbody");
        }
    });
    
});
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