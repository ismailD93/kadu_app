import * as Yup from 'yup';
export const registerFormSchema = () =>
  Yup.object({
    firstName: Yup.string().required('Name ist erforderlich !!'),
    lastName: Yup.string().required('Nachname ist erforderlich !!'),
    email: Yup.string().required('E-Mail ist erforderlich !!'),
    pw: Yup.string().required('Passwort ist erforderlich!'),
    userName: Yup.string().required('Benutzername erforderlich!'),
    // pwRepeat: Yup.string().required('Wiederhole dein Passwort'),
  });
