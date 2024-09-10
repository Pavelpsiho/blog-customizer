import type { Meta, StoryObj } from '@storybook/react';
import { ArrowButton } from './ArrowButton';
import { useState } from 'react';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

const ArrowButtonWithState = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleOpen = () => {
		setIsOpen((oldVal) => !oldVal);
	};

	return <ArrowButton toggleOpenFn={toggleOpen} openState={isOpen} />;
};

export const ArrowButtonStory: Story = {
	render: () => <ArrowButtonWithState />,
};
