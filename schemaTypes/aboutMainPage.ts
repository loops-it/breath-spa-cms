import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutMainPage',
  title: 'About Page Data',
  type: 'document',
  fields: [
    // hero sec
    defineField({
        name: 'AboutsHeroImage',
        title: 'Hero Section Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
    //   section one
    defineField({
      name: 'sectionOneTitle',
      title: 'About Breath Section Title',
      type: 'text',
    }),
    defineField({
      name: 'sectionOneImage',
      title: 'About Breath Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'sectionOneDescription',
      title: 'About Breath Section Description',
      type: 'text',
    }),
    defineField({
      name: 'sectionOneButton',
      title: 'About Breath Button Text',
      type: 'text',
    }),
    defineField({
      name: 'sectionOneButtonLink',
      title: 'About Breath Button Link',
      type: 'string',
    }),

    // second sec
    defineField({
        name: 'secTwoTitle',
        title: 'Why Choose Us Section Title',
        type: 'text',
      }),
      defineField({
        name: 'sectionTwoImage',
        title: 'Why Choose Us Section Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'sectionTwoDescription',
        title: 'Why Choose Us Section Description',
        type: 'text',
      }),
      defineField({
        name: 'sectionTwoButton',
        title: 'Why Choose Us Button Text',
        type: 'text',
      }),
      defineField({
        name: 'sectionTwoButtonLink',
        title: 'Why Choose Us Button Link',
        type: 'string',
      }),

  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
