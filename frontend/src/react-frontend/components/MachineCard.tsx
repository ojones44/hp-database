// * React Import
import { useNavigate } from 'react-router-dom';

function MachineCard({ wc, manufacturer, model, serial }: MachineProps) {
  const navigate = useNavigate();

  const details = {
    wc,
    manufacturer,
    model,
    serial,
  };

  // ! Using react hook Navigate //

  function toMachineCardSingle() {
    navigate('/machinecardsingle', { state: { machine: { details } } });
  }

  return (
    <div className="m-12 card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{`${manufacturer} ${wc}`}</h2>
        <p>{`Model: ${model} | Serial No: ${serial}`}</p>
        <div className="card-actions justify-end">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              toMachineCardSingle();
            }}
          >
            Overview
          </button>

          <button type="button" className="btn btn-ghost">
            Maintenance
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
