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
            <p className="t2">They have been displayed for your use.</p>
            <p className="t2">Do as you wish with this information.</p>
            {Data.map((item)=>{
                return(
                    
                <ul className="box">
                    <li>Gender: {item.gender}</li>
                    <li>First Name: {item.name.first}</li>
                    <li>Phone Number: {item.cell}</li>
                    <li>Email: {item.email}</li>
                    <li>Username: {item.login.username}</li>
                    <li>Password: {item.login.password}</li>
                    <li>Age: {item.dob.age}</li>
                    <li>Picture of Victim: <img className="img" src={item.picture.large}></img></li>

                </ul>
                )
            })}
            <p className="t2">Refresh the page for more Vitcims</p>
        </div>
    )
}
export default Test