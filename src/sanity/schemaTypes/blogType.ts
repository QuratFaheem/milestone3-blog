import {defineField, defineType} from 'sanity'

export const BlogSchema = defineType({
  name: 'Blog',
  title: 'Blog',
  type: 'document',
  
  fields: [
    defineField({
      name: 'name',
      title:'Blog Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title:'slug name',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title:'Description',
          }),
    defineField({
      name: 'image',
      title: 'Blog Image',
      type: 'image',
    }),
  ],
})