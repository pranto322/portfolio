import React, { useState } from 'react';
import bookstore from '../assets/bookstoree.jpg'
import movie from '../assets/movie.jpg';
import Modal from './Modal';


const Projects = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className='h-screen w-full justify-center items-center p-3 '>
      

      <div className='flex flex-col md:justify-center md:items-center'>
        <h1 className='font-bold text-2xl underline underline-offset-8 ml-3 mt-5  '>Projects</h1>
        
        {/* <p className='font-semibold'>Here are some demo works of mine showcasing below</p> */}
        <div className='flex flex-col md:flex-row justify-center items-center mt-5'>
          <div className='rounded-2xl h-56 w-64 md:mr-10'>
            <img src={movie} alt="movie club" className='h-56 w-64 rounded-lg bg-slate-200' />
          </div>
          <div className='md:w-2/5 px-3 md:ml-5 mt-3'>
            <h1 className='font-semibold '>Movie Club</h1>
            <p className='font-medium '>
              I developed a website called MovieClub using React.js and Tailwind CSS, which provides information about
              movies that are currently playing, upcoming releases, and top rated films. Additionally, users can access detailed
               information on each movie. To retrieve the movie data, I integrated The Movie Database API into the website.
              
            </p>
            <a href="https://github.com/pranto322/movieclub" target="_blank" rel="noreferrer" className='font-bold' >Code<i className="uil uil-github text-2xl mt-2" ></i></a>
            <a href="https://movie-clubs.netlify.app/" target="_blank" rel="noreferrer" className='font-bold ml-10' >Live Demo<i className="uil uil-external-link-alt text-2xl mt-2"></i></a> 



          </div>


        </div>
        <div className='flex flex-col  md:flex-row-reverse justify-center items-center mt-10 '>
          <div className='rounded-2xl h-56 w-64 md:mr-10 '>
            <img src={bookstore} alt="movie club" className='h-56 w-64 rounded-lg bg-slate-200' />
          </div>
          <div className='md:w-2/5 px-3 md:mr-10 mt-3 '>
            <h1 className='font-semibold '>Book Store</h1>
            <p className='font-medium '>
            Bookstore is a React.js web application for book enthusiasts, featuring a user-friendly interface and efficient search functionality. Users can explore and purchase books based on titles, authors, or genres. The app uses Tailwind CSS for
            an appealing design and context API for smooth state management, ensuring a seamless shopping experience.
              
            </p>
            <a href="https://github.com/pranto322/BookStore" target="_blank" rel="noreferrer" className='font-bold' >Code<i className="uil uil-github text-2xl mt-2" ></i></a>
            <span className='font-bold ml-10 cursor-pointer' onClick={() => setShowModal(true)}>Live Demo <i className="uil uil-external-link-alt text-2xl mt-2"></i></span>
             {showModal && <Modal setShowModal={setShowModal}/>}
          </div>
          


        </div>
      </div>

    </div>
  )
}

export default Projects