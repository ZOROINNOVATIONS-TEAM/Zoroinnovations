import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DashboardCard from '../components/DashboardCard'

const Dashboard = () => {
  return (
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main className='flex-grow bg-gradient-to-br from-blue-800 via-blue-600 to-orange-600 text-white px-6 py-10'>
            <h1 className='text-3xl font-bold mb-2'>Dashboard</h1>
            <p className='text-sm text-gray-200 mb-8'>Welcome back, Alex! Here's an overview of your system performance.</p>

            {/* Top Stats */}
            <div className='flex flex-wrap gap-6 mb-8'>
                <DashboardCard title="Total Projects" value="25" />
                <DashboardCard title="Active Clients" value="18" />
                <DashboardCard title="Revenue This Quarter" value="$150, 000" />
            </div>

            {/* Quick Actions */}
            <div className='mb-10'>
                <h2 className='text-xl font-semibold mb-4'>Quick Actions</h2>
                <div className='flex gap-4'>
                    <button className='bg-orange-500 text-white px-4 py-2 rounded shadow-md hover:bg-orange-600'>
                        Create New Project 
                    </button>
                    <button className='bg-white text-gray-800 px-4 py-2 rounded shadow-md hover:bg-gray-100'>
                        Generate Report
                    </button>
                </div>
            </div>

            {/* System Overview */}
            <h2 className='text-xl font-semibold mb-4'>System Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Completion Chart */}
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Project Completion Rate</h3>
            <p className="text-3xl font-semibold">85%</p>
            <p className="text-sm text-green-500">Last 3 Months • +5%</p>
            <div className="h-32 mt-4 bg-gray-100 rounded">[Chart Placeholder]</div>
          </div>

          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Client Satisfaction</h3>
            <p className="text-3xl font-semibold">4.8/5</p>
            <p className="text-sm text-green-500">Average • +0.2</p>
            <div className="h-32 mt-4 bg-gray-100 rounded">[Chart Placeholder]</div>
          </div>
          </div>
        </main>
        <Footer />
    </div>
  )
}

export default Dashboard;