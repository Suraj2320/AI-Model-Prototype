import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '../components/ui/slider';
import { useState } from 'react';

const SliderWrapper = (args: any) => {
    const [value, setValue] = useState(args.defaultValue || [50]);
    return (
        <div className="w-[300px] p-4">
            <Slider 
                {...args} 
                value={value} 
                onValueChange={setValue} 
            />
            <div className="mt-4 text-sm text-muted-foreground">
                Value: {value}
            </div>
        </div>
    );
};

const meta = {
  title: 'UI/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => <SliderWrapper {...args} />,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
};

export const Temperature: Story = {
  args: {
    defaultValue: [0.7],
    max: 2,
    min: 0,
    step: 0.1,
    className: "[&_[role=slider]]:h-4 [&_[role=slider]]:w-4",
  },
};

export const Range: Story = {
  args: {
    defaultValue: [25],
    max: 100,
    step: 1,
  },
};
