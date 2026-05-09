import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10).max(20),
  address: z.string().min(5),
  service: z.enum(["replacement", "repair", "storm", "gutters", "unsure"]),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // -----------------------------------------------------------
    // INTEGRATION POINTS — wire these up before launch.
    //
    // 1) SMS confirmation (Twilio)
    //    if (process.env.TWILIO_ACCOUNT_SID) {
    //      const twilio = require("twilio")(
    //        process.env.TWILIO_ACCOUNT_SID,
    //        process.env.TWILIO_AUTH_TOKEN
    //      );
    //      await twilio.messages.create({
    //        from: process.env.TWILIO_FROM,
    //        to: data.phone,
    //        body: `Hi ${data.name.split(" ")[0]}, thanks for contacting Apex Roofing. An inspector will call you within 1 business hour to schedule your free roof inspection.`,
    //      });
    //    }
    //
    // 2) Internal notification (Resend / SendGrid)
    //    if (process.env.RESEND_API_KEY) {
    //      const { Resend } = await import("resend");
    //      const resend = new Resend(process.env.RESEND_API_KEY);
    //      await resend.emails.send({
    //        from: "Apex Lead Form <leads@apexroofing-dallas.com>",
    //        to: ["estimates@apexroofing-dallas.com"],
    //        subject: `New ${data.service} lead — ${data.name}`,
    //        text: JSON.stringify(data, null, 2),
    //      });
    //    }
    //
    // 3) CRM push (HubSpot / Pipedrive)
    //    POST to your CRM endpoint here.
    // -----------------------------------------------------------

    if (process.env.NODE_ENV === "development") {
      console.log("[Apex] New lead:", data);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, errors: err.flatten() },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { ok: false, error: "Internal error" },
      { status: 500 }
    );
  }
}
