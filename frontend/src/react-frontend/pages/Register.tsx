// * React Imports
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fromZodError } from 'zod-validation-error';

// * Asset Imports
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import InfoIcon from '@mui/icons-material/Info';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Loading from '../../assets/loading.svg';

// * Library Imports
import { User, UI_REGEX } from '../../models/userValidation';

// * API Url
const API_REGISTER_URL = 'http://localhost:3002/api/users/register';

function ErrorMessage({ msg }) {
  return (
    <div className='error-message' role='alert'>
      <strong className='font-bold'>Oops! 🙈 </strong>
      <span className='block sm:inline'>{msg}</span>
    </div>
  );
}

function SuccessMessage() {
  return (
    <div className='success-message' role='alert'>
      <strong className='font-bold'>Success! 😀 </strong>
      <span className='block sm:inline'>
        Passwords valid and matched <CheckIcon />
      </span>
    </div>
  );
}

function InfoMessage() {
  return (
    <div className='info-message' role='alert'>
      <InfoIcon />
      <span className='block sm:inline pl-4'>
        You may only register if you are an Ipeco employee.
      </span>
    </div>
  );
}

function Register() {
  const [errorMessage, setErrorMessage] = useState('');

  const [passwordMsg, setPasswordMsg] = useState(false);
  const [matchPWMsg, setMatchPWMsg] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    employeeID: '',
    stampNo: '',
    email: '',
    password: '',
    password2: '',
    jobRole: '',
    department: '',
  });

  const {
    fName,
    lName,
    employeeID,
    stampNo,
    email,
    password,
    password2,
    jobRole,
    department,
  } = formData;

  useEffect(() => {
    const pwCheck = UI_REGEX.test(password);
    const match = password === password2;

    setValidPassword(pwCheck);
    setPasswordMatch(match);
  }, [password, password2]);

  const onChange = (e) => {
    setFormData((prevValues) => ({
      ...prevValues,
      [e.target.name]:
        e.target.type === 'number'
          ? parseInt(e.target.value, 10)
          : e.target.value,
    }));
    console.log(e.target.value);
    setErrorMessage('');
  };

  const validUser = () => {
    if (password === password2) {
      try {
        User.parse(formData);
        return true;
      } catch (err) {
        const errMessage = fromZodError(err)
          .message.split('error:')[1]
          .split('at')[0];
        setErrorMessage(errMessage);
        return false;
      }
    }

    return false;
  };

  const onSubmit = (e) => {
    if (validUser()) {
      const options = {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'content-type': 'application/json',
        },
      };

      fetch(API_REGISTER_URL, options)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return res.json().then((err) => {
            throw new Error(err.message);
          });
        })
        .then((newUser) => {
          console.log(newUser);
          navigate('/login');
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }

    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='mt-10 max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
          <h1 className='mb-8 text-3xl text-center'>Register Employee</h1>

          {InfoMessage()}

          <input
            type='text'
            className='input-area capitalize'
            id='fName'
            name='fName'
            placeholder='First Name'
            value={fName}
            onChange={onChange}
            required
            // autoComplete='off'
          />

          <input
            type='text'
            className='input-area capitalize'
            id='lName'
            name='lName'
            placeholder='Last Name'
            value={lName}
            onChange={onChange}
            required
            // autoComplete='off'
          />

          <input
            type='number'
            className='input-area'
            id='employeeID'
            name='employeeID'
            placeholder='Employee ID Number'
            value={employeeID}
            onChange={onChange}
            required
            // autoComplete='off'
          />

          <input
            type='number'
            className='input-area'
            id='stampNo'
            name='stampNo'
            placeholder='Stamp Number'
            value={stampNo}
            onChange={onChange}
            required
            // autoComplete='off'
          />

          <select
            className='input-area'
            id='jobRole'
            name='jobRole'
            placeholder='Select Job Role'
            value={jobRole}
            onChange={onChange}
            required
          >
            <option value='' disabled>
              Select your job role
            </option>
            <option value='Operator'>Operator</option>
            <option value='Setter/Operator'>Setter/Operator</option>
            <option value='Programmer'>Programmer</option>
            <option value='Production Controller'>Production Controller</option>
            <option value='Supervisor'>Supervisor</option>
            <option value='Manager'>Manager</option>
          </select>

          <select
            className='input-area'
            id='department'
            name='department'
            placeholder='Select Department'
            value={department}
            onChange={onChange}
            required
          >
            <option value='' disabled>
              Select your department
            </option>
            <option value='Team 1'>Team 1</option>
            <option value='Team 2'>Team 2</option>
            <option value='Team 3'>Team 3</option>
            <option value='Team 4'>Team 4</option>
            <option value='Production Control'>Production Control</option>
          </select>

          <input
            type='email'
            className='input-area'
            id='email'
            name='email'
            placeholder='Company email (e.g. jdoe@ipeco.com)'
            value={email}
            onChange={onChange}
            required
            // autoComplete='off'
          />

          <label htmlFor='password' className='flex'>
            <input
              type={showPassword ? 'text' : 'password'}
              className={
                passwordMsg
                  ? 'input-area adjusted password'
                  : 'input-area password'
              }
              id='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={onChange}
              onFocus={() => setPasswordMsg(true)}
              onBlur={() => setPasswordMsg(false)}
              required
              // autoComplete='off'
            />
          </label>
          {showPassword ? (
            <VisibilityOffIcon
              style={{ color: 'red' }}
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <VisibilityIcon
              style={{ color: 'green' }}
              onClick={() => setShowPassword(!showPassword)}
            />
          )}

          {passwordMsg && (
            <div className='validation-message'>
              {validPassword ? (
                <small>
                  Password valid <CheckIcon style={{ color: 'green' }} />
                </small>
              ) : (
                <small
                  className={validPassword ? 'text-green-500' : 'text-red-500'}
                >
                  Password must contain at least 8 characters, at least one
                  upper case character, one lower case character and one number{' '}
                  <CloseIcon />
                </small>
              )}
            </div>
          )}

          <input
            type={showPassword ? 'text' : 'password'}
            className={passwordMsg ? 'input-area adjusted' : 'input-area'}
            id='password2'
            name='password2'
            placeholder='Confirm Password'
            value={password2}
            onChange={onChange}
            onFocus={() => setMatchPWMsg(true)}
            onBlur={() => setMatchPWMsg(false)}
            required
            autoComplete='off'
          />

          {matchPWMsg && (
            <div className='validation-message'>
              {passwordMatch ? (
                <small>
                  Passwords match <CheckIcon style={{ color: 'green' }} />
                </small>
              ) : (
                <small
                  className={passwordMatch ? 'text-green-500' : 'text-red-500'}
                >
                  Please confirm your password <CloseIcon />
                </small>
              )}
            </div>
          )}

          {errorMessage !== '' && <ErrorMessage msg={errorMessage} />}
          {validPassword && passwordMatch && !matchPWMsg && !passwordMsg && (
            <SuccessMessage />
          )}

          <button
            type='submit'
            className='button'
            disabled={!!(!validPassword || !passwordMatch)}
          >
            Create Account <PersonAddIcon />
          </button>
        </div>

        <div className='text-grey-dark mt-6'>
          Already have an account?{' '}
          <Link className='link-to' to='/login'>
            Log in.
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Register;
