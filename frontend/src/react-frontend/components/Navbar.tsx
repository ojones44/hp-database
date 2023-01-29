// * React Import
import { Link } from 'react-router-dom';

// * Asset Imports
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import oJonesImg from '../../assets/oliver-jones.jpg';
import rPatrickImg from '../../assets/rikie-patrick.jpg';

const isOnline = false;

function AvatarWithDropdown() {
  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
        <div className={isOnline ? 'avatar online' : 'avatar offline'}>
          <div className='w-10 rounded-full'>
            <img src={oJonesImg} alt='ojonesimg' />
          </div>
        </div>
      </label>
      <ul
        tabIndex={0}
        className='menu menu-compact dropdown-content bg-primary rounded-box mt-3 w-52 p-2'
      >
        <li>
          <Link to='/' className='justify-between'>
            Profile
            <span
              className='badge'
              style={{
                backgroundColor: isOnline ? 'green' : 'red',
                color: isOnline ? 'white' : 'white',
              }}
            >
              {isOnline ? 'online' : 'offline'}
            </span>
          </Link>
        </li>
        <li>
          <Link to='/'>Settings</Link>
        </li>
        <li>
          <Link to='/'>Logout</Link>
        </li>
      </ul>
    </div>
  );
}

function CentreButtons() {
  return (
    <ul
      tabIndex={0}
      className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
    >
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li tabIndex={0}>
        <Link to='/scheduler' className='justify-between'>
          Schedules
          <svg
            className='fill-current'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
          </svg>
        </Link>
        <ul className='p-2'>
          <li>
            <a>
              Create a really pointless schedule where the dates change within
              an hour on SAP
            </a>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
        </ul>
      </li>
      <li>
        <Link to='/maintenance'>Maintenance</Link>
      </li>
    </ul>
  );
}

function CentreButtonsHidden() {
  return (
    <div className='navbar-center hidden lg:flex'>
      <ul className='menu menu-horizontal px-1'>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li tabIndex={0}>
          <Link to='/scheduler' className='justify-between'>
            Schedules
            <svg
              className='fill-current'
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
            >
              <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
            </svg>
          </Link>
          <ul className='p-2'>
            <li>
              <a>
                Create a really pointless schedule where the dates change within
                an hour on SAP
              </a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </li>
        <li>
          <Link to='/maintenance'>Maintenance</Link>
        </li>
      </ul>
    </div>
  );
}

function Navbar() {
  const notification = true;

  return (
    <div className='navbar bg-primary text-white'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <CentreButtons />
        </div>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          HP Database
        </Link>
      </div>
      <CentreButtonsHidden />
      <div className='navbar-end'>
        <div className='mr-44'>
          <button type='button' className='btn btn-ghost btn-circle'>
            <CalendarMonthIcon className='mx-6' />
          </button>
          <button type='button' className='btn btn-ghost btn-circle'>
            <div className='indicator'>
              <NotificationImportantIcon className='mx-2' />
              <span
                className={
                  notification
                    ? 'badge badge-xs badge-secondary indicator-item'
                    : ''
                }
              />
            </div>
          </button>
        </div>
        {!isOnline && (
          <Link to='/login'>
            <button
              type='button'
              className='btn bg-primary hover:bg-secondary border-secondary mr-4'
            >
              Login
            </button>
          </Link>
        )}

        <div>
          <p>Oliver Jones</p>
          <p>Programmer</p>
        </div>
        <AvatarWithDropdown />
      </div>
    </div>
  );
}

export default Navbar;
