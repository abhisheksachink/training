let employee ={
    empId : 101,
    empName :'Ramesh',
    empDesignation : 'Manager'
}
console.log(employee.empDesignation);
console.log(employee);
employee.greet="ram";
console.log(employee);

function getValues(){
    return null
}
let a,b,c
[a,b=12,c=10]=getValues() || [];
console.log("b:"+b);
console.log("c:"+c);
console.log(getValues());


const sales = [ 

    { item: 'PS4 Pro', stock: 3, original: 399.99 }, 
    
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 }, 
    
    { item: 'Nintendo Switch', stock: 4, original: 299.99 }, 
    
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 }, 
    
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 } 
    
    ]; 

// let i,j,k,l,m;
let [i,j,k,l,m]=sales;

let show ={
    item : i.item,
    stock: i.stock,
    Original :i.original,
    Sale : i.original,
    Total : i.original*i.stock
}
let show1 ={
    item : j.item,
    stock: j.stock,
    Original :j.original,
    Discount :j.discount,
    Sale : j.original-(j.discount*j.original),
    Total : (j.original-(j.discount*j.original))*j.stock
}
console.log(show)
console.log(show1)


let mymap =sales.map((n)=>{
    if(n.discount){
        n.sale=n.original-(n.original*n.discount)
        n.Total=n.sale*n.stock
    }
    else{
        n.sale=n.original
        n.Total=n.sale*n.stock
    }
    return n
    });
console.log(mymap)



var employee1 =[
    {emp_name:"ram",emp_age:30,emp_sal:1200},
    {emp_name:"shyam",emp_age:61,emp_sal:1800},
    {emp_name:"gita",emp_age:45,emp_sal:1900},
    {emp_name:"shyam",emp_age:68,emp_sal:2100}
]
var emp_det=employee1.map((emp)=>{
    if(emp.emp_age>=60){
        emp.emp_pf=(emp.emp_sal*0.12)
        emp.emp_sal=emp.emp_sal-emp.emp_pf;

    }
    return emp;

})



var z="abhi";
var y="abhi";
if(!z.match(y)){
    console.log("hi");

}
else{
    console.log("bye");
}



