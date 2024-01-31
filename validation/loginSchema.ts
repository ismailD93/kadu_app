import * as Yup from 'yup';

const loginFormSchema = () =>
  Yup.object({
    userName: Yup.string().required('Name ist erforderlich !!'),
    pw: Yup.string().required('Passwort ist erforderlich'),
  });
export default loginFormSchema;
