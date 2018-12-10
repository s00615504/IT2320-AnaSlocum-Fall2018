$(function(){
  
$("#findbyShelterBtn").on("click", function(){        
        const apiKey = "3970e99d4ffe61a71d7d0bb714fae605";

        var queryParam = [];

        $("#shelterId").val() != "" ? queryParam.push("&id="+$("#shelterId").val()) : ""; 

        console.log(queryParam.values);

        var url = "http://api.petfinder.com/shelter.getPets?format=json&key="+apiKey+"&callback=?"+queryParam.join("");
       
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
              var ul = $("<ul>Results</ul>");
              $("#byShelterResults").after(ul);

              $.each(data.petfinder.pets.pet,function(i,pet)
              {                  
                    var li = $("<li></li>").html(pet.animal.$t + " - " + pet.breeds.breed.$t + "<br />" + pet.name.$t + " (" + pet.sex.$t + ")");
                    $("ul").append(li);
              });                      
            }                     
         });
    });
  })