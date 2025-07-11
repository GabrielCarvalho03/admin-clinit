import { stripeCliente } from "@/lib/stripe/stripe";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const session = await stripeCliente.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      currency: "brl",
      line_items: [
        {
          price: process.env.STRIPE_PRICE_CLINITT_DEFAULT,
          quantity: 1,
        },
      ],
      discounts:
        body.discounts == "297"
          ? []
          : [
              body.discounts == "148"
                ? { coupon: process.env.STRIPE_DISCOUNT_148 }
                : { coupon: process.env.STRIPE_DISCOUNT_97 },
            ],
      payment_intent_data: {},
      phone_number_collection: {
        enabled: true,
      },
      metadata: {
        clinicId: body.clinicId,
      },

      success_url: `${process.env.NEXT_PUBLIC_URL}/payment/success`,
      cancel_url: `https://clinitt.vercel.app/success/cancel`,
    });

    return NextResponse.json(
      {
        url: session.url,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Erro ao criar sessão:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
