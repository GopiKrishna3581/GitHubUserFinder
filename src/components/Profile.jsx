import React from 'react'
import { Link } from 'react-router-dom';
const Profile = ({ userData }) => {
    if (!userData) return null;

    const { avatar_url, name, login } = userData;

    return (
        <div className='bg-transparent border-gray-500 rounded-xl lg:flex flex-row  justify-between lg:px-10 py-5'>
            <div className='flex items-center justify-center   lg:w-full bg-transparent lg:p-9'>
                <img src={userData.avatar_url} alt="" className=' rounded-full  w-20 h-20 lg:w-full lg:h-full ' />
            </div>
            <div className=" flex flex-col justify-center gap-10 items-center bg-transparent w-full " >
                <div className='text-center text-white mt-6 text-[1rem] lg:w-full lg:text-[2rem]'>
                    <h2 className='font-bold  '>{userData.name}</h2>
                    <h3 className='text-sm pt-3'>{userData.bio}</h3>
                </div>
                <Link to='/userdetails' className='border border-gray-500 text-black font-normal  p-3 bg-white rounded-full'>View profile</Link>
            </div>
            {/* <input type="" value= "View Profile" className='mt-3 px-4 py-2 text-sm text-blue-800 font-semibold rounded-full border-2 hover:bg-blue-800  hover:text-white border-blue-800'/> */}
        </div>
    )
}

export default Profile

