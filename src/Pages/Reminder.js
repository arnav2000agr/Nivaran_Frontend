import React, { useState } from 'react'
import Navbar from '../Components/NavbarComponent'
import axios from 'axios'

const Reminder = () => {

  const bearerToken=localStorage.getItem("bearer");
  const [data,setData]=useState([]);


  const headers = {
    Authorization: `Bearer ${bearerToken}`,
    'Content-Type': 'application/json', 
  };
  const fetch=()=>{
    const url="http://localhost:8080/api/users/"+localStorage.getItem("User")
    console.log(url);
    axios.get(url,{headers})
    .then(function(response){
      console.log(response.data.user.grievances);
      setData(response.data.user.grievances)
      localStorage.setItem("grievances",data);
      
    })
    .catch(function(error){
      console.log(error)
    })

    

  }
    

  return (
    <div onLoad={fetch} className="max-w-screen flex flex-col  overflow-hidden">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <div className="h-screen bg-gray-100">
        <table className="w-full mt-10">
          <thead>
            <tr>
              <th>Grievance Id</th>
              <th>Ministry Name</th>
              <th>Send Reminder</th>
            </tr>
          </thead>
      <tbody>
        {data.map((name) => (
          <tr key={name._id}>
            <td className="p-10">{name._id}</td>
            <td className="px-20">{name.ministry}</td>
            <td><div className="but">
            <div className="navbar-login px-10">
              <button>
               
                Remind
              </button>
            </div>
          </div></td>
            
          </tr>
        ))}
      </tbody>
    </table>

        </div>
      </div>
  )
}

export default Reminder
