function Addition(){
    let n1 = parseInt(document.getElementById("Value1").value);
    let n2 = parseInt(document.getElementById("Value2").value);
    let Answer = n1+n2;
    document.getElementById("Answer").value=Answer; 
}
function Subtraction(){
    let n1 = parseInt(document.getElementById("Value1").value);
    let n2 = parseInt(document.getElementById("Value2").value);
    let Answer = n1-n2;
    document.getElementById("Answer").value=Answer; 
}
function Multiplication(){
    let n1 = parseInt(document.getElementById("Value1").value);
    let n2 = parseInt(document.getElementById("Value2").value);
    let Answer = n1*n2;
    document.getElementById("Answer").value=Answer; 
}
function Division(){
    let n1 = parseInt(document.getElementById("Value1").value);
    let n2 = parseInt(document.getElementById("Value2").value);
    let Answer = n1/n2;
    document.getElementById("Answer").value=Answer; 
}