import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/candidate-inquiry
 *
 * Receives candidate inquiry form submissions and sends email notification.
 * In production, this connects to ZeptoMail SMTP via the WordPress backend.
 * For the Next.js site, we log the inquiry and can forward to any email service.
 */

type InquiryPayload = {
  candidateId: string;
  candidateName: string;
  candidateRole: string;
  candidateRate: string;
  visitorName: string;
  visitorEmail: string;
  visitorPhone: string;
  sourcePage: string;
};

/* Simple in-memory rate limiter: max 3 submissions per email per 10 minutes */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function isRateLimited(email: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(email);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(email, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as InquiryPayload;

    /* Validate required fields */
    const {
      candidateId,
      candidateName,
      candidateRole,
      candidateRate,
      visitorName,
      visitorEmail,
      visitorPhone,
      sourcePage,
    } = body;

    if (
      !candidateId ||
      !candidateName ||
      !candidateRole ||
      !visitorName ||
      !visitorEmail ||
      !visitorPhone
    ) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    /* Email format check */
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(visitorEmail)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    /* Rate limiting */
    if (isRateLimited(visitorEmail)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    /* Log the inquiry (visible in Vercel logs) */
    console.log("=== CANDIDATE INQUIRY ===");
    console.log(`Candidate: ${candidateName} (${candidateRole}) — ${candidateRate}`);
    console.log(`Visitor: ${visitorName} | ${visitorEmail} | ${visitorPhone}`);
    console.log(`Source: ${sourcePage}`);
    console.log(`Time: ${new Date().toISOString()}`);
    console.log("========================");

    /**
     * TODO: Connect to email service (ZeptoMail, Resend, SendGrid, etc.)
     *
     * Example with Resend:
     * await resend.emails.send({
     *   from: "Zedtreeo <noreply@zedtreeo.com>",
     *   to: "info@zedtreeo.com",
     *   subject: `Candidate Inquiry: ${candidateName} — ${candidateRole}`,
     *   html: `<h2>New Candidate Inquiry</h2>
     *     <p><strong>Candidate:</strong> ${candidateName} — ${candidateRole} (${candidateRate})</p>
     *     <p><strong>Visitor:</strong> ${visitorName}</p>
     *     <p><strong>Email:</strong> ${visitorEmail}</p>
     *     <p><strong>Phone:</strong> ${visitorPhone}</p>
     *     <p><strong>Source Page:</strong> https://zedtreeo.com${sourcePage}</p>`,
     * });
     */

    return NextResponse.json({
      success: true,
      message: "Inquiry received. We'll be in touch within 2 hours.",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
