interface Users {
  employee: {
    employee_fname: string;
    employee_lname: string;
    eployee_id: number;
    email: string;
  };
  role: {
    job_role: string;
    department: string;
  };
  login: {
    username: string;
    password: string;
    avatar: string;
  };
  timestamps: true;
}
