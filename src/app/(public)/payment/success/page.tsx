import { CheckCircle, Mail, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-gray-900">
              Pagamento Confirmado!
            </h1>
            <p className="text-lg text-gray-600">
              Seu pagamento foi processado com sucesso
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
            <div className="flex justify-center">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-blue-900">
                Verifique seu email
              </h3>
              <p className="text-sm text-blue-700">
                Enviamos as informações de acesso e próximos passos para seu
                email. Verifique também a caixa de spam.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 text-left space-y-2">
            <h4 className="font-medium text-gray-900">O que acontece agora?</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Você receberá um email para criar a senha</li>
              <li>• Nossa equipe entrará em contato em até 72 horas</li>
              <li>• Começaremos a configuração da sua clínica</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
