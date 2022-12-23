// alert("hi hi hi ...");
// if(typeof (document.getElementById("num1").value ||typeof document.getElementById("num2").value) !=Number){
//     alert("Please Enter Number")
// }
// else{
var count=1;
var randomNum = Math.floor(Math.random() * 10) + 1;
function lucky(){

    //document.getElementById("try1").innerHTML=randomNum;
    var x=parseInt(document.getElementById("num").value);

    if(randomNum==x){
        document.getElementById("try").innerHTML="Great!! You took "+count+" attempts to guess it right.";

    }
    else{

        count++;
        document.getElementById("try").innerHTML="Not Really! Give it another try ";

    

    }
        
}
function add(){
    var x=parseInt(document.getElementById("num1").value);
    var y=parseInt(document.getElementById("num2").value);
    var sum =x+y;
    var flag =confirm("Do you wants to confirm");
    
    let name=prompt("Enter your Name","Enter");


    if(flag==true){
        document.getElementById("result").innerHTML=sum;
    }

    document.getElementById("name").innerHTML= "Hello "+name;
    
}
function sub(){
    var x=parseInt(document.getElementById("num1").value);
    var y=parseInt(document.getElementById("num2").value);
    var diff;
    if(x<y){
        diff=y-x;
    }
    else
    diff=x-y;
    
    document.getElementById("result").innerHTML=diff;

}
function mult(){
    var x=parseInt(document.getElementById("num1").value);
    var y=parseInt(document.getElementById("num2").value);
    var mult=x*y;
    document.getElementById("result").innerHTML=mult;


}
function division(){
    var x=parseInt(document.getElementById("num1").value);
    var y=parseInt(document.getElementById("num2").value);
    div=x/y;
    document.getElementById("result").innerHTML=div;
}


    let listitem=localStorage.getItem('list');

    document.getElementById("purch").innerHTML=listitem;



// }