import path from "path";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import Media from "./collections/Media";
import Products from "./collections/Products";
import LibraryMainCategories from "./collections/LibraryMainCategories";
import LibrarySubCategories from "./collections/LibrarySubCategories";
import Categories from "./collections/Categories";
import Colors from "./collections/Colors";
import ColorPallets from "./collections/ColorPallets";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    Users,
    Media,
    Products,
    Categories,
    LibraryMainCategories,
    LibrarySubCategories,
    Colors,
    ColorPallets,
  ],
  globals: [],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  cors: [process.env.FRONTEND_URI],
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
