import React, {useState} from "react";
import Navbar from "../Components/NavbarComponent";
import Ministry from "./Ministry";
import {useNavigate} from 'react-router-dom';

const StateGovt=()=>{
    const navigate = useNavigate();
    const ministriesData=
        [
            {
              "serialNumber": 1,
              "ministryName": "Ministry of Home Affairs",
              "officerName": "Amit Patel",
              "designation": "Director General",
              "contactDetails": "amit.patel@gmail.com"
            },
            {
              "serialNumber": 2,
              "ministryName": "Ministry of Finance",
              "officerName": "Neha Gupta",
              "designation": "Secretary",
              "contactDetails": "neha.gupta@yahoo.com"
            },
            {
              "serialNumber": 3,
              "ministryName": "Ministry of External Affairs",
              "officerName": "Vikram Singh",
              "designation": "Foreign Secretary",
              "contactDetails": "vikram.singh@outlook.com"
            },
            {
              "serialNumber": 4,
              "ministryName": "Ministry of Defense",
              "officerName": "Ananya Kapoor",
              "designation": "Chief of Staff",
              "contactDetails": "ananya.kapoor@gmail.com"
            },
            {
              "serialNumber": 5,
              "ministryName": "Ministry of Health and Family Welfare",
              "officerName": "Rajesh Sharma",
              "designation": "Director General of Health Services",
              "contactDetails": "rajesh.sharma@yahoo.com"
            },
            {
              "serialNumber": 6,
              "ministryName": "Ministry of Education",
              "officerName": "Preeti Patel",
              "designation": "Secretary, Department of Education",
              "contactDetails": "preeti.patel@outlook.com"
            },
            {
              "serialNumber": 7,
              "ministryName": "Ministry of Railways",
              "officerName": "Arjun Khanna",
              "designation": "Chairman, Railway Board",
              "contactDetails": "arjun.khanna@gmail.com"
            },
            {
              "serialNumber": 8,
              "ministryName": "Ministry of Commerce and Industry",
              "officerName": "Sneha Kapoor",
              "designation": "Secretary, Department of Commerce",
              "contactDetails": "sneha.kapoor@yahoo.com"
            },
            {
              "serialNumber": 9,
              "ministryName": "Ministry of Information and Broadcasting",
              "officerName": "Kunal Sharma",
              "designation": "Director General, Doordarshan",
              "contactDetails": "kunal.sharma@gmail.com"
            },
            {
              "serialNumber": 10,
              "ministryName": "Ministry of Environment, Forest and Climate Change",
              "officerName": "Nisha Verma",
              "designation": "Secretary, Ministry of Environment",
              "contactDetails": "nisha.verma@outlook.com"
            }
    ]

    const [selectedMinistry, setSelectedMinistry] = useState(null);

    const handleMinistrySelect = (ministry) => {
      setSelectedMinistry(ministry);
      navigate(`/ministry/${ministry.serialNumber}`);
    };

    return (
        <div className="max-w-screen flex flex-col overflow-hidden">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <div className="bg-gray-100 p-4 text-lg">
        <table className="w-full">
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Ministry Name</th>
              <th>Officer Name</th>
              <th>Designation</th>
              <th>Contact Details</th>
            </tr>
          </thead>
      <tbody>
        {ministriesData.map((ministry) => (
          <tr key={ministry.serialNumber} className="text-gray-800 text-md">
            <td className="p-4">{ministry.serialNumber}</td>
            <td onClick={()=>handleMinistrySelect(ministry)} className="p-4 hover:text-teal-900 hover:text-lg cursor-pointer">{ministry.ministryName}</td>
            <td className="p-4">{ministry.officerName}</td>
            <td className="p-4">{ministry.designation}</td>
            <td className="p-4">{ministry.contactDetails}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
      </div>
    )
};
export default StateGovt;