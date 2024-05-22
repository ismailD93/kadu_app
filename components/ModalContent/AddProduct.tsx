import {useFormik} from 'formik';
import {FC} from 'react';
import addProductSchema from '../../validation/addProductSchema';
import TextInput from '../TextInput';
import Button from '../Button';
import TextAreaInput from '../TextAreaInput';
import UploadInput from '../UploadInput';
import {useRouter} from 'next/navigation';

interface AddProduct {
  name?: string;
  pricePerDay?: string;
  userId: string;
  productCreated?: (success: boolean) => void;
}

const AddProduct: FC<AddProduct> = ({productCreated, userId}) => {
  const router = useRouter();
  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: addProductSchema(),
    initialValues: {
      Title: '',
      pricePerDay: '',
      Description: '',
      image: '',
      category: '',
      condition: '',
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('Title', values.Title);
      formData.append('PricePerDay', values.pricePerDay);
      formData.append('Description', values.Description);
      formData.append('Category', values.category);
      formData.append('Condition', values.condition);
      formData.append('Owner', userId);
      if (values.image) {
        formData.append('image', values.image);
      }
      try {
        const response = await fetch('http://localhost:5258/api/Product', {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          productCreated?.(true);
          router.refresh();
        } else {
          console.error('Failed to create product');
          productCreated?.(false);
        }
      } catch (error) {
        console.error('Error creating product:', error);
        productCreated?.(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} id='addProduct'>
      <div className='flex flex-col gap-y-4'>
        <TextInput
          name='Title'
          placeholder='Produktname'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.Title}
          isValidating={false}
          touched={formik.touched.Title}
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
        <TextInput
          name='condition'
          placeholder='Zustand'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isValidating={false}
          error={formik.errors.condition}
          touched={formik.touched.condition}
        />
        <TextInput
          name='category'
          placeholder='Kategorie'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isValidating={false}
          error={formik.errors.category}
          touched={formik.touched.category}
        />
        <TextAreaInput
          name='Description'
          placeholder='Produktbeschreibung'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isValidating={false}
          error={formik.errors.Description}
        />
        <UploadInput
          onChange={(event) => {
            formik.setFieldValue('image', event.currentTarget.files?.[0]);
          }}
        />
      </div>
      <Button form='addProduct' type='submit' className='mt-10' label={'hinzufügen'} />
    </form>
  );
};

export default AddProduct;
