import * as Yup from 'yup';

const addProductSchema = () =>
  Yup.object({
    name: Yup.string().required('Name ist erforderlich !!'),
    pricePerDay: Yup.number().required('Preis pro Tag ist erforderlich !!'),
    productDecription: Yup.string(),
  });
export default addProductSchema;
