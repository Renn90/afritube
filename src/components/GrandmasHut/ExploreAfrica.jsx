import React from 'react'
import Card from './Card';
import { explore } from '../../TextData';

const ExploreAfrica = () => {
  return (
    <>
      <h2 className='ml-4'>Explore Africa</h2>
      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3s'>
        <Card data={explore}/>
      </div>
    </>
  )
}

export default ExploreAfrica
