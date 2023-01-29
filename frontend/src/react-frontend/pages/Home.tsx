// import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import MachineList from '../components/MachineList';

function Home() {
  const {
    data: machines,
    isPending,
    error,
  } = useFetch('http://localhost:3002/api/machines');

  return (
    <>
      <h1 className='text-4xl text-center font-bold text-primary m-4'>
        HP300 Database
      </h1>
      <MachineList />
    </>
  );
}

export default Home;
