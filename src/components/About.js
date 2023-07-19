import React, { useState } from 'react'
import hero from '../assets/heroo.png'
import { AiFillCheckCircle } from "react-icons/ai";

const About = () => {
  const [education, setEducation] = useState(false)
  const [experience, setExperience] = useState(false)
  const [active, setActive] = useState(null);
  const toggleEducation = () => {
    if (education) {
      setActive(null);
    } else {
      setActive('education');
    }
    setExperience(false)
    setEducation((prevState) => !prevState);
  };
  const toggleExp = () => {
    if (experience) {
      setActive(null);
    } else {
      setActive('experience');
    }
    setEducation(false);
    setExperience((prevState) => !prevState);
  };

  return (
    <div className='h-screen w-full justify-center items-center p-3 md:px-10 '>
      <div className='flex flex-col m-auto  md:flex-row justify-center items-center   '>
        <div className='rounded-2xl h-72 md:mt-20 w-64 mr-10'>
          <img src={hero} alt="hero " />

        </div>
        <div className=' flex flex-col  md:w-2/5 '>
          <h1 className='font-bold text-2xl underline underline-offset-4 ml-3 mt-5 '>About Me</h1>
          <p className='font-medium p-3'>
            As a junior web developer, I'm skilled in HTML, CSS, JavaScript,
            Tailwind CSS, React, and Redux. I create responsive websites that
            deliver exceptional user experiences. My coding is clean and collaborative, and I'm passionate about
            staying updated with the latest technologies.
            Whether working in a team or independently, I excel and consistently deliver outstanding results for any web development project.
            <div className='mt-5 text-start mr-20 fixeds' >
              <h1 className={`mr-10 font-bold cursor-pointer hover:scale-110 duration-200 inline-block ${active === 'education' ? 'underline decoration-black-400 decoration-2 underline-offset-4' : ''}`} onClick={toggleEducation} >Education</h1>
              {education ? <div className='absolute mt-3'>
                <h1 className='font-semibold'>BRAC University</h1>
                <p className='font-medium'>BSc in Computer Science and Engineering</p>
                <p className='font-medium '>Scored : 3.30/4</p>
                <h1 className='font-semibold mt-2'>New Govt. Degree College</h1>
                <p className='font-medium'>Higher Secondary Certificate </p>
                <p className='font-medium '>Scored : 5.00/5</p>
                <h1 className='font-semibold mt-2'>Qadirabad Cantonment Public School</h1>
                <p className='font-medium'>Secondary School Certificate </p>
                <p className='font-medium '>Scored : 5.00/5</p>
              </div> : null}

              <h2 className={`mr-10 font-bold cursor-pointer hover:scale-110 duration-200 inline-block ${active === 'experience' ? 'underline decoration-black-400 decoration-2 underline-offset-4' : ''}`} onClick={toggleExp}  >Experience</h2>
              {experience ? (<div className='absolute mt-3'>
                <h1 className='font-semibold'>Frontend Developer Intern</h1>
                <p className='font-medium'>Care-Box Limited</p>
                <p className='font-medium '>May,2023 - Present </p>
                <p className='font-medium md:w-4/5 flex flex-row justify-center mt-3 ' > <AiFillCheckCircle className='text-2xl mr-3' />Gained experience in developing cross platform mobile applications using React Native.</p>
                <p className='font-medium md:w-4/5 flex flex-row justify-center' > <AiFillCheckCircle className='text-xl mr-3' />Successfully converted Figma design to beautiful and functional website.</p>
                <p className='font-medium md:w-4/5 flex flex-row justify-center' > <AiFillCheckCircle className='text-2xl mr-3' />Worked independently and as part of a team to achieve solutions for complex problems.</p>


              </div>) : null}
            </div>

          </p>


        </div>


      </div>



    </div>
  )
}

export default About