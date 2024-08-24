import React, { useState } from "react";
import logo from "../assets/AFRITUBE-ICON.png";
import { BsGear } from "react-icons/bs";
import {BiErrorCircle} from "react-icons/bi";
import { Link } from "react-router-dom";
import graph from '../assets/securityGraph.png'
import End from "../components/UI/End";

const Security = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [hours, setHours] = useState("");
  const [screenTime, setScreenTime] = useState(6)

  const [showEnd, setShowEnd] = useState(true)

  const handleInput = (event) => {
    const value = event.target.value;
    // Check if the input is a valid two-digit number (between 1 and 99)
    if (/^\d{0,2}$/.test(value)) {
      setHours(value);
    }
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleScreenTime =()=> {
    setScreenTime(hours)
    setHours('')
  } 

  const getPastWeekDates = () => {
    const today = new Date();
    const weekDates = [];
    for (let i = 0; i < 3; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      weekDates.push(date.toISOString().split("T")[0]);
    }

    return weekDates;
  };

  const pastWeekDates = getPastWeekDates();

  return (
    <div className="bg-white h-[100vh]">
      <div className="container mx-auto bg-white">
        <header className="flex flex-col justify-between items-center py-4 md:flex-row">
          <div className="flex items-center m-2">
            <h1 className="font-bold text-lg">Afritube</h1>
            <img src={logo} alt="logo" className="w-[35px]" />
          </div>
          <span>
            <h1 className="flex items-center">
              <BsGear className="m-2" /> Settings & Security
            </h1>
          </span>
          <Link to='/content'>
          <button className="border-[1px] border-black py-1 px-2 m-2">
            Go back to Afritube
          </button>
          </Link>
        </header>
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <ul className="mr-8 flex md:flex-col">
            <li className="text-primary m-3 text-center md:text-start cursor-pointer">Time on Afritube</li>
            <li className="text-[lightgrey] hidden m-3 md:block cursor-pointer">Activity</li>
            <li className="text-[lightgrey]  hidden m-3 md:block cursor-pointer">Order & Payment</li>
            <li className="text-[lightgrey]  hidden m-3 md:block cursor-pointer">Censoring</li>
            <li className="text-[lightgrey]  hidden m-3 md:block cursor-pointer">Privacy Policies</li>
          </ul>
          <div className="flex-1 bg-[#F7FBFE] px-4 py-4 h-[100vh] md:px-16">
            <div className="bg-white p-8 border-[1px] border-primary rounded-lg flex flex-col justify-center items-center">
              <h1 className="text-center">Time on Afritube</h1>
              <select
                id="weekDatePicker"
                value={selectedDate}
                onChange={handleDateChange}
                className="my-2"
              >
                <option value="">{pastWeekDates[0]}</option>
                {pastWeekDates.map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
              <h1>
                <span className="text-5xl">{screenTime}</span>hrs.
              </h1>
              <p className="text-[green]">Healthy</p>
              <div className="flex justify-center align-center">
                <img src={graph} alt="/" className="w-[100%] my-8 md:w-[70%]"/>
              </div>
            </div>
            <div className="bg-white p-4 mt-2 border-[1px] border-primary rounded-lg flex flex-col justify-between md:items-center md:flex-row md:p-8 md:mt-8">
              <span>
                <h2>Set daily time limit</h2>
                <p className="text-[grey] my-2">
                  Managing the time spent on Afritube
                </p>
              </span>
              <div className="flex flex-col">
                <div className="flex items-center">
                <input
                  type="number"
                  id="hourInput"
                  value={hours}
                  onChange={handleInput}
                  maxLength="1"
                  min={1}
                  max={24}
                  className={`px-4 border-[1px] outline-0 border-${hours > 12 ? '[red]' : 'black'} my-2 mr-2`}
                />
                <span>hrs.</span>
                </div>
                {hours > 12 ? <p className="flex mx-2 items-center text-center text-[red] text-sm"><BiErrorCircle className="mr-1"/>Not healthy</p> : <button className="bg-black w-[70px] mr-2 my-2 rounded-full text-white disabled:bg-[grey]" disabled={!hours} onClick={handleScreenTime}>Set</button>}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showEnd && <End show={setShowEnd}/>}
    </div>
  );
};

export default Security;
