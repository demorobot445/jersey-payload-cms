import { CollectionConfig } from "payload/types";

const Colors: CollectionConfig = {
  slug: "colors",
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
      name: "hexCode",
      type: "text",
      required: true,
    },
  ],
};

export default Colors;
