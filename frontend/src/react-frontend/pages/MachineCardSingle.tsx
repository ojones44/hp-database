import { Link, useLocation } from 'react-router-dom';
import hp300Img from '../../assets/hp300.jpg';
import oopsImg from '../../assets/oops.jpg';

function MachineCardSingle() {
  const location = useLocation();

  if (!location.state) {
    return (
      <div className='mx-auto card w-96 bg-base-100 shadow-xl'>
        <figure className='px-10 pt-10'>
          <img src={oopsImg} alt='hp300-img' className='rounded-xl' />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>
            Looks like you entered this URL manually 😉
          </h2>
          <div className='card-actions'>
            <Link to='/'>
              <button type='button' className='btn btn-primary'>
                TAKE ME HOME
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { wc } = location.state.machine.details;
  const { manufacturer } = location.state.machine.details;
  const { model } = location.state.machine.details;
  const { serial } = location.state.machine.details;

  return (
    <div className='mx-auto card w-96 bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img src={hp300Img} alt='hp300-img' className='rounded-xl' />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{`${manufacturer} ${wc}`}</h2>
        <p>{`Model: ${model}   |   Serial: ${serial}`}</p>
        <div className='card-actions'>
          <button type='button' className='btn btn-primary'>
            {`QUERY ${wc} DATABASE`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MachineCardSingle;
