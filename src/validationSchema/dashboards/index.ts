import * as yup from 'yup';

export const dashboardValidationSchema = yup.object().shape({
  task_column: yup.string().required(),
  progress_bar: yup.number().integer().required(),
  tilsynsrapport_field: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
