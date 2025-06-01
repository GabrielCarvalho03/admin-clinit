// src/app/(public)/payment/page.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { api } from "@/lib/axios/axios";
import { Link, Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaymentPage() {
  const { paymentValue } = useParams();
  const getPaymentLink = async (paymentValue: string) => {
    console.log("paymentValue", paymentValue);
    try {
      const res = await api.post("/payments/create-payment", {
        discounts: paymentValue,
      });

      window.location.href = res.data.url;
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (paymentValue) {
      getPaymentLink(String(paymentValue));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <Link className="h-12 w-12 text-clinitt-primary" />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">
              Gerando seu link...
            </h1>
            <p className="text-gray-600">
              Aguarde enquanto preparamos seu link de pagamento personalizado
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-clinitt-primary rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-clinitt-primary rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-2 h-2 bg-clinitt-primary rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
