import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: '通用/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
	label: 'Button',
};

export const Secondary = Template.bind({});

Secondary.args = {
	label: 'Button 2',
};