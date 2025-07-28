import { CollectionConfig } from "payload/types";

const Products: CollectionConfig = {
  slug: "products",
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
      admin: {
        position: "sidebar",
      },
      name: "quantityBasedPrices",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "quantity",
          type: "number",
          required: true,
        },
        {
          name: "price",
          type: "number",
          required: true,
        },
      ],
    },
    {
      admin: {
        position: "sidebar",
      },
      name: "sizes",
      type: "array",
      minRows: 1,
      fields: [{ name: "name", type: "text", required: true }],
    },
    {
      name: "previewImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      label: "GLB Model",
      name: "model",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "patterns",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "patternSvg",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "colorOptions",
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

export default Products;
