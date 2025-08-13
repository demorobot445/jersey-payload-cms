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
import Orders from "./collections/Orders";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    css: path.resolve(__dirname, "styles/stylesheet.scss"),
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
    Orders,
  ],
  globals: [],
  email: {
    transportOptions: {
      host: process.env.SMTP_HOST,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      port: Number(process.env.SMTP_PORT),
      secure: true,
    },
    fromName: "Sports Wear House Dyo",
    fromAddress: process.env.SMTP_USER,
  },
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  cors: "*",
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
