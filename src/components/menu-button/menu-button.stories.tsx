import type { Meta, StoryObj } from '@storybook/react';

import { MenuButton } from './menu-button';
import { useState } from 'react';

const meta: Meta<typeof MenuButton> = {
    title: 'Atoms/MenuButton',
    component: MenuButton,
};

export default meta;
type Story = StoryObj<typeof MenuButton>;

const StatefullButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
    );
};


export const Primary: Story = {
    render: () => <StatefullButton />,
};
