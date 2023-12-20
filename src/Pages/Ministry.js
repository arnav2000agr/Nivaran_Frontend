import * as React from 'react';
import Navbar from '../Components/NavbarComponent';
import { useParams } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import { pieArcLabelClasses } from '@mui/x-charts/PieChart';
import axios from 'axios';

const ministriesData = [
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
];


const data = [
  { label: 'Group A', value: 2,},
  { label: 'Group B', value: 3,},
  { label: 'Group C', value: 5,},
];




 


const Ministry = () => {

  const { id } = useParams();

  const id1= localStorage.getItem("bearer");
  // function req(){
  //   axios.post("http://localhost:8080/api/grievance/feedback/65825c72074d9525bd40e52a",{
  //     feedback:5,
  //   })
  //   .then(function(response){
  //     console.log(response)
  //   })
  //   .catch(function(error){
  //     console.log(error)
  //   })
  // }
  const isValidIndex = id && id >= 1 && id <= ministriesData.length;
  const ministry = isValidIndex ? ministriesData[id - 1] : null;
  const getCustomColor = (index) => {
    const customColors = ['#ff5733', '#4285f4', '#34a853', '#fbbc05', '#ea4335', '#0f9d58'];
    return customColors[index % customColors.length];
  };
  

  if (!ministry) {
    return <div> No ministry found for the given ID </div>;
  }


  return (
    <div className="m-0 p-0">
      <div> <Navbar /> </div>
      <div className="h-screen bg-gray-100 flex flex-col items-center pt-8">
        <h1 className="text-lg font-serif font-bold text-gray-800 mb-4">{ministry.ministryName}</h1>
        <div className='w-full flex flex-col md:flex-row'>
          <div className='w-full md:w-2/3 flex flex-col justify-center items-center text-lg text-gray-800'>
            <div className="mb-4 flex flex-row md:w-1/3">
              <p>U.Id:</p> <p>{localStorage.getItem("User")}</p>
            </div>
            <div className="mb-4 md:w-1/3">
              <p>Officer Name: Mr. Vijay Kumar</p>
            </div>
            <div className="mb-4 md:w-1/3">
              <p>Contact official: 9191987456</p>
            </div>
            <div className="mb-4 md:w-1/3">
              <p>No of Grievances: 5</p>
            </div>
            <div className="mb-4 md:w-1/3">
              <p>Solved Grievances: 2 </p>
            </div>
            <div className="mb-4 md:w-1/3">
              <p>Response Time(AVG): 30 days</p>
            </div>
            
            <div className="mb-4 md:w-1/3">
              <p>Feedback Rating: ⭐⭐⭐</p>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex justify-center items-center">
            <ResponsiveContainer display="flex" width="100%" height={400}>
              <PieChart>
                <Pie dataKey="value" isAnimationActive={true} data={data} cx="50%" cy="50%" outerRadius={110} fill="#f25b68" label>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getCustomColor(index)} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Ministry;