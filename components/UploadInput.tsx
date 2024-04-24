import React, {useState, ChangeEvent, FC} from 'react';
import {TrashIcon} from '../icons/TrashIcon';
interface UploadInputProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const UploadInput: FC<UploadInputProps> = ({onChange}) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newFile = event.target.files?.[0] || null;
    setFile(newFile);
    onChange(event);
  };

  return (
    <>
      <label
        htmlFor='file'
        className='flex h-24 w-full cursor-pointer items-center justify-center rounded-sm border border-dashed border-light-grey-2 text-15 text-turquoise'>
        <input accept='image/*' id='file' name='file' type='file' onChange={handleFileChange} className='hidden' />
        Bild hochladen
      </label>
      {file && (
        <div>
          <div className='text-sm mt-2 w-full rounded border border-light-grey-1 p-2 text-turquoise'>{file.name}</div>
          <div className='mt-2' onClick={() => setFile(null)}>
            <TrashIcon className='w-5 h-5' />
          </div>
        </div>
      )}
    </>
  );
};

export default UploadInput;
