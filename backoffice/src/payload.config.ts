import { buildConfig } from 'payload/config';
import path from 'path';
import { payloadCloud } from '@payloadcms/plugin-cloud';

import BasicPage from './collections/BasicPage';
import Homepage from './collections/Homepage';
import Media from './collections/Media';
import Users from './collections/Users';

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Homepage, BasicPage, Media, Users],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
});
