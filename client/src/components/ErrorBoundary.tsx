import { cn } from "@/lib/utils";
import { AlertTriangle, Building2, Home, RefreshCcw } from "lucide-react";
import { Component, ReactNode } from "react";
import { LOGIN_PATH } from "@/const";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    console.error("[ErrorBoundary] Runtime error captured:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="relative min-h-screen overflow-hidden bg-background">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-8 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
          </div>

          <div className="relative flex min-h-screen items-center justify-center p-6">
            <div className="w-full max-w-xl rounded-2xl border border-border/70 bg-card/90 p-6 shadow-xl backdrop-blur sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Grupo GAB
                  </p>
                  <h2 className="text-lg font-semibold tracking-tight">
                    Sistema de Gestão Integrada
                  </h2>
                </div>
              </div>

              <div className="mb-6 rounded-xl border border-destructive/30 bg-destructive/10 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  <p className="text-sm font-medium text-destructive">
                    Ocorreu uma instabilidade inesperada
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  A interface foi protegida para não exibir conteúdo técnico.
                  Você pode recarregar a página ou voltar para o login seguro.
                </p>
              </div>

              <div className="mb-4 grid gap-2 sm:grid-cols-2">
                <button
                  onClick={() => window.location.reload()}
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium",
                    "bg-primary text-primary-foreground hover:opacity-90"
                  )}
                >
                  <RefreshCcw size={16} />
                  Recarregar
                </button>
                <button
                  onClick={() => {
                    window.location.href = LOGIN_PATH;
                  }}
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium",
                    "border border-border bg-background hover:bg-accent"
                  )}
                >
                  <Home size={16} />
                  Ir para login
                </button>
              </div>

              <details className="group rounded-lg border border-border/70 bg-muted/40 p-3">
                <summary className="cursor-pointer text-xs font-medium text-muted-foreground">
                  Detalhes técnicos (somente suporte)
                </summary>
                <pre className="mt-3 max-h-40 overflow-auto whitespace-pre-wrap text-xs text-muted-foreground">
                  {this.state.error?.stack || this.state.error?.message}
                </pre>
              </details>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
