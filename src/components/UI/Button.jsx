import React from "react";

const Button = ({spec, cta}) => {
  return (
    <>
      <button className={`${spec} py-1 px-4 font-medium rounded-full`}>
        {cta}
      </button>
    </>
  );
};

export default Button;
