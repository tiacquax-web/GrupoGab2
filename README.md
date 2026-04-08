# Grupo GAB - Sistema de Gestão Operacional

Plataforma web fullstack para gestão corporativa, com módulos financeiros,
operacionais, CRM, projetos, documentos, chat interno, agenda e administração.

## Stack e Arquitetura

- **Frontend:** React + Vite + Wouter + TanStack Query + tRPC client
- **Backend:** Express + tRPC
- **Banco de dados:** MySQL + Drizzle ORM
- **Autenticação:** OAuth/SSO por portal externo + sessão em cookie
- **Storage de arquivos:** upload via serviço de storage proxy

Estrutura principal:

- `client/` -> aplicação frontend
- `server/` -> API, auth, middlewares e routers tRPC
- `drizzle/` -> schema e migrações do banco
- `shared/` -> constantes e tipos compartilhados

## Funcionalidades Já Implementadas

### 1) Dashboard Executivo

- KPIs de operação e financeiro
- Gráficos de fluxo financeiro e distribuição por centro de custo
- Ações rápidas para módulos principais

### 2) Financeiro

#### Contas a Pagar

- Listagem com filtros
- Cadastro, edição e exclusão
- Marcação de pagamento (data e valor)
- Parcelamento e recorrência
- Upload de anexo
- Importação por CSV
- Resumo financeiro por status

#### Contas a Receber

- Listagem com filtros
- Cadastro, edição e exclusão
- Marcação de recebimento
- Recorrência/parcelamento
- Importação por CSV
- Resumo por status

#### Centro de Custo

- Listagem, cadastro e exclusão de centros de custo

### 3) Clientes

- Cadastro e manutenção de clientes
- Importação de clientes via CSV

### 4) CRM

- Funil com estágios de lead
- Criação, movimentação de estágio e exclusão de leads
- Registro e visualização de atividades por lead

### 5) Ordem de Compras

- Listagem, criação, atualização e exclusão

### 6) Projetos / Engenharia

- CRUD de projetos
- Kanban de tarefas por projeto
- Criação e atualização de status de tarefas

### 7) Agenda

- CRUD de eventos/compromissos

### 8) Chat Interno

- Usuários, conversas e mensagens
- Histórico de conversas por participantes

### 9) Documentos

- Listagem de documentos
- Upload com vínculo por entidade (cliente/projeto/ordem/financeiro/geral)
- Exclusão de documentos

### 10) Administração

- Dashboard de estatísticas do sistema
- Gestão de usuários (listar, alterar role, excluir)
- Gestão de permissões por usuário/módulo
- Logs de atividade com filtros e estatísticas
- Rotas protegidas para perfil admin

### 11) Autenticação e Segurança

- Login corporativo via OAuth portal
- Sessão persistida com cookie
- Página de login corporativa interna (`/login`)
- Opção **"Esqueci minha senha"** integrada ao portal de identidade
- Página dedicada de recuperação (`/esqueci-senha`)

## Rotas da Interface (Frontend)

- `/` -> Dashboard
- `/financeiro/contas-pagar`
- `/financeiro/contas-receber`
- `/financeiro/centro-custo`
- `/clientes`
- `/ordens-compra`
- `/crm`
- `/chat`
- `/agenda`
- `/projetos`
- `/projetos/kanban`
- `/documentos`
- `/relatorios`
- `/admin`
- `/configuracoes`
- `/login`
- `/esqueci-senha`

## API (tRPC)

Router principal em `server/routers.ts` com namespaces:

- `auth`
- `financial`
- `clients`
- `crm`
- `chat`
- `agenda`
- `projects`
- `documents`
- `purchaseOrders`
- `costCenters`
- `admin`
- `system`

## Qualidade e Padronização

Scripts principais:

```bash
pnpm run dev
pnpm run check
pnpm run lint
pnpm run lint:fix
pnpm run format
pnpm run format:check
pnpm run test
```

Governança configurada:

- **Prettier** para formatação
- **ESLint (flat config)** para qualidade de código TS/React
- **GitHub Actions** com pipeline de validação (`.github/workflows/quality.yml`)

## Banco de Dados

Schema em `drizzle/schema.ts` com tabelas de:

- usuários/autorização
- financeiro (pagar/receber/centro de custo)
- clientes
- CRM
- chat
- agenda
- projetos e tarefas
- documentos
- logs de atividade

## Execução Local

```bash
pnpm install
pnpm run dev
```

Aplicação disponível em `http://localhost:3000` (ou próxima porta livre).
