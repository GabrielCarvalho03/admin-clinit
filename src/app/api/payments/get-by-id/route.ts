import { stripeCliente } from "@/lib/stripe/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    const session = await stripeCliente.checkout.sessions.retrieve(
      body.sessionId
    );

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
