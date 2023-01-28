// * Library Imports
import { z } from 'zod';

const ZOD_REGEX = /^[a-zA-Z0-9]*$/;
const UI_REGEX = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;

const nameFormat = z
  .string({
    required_error: 'Field is required',
    invalid_type_error: 'Name must not include numbers or special characters',
  })
  .min(2, { message: 'First Name field must be a minimum of 2 characters' })
  .trim();

const emailFormat = z
  .string()
  .email({ message: 'Invalid email address' })
  .endsWith('@ipeco.com', { message: 'Email must include @ipeco.com' })
  .trim();

const passwordFormat = z
  .string()
  .min(8, {
    message:
      'Password must contain at least 15 characters, contain at least one upper case character, one lower case characters and one number',
  })
  .max(30, { message: 'Password can contain a maximum of 30 characters' })
  .regex(ZOD_REGEX, {
    message:
      'Password must only contain letters and numbers, and no special characters',
  })
  .trim();

const idFormat = z.coerce
  .number()
  .gte(7, { message: 'Employee ID must contain 7 digits' });

const stampFormat = z.coerce
  .number()
  .gte(2, { message: 'Stamp cannot be less than 2 digits' });

const User = z.object({
  fName: nameFormat,
  lName: nameFormat,
  employeeID: idFormat,
  stampNo: stampFormat,
  email: emailFormat,
  password: passwordFormat,
  password2: passwordFormat,
  jobRole: z.string().trim(),
  department: z.string().trim(),
});

export { User, UI_REGEX };
