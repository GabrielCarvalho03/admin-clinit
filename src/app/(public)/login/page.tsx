"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(1, "Senha é obrigatória"),
});
type LoginForm = z.infer<typeof loginSchema>;
const Login: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    try {
      router.push("/link");
      // if (success) {
      //   toast({
      //     title: "Login realizado com sucesso!",
      //     description: "Bem-vindo ao Clinitt.ai Admin Dashboard"
      //   });
      // } else {
      //   toast({
      //     title: "Erro no login",
      //     description: "Email ou senha inválidos",
      //     variant: "destructive"
      //   });
      // }
    } catch (error) {
      toast.error("Erro no login", {
        description: "Ocorreu um erro inesperado. Tente novamente.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-clinitt-light to-clinitt-secondary/20">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-4 text-center">
          <CardTitle className="text-2xl font-bold text-clinitt-primary">
            Clinitt.ai Admin
          </CardTitle>
          <p className="text-gray-600">Acesse o dashboard administrativo</p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@clinitt.ai"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password")}
                className={errors.password ? "border-red-500" : ""}
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-clinitt-primary hover:bg-clinitt-primary/90"
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 font-medium mb-2">
              Credenciais de teste:
            </p>
            <p className="text-sm text-gray-500">Email: admin@clinitt.ai</p>
            <p className="text-sm text-gray-500">Senha: admin123</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default Login;
