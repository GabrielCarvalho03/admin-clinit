"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { Copy, Link } from "lucide-react";
import { useLinks } from "./hooks/use-links/use-links";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/utils/formatCurrency";

export default function Links() {
  const {
    createIsLoading,
    generatedLink,
    selectPrice,
    setSelectPrice,
    handleCreateLink,
  } = useLinks();

  const priceOptions = [
    { value: "297", label: "R$ 297,00" },
    { value: "148", label: "R$ 148,00" },
    { value: "97", label: "R$ 97,00" },
  ];

  return (
    <>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Geração de preços
            </h1>
            <p className="text-gray-600">
              Gere preços personalizados para cada paciente
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Link className="h-5 w-5" />
              Gerar Links de Pagamento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Selecionar Preço
                </label>
                <Select value={selectPrice} onValueChange={setSelectPrice}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Escolha um preço" />
                  </SelectTrigger>
                  <SelectContent>
                    {priceOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={() => handleCreateLink(selectPrice)}
                disabled={createIsLoading}
                className="w-full"
              >
                Gerar Link de Pagamento
              </Button>

              {generatedLink && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Link Gerado
                  </label>
                  <div className="flex gap-2">
                    <Input value={generatedLink} readOnly className="flex-1" />
                    <Button
                      variant="outline"
                      size="icon"
                      // onClick={handleCopyLink}
                      title="Copiar link"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500">
                    Link para pagamento de:{" "}
                    {formatCurrency(Number(selectPrice))}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
