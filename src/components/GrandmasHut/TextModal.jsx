import React, { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import Favouritecontext from "../../store/reducer";
import { useContext } from "react";

const TextModal = () => {
  const [textData, setTextData] = useState("Loading...");

  const ctx = useContext(Favouritecontext);
  const closeModal = () => {
    ctx.dispatch({
      type: "CLOSETEXTMODAL",
    });
  };

  const sell = ctx.state.textRefrence;

  useEffect(() => {
    try {
      fetch(sell.text)
        .then((response) => response.text())
        .then((text) => {
          const paragraphs = text.split('\n').map((line, index) => (
            <p key={index} className="leading-8">
              {line.includes("**") ? (
                <strong className="text-xl">{line.replace(/\*\*/g, '')}</strong>
              ) : (
                line
              )}
            </p>
          ));
          setTextData(paragraphs);
        });
    } catch (error) {
      setTextData("Something went Wrong, try Again");
    }
  }, []);

  return (
    <div
      className="fixed overflow-y-auto max-h-[100%] top-0 left-0 p-10 bg-[#fffffffd] w-[100%] h-[100vh] text-[black] px-[35px] md:px-[5%]"
      autoFocus
    >
      <div className="container mx-auto relative">
        <BiX
          className="p-2 rounded-full bg-[#0066A9] text-4xl text-white absolute right-[-9px] top-[-9px] cursor-pointer z-[998]"
          onClick={closeModal}
        />
        <img
          src={sell.thumbnail}
          alt="thumbnail"
          className="w-[100%] h-[400px] object-cover rounded"
        />
        <h1 className="text-3xl py-4">{sell.name}</h1>
        {textData}
      </div>
    </div>
  );
};

export default TextModal;
