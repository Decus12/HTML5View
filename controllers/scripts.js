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