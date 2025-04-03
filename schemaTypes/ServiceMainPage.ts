import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'serviceMainPage',
  title: 'Service Page Data',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
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
      title: 'Hero Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Short Description For Service Description',
      type: 'text',
    }),
    defineField({
      name: 'tagLine',
      title: 'Title For Tag Line Section',
      type: 'text',
    }),
    defineField({
      name: 'tagDescription',
      title: 'Short Description For Tag Line Section',
      type: 'text',
    }),

  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
