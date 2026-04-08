import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Bell,
  Building2,
  Palette,
  Save,
  ShieldCheck,
  User,
} from "lucide-react";
import { toast } from "sonner";

export default function Configuracoes() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Configurações</h1>
          <p className="text-sm text-muted-foreground">
            Preferências de conta, segurança e experiência da plataforma.
          </p>
        </div>
        <Badge variant="outline" className="border-primary/40 text-primary">
          Gestão corporativa
        </Badge>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <User className="h-4 w-4 text-primary" />
              Perfil organizacional
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="company">Empresa</Label>
              <Input id="company" defaultValue="Grupo GAB" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="segment">Segmento</Label>
              <Input id="segment" defaultValue="Construção e serviços" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="manager">Responsável</Label>
              <Input id="manager" defaultValue="Administração" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact">E-mail de contato</Label>
              <Input id="contact" defaultValue="contato@grupogab.com" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Building2 className="h-4 w-4 text-primary" />
              Ambiente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="flex items-center justify-between rounded-lg border p-3">
              <span>Modo de alto contraste</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <span>Navegação compacta</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <span>Destaque de alertas críticos</span>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Bell className="h-4 w-4 text-primary" />
              Notificações
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border p-3 text-sm">
              <span>Alertas de vencimento financeiro</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3 text-sm">
              <span>Atualizações de tarefas de projeto</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3 text-sm">
              <span>Resumo diário por e-mail</span>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Segurança e governança
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border p-3 text-sm">
              <span>Exigir reautenticação para ações críticas</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3 text-sm">
              <span>Registrar auditoria detalhada</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3 text-sm">
              <span>Bloqueio automático por inatividade</span>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Palette className="h-4 w-4 text-primary" />
            Aparência da plataforma
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            onClick={() => toast.success("Tema escuro premium aplicado.")}
          >
            Tema corporativo escuro
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.success("Tema claro corporativo aplicado.")}
          >
            Tema corporativo claro
          </Button>
          <Button
            onClick={() => toast.success("Preferências salvas com sucesso.")}
          >
            <Save className="h-4 w-4" />
            Salvar preferências
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
