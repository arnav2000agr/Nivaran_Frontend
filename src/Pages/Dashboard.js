import react from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Navbar from '../Components/NavbarComponent';

const data = [
  { name: 'Cooling', value: 37 },
  { name: 'Residential', value: 25 },
  { name: 'Heating', value: 12 },
  { name: 'Lighting', value: 11 },
  { name: 'Other', value: 15 },
];

const Dashboard = () => {
  return (
    <div className="m-0 p-0">
      <div> <Navbar/> </div>
      <div className="flex flex-col items-center bg-gray-200 pt-8">
        <h1 className="text-lg font-serif font-bold">Hello</h1>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie dataKey="value" isAnimationActive={true} data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`#${index + 6}6a8dd`} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard

