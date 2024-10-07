var i=1;
var n=3;
var j=1;
function  next(){
    if(i<n){
        i+=1;
    }
    else 
        i=1
    document.getElementById("slide").setAttribute("src","images/sl"+i+".png");
}
function  back(){
    if(i>1){
        i-=1;
    }
    else 
        i=n
    document.getElementById("slide").setAttribute("src","images/sl"+i+".png");
}
function autoplay(){
    setInterval(next,5000)
}
autoplay();