function validateForm() {
    

    var empName = document.myForm.name.value;

    var empId = document.myForm.empid.value;

    var joiningDate = document.myForm.doj.value;

    var hoursWorked = document.myForm.hr.value;

    var designation = document.myForm.desig.value;




    if(empName == ''){

        alert("Emp Name is Required**")

        return false;

    }

    else if(empId ==''){

        alert("Emp Id is Required**")

        return false;

    }

    else if(joiningDate ==''){

        alert("Joining Date is Required**")

        return false;

    }

    else if(hoursWorked ==''){

        alert("Work Hours is Required**")

        return false;

    }

    else if(designation ==''){

        alert("designation is Required**")

        return false;

    }
    else{
    
        return call();
        
    }

}

function employee(name,empId,doj,workhr,desig){
    this.name=name;
    this.empId=empId;
    this.doj=doj;
    this.workhr=workhr;
    this.desig=desig;

}
function call(){
    var named=document.getElementById("name").value;
    var empidd=parseInt(document.getElementById("empid").value);
    var dojd=document.getElementById("doj").value;
    var hrd=parseInt(document.getElementById("hr").value);
    var des=document.getElementById("desig").value;
    var emp1=new employee(named,empidd,dojd,hrd,des);
    if(emp1.desig=='manager'){
        var salary = emp1.workhr*90;
  
    }
    else if(emp1.desig=='Consultant'){
        var salary=emp1.workhr*70;
    
    }
    else if(emp1.desig=='Trainee'){
        var salary =emp1.workhr*45;
    
    }
    
    var output=emp1.name+" who is a "+emp1.desig+" will get $ "+salary;
    localStorage.setItem('output',output);
    

}



// this.name=document.getElementById("name").value;
// this.empId=document.getElementById("empid").value;
// this.doj=document.getElementById("doj").value;
// this.workhr=document.getElementById("hr").value;
// this.desig=document.getElementById("desig").value;


console.log(output);