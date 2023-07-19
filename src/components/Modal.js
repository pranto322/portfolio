import React from 'react'
import construction from '../assets/under const.png'

const Modal = ({ setShowModal }) => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center '>
            <div className='bg-white w-80 h-72 rounded-xl flex flex-col justify-center items-center'>
                <i className="uil uil-times-circle text-2xl font-bold ml-60 mt-3 cursor-pointer" onClick={() => setShowModal(false)}></i>
                <img src={construction} alt="construction" className='h-56 w-64' />
                <h1 className='font-bold text-lg mb-5'>Coming Soon.....</h1>
            </div>
        </div>
    )
}

export default Modal
