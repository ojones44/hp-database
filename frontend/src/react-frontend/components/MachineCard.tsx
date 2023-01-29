import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

function MachineCard({ id, wc, manufacturer, model, serial }: MachineProps) {
  const navigate = useNavigate();

  const details = {
    id,
    wc,
    manufacturer,
    model,
    serial,
  };

  // Using react hook Navigate //
  function toMachineCardSingle() {
    navigate('/machinecardsingle', { state: { machine: { details } } });
  }

  function deleteMachine() {
    console.log(id);
    const url = `http://localhost:3002/api/machines/${id}`;
    fetch(url, { method: 'DELETE' })
      .then((res) => res.json())
      .then((data) => {
        console.log('Machine Deleted:', data);
        location.reload();
      })
      .catch(() => {
        throw new Error('Something went wrong');
      });
  }

  return (
    <div className='text-center text-base-100 m-4 border-2 card w-86 bg-primary'>
      <div className='card-body p-5 items-center'>
        <h2 className='card-title'>{`${manufacturer} ${wc}`}</h2>
        <p>{`Model: ${model} | Serial No: ${serial}`}</p>
        <div className='card-actions justify-end'>
          <button
            type='button'
            className='btn btn-sm btn-secondary'
            onClick={() => {
              toMachineCardSingle();
            }}
          >
            Overview
          </button>
          <button type='button' className='btn btn-sm'>
            Maintenance
          </button>
          <button
            type='button'
            className='btn btn-sm btn-accent'
            onClick={deleteMachine}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

interface MachineProps {
  wc: string;
  manufacturer: string;
  model: string;
  serial: number;
}

export default MachineCard;
