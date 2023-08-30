import React from 'react';
import axios from "axios";
import './registration.css';
 export function Registration(){
    function insertdetails(event){
        event.preventDefault();
        var employee_name=document.getElementById("name").value
        var phone_number=document.getElementById("phone").value
        var email=document.getElementById("email").value
        var job_role=document.getElementById("job").value
        var location=document.getElementById("location").value
        var salary=document.getElementById("salary").value
        var age=document.getElementById("age").value
        var password=document.getElementById("password").value
        var gender=document.getElementById("gender").value
        var key={
            employee_name:employee_name,
            phone_number:phone_number,
            email:email,
            job_role:job_role,
            location:location,
            salary:salary,
            age:age,
            password:password,
            gender:gender
        }
        if(employee_name===''){
            alert("Name is empty")
        }
        else if(phone_number===''){
            alert("Phone number is empty")
        }
        else if(email===''){
            alert("email is empty")
        }
        else if(job_role===''){
            alert("Job role is empty")
        }
        else if(location===''){
            alert("Location is empty")
        }
        else if(salary===''){
            alert("Salary is empty")
        }
        else if(age===''){
            alert("Age is empty")
        }
        else if(password===''){
            alert("Password is empty")
        }
        else if(gender===''){
            alert("Gender is empty")
        }
        else{
            axios.post("http://localhost:2000/insert",key)
            .then(function(res){
                if(res.data.status==="error"){
                    alert("data are not inserted")
                }
                else if(res.data.status==="success"){
                    alert("data are inserted")
                    window.location.href="/view"
                }
            })
        }
    }
    return(
        <>
        <div className='bgwall'>
            <h1 className='text-white text-center display-4'>Registration</h1>
        <div  className='container bg-form mx-auto text-center rounded ' >
        <form onSubmit={insertdetails} className='mx-auto '>
            
                <input type='text' placeholder='Name' className='mt-4 border rounded' id='name'/><br/>
                <input type='text' placeholder='Phone Number' className='mt-4 border rounded' id='phone'/><br/>
                <input type='text' placeholder='Email' className='mt-4 border rounded'id='email'/><br/>
                <input type='text' placeholder='Job Role' className='mt-4 border rounded' id='job'/><br/>
                <input type='text' placeholder='Location' className='mt-4 border rounded' id='location'/><br/>
                <input type='text' placeholder='Salary' className='mt-4 border rounded' id='salary'/><br/>
                <input type='text' placeholder='Age' className='mt-4 border rounded' id='age'/><br/>
                <input type='password' placeholder='Password' className='mt-4 border rounded' id='password'/><br/>
                <input type='text' placeholder='Gender' className='mt-4 border rounded' id='gender'/><br/>
                <button type="submit" class="btn btn-secondary mt-2" >Submit</button>
            
       </form>
       </div>
       </div>
        </>
    );
 }