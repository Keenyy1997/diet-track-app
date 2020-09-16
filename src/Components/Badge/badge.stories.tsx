import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BadgeProps, Badge } from './index';
import { NutrientsE } from '../../App/Helpers/Nutrients';

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Base: Story<BadgeProps> = (args) => <Badge {...args} />;

Base.args = {
  type: NutrientsE.Protein,
  value: 15,
};
