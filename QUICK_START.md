# 🚀 Guia Rápido de Deployment

## Opção Mais Fácil: Vercel (Recomendado)

### Passo 1: Preparar o Código
```bash
cd igreja-planalto
npm install
npm run build
```

### Passo 2: Fazer Push para GitHub
```bash
git init
git add .
git commit -m "Primeira versão do site"
git branch -M main
git remote add origin https://github.com/seu-usuario/igreja-planalto.git
git push -u origin main
```

### Passo 3: Deploy no Vercel
1. Acesse https://vercel.com
2. Clique em "New Project"
3. Selecione seu repositório do GitHub
4. Clique em "Deploy"
5. **Pronto! Seu site está online!**

---

## Opção 2: Netlify

### Passo 1: Fazer Build
```bash
npm run build
```

### Passo 2: Deploy
1. Acesse https://netlify.com
2. Faça drag and drop da pasta `dist/`
3. **Pronto! Seu site está online!**

---

## Opção 3: Hospedagem Tradicional (Hostinger, Bluehost, etc)

### Passo 1: Fazer Build
```bash
npm run build
```

### Passo 2: Upload via FTP
1. Abra FileZilla ou outro cliente FTP
2. Conecte ao seu servidor
3. Faça upload de TODOS os arquivos da pasta `dist/` para `public_html/`
4. **Pronto! Seu site está online!**

---

## Checklist Antes de Publicar

- [ ] Todos os links funcionam
- [ ] As imagens carregam corretamente
- [ ] O site é responsivo em mobile
- [ ] Os botões de Instagram e WhatsApp têm os links corretos
- [ ] O mapa está exibindo a localização correta
- [ ] Não há erros no console do navegador

---

## Dúvidas?

Veja o arquivo `DEPLOYMENT.md` para instruções mais detalhadas.
