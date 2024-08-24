import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function Rating({ numStars }) {
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    stars.push(<AiFillStar key={i} />);
  }

  for (let i = numStars; i < 5; i++) {
    stars.push(<AiOutlineStar key={i} />);
  }
  return <div className='flex flex-row flex-wrap'>{stars}</div>;
}

export default Rating;
