import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'serviceCategory',
  title: 'Service Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Service Main Page Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'servicesHeroImage',
      title: 'Inner Page Hero Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'innerHeroTitle',
      title: 'Inner Page Hero Title',
      type: 'text',
    }),
    defineField({
      name: 'servicesImage',
      title: 'Inner Page Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),


    defineField({
      name: 'categoryTitle',
      title: 'Title For Service Description',
      type: 'text',
    }),
    defineField({
      name: 'description',
      title: 'Short Description For Service Description',
      type: 'text',
    }),
    defineField({
      name: 'categoryDescription',
      title: 'Detailed Description For Service Description',
      type: 'text',
    }),
    
    

    // Services
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'serviceName',
              title: 'Service Name',
              type: 'string',
            }),
            defineField({
              name: 'serviceItemDescription',
              title: 'Explain About Service',
              type: 'string',
            }),
            defineField({
              name: 'serviceDescription',
              title: 'Service Description',
              type: 'reference',
              to: [{ type: 'serviceDescription' }],
            }),
            defineField({
              name: 'pricing',
              title: 'Time-Based Pricing',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'duration',
                      title: 'Duration',
                      type: 'string',
                    }),
                    defineField({
                      name: 'price',
                      title: 'Price',
                      type: 'number',
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
