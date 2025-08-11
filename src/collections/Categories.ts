import { CollectionConfig } from "payload/types";

const Categories: CollectionConfig = {
  slug: "categories",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "subCategoriesActive",
      type: "checkbox",
      defaultValue: true,
      required: true,
    },
    {
      name: "products",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
      required: true,
      admin: {
        condition: (_, siblingData) =>
          siblingData.subCategoriesActive === false,
      },
    },
    {
      name: "subCategories",
      type: "array",
      admin: {
        condition: (_, siblingData) => siblingData.subCategoriesActive === true,
      },
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "products",
          type: "relationship",
          relationTo: "products",
          hasMany: true,
          required: true,
        },
      ],
    },
  ],
};

export default Categories;
