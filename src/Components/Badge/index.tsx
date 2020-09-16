import propTypes from 'prop-types';
import React from 'react';
import { NutrientsE } from '../../App/Helpers/Nutrients';
import './badge.scss';

export interface BadgeProps {
  type: NutrientsE;
  value: number;
  size?: 'Large' | 'Normal'
};

export function Badge(props: BadgeProps) {

  return (
    <div className={`
      badge 
      badge-${props.type.toLowerCase()}
      badge-${props.size?.toLowerCase()}
    `}>
      <div className={`badge-title`}>
        { props.type }
      </div>
      <div className={`
            badge-value 
            ${
              props.value < 0 ? 
                'badge-value-negative' : ''
            }`}>
        { 
          props.value
        }
      </div>
    </div>
  );
};

Badge.propTypes = {
  type: propTypes.string.isRequired,
  value: propTypes.number,
  size: propTypes.string,
};

Badge.defaultProps = {
  value: 0,
  size: 'Normal',
};