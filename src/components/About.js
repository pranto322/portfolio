import React, { useState } from 'react';
import hero from '../assets/heroo.png';
import { AiFillCheckCircle } from 'react-icons/ai';

const About = () => {
  const [education, setEducation] = useState(false);
  const [experience, setExperience] = useState(false);
  const [active, setActive] = useState(null);

  const toggleEducation = () => {
    setActive(active === 'education' ? null : 'education');
    setExperience(false);
    setEducation((prevState) => !prevState);
  };

  const toggleExp = () => {
    setActive(active === 'experience' ? null : 'experience');
    setEducation(false);
    setExperience((prevState) => !prevState);
  };


  return (
    <div name='about' className='min-h-max w-full justify-center items-center p-3  md:pt-20'>
      <div className='flex flex-col md:flex-row justify-center items-center md:items-start'>
        <div className='rounded-2xl h-72  w-64  flex justify-center items-center '>
          <img src={hero} alt='hero ' />
        </div>
        <div className='flex flex-col md:w-2/5 md:ml-10'>
          <h1 className='font-bold  text-2xl underline underline-offset-8 md:ml-12 px-3  '>
            About Me
          </h1>
          <p className='font-medium mt-5 md:ml-3 px-3 '>
          I'm Prantozit Saha Parizat, a Frontend Developer with a passion for creating exceptional user experiences. Proficient in HTML, CSS, JavaScript, Tailwind CSS, React, and Redux, I specialize in crafting responsive websites with clean code and a collaborative mindset.

My dedication to staying up-to-date with the latest technologies fuels my drive for innovation. Beyond web development, I'm intrigued by the world of data and data visualization. From predictive analysis to insightful result interpretation, I believe data has the power to drive informed decisions.
          </p>
          <div className='mt-5 flex md:ml-3 px-3 '>
            <h1
              className={`mr-10  font-bold cursor-pointer hover:scale-110 duration-200 inline-block ${
                active === 'education'
                  ? 'underline decoration-black-400 decoration-2 underline-offset-4'
                  : ''
              }`}
              onClick={toggleEducation}
            >
              Education
            </h1>
            <h2
              className={`font-bold cursor-pointer hover:scale-110 duration-200 inline-block ${
                active === 'experience'
                  ? 'underline decoration-black-400 decoration-2 underline-offset-4'
                  : ''
              }`}
              onClick={toggleExp}
            >
              Experience
            </h2>
          </div>
          {education && (
            <div className='mt-3 md:ml-3 px-3 '>
              <h1 className='font-semibold'>BRAC University</h1>
              <p className='font-medium'>BSc in Computer Science and Engineering</p>
              <p className='font-medium'>Scored : 3.30/4</p>
              <h1 className='font-semibold mt-2'>New Govt. Degree College</h1>
              <p className='font-medium'>Higher Secondary Certificate</p>
              <p className='font-medium'>Scored : 5.00/5</p>
              <h1 className='font-semibold mt-2'>Qadirabad Cantonment Public School</h1>
              <p className='font-medium'>Secondary School Certificate</p>
              <p className='font-medium'>Scored : 5.00/5</p>
            </div>
          )}
          {experience && (
            <div className='mt-3 md:ml-3 px-3 '>
              <h1 className='font-semibold'>Frontend Developer Intern</h1>
              <p className='font-medium'>Care-Box Limited</p>
              <p className='font-medium'>May,2023 - Present</p>
              <p className='font-medium md:w-4/5 flex flex-row justify-center mt-3'>
                <AiFillCheckCircle className='text-2xl mr-3' />
                Gained experience in developing cross-platform mobile applications using React Native.
              </p>
              <p className='font-medium md:w-4/5 flex flex-row justify-center'>
                <AiFillCheckCircle className='text-xl mr-3' />
                Proficiently translated Figma designs into a visually stunning and fully functional webpage
              </p>
              <p className='font-medium md:w-4/5 flex flex-row justify-center'>
                <AiFillCheckCircle className='text-2xl mr-3' />
                Worked independently and as part of a team to achieve solutions for complex problems.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
