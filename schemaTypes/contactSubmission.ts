import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactSubmission',
  title: 'Contact Submission',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email()
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string'
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'privacyPolicy',
      title: 'Privacy Policy Accepted',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required().custom((value) => value === true || 'You must accept the privacy policy')
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm:ss'
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'attachment',
      title: 'Attachment',
      type: 'file',
      options: {
        accept: '.pdf,.jpg,.jpeg,.png'
      }
    })
  ],
  preview: {
    select: {
      title: 'firstName',
      subtitle: 'lastName'
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: `${title} ${subtitle}`,
        subtitle: 'Contact Submission'
      }
    }
  }
})