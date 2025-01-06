'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */
import { defineConfig } from 'sanity'
import {visionTool} from '@sanity/vision'
import { schemaTypes } from './schema'
import {structureTool} from 'sanity/structure'



export default defineConfig({
  basePath: '/studio',
  title:'My-Blog-Web',
  projectId:'s4vzxcqz',
  dataset:'production',
  schema : { 
    types:schemaTypes
  },
  plugins: [structureTool(),visionTool(),visionTool()],
})
