

sumar();
function sumar() {
    console.log(2 + 2);
}

sumar2();
const sumar2 = function() {
    console.log(3 + 3);
}




const sumar2;
sumar2(); // a estas alturas es undefined...
sumar2 = function() {
    console.log(3 + 3); // 

