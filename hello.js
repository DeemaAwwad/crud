function check(){


    var text=document.getElementById("valid").value;

var patt;

patt =/[A-Z][a-z]/;


var b = patt.test(text);

if(b){
console.log(true);
}else{
    console.log(false);
}
}