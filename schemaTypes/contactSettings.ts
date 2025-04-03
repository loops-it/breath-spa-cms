import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactSettings",
  title: "Contact Settings",
  type: "document",
  fields: [
    defineField({
      name: "recipientEmail",
      title: "Recipient Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "email",
      title: "App Email",
      type:"string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name:"password",
      title:"App Password",
      type:"string",
    })
  ],
  preview: {
    select: {
      title: "recipientEmail",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        subtitle: "Contact Settings",
      };
    },
  },
});