import React, { useState } from 'react';

const Profile = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='relative'>
      <div className='flex items-center cursor-pointer' onClick={toggleDropdown}>
        <div className='mx-2 font-bold bg-slate-200 h-10 hidden md:block w-[100px] rounded-lg mx-6 text-center'>
          <div className="text-center mt-2 text-gray-700">
            00:03:20
            <span className="inline-block relative w-4 h-4 mx-1 bg-red-600 rounded-full">
              <span className="absolute inset-1/4 w-1/2 h-1/2 bg-white"></span>
            </span>
          </div>
        </div>
        <div className='w-[3px] me-4 h-9 hidden md:block rounded bg-slate-300'></div>
        <img
          src='https://th.bing.com/th/id/OIP.9Kajvzuu0_4qYFmwFnvacQHaHa?rs=1&pid=ImgDetMain'
          className='rounded-3xl w-9 md:w-10  md:mr-2 border border-black'
          alt='Profile'
        />
        <i className='fas fa-chevron-down ml-2 hidden md:block'></i>
      </div>
      {dropdownOpen && (
        <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg'>
          <ul className='p-2'>
            <li className='flex items-center p-2 hover:bg-gray-100'>
              <img
                src='https://th.bing.com/th/id/OIP.9Kajvzuu0_4qYFmwFnvacQHaHa?rs=1&pid=ImgDetMain'
                className='rounded-3xl w-10 mr-2 border border-black'
                alt='Profile'
              />
              <div>
                <span className='font-medium'>John Doe</span><br />
                <span className='text-sm text-gray-500'>UI/UX Designer</span>
              </div>
            </li>
            <li className='flex cursor-pointer items-center p-2 hover:bg-gray-100'>
              <i className='fas fa-user mr-2'></i>
              <span>Profile</span>
            </li>
            <li className='flex cursor-pointer items-center p-2 hover:bg-gray-100'>
              <i className='fas fa-cog mr-2'></i>
              <span>Account Settings</span>
            </li>
            <li className='flex cursor-pointer items-center p-2 hover:bg-gray-100'>
              <i className='fas fa-sign-out-alt mr-2 text-red-600'></i>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
