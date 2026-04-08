import { Badge } from "@/components/ui/badge";
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
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FORGOT_PASSWORD_PATH,
  getPortalForgotPasswordUrl,
  getPortalLoginUrl,
} from "@/const";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { useLocation } from "wouter";

const highlights = [
  "Gestão financeira e operacional centralizada",
  "Painéis de controle para tomada de decisão",
  "Rastreabilidade de atividades por usuário",
];

export default function Login() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [recovering, setRecovering] = useState(false);

  const welcomeMessage = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  }, []);

  const handleLogin = () => {
    window.location.href = getPortalLoginUrl();
  };

  const handleForgotPassword = () => {
    if (!email.trim()) {
      toast.error("Informe seu e-mail corporativo para continuar.");
      return;
    }

    setRecovering(true);
    toast.success("Redirecionando para recuperação de senha segura...");
    window.location.href = getPortalForgotPasswordUrl(email.trim());
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-8 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-8 px-4 py-10 lg:grid-cols-2 lg:px-8">
        <section className="space-y-6">
          <Badge
            variant="outline"
            className="border-primary/40 bg-primary/10 text-primary"
          >
            Plataforma corporativa
          </Badge>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Grupo GAB</p>
                <h1 className="text-2xl font-bold tracking-tight">
                  Sistema de Gestão Integrada
                </h1>
              </div>
            </div>

            <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
              {welcomeMessage}. Acesse um ambiente seguro, moderno e escalável,
              pronto para operações de empresas de grande porte.
            </p>
          </div>

          <div className="grid gap-3">
            {highlights.map(item => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-lg border border-border/60 bg-card/60 px-3 py-2 text-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <Card className="border-border/70 bg-card/90 shadow-xl backdrop-blur">
            <CardHeader className="space-y-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Acesso seguro</CardTitle>
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <CardDescription>
                Entre com seu acesso corporativo ou recupere sua senha.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="entrar" className="gap-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="entrar">Entrar</TabsTrigger>
                  <TabsTrigger value="recuperar">Esqueci minha senha</TabsTrigger>
                </TabsList>

                <TabsContent value="entrar" className="space-y-4 pt-2">
                  <div className="rounded-lg border border-border/70 bg-background/60 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <LockKeyhole className="h-4 w-4 text-primary" />
                      <p className="text-sm font-medium">
                        Login centralizado (SSO/OAuth)
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      A autenticação é realizada pelo portal seguro da
                      organização, com sessão protegida por token e cookies.
                    </p>
                  </div>

                  <Button onClick={handleLogin} size="lg" className="w-full">
                    Entrar no sistema
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Não consegue acessar?{" "}
                    <button
                      type="button"
                      onClick={() => setLocation(FORGOT_PASSWORD_PATH)}
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Recuperar senha
                    </button>
                  </p>
                </TabsContent>

                <TabsContent value="recuperar" className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="recover-email">E-mail corporativo</Label>
                    <Input
                      id="recover-email"
                      type="email"
                      placeholder="seu.email@empresa.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>

                  <Button
                    onClick={handleForgotPassword}
                    size="lg"
                    className="w-full"
                    disabled={recovering}
                  >
                    <KeyRound className="h-4 w-4" />
                    Recuperar senha
                  </Button>

                  <Separator />

                  <p className="text-xs text-muted-foreground">
                    Você será redirecionado ao portal de identidade para concluir
                    a recuperação com segurança.
                  </p>
                </TabsContent>
              </Tabs>

              <div className="mt-6 flex items-center gap-2 rounded-md bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Plataforma preparada para gestão completa e governança.
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
