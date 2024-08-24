import React from 'react';
import Card from './Card';
import { history } from '../../TextData';

const AfricanHistory = () => {
  return (
    <div>
      <h2 className='py-2 ml-4'>African History</h2>
      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3'>
        <Card data={history}/>
      </div>
    </div>
  )
}

export default AfricanHistory
