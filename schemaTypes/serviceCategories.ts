import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'serviceDescription',
  title: 'Service Types',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Description Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
