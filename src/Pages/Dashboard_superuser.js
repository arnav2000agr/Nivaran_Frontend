import React from 'react';
import Navbar from '../Components/NavbarComponent';

const Dashboard_superuser = () => {
  const superAdminData = [
    {
      "application number": "up78rtupvh5645",
      "subject": "Sanitation issue in my area",
    },
    {
      "application number": "7777777777",
      "subject": "Water issues in my area",
    },
    {
      "application number": "00000000007yg",
      "subject": "Electricity issue in my area",
    },
    {
      "application number": "9876ghjnbhj",
      "subject": "Transportation issue in my area",
    },
    {
      "application number": "xhyhndjs",
      "subject": "some issues in my area",
    },
    {
      "application number": "xhyhndjs",
      "subject": "some issues in my area some issues in my area some issues in my area"
    },
    {
      "application number": "xhyhndjs",
      "subject": "some issues in my area",
    },
    {
      "application number": "xhyhndjs",
      "subject": "some issues in my area",
    },
  ];

  const handleApprove = (applicationNumber) => {
    console.log(`Application ${applicationNumber} approved`);
  };

  const handleReject = (applicationNumber) => {
    console.log(`Application ${applicationNumber} rejected`);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className=' p-8 text-lg text-gray-700 flex justify-center bg-gray-100'>
        <table className='border border-gray-300'>
          <thead>
            <tr>
              <th className='p-3 m-3'>Application Number</th>
              <th className='p-3 m-3'>Subject</th>
              <th className='p-3 m-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {superAdminData.map((item, index) => (
              <tr key={index} >
                <td className='p-3 m-3 border whitespace-nowrap overflow-auto'>{item["application number"]}</td>
                <td className='p-3 m-3 border' >{item.subject}</td>
                <td className='p-3 m-3 border'>
                  <button onClick={() => handleApprove(item["application number"])} className='p-3 bg-blue-700 hover:bg-blue-800 text-white rounded-md'>
                    Approve
                  </button>
                  <button onClick={() => handleReject(item["application number"])}  className='p-3 bg-gray-700 hover:bg-gray-800 text-white rounded-md ml-2'>
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard_superuser;
