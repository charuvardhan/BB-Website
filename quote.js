 

 $(document).ready(function() {
     console.log("sdsfd")
      $("#quote").click(function(){
          $("#res").empty();
          $.get(`https://www.breakingbadapi.com/api/quotes` , function(data,status){
              console.log(data);
              for(var i=0;i<12;i++)
              {
                  $("#res").append(
                `<div class="card" style="width:250px ; height:120px ; border:1px solid black ; background-color:black ; opacity:0.88 ; color: white"> ${data[i].quote}<br>
                 - ${data[i].author}<br></div>`

    
                  )
              }

          })
      });
  });