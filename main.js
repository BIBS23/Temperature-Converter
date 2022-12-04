var t;
const mybtn = document.getElementsByClassName("btn");



function converter() {
    t = document.getElementById("celcius").value;
    var x = parseInt(t)  * 9/5 + 32 
    var y = parseInt(t) + 273.15 

    document.getElementById("temp1").innerHTML = x + ("F")
    document.getElementById("temp2").innerHTML = y + ("K") 


//     u = document.getElementById("kelvin").value;

//    var k =  parseInt(u) - (273.15);
//    var f =  parseInt(u) - 273.15 * 9/5 + 32

//    document.getElementById("temp1").innerHTML = k;
//    document.getElementById("temp2").innerHTML = f;


}




