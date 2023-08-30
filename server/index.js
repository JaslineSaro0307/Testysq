const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')
const mysql=require('mysql')
const add=express()
add.use(cors())
add.use(bodyparser.json())
add.use(express.json())
add.use(bodyparser.urlencoded({extended:true}))
add.use(express.static('public'))
let con=mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"Xavier@123",
    database:"ysquare"
})
con.connect((error)=>{
    if(error){
        console.log("Database is not connected")
    }
    else{
        console.log("Database is connected")
    }
})
add.post('/insert',(request,response)=>{
    let{employee_name,phone_number,email,job_role,location,salary,age,password,gender}=request.body
    let sql='insert into employee(employee_name,phone_number,email,job_role,location,salary,age,password,gender)values(?,?,?,?,?,?,?,?,?)'
    con.query(sql,[employee_name,phone_number,email,job_role,location,salary,age,password,gender],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })
})
add.get('/view',(request,response)=>{
    let sql='select * from employee'
    con.query(sql,(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
add.listen((2000),()=>{
    console.log("port is running in 2000")
})