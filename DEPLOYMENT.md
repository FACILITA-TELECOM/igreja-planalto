# 🚀 Instruções de Deployment - Igreja Adventista Setor Planalto

## 📋 Pré-requisitos

Antes de fazer o deploy, certifique-se de ter instalado:
- **Node.js** (v18 ou superior): https://nodejs.org/
- **npm** ou **pnpm** (gerenciador de pacotes)
- **Git** (opcional, mas recomendado)

## 📦 Opção 1: Deploy em Vercel (Recomendado - Mais Fácil)

### Passo 1: Preparar o Projeto
```bash
cd igreja-planalto
npm install
# ou
pnpm install
```

### Passo 2: Fazer Build
```bash
npm run build
# ou
pnpm build
```

### Passo 3: Criar Conta no Vercel
1. Acesse https://vercel.com
2. Clique em "Sign Up" e crie uma conta
3. Conecte sua conta do GitHub (recomendado)

### Passo 4: Deploy no Vercel
**Opção A - Via GitHub (Mais Fácil):**
1. Faça push do projeto para GitHub
2. No Vercel, clique em "New Project"
3. Selecione o repositório do GitHub
4. Clique em "Deploy"
5. Pronto! Seu site estará online em alguns minutos

**Opção B - Via CLI do Vercel:**
```bash
npm install -g vercel
vercel
# Siga as instruções no terminal
```

---

## 🏠 Opção 2: Deploy em Netlify

### Passo 1: Preparar o Projeto
```bash
cd igreja-planalto
npm install
npm run build
```

### Passo 2: Criar Conta no Netlify
1. Acesse https://netlify.com
2. Clique em "Sign Up"
3. Conecte sua conta do GitHub

### Passo 3: Deploy
1. Clique em "New site from Git"
2. Selecione seu repositório
3. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Clique em "Deploy site"

---

## 🖥️ Opção 3: Deploy em Hospedagem Tradicional (Hostinger, Bluehost, etc)

### Passo 1: Fazer Build Local
```bash
cd igreja-planalto
npm install
npm run build
```

Isso criará uma pasta `dist/` com todos os arquivos prontos para produção.

### Passo 2: Fazer Upload via FTP/SFTP
1. Conecte-se ao seu servidor via FTP (use FileZilla ou similar)
2. Faça upload de TODOS os arquivos da pasta `dist/` para a pasta `public_html/` do seu servidor
3. Pronto! Seu site estará online

### Passo 3: Configurar Domínio (se necessário)
1. Acesse o painel de controle da sua hospedagem
2. Vá para "Domínios"
3. Aponte o domínio para o diretório onde você fez upload dos arquivos

---

## 📱 Opção 4: Deploy com Docker (Avançado)

### Passo 1: Criar Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Passo 2: Build da Imagem
```bash
docker build -t igreja-planalto .
```

### Passo 3: Rodar Container
```bash
docker run -p 3000:3000 igreja-planalto
```

---

## ✅ Checklist Antes do Deploy

- [ ] Todos os links estão funcionando
- [ ] As imagens estão carregando corretamente
- [ ] O site é responsivo em mobile
- [ ] Os botões de Instagram e WhatsApp estão com os links corretos
- [ ] O vídeo do YouTube está funcionando (se aplicável)
- [ ] O mapa está exibindo a localização correta
- [ ] Não há erros no console do navegador

---

## 🔧 Troubleshooting

### Erro: "Cannot find module"
```bash
npm install
# ou
pnpm install
```

### Erro: "Port 3000 already in use"
```bash
# Mude a porta no package.json ou use:
PORT=3001 npm start
```

### Imagens não carregam após deploy
- Certifique-se de que as imagens estão na pasta `public/`
- Verifique os caminhos das imagens no código (devem começar com `/`)

### Site não aparece após upload FTP
- Verifique se os arquivos foram enviados para a pasta correta
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Aguarde alguns minutos para o DNS propagar

---

## 📞 Suporte

Se tiver dúvidas:
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com/
- Node.js: https://nodejs.org/docs/

---

**Última atualização**: Novembro 2025
**Versão do Projeto**: 1.0.0
