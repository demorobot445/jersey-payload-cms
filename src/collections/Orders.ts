import { CollectionConfig } from "payload/types";

const Orders: CollectionConfig = {
  slug: "orders",
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "name",
          type: "text",
          admin: { width: "50%" },
        },
        {
          name: "email",
          type: "text",
          admin: { width: "50%" },
        },
      ],
    },

    {
      name: "address",
      type: "text",
    },
    {
      type: "row",
      fields: [
        {
          name: "city",
          type: "text",
          admin: { width: "50%" },
        },
        {
          name: "zipcode",
          type: "text",
          admin: { width: "50%" },
        },
      ],
    },
    {
      name: "products",
      type: "array",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "name",
              type: "text",
              admin: { width: "50%" },
            },
            {
              name: "size",
              type: "text",
              admin: { width: "50%" },
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "playerName",
              type: "text",
              admin: { width: "50%" },
            },
            {
              name: "playerNumber",
              type: "text",
              admin: { width: "50%" },
            },
          ],
        },
        {
          name: "quantity",
          type: "number",
        },
        {
          name: "price",
          type: "number",
        },
        {
          name: "pdf",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "previews",
          type: "array",
          admin: { initCollapsed: true },
          fields: [{ name: "image", type: "upload", relationTo: "media" }],
        },
        {
          name: "customization",
          type: "group",
          fields: [
            {
              name: "colors",
              type: "array",
              fields: [
                { name: "name", type: "text" },
                { name: "hexcode", type: "text" },
              ],
            },
            {
              name: "texts",
              type: "array",
              fields: [
                { name: "text", type: "text" },
                { name: "size", type: "number" },
                { name: "font", type: "text" },
                { name: "fontColor", type: "text" },
                { name: "strokeWidth", type: "number" },
                { name: "strokeColor", type: "text" },
              ],
            },
            {
              name: "uploads",
              type: "array",
              fields: [{ name: "image", type: "upload", relationTo: "media" }],
            },
          ],
        },
      ],
    },
  ],
};

export default Orders;
