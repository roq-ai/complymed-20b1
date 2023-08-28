import * as yup from 'yup';

export const progressValidationSchema = yup.object().shape({
  status: yup.string().required(),
  percentage_completed: yup.number().integer().required(),
  notes: yup.string().nullable(),
  task_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
