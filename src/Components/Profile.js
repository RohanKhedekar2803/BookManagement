import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import Ellipse from '../assets/Ellipse.jpg'
import Alreadyread from './Alreadyread';
import BookShowcaseCard from './BookShowcaseCard'
import Recommended from './Recommended';
import Wishlisted from './Wishlisted';
import wishlisted from './Wishlisted';
const Profile = () => {
  //useffect and use state to store current bookks data 
  var books = [];
  for (var i = 0; i < 6; i++) {
    books.push(<BookShowcaseCard/>);
  }
  const slideLeft = () => {
    var slider = document.getElementById('slider' );
    console.log(slider)
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' );
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const [option, setOption] = useState(1);
  const recommendedactive=()=>{
    setOption(1);
    console.log(option)
  }
  const wishlistactive=()=>{
      setOption(2);
      console.log(option)
  }
  const readactive=()=>{
    setOption(3);
    console.log(option)
  }
  return (
    <>

        <div className='w-100% flex justify-center h-[155px] bg-blue-700  p-7'>
                    <div className='flex w-2/4 align-middle justify-center ml-4'>
                        <img src={Ellipse} className="rounded-full ml-16"></img>
                        <div className='p-7 pt-5 text-white'>
                            <div>John Doe</div>
                            <div>John@gmail.com</div>
                        </div>
                    </div>
                    <div className='m-7 w-2/4 flex justify-center align-middle'>
                        <button className='bg-white p-1 pl-14 pr-14 rounded-xl text-blue-600'>Logout</button>
                    </div>
        </div>

        <div className='mt-5 align-middle bg-white  w-3/5 ml-[290px] drop-shadow-2xl'>
            <div className='h-[50px] w-full bg-blue-700  opacity-80  flex justify-between pl-14 pr-14 pb-12 pt-8 text-white rounded-t-xl'>
              <button className='pl-5 pr-5' onClick={recommendedactive} style={{
                      'background-color': option==1 ?'black' : ''
                    }}>Recommended Books</button>
              <button  className='pl-5 pr-5' onClick={wishlistactive} style={{
                      'background-color': option==2 ?'black' : ''
                    }}>Wishlist</button>
              <button className='pl-5 pr-5' onClick={readactive} style={{
                      'background-color': option==3 ?'black' : ''
                    }}>Already Read</button>
            </div>
          {option==1 ?
          <Wishlisted /> : ''} 
          {option==2 ?
          <Recommended /> : ''}
          {option==3 ?
          <Alreadyread /> : ''}    
           
        </div>
        
    </>
  )
}

export default Profile
