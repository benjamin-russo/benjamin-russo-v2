import { CollectionConfig } from 'payload/types';

const BasicPage: CollectionConfig = {
  slug: 'basicPages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      label: 'Titre de la page',
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
        elements: ['h2', 'h3', 'h4', 'link', 'blockquote', 'upload'],
        leaves: ['bold', 'italic'],
        // link: {
        //   // Inject your own fields into the Link element
        //   fields: [
        //     {
        //       name: 'rel',
        //       label: 'Rel Attribute',
        //       type: 'select',
        //       hasMany: true,
        //       options: ['noopener', 'noreferrer', 'nofollow'],
        //     },
        //   ],
        // },
        upload: {
          collections: {
            media: {
              fields: [],
            },
          },
        },
      },
    },
  ],
};

export default BasicPage;
