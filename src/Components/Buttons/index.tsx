import React from 'react';

export type ButtonProps = {
  label: string;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
};

export const Button = (props: ButtonProps) => {
  return (
    <>
      <button>
        { props.label } and my size is { props.size ?? 'normal' }
      </button>
    </>
  );
};

