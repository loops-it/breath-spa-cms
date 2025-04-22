import { defineField, defineType } from 'sanity'
// 123
export default defineType({
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  fields: [
      defineField({
        name: 'email',
        title: 'Title',
        type: 'text',
      }),
      defineField({
        name: 'subscribedAt',
        title: 'Subscribed At',
        type: 'datetime',
      }),
  ],
  preview: {
    select: {
      title: 'email',
    },
  },
})
