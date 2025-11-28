# Arquivos Principais do Projeto

## Arquivos de Configuração

| Arquivo | Descrição |
|---------|-----------|
| `package.json` | Dependências e scripts do projeto |
| `tsconfig.json` | Configuração do TypeScript |
| `vite.config.ts` | Configuração do Vite (build tool) |
| `components.json` | Configuração do shadcn/ui |

## Documentação

| Arquivo | Descrição |
|---------|-----------|
| `README.md` | Documentação completa do projeto |
| `DEPLOYMENT.md` | Instruções detalhadas de deployment |
| `QUICK_START.md` | Guia rápido de deployment |
| `ARQUIVOS_PRINCIPAIS.md` | Este arquivo |

## Componentes React

| Arquivo | Descrição |
|---------|-----------|
| `client/src/App.tsx` | Componente raiz da aplicação |
| `client/src/pages/Home.tsx` | Página principal (hero, ministérios, galeria, etc) |
| `client/src/pages/NotFound.tsx` | Página 404 |
| `client/src/components/Footer.tsx` | Componente do footer |
| `client/src/components/ErrorBoundary.tsx` | Tratamento de erros |
| `client/src/components/Map.tsx` | Integração com Google Maps |

## Estilos

| Arquivo | Descrição |
|---------|-----------|
| `client/src/index.css` | Estilos globais e variáveis de tema |

## Assets Públicos (Imagens)

| Arquivo | Descrição |
|---------|-----------|
| `client/public/hero-church.png` | Imagem de fundo do hero section |
| `client/public/herois-da-fe-logo.png` | Logo do ministério Heróis da Fé |
| `client/public/sons-do-ceu-logo.png` | Logo do ministério Sons do Céu |
| `client/public/impacto-jovem-logo.png` | Logo do ministério Impacto Jovem Adventista |
| `client/public/logo-adventista.png` | Logo da Igreja Adventista no footer |

## Utilitários

| Arquivo | Descrição |
|---------|-----------|
| `client/src/lib/utils.ts` | Funções utilitárias |
| `client/src/const.ts` | Constantes da aplicação |
| `client/src/hooks/useMobile.tsx` | Hook para detectar mobile |
| `client/src/contexts/ThemeContext.tsx` | Contexto do tema (light/dark) |

## Estrutura de Pastas

```
igreja-planalto/
├── client/                          # Frontend React
│   ├── public/                      # Assets estáticos (imagens)
│   │   ├── hero-church.png
│   │   ├── herois-da-fe-logo.png
│   │   ├── sons-do-ceu-logo.png
│   │   ├── impacto-jovem-logo.png
│   │   └── logo-adventista.png
│   ├── src/
│   │   ├── components/              # Componentes React
│   │   │   ├── Footer.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── Map.tsx
│   │   │   └── ui/                  # shadcn/ui components
│   │   ├── pages/                   # Páginas da aplicação
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── contexts/                # React contexts
│   │   ├── lib/                     # Utilitários
│   │   ├── App.tsx                  # Componente raiz
│   │   ├── main.tsx                 # Entry point
│   │   └── index.css                # Estilos globais
│   └── index.html                   # HTML principal
├── server/                          # Backend (Node.js/Express)
│   └── index.ts
├── shared/                          # Código compartilhado
│   └── const.ts
├── dist/                            # Build otimizado (gerado após npm run build)
├── node_modules/                    # Dependências (não fazer upload)
├── package.json                     # Dependências e scripts
├── tsconfig.json                    # Configuração TypeScript
├── vite.config.ts                   # Configuração Vite
├── components.json                  # Configuração shadcn/ui
├── README.md                        # Documentação
├── DEPLOYMENT.md                    # Instruções de deployment
├── QUICK_START.md                   # Guia rápido
└── ARQUIVOS_PRINCIPAIS.md           # Este arquivo
```

## Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build otimizado para produção
npm run preview  # Visualiza a build de produção localmente
npm run check    # Verifica tipos TypeScript
npm run format   # Formata código com Prettier
```

## Arquivos para Editar

Se você quiser customizar o site, edite estes arquivos:

1. **Conteúdo da página**: `client/src/pages/Home.tsx`
2. **Estilos globais**: `client/src/index.css`
3. **Footer**: `client/src/components/Footer.tsx`
4. **Imagens**: Substitua os arquivos em `client/public/`

## Arquivos para NÃO Editar

- `node_modules/` - Dependências (gerado automaticamente)
- `dist/` - Build otimizado (gerado automaticamente)
- `client/src/components/ui/` - Componentes shadcn/ui (usar como está)

## Dependências Principais

| Pacote | Versão | Uso |
|--------|--------|-----|
| react | 19.0.0 | Framework frontend |
| typescript | 5.6.3 | Tipagem estática |
| tailwindcss | 4.1.14 | Utilitários CSS |
| vite | 7.1.7 | Build tool |
| wouter | 3.3.5 | Roteamento |
| shadcn/ui | - | Componentes UI |
| lucide-react | 0.453.0 | Ícones |
| framer-motion | 12.23.22 | Animações |

---

**Última atualização**: Novembro 2025
