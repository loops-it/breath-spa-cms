import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'breath-spa-cms',

  projectId: '0niaw5c6',
  dataset: 'breath-spa',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
