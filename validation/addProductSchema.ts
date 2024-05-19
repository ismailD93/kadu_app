import * as Yup from 'yup';

const addProductSchema = () =>
  Yup.object({
    Title: Yup.string().required('Name ist erforderlich !!'),
    pricePerDay: Yup.number().required('Preis pro Tag ist erforderlich !!'),
    Description: Yup.string(),
    category: Yup.string(),
    condition: Yup.string(),
    image: Yup.mixed().optional(),
  });
export default addProductSchema;
