import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import MainBar from '@/components/navigation/MainBar';


const Root = () => {
  const [status] = useState<'idle' | 'loading' | 'error'>('idle');

  return(
    <>
      <MainBar />
      <div className='root-container'>
        <Outlet />
        { status === 'error' && <h1>Error, error, error!</h1> }
      </div>
    </>
  )
}

export default Root; 
