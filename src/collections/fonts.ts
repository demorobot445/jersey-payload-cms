import path from "path";
import { CollectionConfig } from "payload/types";

const Fonts: CollectionConfig = {
  slug: "fonts",
  upload: {
    staticDir: path.resolve(__dirname, "../media/fonts"),
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
};

export default Fonts;
