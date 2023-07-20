import React from 'react'
import mail from '../assets/email-flag.gif'

const Contact = () => {
  return (
    <div className='h-screen w-full justify-center items-center md:mt-10'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-2xl underline underline-offset-8 decoration-2'>Contact</h1>
        <p className='font-medium py-3'>Submit the form to get in touch.</p>
        <div className='flex flex-col md:flex-row justify-center items-center md:mr-10'>
          <div className='mt-5 md:w-2/5 '>
            <img src={mail} alt="envelop" />
          </div>

          <form action="" className='md:w-2/5 w-full px-5 md:mt-5 md:pl-5'>
            <div className='border-2 rounded-2xl w-full p-2 border-gray-500 flex items-center'>
              <i className="uil uil-user text-gray-400 mr-2"></i>
              <input
                type="text"
                name='name'
                placeholder='Enter your name'
                className='w-3/4 outline-none'
              />
            </div>
            <div className='border-2 rounded-2xl w-full p-2 mt-5 border-gray-500 flex items-center'>
              <i class="uil uil-envelope text-gray-400 mr-2"></i>
              <input
                type="text"
                name='email'
                placeholder='Enter your email'
                className='w-full outline-none'
              />
            </div>
            <div className='border-2 rounded-2xl  p-2 mt-5 border-gray-500 flex items-center'>
              
              <textarea
                type="text"
                name='email'
                rows= "5"
                
                placeholder='Your text'
                className='w-full outline-none'
              />
            </div>
            <button className='border rounded-2xl w-full p-2 mt-5  flex justify-center bg-violet-500 items-center font-bold text-white'>Send</button>
          </form>



        </div>

      </div>

    </div>
  )
}

export default Contact
