function validateForm() {
    


    var usernam=document.ngo_form.username.value;
    var dob1=document.ngo_form.dob.value;
    var hobbies =document.ngo_form.hobby.value;
    var edu =document.ngo_form.education.value;
    var address=document.ngo_form.address.value;
    var password =document.ngo_form.pass.value;
    var repassword =document.ngo_form.repass.value;
    var email=document.ngo_form.email.value;
    var passw = /^(?=.*\d)(?=.*[!@#$%^&])(?=.*[A-Z]).{8,20}$/;




    
    if(usernam.length <6){
        var a="Username must be 6 Character";
        document.getElementById("validname").innerHTML=a;
        // alert("Username must be 6 Character")
        
    
        return false;
        
    }
    else if(password !=repassword){
        var rpas="Password must be same";
        document.getElementById("validrepass").innerHTML=rpas;
        return false;
    }
    else if(!password.match(passw)){
            var pas="Password must contains 8 Character and one Capital Letter and one special character.";
            document.getElementById("validpass").innerHTML=pas;
            return false;

        }
    else{
          return  true;
        }

    // else{
    //     
    // }
    




}
function showuser(){
    var userId = (Math.pow(10,8));
    var userid=Math.trunc(parseInt(userId)*Math.random());
    document.getElementById("userid1").value =userid;

}
window.onload = showuser;