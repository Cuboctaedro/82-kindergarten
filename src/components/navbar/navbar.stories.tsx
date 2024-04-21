import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './navbar';

const meta: Meta<typeof Navbar> = {
    title: 'Organisms/Navbar',
    component: Navbar,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
    args: {
        submenu: {
            title: 'Το σχολείο μας',
            items: [
                { title: 'Εκπαιδευτικοί', url: '/ekpaideytikoi' },
                {
                    title: 'Προσβασιμότητα σχολείου',
                    url: '/prosvasimotita-sxoleioy',
                },
                { title: 'Κανονισμός Λειτουργίας', url: '/kanonismos-leitoyrgias' },
            ],
        },
    },
};
