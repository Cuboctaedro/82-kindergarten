import type { Meta, StoryObj } from '@storybook/react';
import { Announcements } from './announcements';

const meta: Meta<typeof Announcements> = {
    title: 'Organisms/Announcements',
    component: Announcements,
};

export default meta;
type Story = StoryObj<typeof Announcements>;

export const Primary: Story = {
    args: {
        items: [
            {
                slug: 'abcdef',
                title: 'Ανακοίνωση εγγραφών για το σχολικό έτος 2024-2025',
            },
            {
                slug: 'fghjk',
                title: 'Ορια σχολικής μονάδας 82ου Νηπιαγωγείου Αθηνών',
            },
        ],
    },
    render: (args) => (
        <div className="w-80">
            <Announcements {...args} />
        </div>
    ),
};
