import { FC } from 'react';

type ButtonProp = {
  variant: string;
};

const Button: FC<ButtonProp> = ({ variant }) => {
  return <button type="button" onClick={() => console.log(variant)}>click me</button>;

export default Button;
