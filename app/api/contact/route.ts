"use server"

import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
    try {
        const { firstName, lastName, email, subject, message } = await req.json()

        // Basic validation
        if (!firstName || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        const { error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: process.env.CONTACT_EMAIL!,
            replyTo: email,
            subject: `[Portfolio] ${subject}`,
            html: `
        <div style="font-family: monospace; background: #1e1e1e; color: #d4d4d4; padding: 32px; border-radius: 8px;">
          <h2 style="color: #4ec9b0; margin-bottom: 24px;">New message from portfolio</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="color: #858585; padding: 8px 0; width: 120px;">Name</td>
              <td style="color: #d4d4d4; padding: 8px 0;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="color: #858585; padding: 8px 0;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${email}" style="color: #569cd6;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="color: #858585; padding: 8px 0;">Subject</td>
              <td style="color: #d4d4d4; padding: 8px 0;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background: #252526; border-left: 3px solid #007acc; border-radius: 2px;">
            <p style="color: #858585; font-size: 11px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.08em;">Message</p>
            <p style="color: #d4d4d4; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>

          <p style="color: #3e3e3e; font-size: 11px; margin-top: 24px;">
            Sent from nadeesha.dev portfolio contact form
          </p>
        </div>
      `,
        })

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({ success: true })

    } catch (err) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}