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
      name: "colorPallets",
      type: "group",
      admin: { position: "sidebar" },
      fields: [
        {
          name: "modelColorPallet",
          type: "relationship",
          relationTo: "color-pallets",
          required: true,
        },
        {
          name: "libraryColorPallet",
          type: "relationship",
          relationTo: "color-pallets",
          required: true,
        },
        {
          name: "textColorPallet",
          type: "relationship",
          relationTo: "color-pallets",
          required: true,
        },
      ],
    },
    {
      name: "controls",
      type: "group",
      admin: { position: "sidebar" },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "rightChestActive",
              type: "checkbox",
              defaultValue: true,
              admin: { width: "50%" },
            },
            {
              name: "leftChestActive",
              type: "checkbox",
              defaultValue: true,
              admin: { width: "50%" },
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "centerChestActive",
              type: "checkbox",
              defaultValue: true,
              admin: { width: "50%" },
            },
            {
              name: "backActive",
              type: "checkbox",
              defaultValue: true,
              admin: { width: "50%" },
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "rightSleeveActive",
              type: "checkbox",
              defaultValue: true,
              admin: { width: "50%" },
            },
            {
              name: "leftSleeveActive",
              type: "checkbox",
              defaultValue: true,
              admin: { width: "50%" },
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "libraryActive",
              type: "checkbox",
              defaultValue: true,
              admin: { width: "50%" },
            },
            {
              name: "textActive",
              type: "checkbox",
              defaultValue: true,
              admin: { width: "50%" },
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "playerDetailActive",
              type: "checkbox",
              defaultValue: true,
              admin: { width: "50%" },
            },
            {
              name: "addToCartActive",
              type: "checkbox",
              defaultValue: true,
              admin: { width: "50%" },
            },
          ],
        },
      ],
    },
    {
      label: "Presets",
      type: "collapsible",
      admin: { position: "sidebar", initCollapsed: true },
      fields: [
        {
          name: "rightChest",
          type: "group",
          fields: [
            {
              type: "row",
              fields: [
                {
                  admin: { width: "50%" },
                  label: "X Axis",
                  name: "positionX",
                  type: "number",
                  required: true,
                },
                {
                  admin: { width: "50%" },
                  label: "Y Axis",
                  name: "positionY",
                  type: "number",
                  required: true,
                },
              ],
            },
            {
              type: "row",
              fields: [
                {
                  admin: { width: "50%" },
                  name: "scale",
                  type: "number",
                  required: true,
                },
                {
                  admin: { width: "50%" },
                  name: "rotate",
                  type: "number",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: "centerChest",
          type: "group",
          fields: [
            {
              type: "row",
              fields: [
                {
                  admin: { width: "50%" },
                  label: "X Axis",
                  name: "positionX",
                  type: "number",
                  required: true,
                },
                {
                  admin: { width: "50%" },
                  label: "Y Axis",
                  name: "positionY",
                  type: "number",
                  required: true,
                },
              ],
            },
            {
              type: "row",
              fields: [
                {
                  admin: { width: "50%" },
                  name: "scale",
                  type: "number",
                  required: true,
                },
                {
                  admin: { width: "50%" },
                  name: "rotate",
                  type: "number",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: "leftChest",
          type: "group",
          fields: [
            {
              type: "row",
              fields: [
                {
                  admin: { width: "50%" },
                  label: "X Axis",
                  name: "positionX",
                  type: "number",
                  required: true,
                },
                {
                  admin: { width: "50%" },
                  label: "Y Axis",
                  name: "positionY",
                  type: "number",
                  required: true,
                },
              ],
            },
            {
              type: "row",
              fields: [
                {
                  admin: { width: "50%" },
                  name: "scale",
                  type: "number",
                  required: true,
                },
                {
                  admin: { width: "50%" },
                  name: "rotate",
                  type: "number",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: "back",
          type: "group",
          fields: [
            {
              type: "row",
              fields: [
                {
                  admin: { width: "50%" },
                  label: "X Axis",
                  name: "positionX",
                  type: "number",
                  required: true,
                },
                {
                  admin: { width: "50%" },
                  label: "Y Axis",
                  name: "positionY",
                  type: "number",
                  required: true,
                },
              ],
            },
            {
              type: "row",
              fields: [
                {
                  admin: { width: "50%" },
                  name: "scale",
                  type: "number",
                  required: true,
                },
                {
                  admin: { width: "50%" },
                  name: "rotate",
                  type: "number",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: "rightSleeve",
          type: "group",
          fields: [
            {
              type: "row",
              fields: [
                {
                  admin: { width: "50%" },
                  label: "X Axis",
                  name: "positionX",
                  type: "number",
                  required: true,
                },
                {
                  admin: { width: "50%" },
                  label: "Y Axis",
                  name: "positionY",
                  type: "number",
                  required: true,
                },
              ],
            },
            {
              type: "row",
              fields: [
                {
                  admin: { width: "50%" },
                  name: "scale",
                  type: "number",
                  required: true,
                },
                {
                  admin: { width: "50%" },
                  name: "rotate",
                  type: "number",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: "leftSleeve",
          type: "group",
          fields: [
            {
              type: "row",
              fields: [
                {
                  admin: { width: "50%" },
                  label: "X Axis",
                  name: "positionX",
                  type: "number",
                  required: true,
                },
                {
                  admin: { width: "50%" },
                  label: "Y Axis",
                  name: "positionY",
                  type: "number",
                  required: true,
                },
              ],
            },
            {
              type: "row",
              fields: [
                {
                  admin: { width: "50%" },
                  name: "scale",
                  type: "number",
                  required: true,
                },
                {
                  admin: { width: "50%" },
                  name: "rotate",
                  type: "number",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: "presetText",
          type: "group",
          fields: [
            {
              type: "row",
              fields: [
                {
                  admin: { width: "50%" },
                  label: "X Axis",
                  name: "positionX",
                  type: "number",
                  required: true,
                },
                {
                  admin: { width: "50%" },
                  label: "Y Axis",
                  name: "positionY",
                  type: "number",
                  required: true,
                },
                {
                  admin: { width: "50%" },
                  name: "textSize",
                  type: "number",
                  required: true,
                },
              ],
            },
          ],
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
