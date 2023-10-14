import React from 'react';

// 新增的代码
import './Button.scss';

export interface ButtonProps {
  label: string;
}

export const Button = (props: ButtonProps) => {
  return <button>{ props.label }</button>
}