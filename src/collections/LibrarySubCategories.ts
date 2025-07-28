import { CollectionConfig } from "payload/types";

const LibrarySubCategories: CollectionConfig = {
  slug: "library-sub-categories",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "mainCategory",
      type: "relationship",
      relationTo: "library-main-categories",
      required: true,
    },
    {
      name: "images",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "colors",
          type: "array",
          fields: [
            {
              name: "svgColorId",
              type: "text",
              required: true,
            },
            {
              name: "defaultColorHexCode",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export default LibrarySubCategories;
