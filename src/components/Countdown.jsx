import React, {useState, useEffect, useRef, useContext} from 'react'
import cloudTop from '../assets/countdownCloud.png'
import Rcloud from '../assets/img/r-cloud.png'
import simp from '../assets/img/simp.png'
import poly from '../assets/img/poly.png'
import vect from '../assets/img/Vector.png'
import { BiX } from 'react-icons/bi'
import Favouritecontext from '../store/reducer'
import { Link } from 'react-router-dom'

function Countdown() {
  const storedTime = JSON.parse(localStorage.getItem('countdownTime'));
  const initialTime = storedTime || { days: 30, hours: 0, minutes: 0, seconds: 0 };
  const [time, setTime] = useState(initialTime);

  const ctx = useContext(Favouritecontext)

  const closeCountdownModal =()=> ctx.dispatch({
    type: 'CLOSECOUNTDOWN'
  })

 useEffect(() => {
    const interval = setInterval(() => {
      if (time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
        clearInterval(interval);
      } else {
        setTime((prevTime) => {
          const newTime = { ...prevTime };
          if (newTime.seconds > 0) {
            newTime.seconds -= 1;
          } else {
            if (newTime.minutes > 0) {
              newTime.minutes -= 1;
              newTime.seconds = 59;
            } else {
              if (newTime.hours > 0) {
                newTime.hours -= 1;
                newTime.minutes = 59;
                newTime.seconds = 59;
              } else {
                if (newTime.days > 0) {
                  newTime.days -= 1;
                  newTime.hours = 23;
                  newTime.minutes = 59;
                  newTime.seconds = 59;
                }
              }
            }
          }
          return newTime;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  useEffect(() => {
    localStorage.setItem('countdownTime', JSON.stringify(time));
  }, [time]);


  return (
    <div className='flex flex-col justify-center items-center'>    
       <div className="fixed inset-0 z-[99] bg-[#0000008f] h-[100vh] w-full  flex items-center justify-center cursor-pointer" />
            <div className='h-50 w-[100%]  my-4 mx-2 absolute top-[10%] z-[995] lt:w-96'>
              <div className='relative bg-bgCount overflow-hidden h-20 rounded-t-[1.4rem]'> 
              <BiX className='text-4xl text-white absolute top-1 right-1 cursor-pointer' onClick={closeCountdownModal}/>
                <img src={Rcloud} alt="" className=' w-8 absolute top-2 right-10' />
                <img src={simp} alt="" className=' w-10 absolute top-8 right-12' />
                <img src={poly} alt="" className='w-20 absolute top-2 left-14' />
                <img src={vect} alt="" className='w-8  absolute left-0 rounded-tl-[1.4rem]' />
              </div> 

              <div className='flex flex-col items-center bg-white relative h-24  z-10'>
                  <small className='relative text-[.7rem] text-red-400 font-semibold mt-1 mb-2 z-[998]'>
                      FREE TRIAL ENDS IN
                  </small> 
                  <img src={cloudTop} className='w-[100%] absolute top-[-30px] z-[9]'/>
                    <img src={cloudTop} className='w-[100%] absolute bottom-[-30px] z-[9]'/>
                  <div className='relative flex flex-wrap gap-2 mx-4 justify-center z-[9] lt:flex-row'>   
                    <div className='text-red-400 z-[99] font-medium text-[1.5rem] bg-gray-300 bg-opacity-20 rounded-[.7rem] px-2 flex flex-col items-center'>
                     <p className='font-poppins'>
                      {time.days} </p>
                      <small className='text-[.4rem] font-normal mb-2'>Days</small>
                    </div>
                    <div className='self-center font-bold text-[1rem]'>:</div>
                    <div className='text-red-400 font-medium text-[1.5rem] bg-gray-300 bg-opacity-20 rounded-[.7rem] px-2 flex flex-col items-center'>
                      <p className='font-poppins'>
                      {time.hours}</p>
                      <small className='text-[.4rem] font-normal mb-2'>Hours</small>
                    </div>
                    <div className='self-center font-bold text-[1rem]'>:</div>
                    <div className='text-red-400 font-medium text-[1.5rem] bg-gray-300 bg-opacity-20 rounded-[.7rem] px-2 flex flex-col items-center'>
                    <p className='font-poppins'>
                      {time.minutes}</p>
                      <small className='text-[.4rem] font-normal mb-2'>Minutes</small>
                    </div>
                    <div className='self-center font-bold text-[1rem]'>:</div>
                    <div className='text-red-400 font-medium text-[1.5rem] bg-gray-300 bg-opacity-20 rounded-[.7rem] px-2 flex flex-col items-center'>
                    <p className='font-poppins'>
                      {time.seconds}</p>
                      <small className='text-[.4rem] font-normal mb-2'>Seconds</small>
                    </div>
                  </div>
                  
              </div >      
            

              <div className='relative py-9 flex flex-col items-center bg-[#DEDEDE] rounded-b-[1.4rem]'>
                <h3 className='text-center font-regular text-[1.3rem]'>Enjoy more entertainment for kids </h3>
                <a className='font-poppins text-[.7rem] text-linkGray'>Switch to a premium account</a>              
                <div className='flex flex-col gap-3 justify-center mt-3 lt:flex-row'>
                  <Link to='/pricing' className='text-white bg-bgCount px-8 py-1 font-bold rounded-[1.4rem]'>
                    Yes
                  </Link>
                  <button  className='bg-bgNot px-6 py-1 rounded-[1.4rem]' onClick={closeCountdownModal}>Remind me Later</button>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Countdown