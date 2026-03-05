'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from '@/sanity/schemas'

export default defineConfig({
  name: 'workshop-demo',
  title: 'Workshop Demo',
  projectId: 'z4420bgq',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
  basePath: '/studio',
})
