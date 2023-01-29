import { useState } from 'react';
import machineSchema from '../../schemas/machine';

function AddMachineModal({ setIsOpen, open }) {
  const machineTemplate = {
    workCentre: '',
    manufacturer: 'Matsuura',
    model: '',
    serialNo: '',
    noOfPallets: '',
    notes: '',
  };
  const [errorMessage, setErrorMessage] = useState('');
  const [machineData, setMachineData] = useState(machineTemplate);

  const handleChange = (e) => {
    console.log(e.target.value);
    setErrorMessage('');
    setMachineData({
      ...machineData,
      [e.target.name]: e.target.value,
    });
  };

  function clearForm() {
    setErrorMessage('');
    setMachineData(machineTemplate);
  }

  function addMachine(e) {
    e.preventDefault();
    const res = machineSchema.safeParse(machineData);
    console.log(res); /* zod response, which has success which is true or false,
    and data which has the validated data if success is true or the zod error if false */
    if (res.success) {
      const url = 'http://localhost:3002/api/machines';
      const options = {
        method: 'POST',
        body: JSON.stringify(res.data),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          setIsOpen(false);
          location.reload();
        })
        .catch(() => {
          setErrorMessage('Something went wrong');
          throw new Error("Uh oh, we couldn't post");
        });
    } else {
      setErrorMessage(res.error.issues[0].message);
    }
  }

  if (!open) return null;
  return (
    <div id='machine-modal' className='modal modal-open'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg mb-3'>Add New Machine</h3>
        {errorMessage && (
          <div className='alert alert-error shadow-lg rounded-lg mb-4'>
            <p className='text-white'>{errorMessage}</p>
          </div>
        )}
        <button
          type='button'
          className='btn btn-sm btn-error btn-circle absolute right-4 top-4'
          onClick={() => {
            setIsOpen(false);
          }}
        >
          ✕
        </button>
        <form onSubmit={addMachine}>
          <input
            type='text'
            className='input input-secondary w-full mb-3'
            id='work-centre'
            placeholder='Work Centre (e.g. HP300-01)'
            name='workCentre'
            value={machineData.workCentre.toUpperCase()}
            onChange={handleChange}
          />
          <input
            type='text'
            className='input input-secondary w-full mb-3'
            id='manufacturer'
            placeholder='Manufacturer'
            name='manufacturer'
            value={machineData.manufacturer}
            onChange={handleChange}
            disabled
          />
          <input
            type='text'
            className='input input-secondary w-full mb-3'
            id='model'
            placeholder='Model'
            name='model'
            value={machineData.model}
            onChange={handleChange}
          />
          <input
            type='number'
            className='input input-secondary w-full mb-3'
            id='no-of-pallets'
            placeholder='Number of Pallets'
            min='0'
            name='noOfPallets'
            value={machineData.noOfPallets}
            onChange={handleChange}
          />
          <input
            type='number'
            className='input input-secondary w-full mb-3'
            id='work-centre'
            placeholder='Serial No.'
            name='serialNo'
            value={machineData.serialNo}
            onChange={handleChange}
          />
          <textarea
            className='textarea textarea-secondary w-full'
            placeholder='Machine Notes'
            name='notes'
            value={machineData.notes}
            onChange={handleChange}
          />
          <div className='btn-group mt-3 w-full'>
            <button type='submit' className='btn btn-success w-1/2'>
              Add Machine
            </button>
            <button
              type='button'
              className='btn bg-neutral w-1/2'
              onClick={clearForm}
            >
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMachineModal;
