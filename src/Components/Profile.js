import React from 'react'
import Ellipse from '../assets/Ellipse.jpg'
const Profile = () => {
  return (
    <>

        <div className='w-100% flex justify-center h-[175px] bg-blue-600 p-5'>
                    <div className='flex align-middle justify-center'>
                        <img src={Ellipse} className="rounded-full"></img>
                        <div className='p-10 text-white'>
                            <div>John Doe</div>
                            <div>John@gmail.com</div>
                        </div>
                    </div>

                    <div className='p-9'>
                        <button className='bg-white p-3 pl-14 pr-14 rounded-xl '>Logout</button>
                    </div>
        </div>
        
    </>
  )
}

export default Profile
