# Grupo GAB — Site Institucional

Site institucional (marketing/apresentação) do **Grupo GAB — Gestão, Engenharia e Soluções**, construído em HTML/CSS/JS puro (sem dependências de build), seguindo o conceito de "plataforma empresarial" e a paleta de cores institucional definida pelo cliente.

> **Nota:** este é um projeto separado do sistema interno de gestão (`client/`, dashboard React/tRPC) que já existe neste repositório. O site institucional vive isolado em `institutional-site/` para não conflitar com o sistema de back-office.

## Estrutura

```
institutional-site/
├── index.html          # Página única com todas as seções da Home
├── assets/
│   ├── css/style.css   # Todo o design system e estilos
│   ├── js/main.js      # Scroll reveal, menu mobile, smooth scroll, header on scroll
│   └── img/            # Imagens (hero, cases, ícones) + logo-mark.svg
└── README.md
```

## Seções implementadas (conforme briefing)

1. **Hero** — Logo, headline forte, CTAs duplos, stats flutuantes, indicador de scroll.
2. **O Grupo GAB** — Apresentação do ecossistema + badges numéricos + imagem com overlay.
3. **Nossas Empresas** — Cards para ACQUAX, Compre na Sua Casa, Cuida Aí e "Outras empresas" (card em destaque com o azul petróleo).
4. **Soluções** — Grid 4x2 com os 8 pilares: Engenharia, Gestão, Tecnologia, Eficiência Operacional, Sustentabilidade, Infraestrutura, Manutenção, Projetos Especiais.
5. **Resultados** — 5 KPIs em destaque (+600, +1.200, 8, +40%, +25).
6. **GAB Hub** — Conceito de hub de negócios com os 6 nós: Empresas, Especialistas, Parceiros, Condomínios, Administradoras, Síndicos.
7. **Conteúdo** — Cards de artigos/workshops/estudos.
8. **Contato** — CTA final "Vamos transformar seu desafio em uma solução?" + footer completo com navegação, empresas, contato e mapa textual do Brasil.

## Paleta de cores (tokens CSS em `style.css`)

| Cor | Hex | Uso |
|---|---|---|
| Azul Petróleo Profundo | `#0B2633` | Fundo / autoridade |
| Grafite | `#20282C` | Textos / seções escuras |
| Verde Mineral | `#3E7468` | Tecnologia / sustentabilidade |
| Dourado Champagne | `#C5A46D` | Detalhes premium (usado com parcimônia) |
| Off-White | `#F4F1EA` | Fundos claros |
| Branco | `#FFFFFF` | Áreas de respiro |

Tipografia: **Montserrat** (títulos/destaques) + **Inter** (corpo de texto), carregadas via Google Fonts.

## Como visualizar localmente

Não há dependências — é HTML/CSS/JS estático. Basta servir a pasta:

```bash
cd institutional-site
python3 -m http.server 8080
# abrir http://localhost:8080
```

## Deploy

Por ser um site 100% estático, pode ser publicado diretamente em qualquer hosting de arquivos estáticos (Cloudflare Pages, Netlify, Vercel, S3, etc.) apontando para a pasta `institutional-site/` como raiz (`index.html`).

## Próximos passos sugeridos

- Substituir os textos/imagens de placeholder das empresas do Grupo (ACQUAX, Compre na Sua Casa, Cuida Aí) pelos materiais oficiais de marca de cada uma.
- Conectar o formulário de contato a um backend/CRM real.
- Criar páginas internas dedicadas para "O Grupo", cada empresa, "Soluções", "Hub GAB" e "Conteúdo" (atualmente todas as âncoras apontam para seções da própria Home).
- Trocar o logo SVG placeholder por uma versão vetorial oficial da marca, se existir.
