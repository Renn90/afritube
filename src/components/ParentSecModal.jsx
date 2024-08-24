import { useContext, useRef, useState } from "react";
import React from "react";
import { BsCheck, BsX } from "react-icons/bs";
import Favouritecontext from "../store/reducer";

const ParentSecModal = () => {
  const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
  const [inputValues, setInputValues] = useState(['', '', '', '', ''])

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (!/^\d*$/.test(value)) return;
    const newInputValues = [...inputValues]
    newInputValues[index] = value
    setInputValues(newInputValues)
    // Move focus to the next input if a value is entered
    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    const BACKSPACE_KEY_CODE = 8;
    // Move focus to the previous input if the user presses backspace on an empty input
    if (
      event.keyCode === BACKSPACE_KEY_CODE &&
      index > 0 &&
      !event.target.value
    ) {
      inputRefs[index - 1].current.focus();
    }
  }; 

  const allOccupied = inputValues.every((value)=> value !== '')

  const ctx =  useContext(Favouritecontext)
  const closeModalHandler =()=> {
    ctx.dispatch({
      type: 'PARENTSECCLOSE'
    })
  }

  return (
    <div className="flex justify-center items-center">
      <div className="fixed inset-0 z-[998] bg-[#0000008f] h-[100vh] w-full  flex items-center justify-center" onClick={closeModalHandler}/>
      <div className="absolute top-[10%] z-[998] w-[300px]">
      <span className="flex justify-between bg-primary p-2 w-[100%] text-white text-xl rounded-t-lg text-center">
      <div className="flex-1">
        <h1>Parent Security</h1>
      </div>
      <BsX className="text-3xl cursor-pointer" onClick={closeModalHandler}/>
    </span>
        <div className="bg-white p-4 rounded-b-lg  h-[300px] py-8">
          <div className="flex flex-col justify-between items-center h-[100%]">
            <p className="text-sm font-medium">Enter Passcode</p>
            <form className="flex justify-between items-center py-2 px-4 bg-secBlue rounded-full">
              {inputRefs.map((inputRef, index) => (
                <input
                  key={index}
                  ref={inputRef}
                  value={inputValues[index]}
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  type="password"
                  maxLength="1"
                  className={`${inputValues[index] !== '' ? 'bg-primary' : ''} cursor-pointer mx-1 text-primary text-lg text-center border-2 border-primary outline-0 caret-transparent w-[12px] h-[12px] rounded-full`}
                />
              ))}
             {allOccupied && <BsX className="text-sm bg-[red] text-white rounded-full ml-4 text-lg justify-self-end"/>}
            </form>
            <button className="text-primary py-2 px-8 bg-secBlue rounded-full">
              Use touch ID
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentSecModal;
