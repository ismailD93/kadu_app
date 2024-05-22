import * as Yup from 'yup';

const addProductSchema = () =>
  Yup.object({
    Title: Yup.string().required('Name ist erforderlich !!'),
    pricePerDay: Yup.number().required('Preis pro Tag ist erforderlich !!'),
    Description: Yup.string().required('Bitte gebe eine kurze Beschreibung !!').min(10, 'Min 10 Zeichen!!'),
    category: Yup.string().required('Kategorie ist erforderlich !!'),
    condition: Yup.string().required('Zustand ist erforderlich !!'),
    image: Yup.mixed().optional(),
  });
export default addProductSchema;
