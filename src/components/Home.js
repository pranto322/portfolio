import React from 'react';
import myImage from '../assets/profile1.png';
import { BiLogoPython, BiLogoReact, BiLogoRedux, BiLogoJavascript } from "react-icons/bi";
//import { AiOutlineHtml5 } from "react-icons/ai";
import { TbSql } from "react-icons/tb";
import { SiGooglesheets } from "react-icons/si";
import { Tooltip } from 'react-tooltip';
import { SiPowerbi } from "react-icons/si";

const Home = () => {
  return (
    <div name='home' className="min-h-screen w-full flex justify-center items-center px-3 -mt-20 md:mt-10 ">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div >
            <div
              className="rounded-full overflow-hidden h-52 w-52 md:mr-6 md:w-52 md:h-52"
              style={{
                clipPath: 'ellipse(80% 70% at 50% 50%)',
                position: 'relative',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
                //marginLeft: 7,
             
              }}
            >
              <div
                className="relative inset-0 border-4 border-blue-800 rounded-full animate-pulse"
                style={{ clipPath: 'ellipse(80% 70% at 50% 50%)', position: 'absolute' }}
              ></div>
              <img src={myImage} alt="my profile" />
            </div>
          </div>

          <div className='mr-8 md:ml-8'>
            <h1 className="text-4xl font-extrabold mt-5 ">
              <span className=''>Data Analytics </span>
              <br />
              <span>Professional</span>
            </h1>
            <p className="mt-4 font-medium ">
              Hi, I'm Prantozit Saha Parizat. A data enthusiast <br />
              with a passion for uncovering insights from complex datasets.
            </p>
            <div className="mt-3">
              <a className="text-2xl mr-3" href="mailto:parijatsaha435@gmail.com" target="_blank" rel="noreferrer">
                <i className="uil uil-envelope-alt"></i>
              </a>
              <a className="text-2xl mr-3" href="https://github.com/pranto322" target="_blank" rel="noreferrer">
                <i className="uil uil-github"></i>
              </a>
              <a className="text-2xl" href="https://www.linkedin.com/in/prantozit-saha-parizat/" target="_blank" rel="noreferrer">
                <i className="uil uil-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-row mr-4 md:mr-20  md:mt-10  mt-5   flex-wrap'>
          <h1 className='font-bold md:mr-8'> Tech Stack <span className=' text-gray-500 font-extrabold md:mr-10 md:ml-20 '>|</span> </h1>
          <button
            data-tooltip-id="tooltip-Html"
            data-tooltip-content="Power BI"
          >
            <SiPowerbi className='text-xl  mr-5  cursor-pointer' />
          </button>
          <Tooltip
            id="tooltip-Html"
            style={{ backgroundColor: "#ffffcc", color: "#222", borderRadius: 10, fontWeight: '600' }}
            place='bottom'
          />
          <button
            data-tooltip-id="tooltip-Python"
            data-tooltip-content="Python"
          >
            <BiLogoPython className='text-2xl  cursor-pointer md:mr-5' />
          </button>
          <Tooltip
            id="tooltip-Python"
            style={{ backgroundColor: "#ffffcc", color: "#222", borderRadius: 10, fontWeight: '600' }}
            place='bottom'
          />
          <button
            data-tooltip-id="tooltip-Css"
            data-tooltip-content="MySQL"
          >
            <TbSql className='text-2xl md:mr-5 mr-3 cursor-pointer' />
          </button>
          <Tooltip
            id="tooltip-Css"
            style={{ backgroundColor: "#ffffcc", color: "#222", borderRadius: 10, fontWeight: '600' }}
            place='bottom'
          />
          <button
            data-tooltip-id="tooltip-TailwindCss"
            data-tooltip-content="Google Sheets"
          >
            <SiGooglesheets className='text-2xl md:mr-5 mr-3 cursor-pointer' />
          </button>
          <Tooltip
            id="tooltip-TailwindCss"
            style={{ backgroundColor: "#ffffcc", color: "#222", borderRadius: 10, fontWeight: '600' }}
            place='bottom'
          />
          <button
            data-tooltip-id="tooltip-Javascript"
            data-tooltip-content="Javascript"
          >
            <BiLogoJavascript className='text-2xl md:mr-5 mr-3 cursor-pointer' />
          </button>
          <Tooltip
            id="tooltip-Javascript"
            style={{ backgroundColor: "#ffffcc", color: "#222", borderRadius: 10, fontWeight: '600' }}
            place='bottom'
          />
          <button
            data-tooltip-id="tooltip-React"
            data-tooltip-content="React"
          >
            <BiLogoReact className='text-2xl md:mr-5 mr-3 cursor-pointer' />
          </button>
          <Tooltip
            id="tooltip-React"
            style={{ backgroundColor: "#ffffcc", color: "#222", borderRadius: 10, fontWeight: '600' }}
            place='bottom'
          />
          <button
            data-tooltip-id="tooltip-Redux"
            data-tooltip-content="Redux"
          >
            <BiLogoRedux className='text-2xl md:mr-5 mr-3 cursor-pointer' />
          </button>
          <Tooltip
            id="tooltip-Redux"
            style={{ backgroundColor: "#ffffcc", color: "#222", borderRadius: 10, fontWeight: '600' }}
            place='bottom'
          />
          
        </div>
      </div>
    </div>
  );
};

export default Home;
