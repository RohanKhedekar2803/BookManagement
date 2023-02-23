import React from 'react'
import { useState } from 'react';
import Img from '../assets/rectangle.jpg'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import 'boxicons'
import Modal from '@material-ui/core/Modal';
import CategoryChip from './CategoryChip';
import BookShowcaseCard from './BookShowcaseCard';
import LandingPageHeroComponent from './LandingPageHeroComponent';


const Landpage = () => {
      const [open, setOpen] = React.useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };
    
  const handleOpen = () => {
    setOpen(true);
  };

  //useffect and use state to store current bookks data 
  var books = [];
  for (var i = 0; i < 10; i++) {
    books.push(<BookShowcaseCard/>);
  }
  return (
    <div>
      <div>
        <LandingPageHeroComponent />
        <div className="mx-32">
          <div className="h-10" />
          <div className="mx-5 text-black font-['DM Sans'] font-semibold text-3xl">
            Categories{" "}
          </div>
          <div className="h-5" />
          <div className="grid grid-cols-5 w-full justify-evenly gap-x-5 gap-y-5 mx-5">
            <CategoryChip />
            <CategoryChip />
            <CategoryChip />
            <CategoryChip />
            <CategoryChip />
            {books}
          </div>
        </div>
      </div>

  <div style={{ display: 'block'}}>
        <button type="button" 
        onClick={handleOpen}>
          Click Me to Open Modal
        </button>
        <Modal
          onClose={handleClose}
          open={open}
          style={{
            position: 'absolute',
            border: '2px solid #000',
            backgroundColor: 'gray',
            boxShadow: '2px solid black',
            paddingTop:60 ,
            margin: 'auto'
            
          }}
        >
              <div>
          <div className='w-4/6 m-auto '>
            <div className=' p-1 rounded-lg'>
                <div className='p-10 bg-white rounded-lg flex'>
                    <div className='w-2/4  h-auto pr-4 p-2' >
                      <div>
                        <img src={img4}  className='w-auto h-auto '/>
                      </div>
                      <div className='flex mt-3'>
                      <img src={img1}  className=' w-1/3 '/>
                      <img src={img2}  className=' w-1/3 pl-3'/>
                      <img src={img3}  className=' w-1/3 pl-3'/>
                      </div>
                    </div>
                    <div className='ml-10 mt-1 mr-2'>
                    
                      <div className='flex justify-between'>
                          <div className=' bg-blue-100 w-[142px] rounded-lg font-sans text p-2 font-medium pl-10 pr-10 text-blue-500'>
                          Reference
                          </div>
                          <div onClick={handleClose} className='mt-2'>
                                                        
                                <box-icon name='window-close'></box-icon>     
                          </div>
                      </div>

                      <div className=' align-middle font-sans font-bold text-4xl mt-2' >
                        History of World map by Map 
                      </div>

                      <div className='mt-3'>
                          <div className='mt-2 flex'>
                                <p className='font-sans text-lg font-normal'>Rating        (266 Reviews)</p>
                          </div>

                          <div className='mt-[8px] flex'>
                                <p className='font-sans text-lg font-normal'>Sub-Category-  </p>
                                <p className='font-sans text-base text-gray-600 font-normal ml-2 pt-1'>Atlases and Map </p>
                          </div>
                          <div className='mt-[8px] flex'>
                                <p className='font-sans text-lg font-normal'>Languages-    </p>
                                <p className='font-sans text-base text-gray-600 font-normal ml-2 pt-1'>English </p>
                                
                          </div>
                          <div className='mt-[8px] flex'>
                                <p className='font-sans text-lg font-normal'>ISBN-        </p>
                                <p className='font-sans text-base text-gray-600 font-normal ml-2 pt-1'>10 </p>
                          </div>
                          <div className='mt-[8px] flex'>
                                <p className='font-sans text-lg font-normal'>Weight-        </p>
                                <p className='font-sans text-base text-gray-600 font-normal ml-2 pt-1'>5.66 pounds</p>
                          </div>
                          <div className='mt-[8px] flex'>
                                <p className='font-sans text-lg font-normal'>Price-        </p>
                                <p className='font-sans text-base text-gray-600 font-normal ml-2 pt-1'>5.66 pounds</p>
                          </div>
                          <div className='mt-[8px] flex'>
                                <p className='font-sans text-lg font-normal'>Author-        </p>
                                <p className='font-sans text-base text-gray-600 font-normal ml-2 pt-1'>DK </p>
                          </div>
                          <div className='mt-[8px] flex'>
                                <p className='font-sans text-lg font-normal'>Pages-        </p>
                                <p className='font-sans text-base text-gray-600 font-normal ml-2 pt-1'>440 </p>
                          </div>
                          <div className='mt-[8px] flex'>
                                <p className='font-sans text-lg font-normal'>Publisher-        </p>
                                <p className='font-sans text-base text-gray-600 font-normal ml-2 pt-1'>DK , Illustated Edition</p>
                          </div>
                      </div>
                      <div >
                        <button className='flex bg-blue-500 rounded-lg w-[450px] text-white mt-3 h-[50px] py-3 justify-center'>
                          <p>Buy Ebook / Hardcover Online</p>
                          <div className='ml-2'>
                              <box-icon name='link-external' color="white"></box-icon>
                          </div>
                        </button>
                      </div>
                    </div>  
                </div>
            </div>
          </div>
      </div>
        </Modal>
      </div>  
    </div>          
  )
}
export default Landpage
