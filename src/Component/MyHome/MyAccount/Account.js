import React, {useState} from 'react';
import './styles.css';
import { NAME, DESIGNATION, COMPANY_NAME, PROFILE_SUMMARY, CONTACT_NO } from '../../constants';
import Edit from '../../../assets/edit-icon.png'
import ProfileSVG from '../../../assets/profile_image.jpeg'
const Account = () => {
    return (
      <div className='page-container'>
        <div className="profile">
                <div className="profile-title">
                    <h2>My Profile</h2>
                    <img src={Edit} alt="edit-icon" className='edit-icon'></img>
                </div>
          <div className="profile-header"></div>
          <div className='profile-details-container'> 
          <div className='image-container'>
          <img src={ProfileSVG} alt="Profile" className="profile-image" />
          </div> 
          <div className="profile-details">
            <h2>{NAME}</h2>
            <p>Designation:</p>
            <div>{DESIGNATION}</div>
            <p>Company:</p>
            <div>{COMPANY_NAME}</div>
           
            </div></div>
            <div className='about'>
              <p>About</p>
              <div >{PROFILE_SUMMARY}</div>
            </div>
         </div>
         
         <div className='settings'>
                  <div className='account-settings'>
                        
                           <div className="profile-title">
                              <h2>My Account Settings</h2>
                              <img src={Edit} alt="edit-icon" className='edit-icon'></img>
                            </div>
                          <div className="details">
                             <div className='details-section'>
                                <div>
                                  <p>Full Name:</p>
                                  <div> {NAME} </div>
                                  </div>
                                  <div className='details-section-name'>
                                  <p>Designation:</p>
                                  <div>{DESIGNATION}</div>
                                  </div>
                              </div>
                              <div className='details-section'>                             
                                <div><p>Contact Number:</p>
                                 <div>{CONTACT_NO}</div></div> 
                                <button>Change Password</button>
                               </div>
                          </div>
                  </div>
                  <div className='account-settings'>
                             
                                <div className="profile-title">
                                  <h2>Applications Settings</h2>
                                  <img src={Edit} alt="edit-icon" className='edit-icon'></img>
                                </div>
                                <div className='application-settings-section'>
                                     <p>Recieve job applications via </p>
                                      <div className="radio-buttons">
                                          <input type='radio' id='dashboard' name='receive-method'></input>
                                          <label htmlFor='dashboard'>Only on my dashboard</label>
                                          <input type='radio' id='email-dashboard' name='receive-method'></input>
                                          <label htmlFor='email-dashboard'>Email and on my dashboard</label>
                                    </div>
                                      <p>*Please note this setting will not impact your old job postings</p>

                                </div>
                      
                   </div>

         </div>


        </div>
      );
}

export default Account;