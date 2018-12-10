$(function(){
    
    $("#findBreedBtn").on("click", function(){        
        const apiKey = "3970e99d4ffe61a71d7d0bb714fae605";
        var queryParam = [];
            $("#breedAnimal").val() != "" ? queryParam.push("&animal="+$("#breedAnimal").val()) : "";
            $("#breedBreed").val() != "" ? queryParam.push("&breed="+$("#breedBreed").val()) : ""; 
            $("#breedLocation").val() != "" ? queryParam.push("&location="+$("#breedLocation").val()) : ""; 
    
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
              $("#breedResults").after(ul);
                
              $.each(data.petfinder.pets.pet,function(i,pet)
              {                  
                var li = $("<li></li>").html(pet.name.$t + " @ Shelter " + pet.shelterId.$t);
                $("ul").append(li);
              });                      
            }                     
        });  
    });
})