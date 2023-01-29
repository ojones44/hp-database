import { z } from 'zod';

const machineSchema = z.object({
  workCentre: z
    .string({
      required_error: 'Work Centre is required',
    })
    .regex(/^.*-\d{2}$/, {
      message:
        'Work Centre must end with a dash followed by a 2 digit number e.g. HP300-01',
    }),
  manufacturer: z.string().trim(),
  model: z.string({ required_error: 'Model is required' }).trim(),
  serialNo: z.coerce.number({
    required_error: 'Serial Number is required',
    invalid_type_error: 'Serial Number must be a number',
  }),
  notes: z.string().trim().optional(),
});

export default machineSchema;
