import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import ComponetHeader from './ComponentHeader';
import DashboardSVG from '../../assets/dashboard_grey.png'
import DashboardActiveSVG from '../../assets/dashboard_green.png'
import JobsSVG from '../../assets/jobs_grey.png'
import JobsActiveSVG from '../../assets/jobs_green.png'
import ApplicationsSVG from '../../assets/application_grey.png'
import ApplicationActiveSVG from '../../assets/application_green.png'
import FollowersSVG from '../../assets/followers_grey.png'
import FollowersActiveSVG from '../../assets/followers_green.png'
import InventorySVG from '../../assets/inventory_grey.png'
import InventoryActiveSVG from '../../assets/inventory_green.png'
import CompanySVG from '../../assets/company_grey.png'
import CompanyActiveSVG from '../../assets/company_green.png'
import UsersSVG from '../../assets/users_grey.png'
import UsersActiveSVG from '../../assets/users_green.png'
import AccountSVG from '../../assets/account_grey.png'
import AccountActiveSVG from '../../assets/account_green.png'
import Dashboard from '../Dashboard'
import Jobs from '../Jobs'
import Applications from '../Applications'
import Followers from '../Followers';
import Inventory from '../Inventory';
import Users from '../Users';
import CompanyProfile from '../CompanyProfile';

const Account = lazy(() => import('./MyAccount/Account'));


const MyHome = () => {
  const [activePage, setActivePage] = useState('');
  const handleBackClick = () => {
    window.location.href='/';
  };

  return (
   
    <Suspense fallback={<div>Loading...</div>}>
    {activePage !== '' && <ComponetHeader activePage={activePage} onBackClick={handleBackClick}/>}
    <Router>
      <div style={{
        display:'flex'
      }}>
        <nav className='sidebar'>
          <div className='sidebar-greet-section'>
            <h2>Hello, Ritu Parmar</h2>
            
             
          </div>
          <ul className='sidebar-section'>
             <div onClick={() => setActivePage('')}>
                <img src={activePage === '' ? DashboardActiveSVG : DashboardSVG} alt='dashboard'/>
                <li>
                  <Link
                    to='/'
                    className={activePage === '' ? 'active' : 'inactive'}
                  >
                    Dashboard
                  </Link>
                </li>
              </div>
              <div onClick={() => setActivePage('Jobs')}>
                <img src={activePage === 'Jobs' ? JobsActiveSVG : JobsSVG} alt='jobs'/>
                <li>
                  <Link
                    to='/jobs'
                    className={activePage === 'Jobs' ? 'active' : 'inactive'}
                  >
                    Jobs
                  </Link>
                </li>
              </div>
              <div onClick={() => setActivePage('Applications')}>
                <img src={activePage === 'Applications' ? ApplicationActiveSVG : ApplicationsSVG} alt='applications'/>
                <li>
                  <Link
                    to='/applications'
                    className={activePage === 'Applications' ? 'active' : 'inactive'}
                  >
                    Applications
                  </Link>
                </li>
              </div>
              <div onClick={() => setActivePage('Followers')}>
                <img src={activePage === 'Followers' ? FollowersActiveSVG : FollowersSVG} alt='followers'/>
                <li>
                  <Link
                    to='/followers'
                    className={activePage === 'Followers' ? 'active' : 'inactive'}
                  >
                    Followers
                  </Link>
                </li>
              </div>
              <div onClick={() => setActivePage('My Inventory')}>
                <img src={activePage === 'My Inventory' ? InventoryActiveSVG : InventorySVG} alt='inventory'/>
                <li>
                  <Link
                    to='/inventory'
                    className={activePage === 'My Inventory' ? 'active' : 'inactive'}
                  >
                    My inventory
                  </Link>
                </li>
              </div>
              <div onClick={() => setActivePage('Company Profile')}>
                <img src={activePage === 'Company Profile' ? CompanyActiveSVG : CompanySVG} alt='company-profile'/>
                <li>
                  <Link
                    to='/companyprofile'
                    className={activePage === 'Company Profile' ? 'active' : 'inactive'}
                  >
                    Company Profile
                  </Link>
                </li>
              </div>
              <div onClick={() => setActivePage('All Users')}>
                <img src={activePage === 'All Users' ? UsersActiveSVG : UsersSVG} alt='all-users'/>
                <li>
                  <Link
                    to='/allusers'
                    className={activePage === 'All Users' ? 'active' : 'inactive'}
                  >
                    All Users
                  </Link>
                </li>
              </div>
            <div onClick={() => setActivePage('My Account')}>
                <img src={activePage === 'My Account' ? AccountActiveSVG : AccountSVG} alt='my-account'/>
                <li>
                  <Link
                    to='/myaccount'
                    className={activePage === 'My Account' ? 'active' : 'inactive'}
                  >
                    My Account
                  </Link>
                </li>
              </div>
          </ul>

          <span className='contact-details'>
          <div>Contact Us : </div>
          <div>Email: admin@herkey.com</div>
          </span>
         
        </nav>

        <Routes> 
         <Route path="/" element={<Dashboard />} /> 
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/followers" element={<Followers />} />
        <Route path="/myinventory" element={<Inventory />} />
        <Route path="/companyprofile" element={<CompanyProfile />} />
        <Route path="/allusers" element={<Users />} /> 
        
          <Route path="/myaccount" element={<Account />} />
        
        
        </Routes>
      
         
      </div>
    </Router>
    {activePage === '' &&  <div className='welcome-text'>Welcome to HerKey !!</div>}
   </Suspense>   
  );
}

export default MyHome;