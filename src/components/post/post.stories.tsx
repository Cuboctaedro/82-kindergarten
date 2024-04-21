import type { Meta, StoryObj } from '@storybook/react';
import { Post } from './post';

const meta: Meta<typeof Post> = {
    title: 'Organisms/Post',
    component: Post,
};

export default meta;
type Story = StoryObj<typeof Post>;

export const Primary: Story = {
    args: {
        title: 'Η ομάδα του Όσλο ήρθε στο νηπιαγωγείο μας!- Oslo team is here!',
        slug: 'oslo-team-is-here',
        introduction: 'Νηπιαγωγοί και εκπρόσωποι από το Δήμο του Όσλο και το Μητροπολιτικό Πανεπιστήμιο του Όσλο βρέθηκαν για μια εβδομάδα στο νηπιαγωγείο μας.',
        publicationDate: '2024-04-08T00:00+03:00',
        image: {
            url: '//images.ctfassets.net/uvnmk21iuq2g/5nzMAe0qfRLfj1aOCm5hk8/e7010f33c6a49a2ca9222dc629271258/20240220_172544.jpg',
            width: 1640, height: 739,
        },
    },
};
