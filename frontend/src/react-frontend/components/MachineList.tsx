import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import AddMachineModal from './AddMachineModal';
import MachineCard from './MachineCard';

function MachineList() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    data: machines,
    // isPending,
    // error,
  } = useFetch('http://localhost:3002/api/machines');

  return (
    <>
      <div className='container mx-auto p-3 text-center'>
        {machines ? (
          <div className='flex flex-wrap items-center justify-center'>
            {machines.map((machine) => {
              return (
                <MachineCard
                  key={machine._id}
                  id={machine._id}
                  wc={machine.workCentre}
                  manufacturer={machine.manufacturer}
                  model={machine.model}
                  serial={machine.serialNo}
                />
              );
            })}
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
        <button
          type='button'
          className='btn btn-wide btn-success m-2'
          onClick={() => setIsOpen(true)}
        >
          Add Machine
        </button>
      </div>
      <AddMachineModal
        open={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}

export default MachineList;
