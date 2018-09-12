var button = document.getElementsByTagName("button")[1];
button.addEventListener("mouseenter", function(){
    console.log("get in!!!!!!!");
});
button.addEventListener("mouseleave", function(){
    console.log("get out!!!!!!!");
});
button.addEventListener("click", function(){
    console.log("click!!!!!!!");
});
var ent = document.getElementsByTagName("button")[0];
var todo = document.getElementById("userinput");
var clickAndEnter = function(){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(todo.value));
        document.getElementsByTagName("ul")[0].appendChild(li);
        todo.value = "";
}
ent.addEventListener("click", function(){
    if (todo.value.length > 0)
        clickAndEnter();
})
todo.addEventListener("keydown", function(event){
    if (todo.value.length > 0 && event.keyCode===13)
    clickAndEnter();
})
