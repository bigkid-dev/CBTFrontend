import CountChart from '@/components/CountChart'
import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      <div className='w-full gap-8 lg:w-2/3 flex flex-col'>
        {/* User Cards */}
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type='student' />
          <UserCard type='teacher' /> 
          <UserCard type='parent' />
          <UserCard type='staff' />
        </div>
        {/* Middle Charts */}
        <div className='flex gap-4 flex-col lg:flex-row'>
          {/* COunt ChART */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className='w-full lg:w-1/3 h-[450px]'></div>
        </div>
        <div className=''></div>
      </div>

      <div className='w-full lg:w-1/3'>r</div>
    </div>
  )
}

export default AdminPage