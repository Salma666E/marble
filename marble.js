var id=1;
var timeI;
timeI =setInterval(moveInterval,600);
function contin(){
    timeI =setInterval(moveInterval,600);
}
function stop(){
    clearInterval(timeI);
}
function moveInterval(){
    if(id>5)
            id=1;
        if((id+4)==5)
            document.getElementById("i"+(id+4)+"m").setAttribute("src","images/marble1.jpg");
        if(id != 1 )
            document.getElementById("i"+(id-1)+"m").setAttribute("src","images/marble1.jpg");
        document.getElementById("i"+id+"m").setAttribute("src","images/marble3.jpg");
        id++;
}