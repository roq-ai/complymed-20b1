import * as yup from 'yup';

export const reportValidationSchema = yup.object().shape({
  report_content: yup.string().required(),
  dashboard_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
