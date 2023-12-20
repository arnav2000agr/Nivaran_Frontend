import * as React from 'react';
import * as React from 'react';
import Navbar from '../Components/NavbarComponent';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';


const data = [
  { label: 'Group A', value: 2,},
  { label: 'Group B', value: 3,},
  { label: 'Group C', value: 5,},
];



const Dashboard = () => {


  const getCustomColor = (index) => {
    const customColors = ['#ff5733','#fbbc05','#0f9d58', '#4285f4', '#34a853' , '#ea4335', ];
    return customColors[index % customColors.length];
  };

  const data2=localStorage.getItem("user")
  console.log(data2)

  return (
    <div className="m-0 p-0">
      <div> <Navbar /> </div>
      <div className="h-screen bg-gray-100 flex flex-col items-center pt-8">
        <h1 className="text-lg font-serif font-bold text-gray-800 mb-4">Tanya Rathore</h1>
        <div className='w-full flex flex-col md:flex-row'>
          <div className='w-full md:w-2/3 flex flex-col justify-center items-center text-lg text-gray-800'>
            
            <div className="mb-4 md:w-1/3">
              <p>Name: Tanya</p>
            </div>

            <div className="mb-4 md:w-1/3">
              <p>Mobile No: 9876543210</p>
            </div>

            <div className="mb-4 md:w-1/3">
              <p>Adhaar No: 123412341234</p>
            </div>

            <div className="mb-4 md:w-1/3">
              <p>No of Grievances: 5</p>
            </div>

            <div className="mb-4 md:w-1/3">
              <p>Solved Grievances: 2</p>
            </div>

            <div className="mb-4 md:w-1/3">
              <p>Pending Grievances: 3</p>
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

export default Dashboard;