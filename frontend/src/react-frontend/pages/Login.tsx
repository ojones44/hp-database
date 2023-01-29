// * React Imports
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// * Asset Imports
import LoginIcon from '@mui/icons-material/Login';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    console.log(e.target.email.value, e.target.password.value);

    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='bg-grey-lighter min-h-screen flex flex-col'>
        <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
          <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
            <h1 className='mb-8 text-3xl text-center'>Login</h1>
            <input
              type='email'
              className='block border border-grey-light w-full p-3 rounded mb-4'
              id='email'
              name='email'
              placeholder='Company Email'
              value={email}
              onChange={onChange}
            />

            <input
              type='password'
              className='block border border-grey-light w-full p-3 rounded mb-4'
              id='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={onChange}
            />
            <button
              type='submit'
              className='w-full text-center py-3 rounded bg-success text-white hover:bg-secondary focus:outline-none my-1'
            >
              To the database <LoginIcon />
            </button>
          </div>

          <div className='text-grey-dark mt-6'>
            Not registered?{' '}
            <Link
              className='no-underline border-b border-blue text-blue'
              to='/register'
            >
              Register here.
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
