import React , { useEffect,useState} from "react";
import './view.css'
import { CSVLink } from "react-csv";
export function View(){
    const[effect,setEffect]=useState([])
    useEffect(()=>{
        fetch("http://localhost:2000/view")
        .then(view=>view.json())
        .then(file=>setEffect(file))
    },[])
    const csvheader=[{label:"employee_id",key:"employee_id"},
    {label:"employee_name",key:"employee_name"},
    {label:"phone_number",key:"phone_number"},
    {label:"email",key:"email"},
    {label:"job_role",key:"role"},
    {label:"location",key:"location"},
    {label:"salary",key:"salary"},
    {label:"age",key:"age"},
    {label:"password",key:"password"},
    {label:"gender",key:"gender"},
]
    return(
    <>
    <div className="bgview">
    <h1 className='display-4 text-white text-center pt-4'>Employee Details</h1>
        <table class="table table-striped mt-5">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Location</th>
                <th scope="col">Salary</th>
                <th scope="col">Age</th>
                <th scope="col">Password</th>
                <th scope="col">Gender</th>
            </tr>
            </thead>
           

                
               
                <tbody>                
                    {effect.map((value,index)=>(
                    <tr>
                        <td>{value.employee_id}</td>
                        <td>{value.employee_name}</td>
                        <td>{value.phone_number}</td>
                        <td>{value.email}</td>
                        <td>{value.job_role}</td>
                        <td>{value.location}</td>
                        <td>{value.salary}</td>
                        <td>{value.age}</td>
                        <td>{value.password}</td>
                        <td>{value.gender}</td>
                    </tr>
            
    ) )}
        </tbody>
    </table>
    <CSVLink 
     data={effect} 
    headers={csvheader}
    filename={"Employee Details.csv"} 
    className="btn btn-primary mt-2 ">
        Download CSV
    </CSVLink>
</div>
</>
    
);
}
