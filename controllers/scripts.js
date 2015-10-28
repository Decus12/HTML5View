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
        url:"http://localhost:28017/oma/person/",
        dataType:"jsonp",
        jsonp:"jsonp"
    }
    
    $.ajax(setting).done(function(data){
       
        console.log(data);
        
        for(i=0; i < data.rows.length; i++){
            
            var html = "<tr>" +
                        "<td>" +data.rows[i].name + "</td>" +
                        "<td>" +data.rows[i].address + "</td>" +
                        "<td>" +data.rows[i].age + "</td>" +
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