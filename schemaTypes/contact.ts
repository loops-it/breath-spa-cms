import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactMain',
  title: 'Contact Page Data',
  type: 'document',
  fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'text',
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
