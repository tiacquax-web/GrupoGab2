import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LOGIN_PATH, getPortalForgotPasswordUrl } from "@/const";
import { ArrowLeft, KeyRound, ShieldAlert } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLocation } from "wouter";

export default function ForgotPassword() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRecover = () => {
    if (!email.trim()) {
      toast.error("Informe um e-mail válido para recuperar a senha.");
      return;
    }

    setLoading(true);
    window.location.href = getPortalForgotPasswordUrl(email.trim());
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md border-border/70 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <KeyRound className="h-5 w-5 text-primary" />
            Recuperar senha
          </CardTitle>
          <CardDescription>
            Digite seu e-mail corporativo para continuar no portal seguro.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="seu.email@empresa.com"
            />
          </div>

          <Button
            className="w-full"
            size="lg"
            onClick={handleRecover}
            disabled={loading}
          >
            Recuperar senha
          </Button>

          <Button
            type="button"
            variant="ghost"
            className="w-full"
            onClick={() => setLocation(LOGIN_PATH)}
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para login
          </Button>

          <div className="flex items-start gap-2 rounded-md border border-border/70 bg-muted/40 p-3 text-xs text-muted-foreground">
            <ShieldAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
            Para maior segurança, a redefinição de senha é processada apenas no
            provedor central de autenticação.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
