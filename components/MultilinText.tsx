import type {FC} from 'react';
import {Fragment} from 'react';

export interface MultiLineTextComponentProps {
  text?: string;
}

const MultiLineText: FC<MultiLineTextComponentProps> = ({text}) => {
  if (!text) {
    return null;
  }
  return (
    <Fragment>
      {`${text}`.split('\n').map((item, index) => {
        return index === 0 ? item : [<br key={index} />, item];
      })}
    </Fragment>
  );
};

export default MultiLineText;
