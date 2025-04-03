import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'text',
    }),
    defineField({
      name: 'testimonialsArray',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'position',
              title: 'Position',
              type: 'string',
            }),
            defineField({
              name: 'rate',
              title: 'Rate (1 - 5)',
              type: 'number',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
            }),
            defineField({
              name: 'mainImage',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
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
