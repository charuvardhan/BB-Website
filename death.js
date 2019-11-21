$(document).ready(function() {
    console.log("sdsfd")
     $("#death").click(function(){
         $("#resul").empty();
         var n=$("input").val();
         console.log(n);
         $.get(`https://www.breakingbadapi.com/api/death-count?name=${n}` , function(data,status){
             console.log(data);
              
                 $("#resul").append(
               `<div class="card" style="width:280px ; height:100px ; border:1px solid black ;
                background-color:black ; opacity:0.88 ; color: white"> ${data[0].name}<br>
                - responsible for "${data[0].deathCount}" deaths!<br></div>`

   
                 )
             

         })
     });
 });