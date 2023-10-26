import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
//import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Test',

  projectId: '8pe7spjr',
  dataset: 'production',
  basePath: "/studio",
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
