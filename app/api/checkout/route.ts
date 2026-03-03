import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import eventData from "@/content/event.json";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

const VALID_ITEMS = ["seat", "vipDinner"] as const;
type ItemKey = (typeof VALID_ITEMS)[number];

function getPriceId(key: ItemKey): string {
  if (key === "seat") {
    return process.env.STRIPE_SEAT_PRICE_ID || eventData.stripe.seatPriceId;
  }
  return process.env.STRIPE_VIP_DINNER_PRICE_ID || eventData.stripe.vipDinnerPriceId;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items } = body;

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Invalid items" }, { status: 400 });
    }

    const validItems = items.filter((i: string) =>
      VALID_ITEMS.includes(i as ItemKey)
    ) as ItemKey[];

    if (validItems.length === 0) {
      return NextResponse.json({ error: "No valid items provided" }, { status: 400 });
    }

    const origin = req.headers.get("origin") || req.nextUrl.origin;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: validItems.map((key) => ({
        price: getPriceId(key),
        quantity: 1,
      })),
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#countdown`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout error:", err);
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
