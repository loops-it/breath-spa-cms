import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'breath-cms',

  projectId: 'lgb4nu8a',
  dataset: 'breath-spa',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
