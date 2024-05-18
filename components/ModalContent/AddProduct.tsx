import {useFormik} from 'formik';
import {FC} from 'react';
import addProductSchema from '../../validation/addProductSchema';
import TextInput from '../TextInput';
import Button from '../Button';
import TextAreaInput from '../TextAreaInput';
import UploadInput from '../UploadInput';

interface AddProduct {
  name?: string;
  pricePerDay?: string;
  productCreated?: (success: boolean) => void;
}

const AddProduct: FC<AddProduct> = ({name, pricePerDay, productCreated}) => {
  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: addProductSchema(),
    initialValues: {
      name: '',
      pricePerDay: '',
      productDecription: '',
      image: '',
    },
    onSubmit: async (values) => {
      if (values) {
        productCreated?.(true);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} id='addProduct'>
      <div className='flex flex-col gap-y-4'>
        <TextInput
          name='name'
          placeholder='Produktname'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.name}
          isValidating={false}
          touched={formik.touched.name}
        />
        <TextInput
          name='pricePerDay'
          type='number'
          placeholder='Preis pro Tag'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.pricePerDay}
          isValidating={false}
          touched={formik.touched.pricePerDay}
        />
        <TextAreaInput
          name='productDecription'
          placeholder='Produktbeschreibung'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isValidating={false}
        />
        <UploadInput
          onChange={(event) => {
            formik.setFieldValue('image', event?.currentTarget?.files?.[0]);
          }}
        />
      </div>
      <Button form='addProduct' type='submit' className='mt-10' label={'hinzufügen'} />
    </form>
  );
};
export default AddProduct;
