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
      name: "controls",
      type: "group",
      admin: { position: "sidebar" },
      fields: [
        {
          name: "imageUploadActive",
          type: "checkbox",
          defaultValue: true,
        },
        {
          name: "libraryActive",
          type: "checkbox",
          defaultValue: true,
        },
        {
          name: "textActive",
          type: "checkbox",
          defaultValue: true,
        },
        {
          name: "playerDetailActive",
          type: "checkbox",
          defaultValue: true,
        },
      ],
    },
    {
      admin: {
        initCollapsed: true,
      },
      name: "quantityBasedPrices",
      type: "array",
      minRows: 1,
      required: true,
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
        initCollapsed: true,
      },
      name: "sizes",
      type: "array",
      required: true,
      minRows: 1,
      fields: [{ name: "name", type: "text", required: true }],
    },
    {
      name: "patterns",
      type: "array",
      minRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
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
          admin: {
            initCollapsed: true,
          },
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
