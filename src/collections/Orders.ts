import { CollectionConfig } from "payload/types";

const Orders: CollectionConfig = {
  slug: "orders",
  access: {
    read: () => true,
    create: () => true,
  },
  hooks: {
    afterChange: [
      async ({ operation, doc, req }) => {
        if (operation === "create") {
          const attachments: any[] = [];

          // Loop over products and grab PDFs
          if (Array.isArray(doc.products)) {
            for (const product of doc.products) {
              if (product.pdf) {
                let pdfDoc = product.pdf;

                // If it's just an ID, fetch the full media document
                if (typeof pdfDoc === "string") {
                  pdfDoc = await req.payload.findByID({
                    collection: "media",
                    id: pdfDoc,
                  });
                }

                // If valid file, add as attachment
                if (pdfDoc?.filename) {
                  attachments.push({
                    filename: pdfDoc.filename,
                    path: `${process.env.BACKEND_URI}${pdfDoc.url}`,
                  });
                }
              }
            }
          }

          const htmlContent = `
          <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px;">
            <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 6px; overflow: hidden; border: 1px solid #ddd;">
              
              <!-- Header -->
              <div style="background-color: #1a1a1a; padding: 20px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0;">Sportswear House Dyo</h1>
              </div>
        
              <!-- Body -->
              <div style="padding: 20px;">
                <h2 style="color: #333;">Thank you for your order, ${doc.name}!</h2>
                <p style="color: #555;">We’ve received your order and will process it soon. Below are your order details:</p>
        
                <!-- Order Details Table -->
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                  <thead>
                    <tr>
                      <th style="text-align: left; border-bottom: 2px solid #eee; padding: 8px;">Product</th>
                      <th style="text-align: left; border-bottom: 2px solid #eee; padding: 8px;">Size</th>
                      <th style="text-align: left; border-bottom: 2px solid #eee; padding: 8px;">Qty</th>
                      <th style="text-align: left; border-bottom: 2px solid #eee; padding: 8px;">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${doc.products
                      .map(
                        (p: any) => `
                      <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${p.name}</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${p.size}</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${p.quantity}</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">$${p.price.toFixed(2)}</td>
                      </tr>
                    `
                      )
                      .join("")}
                  </tbody>
                </table>
        
                <!-- Address -->
                <div style="margin-top: 20px; padding: 10px; background: #fafafa; border: 1px solid #eee;">
                  <strong>Shipping Address:</strong><br/>
                  ${doc.address}, ${doc.city}, ${doc.zipcode}
                </div>
        
                <!-- Footer -->
                <p style="margin-top: 20px; font-size: 14px; color: #888;">
                  This is an automated confirmation email. If you have any questions, reply to this email or contact us at 
                  <a href="mailto:support@sportswearhousedyo.com">support@sportswearhousedyo.com</a>.
                </p>
              </div>
        
            </div>
          </div>
          `;

          // Confirmation email to the customer
          if (doc.email) {
            await req.payload.sendEmail({
              from: `"Sportswear House Dyo" <${process.env.SMTP_USER}>`,
              to: doc.email,
              subject: "Your Order Confirmation",
              html: htmlContent,
              attachments,
            });
          }
          if (process.env.ADMIN_EMAIL) {
            await req.payload.sendEmail({
              from: `"Sportswear House Dyo" <${process.env.SMTP_USER}>`,
              to: process.env.ADMIN_EMAIL,
              subject: `New Order Received from ${doc.name}`,
              html: htmlContent,
              attachments,
            });
          }
        }
      },
    ],
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
        // {
        //   name: "previews",
        //   type: "array",
        //   admin: { initCollapsed: true },
        //   fields: [{ name: "image", type: "upload", relationTo: "media" }],
        // },
        {
          name: "customization",
          type: "group",
          fields: [
            {
              name: "colors",
              type: "array",
              admin: { initCollapsed: true },
              fields: [
                { name: "name", type: "text" },
                { name: "hexcode", type: "text" },
              ],
            },
            {
              name: "texts",
              type: "array",
              admin: { initCollapsed: true },
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
              admin: { initCollapsed: true },
              fields: [{ name: "image", type: "upload", relationTo: "media" }],
            },
          ],
        },
      ],
    },
  ],
};

export default Orders;
