import {defineField, defineType} from 'sanity'

export const BlogSchema = defineType({
  name: 'Blog',
  title: 'Blog',
  type: 'document',
  
  fields: [
    defineField({
      name: 'name',
      title:'Blog',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title:'slug',
      type: 'slug',
      options: {source: 'title'},
    }),
    defineField({
      name: 'description',
      title:'Description',
      type: 'text',
      
          }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      })
    ]
})