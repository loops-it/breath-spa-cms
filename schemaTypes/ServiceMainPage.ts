import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'serviceMainPage',
  title: 'Service Page Data',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title For Service Description',
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
      title: 'Inner Page Hero Section Image',
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
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
