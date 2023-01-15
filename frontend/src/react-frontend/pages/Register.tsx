// * React Imports
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// * Asset Imports
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function Register() {
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

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Register</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              id="fName"
              name="fName"
              placeholder="First Name"
              value={fName}
              onChange={onChange}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              id="lName"
              name="lName"
              placeholder="Last Name"
              value={lName}
              onChange={onChange}
            />

            <input
              type="number"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              id="employeeID"
              name="employeeID"
              placeholder="Employee ID Number"
              value={employeeID}
              onChange={onChange}
            />

            <input
              type="number"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              id="stampNo"
              name="stampNo"
              placeholder="Stamp Number"
              value={stampNo}
              onChange={onChange}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              id="jobRole"
              name="jobRole"
              placeholder="Job Role"
              value={jobRole}
              onChange={onChange}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              id="department"
              name="department"
              placeholder="Department"
              value={department}
              onChange={onChange}
            />

            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              id="email"
              name="email"
              placeholder="Company Email"
              value={email}
              onChange={onChange}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              id="password2"
              name="password2"
              placeholder="Confirm Password"
              value={password2}
              onChange={onChange}
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
            >
              Create Account <PersonAddIcon />
            </button>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?{' '}
            <Link
              className="no-underline border-b border-blue text-blue"
              to="/login"
            >
              Log in.
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Register;
