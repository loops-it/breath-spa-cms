import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home Page Data',
  type: 'document',
  fields: [
    defineField({
      name: 'heroArray',
      title: 'Hero Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
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
    defineField({
      name: 'sectionOneTitle',
      title: 'Home Section Title',
      type: 'text',
    }),
    defineField({
      name: 'sectionOneImage',
      title: 'Home Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'sectionOneDescription',
      title: 'Home Section Description',
      type: 'text',
    }),
    defineField({
      name: 'sectionOneButton',
      title: 'Home Button Text',
      type: 'text',
    }),
    defineField({
      name: 'sectionOneButtonLink',
      title: 'Home Button Link',
      type: 'url',
    }),

    // second sec
    defineField({
        name: 'secTwoTitle',
        title: 'Location Section Title',
        type: 'text',
      }),
      defineField({
        name: 'sectionTwoImage',
        title: 'Location Section Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'sectionTwoDescription',
        title: 'Location Section Description',
        type: 'text',
      }),
      defineField({
        name: 'sectionTwoButton',
        title: 'Location Button Text',
        type: 'text',
      }),
      defineField({
        name: 'sectionTwoButtonLink',
        title: 'Location Button Link',
        type: 'url',
      }),

  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
