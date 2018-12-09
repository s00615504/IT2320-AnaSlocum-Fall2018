$(function(){
    $("#findPetBtn").on("click", function(){        
        const apiKey = "3970e99d4ffe61a71d7d0bb714fae605";
        var queryParam = [];
            $("#animal").val() != "" ? queryParam.push("&animal="+$("#animal").val()) : "";
            $("#breed").val() != "" ? queryParam.push("&breed="+$("#breed").val()) : ""; 
            $("#size").val() != "" ? queryParam.push("&size="+$("#size").val()) : "";
            $("#sex").val() != "" ? queryParam.push("&sex="+$("#sex").val()) : "";
            $("#location").val() != "" ? queryParam.push("&location="+$("#location").val()) : ""; 
            $("#age").val() != "" ? queryParam.push("&age="+$("#age").val()) : "";
    
        console.log(queryParam.values);
    
        var url = "http://api.petfinder.com/pet.find?format=json&key="+apiKey+"&callback=?"+queryParam.join("");
           
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
              var ul = $("<ul>Matches</ul>");
              $("#petResults").after(ul);
                
              $.each(data.petfinder.pets.pet,function(i,pet)
              {                  
                var li = $("<li></li>").html(pet.name.$t + " (" + pet.sex.$t + ") - (ID: " + pet.id.$t + ") " + "<br />" + pet.description.$t + "<br />" + "(Contact: " + pet.contact.email.$t + ")");
                $("ul").append(li);
              });                      
            }                     
        });  
    });
})