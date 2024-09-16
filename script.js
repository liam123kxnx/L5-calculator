function addtodisplay(value){

document.getElementById("display").value +=value
}
function cleardisplay(){
    document.getElementById("display").value = ""
    
}
function calculate(){
    var x = document.getElementById("display").value 
    var y = eval(x)
    document.getElementById("display").value = y
}