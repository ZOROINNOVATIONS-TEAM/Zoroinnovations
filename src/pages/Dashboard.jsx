import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import DashboardCard from '../components/DashboardCard'
import LineGraph from '../components/LineGraph'

const Dashboard = () => {
  return (
      <div className='min-h-screen flex flex-col'>
        {/* <Navbar /> */}
        <main className='flex-grow bg-gradient-to-br from-[#1E3A8A] via-[#3B82F6] to-[#FF6B35] text-white p-18'>
            <h1 className='text-3xl font-bold mb-2'>Dashboard</h1>
            <p className='text-md text-gray-100 mb-8'>Welcome back, Alex! Here's an overview of your system performance.</p>

            {/* Top Stats */}
            <div className='flex flex-row gap-8 my-12'>
                <DashboardCard title="Total Projects" value="25" />
                <DashboardCard title="Active Clients" value="18" />
                <DashboardCard title="Revenue This Quarter" value="$150, 000" />
            </div>

            {/* Quick Actions */}
            <div className='mb-8'>
                <h2 className='text-xl font-semibold mb-2'>Quick Actions</h2>
                <div className='flex gap-4 my-8'>
                    <button className='bg-orange-500 text-white px-4 py-2 rounded-3xl font-bold shadow-md hover:bg-orange-600'>
                        Create New Project 
                    </button>
                    <button className='bg-white text-gray-900 px-6 py-3 rounded-3xl font-bold shadow-md hover:bg-gray-100'>
                        Generate Report
                    </button>
                </div>
            </div>

            {/* System Overview */}
            <h2 className='text-xl font-semibold mb-10'>System Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Completion Chart */}
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl">Project Completion Rate</h3>
            <p className="text-3xl font-semibold my-2">85%</p>
            <p className="text-md text-gray-600">Last 3 Months <span className='text-green-500 ml-2 font-bold'>+5%</span></p>
            <div className="h-32 mt-4 bg-gray-100 rounded">
              <LineGraph />
              </div>
          </div>

          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-md">
            <h3 className="font-bold text-xl">Client Satisfaction</h3>
            <p className="text-3xl font-semibold my-2">4.8/5</p>
            <p className="text-md text-gray-600">Average <span className='text-green-500 ml-2 font-bold'>+0.2</span></p>
            <div className="h-32 mt-4 bg-gray-100 rounded">
              <LineGraph />
            </div>
          </div>
          </div>
        </main>
        {/* <Footer /> */}
    </div>
  )
}

export default Dashboard;