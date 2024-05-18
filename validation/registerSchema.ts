import * as Yup from 'yup';
export const registerFormSchema = () =>
  Yup.object({
    firstName: Yup.string()
      .matches(/^[A-Za-z]+$/, 'Name: Nur Buchstaben erlaubt!!')
      .required('Name ist erforderlich !!'),
    lastName: Yup.string()
      .matches(/^[A-Za-z]+$/, 'Nachname: Nur Buchstaben erlaubt!!')
      .required('Nachname ist erforderlich !!'),
    email: Yup.string().email('E-mail Addresse hat ein Falsches Format').required('E-Mail ist erforderlich !!'),
    pw: Yup.string().min(6, 'Passwort muss mindestens 6 Zeichen lang sein').required('Passwort ist erforderlich!'),
    userName: Yup.string().max(20, 'Maximal 20 Zeichen lang').required('Benutzername erforderlich!'),
  });
