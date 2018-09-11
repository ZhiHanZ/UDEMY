
var As = ["miao", "ha", 1, 2, 3];

function sayHello() {
    console.log("Hello");
}
sayHello();
var sayBye = function(){
    console.log("Bye@!");
}
sayBye();
function multiply(a,b){
    console.log(a, b);
    return a*b;
}

var bugs = {
    name : "1",
    isddd : false,
    vowel: function(){
        console.log("mmmaocacwc");
    },
    mie: ["122", "3331", 211.12, false]
};
As.forEach(function(A, i){
    console.log(A, i);
});