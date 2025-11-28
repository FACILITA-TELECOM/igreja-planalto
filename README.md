# 🙏 Igreja Adventista do Sétimo Dia - Setor Planalto

Website profissional e responsivo para a Igreja Adventista do Sétimo Dia, Setor Planalto, Itumbiara - GO.

## 📸 Características

✨ **Design Moderno e Elegante**
- Tema claro com cores primárias em azul
- Navbar integrada ao hero section
- Footer azul noite com logo da Igreja
- Totalmente responsivo (mobile, tablet, desktop)

🎨 **Seções Principais**
- Hero Section com imagem da Igreja
- Seção de Bem-vindo e Missão
- Ministérios (Heróis da Fé, Sons do Céu, Impacto Jovem Adventista)
- Galeria de Momentos
- Transmissão ao Vivo (YouTube)
- Mapa e Informações de Contato
- Footer com navegação completa

🔧 **Tecnologias**
- React 19
- TypeScript
- Tailwind CSS 4
- Vite
- shadcn/ui
- Font Awesome Icons

## 📁 Estrutura do Projeto

```
igreja-planalto/
├── client/
│   ├── public/              # Imagens e assets estáticos
│   │   ├── hero-church.png
│   │   ├── herois-da-fe-logo.png
│   │   ├── sons-do-ceu-logo.png
│   │   ├── impacto-jovem-logo.png
│   │   └── logo-adventista.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer.tsx
│   │   │   └── ErrorBoundary.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── DEPLOYMENT.md             # Instruções de deployment
└── README.md                 # Este arquivo
```

## 🚀 Início Rápido

### Instalação
```bash
# Clone o repositório
git clone <seu-repositorio>
cd igreja-planalto

# Instale as dependências
npm install
# ou
pnpm install
```

### Desenvolvimento
```bash
# Inicie o servidor de desenvolvimento
npm run dev
# ou
pnpm dev

# O site estará disponível em http://localhost:5173
```

### Build para Produção
```bash
# Crie a build otimizada
npm run build
# ou
pnpm build

# Visualize a build
npm run preview
# ou
pnpm preview
```

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 🖥️ Desktops (1024px+)
- 🖥️ Telas grandes (1280px+)

## 🎯 Seções do Site

### 1. Hero Section
- Imagem de fundo da Igreja
- Navbar integrada com menu mobile
- Título e localização
- Botões de Instagram e WhatsApp

### 2. Bem-vindo
- Mensagem de boas-vindas
- Descrição da comunidade
- CTA (Call to Action)

### 3. Nossa Missão
- Três pilares: Estudo da Bíblia, Comunhão, Serviço
- Cards informativos com ícones

### 4. Nossos Ministérios
- Heróis da Fé (com logo PNG)
- Sons do Céu (com logo PNG)
- Impacto Jovem Adventista (com logo PNG)

### 5. Galeria
- Grid de imagens dos momentos da Igreja
- Efeitos hover suaves

### 6. Transmissão ao Vivo
- Vídeo do YouTube integrado
- Informações sobre próximas transmissões

### 7. Nos Visite
- Mapa interativo (Google Maps)
- Endereço: Rua Sumaré, 628, Setor Planalto, Itumbiara - GO
- Telefone e email
- Horários de culto

### 8. Footer
- Logo da Igreja Adventista
- Links de navegação
- Informações de contato
- Horários de culto
- Links de políticas

## 🔗 Links Importantes

- **Instagram**: Atualizar em `Home.tsx` (botão no hero)
- **WhatsApp**: Atualizar em `Home.tsx` (botão no hero)
- **YouTube**: Vídeo integrado na seção de transmissão
- **Google Maps**: Mapa na seção "Nos Visite"

## 🎨 Customização

### Cores
As cores estão definidas em `client/src/index.css`:
```css
--primary: oklch(0.623 0.214 259.815);  /* Azul principal */
--background: oklch(1 0 0);              /* Branco */
--foreground: oklch(0.235 0.015 65);    /* Preto */
```

### Fontes
- **Montserrat**: Títulos e headings
- **Open Sans**: Corpo do texto

### Imagens
Todas as imagens estão em `client/public/`:
- `hero-church.png`: Imagem do hero section
- `herois-da-fe-logo.png`: Logo do ministério
- `sons-do-ceu-logo.png`: Logo do ministério
- `impacto-jovem-logo.png`: Logo do ministério
- `logo-adventista.png`: Logo no footer

## 📞 Contato

Para dúvidas ou sugestões sobre o site:
- **Telefone**: (64) 99999-9999
- **Email**: contato@iasdplanalto.com.br
- **Endereço**: Rua Sumaré, 628, Setor Planalto, Itumbiara - GO

## 📄 Licença

Este projeto é propriedade da Igreja Adventista do Sétimo Dia - Setor Planalto.

## 🙌 Agradecimentos

Desenvolvido com ❤️ para a comunidade da Igreja Adventista do Sétimo Dia - Setor Planalto.

---

**Versão**: 1.0.0  
**Última atualização**: Novembro 2025
