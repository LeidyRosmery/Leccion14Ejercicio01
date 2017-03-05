function enviar() {
  var nombres=  document.getElementById("name");
  var apellidos=  document.getElementById("apellido");
  var dni=  document.getElementById("dni");
  var direccion=  document.getElementById("direccion");
  var al= document.getElementsByClassName("all");

if (al[0].value.length == 0 && al[1].value.length == 0 && al[2].value.length == 0 && al[3].value.length == 0){
  alert("vacio");
}
else if(al[0].value.length>1  && al[1].value.length >1 && al[2].value.length>1 && al[3].value.length >1) {
  document.getElementById("mostrar").innerHTML = 
          "<ul>" +
          "<li>Nombre: " + nombres.value + "</li>" +
          "<li>Apellido: " + apellidos.value + "</li>" +
          "<li>DNI: " + dni.value + "</li>" +
          "<li>Dirección: " + direccion.value + "</li>" +
        "</ul>";
}
}
