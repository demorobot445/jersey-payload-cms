import ColorSwatches from "../components/ColorSwatches";
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
      required: true,
      hasMany: true,
      admin: {
        components: {
          Field: ColorSwatches,
        },
      },
    },
  ],
};

export default ColorPallets;
