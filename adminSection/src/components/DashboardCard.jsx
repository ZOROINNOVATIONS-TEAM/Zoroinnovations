import React from 'react'

const DashboardCard = ({title, value}) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-6 w-full sm:w-1/3'>
        <h3 className='text-gray-600 text-sm font-medium'>{title}</h3>
        <p className='text-2xl font-bold mt-1'>{value}</p>
    </div>
  )
}

export default DashboardCard