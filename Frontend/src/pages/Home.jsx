import { Button } from '@/components/ui/button'
import React from 'react'
import { useNavigate } from 'react-router-dom'; 

function Home() {
  const navigation = useNavigate();

  return (
   <div className='h-96 flex justify-center items-center flex-col'>
      <h1 className='text-4xl text-cyan-200'>Vehicle Rental Booking</h1>
      <p className='text-1xl text-cyan-200 m-5'>Welcome to our Vehicle Rental Booking Form! This form is designed to streamline the process of renting a vehicle</p>
      <Button className='bg-cyan-200 text-cyan-800 m-10' onClick={()=>navigation('/booking')}>Book Now</Button>
   </div>
  )
}

export default Home