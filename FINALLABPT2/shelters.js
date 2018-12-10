$(function(){
    
$("#findShelterBtn").on("click", function(){        
    const apiKey = "3970e99d4ffe61a71d7d0bb714fae605";

    var queryParam = [];

    $("#locLocation").val() != "" ? queryParam.push("&location="+$("#locLocation").val()) : ""; 

    console.log(queryParam.values);

    var url = "http://api.petfinder.com/shelter.find?format=json&key="+apiKey+"&callback=?"+queryParam.join("")+"&format=json";
   
    $.ajax({
       url: url,           
       type: "GET", 
       dataType: "jsonp",     
       contentType: "application/json; charset=utf-8",
       crossDomain: true,                   
       success: function(data)
       {              
          console.log(data);            
          $("ul").remove();
          var ul = $("<ul>Local Shelters:</ul>");
          $("#shelterResults").after(ul);
          
          $.each(data.petfinder.shelters.shelter,function(i,shelter)
          {                  
                var li = $("<li></li>").html(shelter.name.$t + " - " + shelter.city.$t + ", " + shelter.state.$t + " (" + shelter.id.$t + ")");
                $("ul").append(li);
          });                      
        }                     

     });
});
})