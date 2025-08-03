import { CollectionConfig } from "payload/types";

const ColorPallets: CollectionConfig = {
  slug: "color-pallets",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "colors",
      type: "relationship",
      relationTo: "colors",
      hasMany: true,
      required: true,
      maxDepth: 100,
    },
  ],
};

export default ColorPallets;
