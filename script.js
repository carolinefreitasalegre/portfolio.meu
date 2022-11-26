
function myFunction() {
     var myTopnav = document.getElementById("myTopnav");
     if (myTopnav.className === "nav-wrap") {
         myTopnav.className += " responsive";
     } else {
        myTopnav.className = "nav-wrap";
     }
 }
   

function enviar() {
   var data = new Date();
   var hora = data.getHours();
   if (hora < 12 && hora > 6) {
     alert("Obrigada pelo seu contato. Excelente dia!!")
  } else {
     alert("Obrigada pelo seu contato. Excelente tarde!!")
  }
}