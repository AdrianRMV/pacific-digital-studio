/**
 * Portfolio projects for Pacific Digital Studio.
 * Add or edit entries here to update the Selected Work section.
 * Place preview images or GIFs in /public/projects/ and reference them as /projects/filename.
 */

export type Project = {
    id: string;
    title: string;
    description: string;
    tech: string[];
    /** Path to image or GIF in /public/projects/ (e.g. /projects/roofing-preview.gif) */
    preview: string;
    /** Live website URL */
    liveUrl: string;
    /** Optional GitHub or other code repository URL */
    githubUrl?: string;
};

export const projects: Project[] = [
    {
        id: 'contractor-rebeca-business',
        title: 'Ac Eco Clean & Contruct',
        description:
            'Modern responsive website designed for a Vancouver general contractor cleaning services.',
        tech: ['Astro', 'React', 'Tailwind CSS'],
        preview: '/projects/ac-eco-clean.gif',
        liveUrl: 'https://ac-eco-cleaning.vercel.app/',
        // githubUrl: 'https://github.com',
    },
    {
        id: 'landscaping-services',
        title: 'Green Land Solutions',
        description:
            'Clean, professional site for a residential and commercial landscaping service with easy booking.',
        tech: ['Next.js', 'Tailwind CSS'],
        preview: '/projects/green-land.gif',
        liveUrl: 'https://green-land-self.vercel.app/',
    },
    // {
    //     id: 'wellness-clinic',
    //     title: 'Pacific Wellness Clinic',
    //     description:
    //         'Calm, credible website for a Vancouver wellness clinic—team, services, and patient contact.',
    //     tech: ['React', 'Tailwind CSS'],
    //     preview: '/projects/wellness-preview.jpg',
    //     liveUrl: 'https://example.com',
    // },
];
