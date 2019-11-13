function calcular()
{
    var precio=  parseFloat( document.getElementById("precio_no_tax").value);   
    var tax = parseFloat( document.getElementById("tax").value);            
    var total = document.getElementById("totaliva").value = precio*tax*0.01 + precio;              
}  

//2 
 // generamos un evento click y keyup para cada elemento input con la clase .input
 var input=document.querySelectorAll(".input");
 input.forEach(function(e) {
 e.addEventListener("click",multiplica);
 e.addEventListener("keyup",multiplica);
 });

 // funcion que genera la multiplicacion
 function multiplica() {

 // nos posicionamos en el tr del producto
 var tr=this.closest("tr");

 var total=1;

 // recorremos todos los elementos del tr que tienen la clase .input
 var inputs=tr.querySelectorAll(".input");
 inputs.forEach(function(e) {
 total*=e.value;
 });

 // mostramos el total con dos decimales
 tr.querySelector(".total").value=total.toFixed(2);

 // indicamos que calcule el total
 calcularTotal(this.closest("table"));
 }

 // funcion que calcula la suma total de los productos
 function calcularTotal(e) {
 var total=0;

 // obtenemos todos los totales y los sumamos
 var totales=e.querySelectorAll(".total");
 totales.forEach(function(e) {
 total+=parseFloat(e.value);
 });

 // mostramos la suma total con dos decimales
 e.getElementsByClassName("totales")[0].value=total.toFixed(2);
 }

 //3 
 function Suma() 
 {
 var valorA = parseInt(prompt('Dame el valor A:'));
 var valorB = parseInt(prompt('Dame valor B:'));

var resultado=valorA + valorB; 
document.getElementById('resultado').value = (valorA+"  +  " + valorB + " = " + resultado);

}

//4
   // Convert numbers to words
    // copyright 25th July 2006, by Stephen Chapman http://javascript.about.com
    // permission to use this Javascript on your web page is granted
    // provided that all of the code (including this copyright notice) is
    // used exactly as shown (you can change the numbering system if you wish)

    // American Numbering System
    var th = ['','cien','millon', 'billion','trillon'];
    // uncomment this line for English Number System
    // var th = ['','thousand','million', 'milliard','billion'];

    var dg = ['cero','uno','dos','tres','cuatro', 'cinco','seis','siete','ocho','nueve']; 
    var tn = ['diez','once','doce','trece', 'catorce','quince','sixteen', 'diesiete','diciocho','dicenueve']; 
    var tw = ['veinte','treinta','cuarenta','cincuenta', 'sesenta','setenta','ochenta','noventa']; 
    function toWords(s){s = s.toString(); s = s.replace(/[\, ]/g,''); if (s != parseFloat(s)) return 'not a number'; var x = s.indexOf('.'); if (x == -1) x = s.length; if (x > 15) return 'too big'; var n = s.split(''); var str = ''; var sk = 0; for (var i=0; i < x; i++) {if ((x-i)%3==2) {if (n[i] == '1') {str += tn[Number(n[i+1])] + ' '; i++; sk=1;} else if (n[i]!=0) {str += tw[n[i]-2] + ' ';sk=1;}} else if (n[i]!=0) {str += dg[n[i]] +' '; if ((x-i)%3==0) str += 'cien ';sk=1;} if ((x-i)%3==1) {if (sk) str += th[(x-i-1)/3] + ' ';sk=0;}} if (x != s.length) {var y = s.length; str += 'point '; for (var i=x+1; i<y; i++) str += dg[n[i]] +' ';} return str.replace(/\s+/g,' ');}
//5
function mostrarNumero(elem){
    var texto = toWords(elem.value);
    document.getElementById('mostrarAca').innerHTML = texto;
}

//4
function mostrar(){
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo );
      reader.onloadend = function () {
        document.getElementById("img").src = reader.result;
      }
    }
  }

  //4
  function PasarValor()
{
document.getElementById("nombre2").value = document.getElementById("precio_no_tax").value;
}


   
