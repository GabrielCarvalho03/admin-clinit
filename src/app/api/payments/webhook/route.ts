import { api } from "@/lib/axios/axios";
import { db } from "@/lib/firebase/firebase-admin";
import { stripeCliente } from "@/lib/stripe/stripe";
import { FistBuyEmailHtml } from "@/utils/emailBody/frist-buy";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  try {
    if (!sig) throw new Error("Assinatura do Stripe não encontrada!");

    const event = stripeCliente.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    // 🚀 Trate os eventos conforme necessário
    if (event.type === "checkout.session.completed") {
      const customId = uuid();
      const session = event.data.object;

      console.log("session", session.metadata);

      if (session.metadata?.clinicId) {
        const userData = await db
          .collection("users")
          .where("id", "==", session.metadata?.clinicId)
          .get();

        const userId = userData.docs[0].id;
        await db.collection("users").doc(userId).update({
          active: true,
          firstLogin: true,
        });
      } else {
        console.log("session", session.metadata);
        const userData = await db.collection("users").add({
          id: customId,
          email: session.customer_details?.email,
          active: true,
          firstLogin: true,
        });
      }
      const fristEmailBuy = FistBuyEmailHtml({ customId });

      await api.post("/send-email", {
        email: session.customer_details?.email,
        subject: "Seja bem-vindo à Clinitt.ai – Ative sua conta",
        html: fristEmailBuy,
      });
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error("Erro no Webhook:", err.message);
    return NextResponse.json({ error: "Webhook Error" }, { status: 400 });
  }
}
