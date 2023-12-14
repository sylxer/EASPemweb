import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import Customers from './collections/Customers'

// Import env package
import dotenv from "dotenv/config";

const serverURL = process.env.PAYLOAD_PUBLIC_SERVER_URL;
const clientURLS = JSON.parse(process.env.PAYLOAD_PUBLIC_CLIENT_URLS);

export default buildConfig({
  serverURL: serverURL,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  cors: clientURLS,
  csrf: clientURLS,
  defaultDepth: 1,
  maxDepth: 5,
  editor: slateEditor({}),
  collections: [Users, Customers],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  upload: {
		limits: {
			fileSize: 10000000, // 10MB
		},
	},
})
