import { CollectionConfig } from 'payload/types';

const Homepage: CollectionConfig = {
  slug: 'homepage',
  admin: {
    useAsTitle: 'Hero.title',
  },
  fields: [
    {
      name: 'Hero',
      type: 'group',
      interfaceName: 'hero',
      fields: [
        {
          label: 'Titre',
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          label: 'Sous titre',
          name: 'subtitle',
          type: 'text',
          required: true,
        },
        {
          name: 'introduction',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'APropos',
      type: 'group',
      interfaceName: 'about',
      fields: [
        {
          label: 'Titre',
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          label: 'Contenu',
          name: 'content',
          type: 'richText',
          required: true,
          admin: {
            elements: ['link'],
            leaves: ['bold', 'italic'],
          },
        },
      ],
    },
    {
      name: 'Services',
      type: 'array',
      interfaceName: 'services',
      minRows: 2,
      maxRows: 2,
      fields: [
        {
          label: 'Titre',
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          label: 'Contenu',
          name: 'content',
          type: 'richText',
          required: true,
          admin: {
            elements: ['link'],
            leaves: ['bold', 'italic'],
          },
        },
      ],
      admin: {
        components: {
          RowLabel: ({ data }) => {
            return data?.title || '';
          },
        },
      },
    },
  ],
};

export default Homepage;
