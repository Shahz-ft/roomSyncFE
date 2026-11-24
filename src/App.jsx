
import React from 'react'
import { Routes, Route} from 'react-router-dom'


import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateProperty from './pages/CreateProperty'
import JoinProperty from './pages/JoinProperty'


import Dashboard from './pages/resident/Dashboard'
import Accommodation from './pages/resident/Accommodation'
import RentExpenses from './pages/resident/RentExpenses'
import Complaints from './pages/resident/Complaints'
import Notices from './pages/resident/Notices'


import ManagerDb from './pages/manager/ManagerDb'
import MyProperty from './pages/manager/MyProperty'
import RentBills from './pages/manager/RentBills'
import ManagerComplaints from './pages/manager/ManagerComplaints'
import ManagerNotices from './pages/manager/ManagerNotices'

import Profile from './pages/Profile'

import AdminDB from './pages/admin/Dashboard'
import UserManagement from './pages/admin/UserManagement'
import PropertyManagement from './pages/admin/PropertyManagement'
import Verifications from './pages/admin/Verifications'


const App  =() => {
  return (
    <Routes>

     
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create-property" element={<CreateProperty />} />
      <Route path="/join-property" element={<JoinProperty />} />

      
      <Route path="/resident/dashboard" element={<Dashboard />} />
      <Route path="/resident/accommodation" element={<Accommodation />} />
      <Route path="/resident/expenses" element={<RentExpenses />} />
      <Route path="/resident/complaints" element={<Complaints />} />
      <Route path="/resident/notices" element={<Notices />} />

   
      <Route path="/manager/dashboard" element={<ManagerDb />} />
      <Route path="/manager/property" element={<MyProperty />} />
      <Route path="/manager/bills" element={<RentBills />} />
      <Route path="/manager/complaints" element={<ManagerComplaints />} />
      <Route path="/manager/notices" element={<ManagerNotices />} />

      
      <Route path="/resident/profile" element={<Profile role="resident" />} />
      <Route path="/manager/profile" element={<Profile role="manager" />} />
      <Route path="/admin/profile" element={<Profile role="admin" />} />
      <Route path="/admin/dashboard" element={<AdminDB />} />
      <Route path="/admin/users" element={<UserManagement />} />
      <Route path="/admin/properties" element={<PropertyManagement />} />
      <Route path="/admin/verifications" element={<Verifications />} />

      

    </Routes>
  )
}

export default App
