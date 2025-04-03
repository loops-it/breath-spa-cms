import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteData',
  title: 'Site Data',
  type: 'document',
  fields: [
    defineField({
        name: 'logo',
        title: 'Logo',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'emailArray',
        title: 'Business Emails',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              defineField({
                name: 'email',
                title: 'Email Address',
                type: 'text',
              }),
            ],
          },
        ],
      }),
      defineField({
        name: 'phoneNumberArray',
        title: 'Business Phone Numbers',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              defineField({
                name: 'number',
                title: 'Phone Number',
                type: 'text',
              }),
            ],
          },
        ],
      }),
      defineField({
        name: 'openDays',
        title: 'Hours',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              defineField({
                name: 'day',
                title: 'Day / Days',
                type: 'text',
              }),
              defineField({
                name: 'time',
                title: 'Time',
                type: 'text',
              }),
            ],
          },
        ],
      }),
      defineField({
        name: 'address',
        title: 'Address',
        type: 'text',
      }),
      defineField({
        name: 'socialMedia',
        title: 'Social Media',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              defineField({
                name: 'link',
                title: 'Link',
                type: 'text',
              }),
              defineField({
                name: 'icon',
                title: 'Icon',
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
