import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";

sendgrid.setApiKey(`${process.env.SENDGRID_API}`);

export async function POST(request: Request) {
  const data = await request.json()
  const { name, email, message, service, budget } = data

  try {
    await sendgrid.send({
      to: "info@hostnextra.com",
      from: "contact@packservers.com",
      subject: `Received Email from ${name} via contact form`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Received message from website</title>
          <meta name="description" content="The HTML5">
          <meta name="author" content="HostnExtra">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        </head>
        <body>
          <div style="font-size:18px; padding-top: 10px; margin-left: 20px;"><p>Hey, we have received one message through our contact us form</p></div>
          <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
            </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
                <h3>User details are as follow:</h3>
                <p class="font-size:18px">Name: ${name}</p>
                <p class="font-size:18px">Email: ${email}</p>
                 <p class="font-size:18px">Email: ${service}</p>
                  <p class="font-size:18px">Email: ${budget}</p>
                <div style="font-size: 16px;">
                <p class="font-size:18px">Message:</p>
                <p class="font-size:18px">${message}</p>
                <br>
              </div>
            </div>
        </body>
      </html>`,
    });
    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error."
    return NextResponse.json({ error: message })
  }
}
