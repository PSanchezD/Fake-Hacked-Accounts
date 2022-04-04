import axios from "axios"
import {  useEffect, useState } from "react"




function Test(){

    const [Data, setData]=useState([])

    
        function fetch(){
            axios.get('https://randomuser.me/api/').then((res)=>{
                 return res.data.results
             }).then((data)=>{
                setData(data)
            }).catch((err)=>{
                console.log(err)
            })
        }

       useEffect(()=>{
           fetch()
       },[])
  

     


    return (
        <div>
            <h1 className="t1">The following people have been hacked</h1>
            <h1 className="t1">Refesh the page for more Vitcims</h1>
            {Data.map((item)=>{
                return(
                    
                <ul className="box">
                    <li>gender: {item.gender}</li>
                    <li>First Name: {item.name.first}</li>
                    <li>phone Number: {item.cell}</li>
                    <li>Email: {item.email}</li>
                    <li>Username: {item.login.username}</li>
                    <li>Password: {item.login.password}</li>
                    <li>age: {item.dob.age}</li>
                    <li>Picture of Vitcim: <img className="img" src={item.picture.large}></img></li>

                </ul>
                )
            })}
        </div>
    )
}
export default Test