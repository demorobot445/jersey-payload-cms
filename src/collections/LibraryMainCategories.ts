import { CollectionConfig } from "payload/types";

const LibraryMainCategories: CollectionConfig = {
  slug: "library-main-categories",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
};

export default LibraryMainCategories;
