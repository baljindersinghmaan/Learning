import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import backArrow from '../../assets/backArrow.png';
import Chart from "react-apexcharts";
import Header from '../Header/Header';


function Home() {
    const [toggled, setToggled] = React.useState(false);
   


    const invoices = [
        { id: 'INV-1990', category: 'Android', price: '$83.74', status: 'Paid', statusColor: 'bg-green-100 text-green-700' },
        { id: 'INV-1991', category: 'Mac', price: '$97.14', status: 'Out of date', statusColor: 'bg-red-100 text-red-700' },
        { id: 'INV-1992', category: 'Windows', price: '$68.71', status: 'Progress', statusColor: 'bg-yellow-100 text-yellow-700' },
        { id: 'INV-1993', category: 'Android', price: '$85.21', status: 'Paid', statusColor: 'bg-green-100 text-green-700' },
        { id: 'INV-1994', category: 'Mac', price: '$52.17', status: 'Paid', statusColor: 'bg-green-100 text-green-700' },
      ];
    const users = [
        { email: 'john.doe@example.com', name: 'John Doe', username: 'johndoe' },
        { email: 'jane.smith@example.com', name: 'Jane Smith', username: 'janesmith' },
        { email: 'alice.jones@example.com', name: 'Alice Jones', username: 'alicejones' },
        { email: 'bob.brown@example.com', name: 'Bob Brown', username: 'bobbrown' },
    ];
    const state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 92]
        }
      ]
    };
  
    
  return (
    <div style={{ display: 'flex', height: '100%' }}>
        <div className="flex">
    <Sidebar collapsed = {toggled}>
      <Menu
       menuItemStyles={{
        button: ({ level, active, disabled }) => {
          // only apply styles on first level elements of the tree
          if (level === 0)
            return {
              color: disabled ? '#f5d9ff' : '#d359ff',
              backgroundColor: active ? '#eecef9' : undefined,
            };
        },
      }}
    >
        <MenuItem> Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
      <div className="mx-2" >
        
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm md:text-lg"   onClick={() => setToggled(!toggled)}>
           Hide or Show
          </button>
      </div>
    </Sidebar>
    
    </div>
    <Header/>
    <main className="flex flex-col md:flex-row pt-16">
        
      <div className="p-4 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Users</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Username</th>
              
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.username}>
                <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{user.email}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{user.username}</td>
                
                <td className="px-6 py-4 text-right text-gray-500">
                  <button className="focus:outline-none">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 10a2 2 0 114 0 2 2 0 01-4 0zm5 0a2 2 0 114 0 2 2 0 01-4 0zM3 10a2 2 0 114 0 2 2 0 01-4 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-3 text-right text-blue-600 text-sm font-medium">
        <a href="#">View all</a>
      </div>
    </div>
    <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
            />
          </div>

          
    </main>
    
  </div>
  )
}

export default Home