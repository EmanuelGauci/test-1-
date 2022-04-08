function Inc(){
    let Counter = parseInt(document.getElementById("Counter").innerHTML);
    let Answer = Counter+1; 
    document.getElementById("Counter").innerHTML=Answer;
}
function Dec(){
    let Counter = parseInt(document.getElementById("Counter").innerHTML);
    let Answer = Counter-1; 
    document.getElementById("Counter").innerHTML=Answer;
}
function Reset(){
    let Counter = parseInt(document.getElementById("Counter").innerHTML);
    let Answer = 0; 
    document.getElementById("Counter").innerHTML=Answer;
}
