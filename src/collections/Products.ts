import SingleColorSelect from "../components/SingleColorSelect";
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
      type: "tabs",
      tabs: [
        {
          label: "Basic",
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

              fields: [
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
          ],
        },
        {
          label: "Pattern",
          fields: [
            {
              name: "patterns",
              type: "array",
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
                      name: "isGradient",
                      type: "checkbox",
                      label: "Is Gradient?",
                      defaultValue: false,
                    },

                    {
                      name: "title",
                      type: "text",
                      required: true,
                    },

                    // -----------------------------
                    // NON-GRADIENT: Solid Fill Setup
                    // -----------------------------
                    {
                      name: "svgColorId",
                      label: "SVG Color Group ID",
                      type: "text",
                      required: true,
                      admin: {
                        condition: (_, siblingData) => !siblingData?.isGradient,
                      },
                    },
                    {
                      name: "defaultColorHexCode",
                      type: "relationship",
                      relationTo: "colors",
                      required: true,
                      label: "Color",
                      admin: {
                        condition: (_, siblingData) => !siblingData?.isGradient,
                        components: {
                          Field: SingleColorSelect,
                        },
                      },
                    },

                    // -----------------------------
                    // GRADIENT: Gradient Fill Setup
                    // -----------------------------
                    {
                      name: "svgGradientId",
                      label: "SVG Gradient ID",
                      type: "text",
                      required: true,
                      admin: {
                        condition: (_, siblingData) =>
                          siblingData?.isGradient === true,
                      },
                    },
                    {
                      type: "row",
                      admin: {
                        condition: (_, siblingData) =>
                          siblingData?.isGradient === true,
                      },
                      fields: [
                        {
                          name: "gradientStartColor",
                          label: "Gradient Start",
                          type: "relationship",
                          relationTo: "colors",
                          required: true,
                          admin: {
                            components: {
                              Field: SingleColorSelect,
                            },
                          },
                        },
                        {
                          name: "gradientEndColor",
                          label: "Gradient End",
                          type: "relationship",
                          relationTo: "colors",
                          required: true,
                          admin: {
                            components: {
                              Field: SingleColorSelect,
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Quantity And Size",
          fields: [
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
          ],
        },
        {
          label: "Preset",
          fields: [
            {
              name: "presets",
              type: "array",
              fields: [
                {
                  name: "name",
                  type: "text",
                  required: true,
                },
                {
                  name: "selectCameraAngle",
                  type: "select",
                  defaultValue: "front",
                  admin: {
                    isClearable: false,
                  },
                  options: [
                    {
                      label: "Front",
                      value: "front",
                    },
                    {
                      label: "Back",
                      value: "back",
                    },
                    {
                      label: "Left",
                      value: "left",
                    },
                    {
                      label: "Right",
                      value: "right",
                    },
                  ],
                },
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
              name: "presetSvgLibrary",
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
              name: "textPresets",
              type: "array",
              fields: [
                {
                  name: "name",
                  type: "text",
                  required: true,
                },
                {
                  name: "selectCameraAngle",
                  type: "select",
                  defaultValue: "front",
                  admin: {
                    isClearable: false,
                  },
                  options: [
                    {
                      label: "Front",
                      value: "front",
                    },
                    {
                      label: "Back",
                      value: "back",
                    },
                    {
                      label: "Left",
                      value: "left",
                    },
                    {
                      label: "Right",
                      value: "right",
                    },
                  ],
                },
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
  ],
};

export default Products;
