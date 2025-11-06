# 🚀 Guia de Deployment - Site LAB

## Opções de Hospedagem Gratuita

### 1. GitHub Pages (Recomendado) ⭐

**Vantagens**: Gratuito, rápido, com HTTPS automático

**Passos**:

```bash
# 1. Criar repositório no GitHub
# 2. Clonar o repositório
git clone https://github.com/seu-usuario/lab-site.git
cd lab-site

# 3. Adicionar os arquivos
# Copie index.html, style.css, script.js para a pasta

# 4. Commit e push
git add .
git commit -m "Initial commit - Site LAB"
git push origin main

# 5. No GitHub, vá em Settings > Pages
# 6. Em "Source", selecione "main" branch
# 7. Clique em "Save"

# Seu site estará disponível em:
# https://seu-usuario.github.io/lab-site
```

### 2. Netlify

**Vantagens**: Deploy automático, formulários, funções serverless

**Passos**:

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "Add new site" > "Deploy manually"
3. Arraste a pasta com os arquivos
4. Site publicado instantaneamente!

**Ou via Git**:
```bash
# Conecte seu repositório GitHub
# Netlify fará deploy automático a cada push
```

### 3. Vercel

**Vantagens**: Deploy rápido, Edge Network, Analytics

**Passos**:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Na pasta do projeto
vercel

# Seguir as instruções no terminal
# Deploy automático!
```

### 4. Cloudflare Pages

**Vantagens**: CDN global, rápido, gratuito

**Passos**:

1. Acesse [pages.cloudflare.com](https://pages.cloudflare.com)
2. Conecte seu repositório GitHub
3. Configure: Branch = main
4. Publish directory = /
5. Deploy!

## 📦 Preparação para Produção

### 1. Minificar Arquivos

**CSS**:
```bash
# Usando cssnano
npm install -g cssnano-cli
cssnano style.css style.min.css
```

**JavaScript**:
```bash
# Usando terser
npm install -g terser
terser script.js -o script.min.js
```

### 2. Otimizar HTML

- Remover comentários desnecessários
- Comprimir espaços em branco
- Usar HTML minifier online

### 3. Adicionar Imagens Otimizadas

```bash
# Converter para WebP
cwebp imagem.jpg -o imagem.webp

# Comprimir PNG
pngquant imagem.png --output imagem-optimized.png
```

### 4. Configurar Cache

**Criar arquivo `.htaccess`** (para Apache):

```apache
# BROWSER CACHING
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType text/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
</IfModule>

# GZIP COMPRESSION
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE application/javascript
</IfModule>
```

**Ou `netlify.toml`** (para Netlify):

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## 🔒 Segurança

### Headers de Segurança

Adicione ao seu servidor:

```
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### HTTPS

Sempre use HTTPS! Todas as plataformas mencionadas oferecem SSL gratuito via Let's Encrypt.

## 🔍 SEO Básico

### 1. Adicionar meta tags no `<head>`:

```html
<!-- Meta Tags Básicas -->
<meta name="description" content="LAB - 50 anos cuidando da sua saúde com precisão. Especialistas em Anatomia Patológica, Biologia Molecular e Medicina Diagnóstica em Brasília.">
<meta name="keywords" content="laboratório, medicina diagnóstica, anatomia patológica, brasília, exames">
<meta name="author" content="Laboratório LAB">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.laboratoriolab.com.br/">
<meta property="og:title" content="LAB - Laboratório e Medicina Diagnóstica">
<meta property="og:description" content="50 anos cuidando da sua saúde com precisão">
<meta property="og:image" content="https://www.laboratoriolab.com.br/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.laboratoriolab.com.br/">
<meta property="twitter:title" content="LAB - Laboratório e Medicina Diagnóstica">
<meta property="twitter:description" content="50 anos cuidando da sua saúde com precisão">
<meta property="twitter:image" content="https://www.laboratoriolab.com.br/og-image.jpg">

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

### 2. Criar arquivo `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.laboratoriolab.com.br/</loc>
    <lastmod>2025-01-15</lastmod>
    <priority>1.0</priority>
  </url>
  <!-- Adicionar outras URLs -->
</urlset>
```

### 3. Criar arquivo `robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://www.laboratoriolab.com.br/sitemap.xml
```

## 📊 Analytics

### Google Analytics 4

Adicionar antes do `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Facebook Pixel (Opcional)

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

## 🎯 Domínio Personalizado

### Configurar DNS

Se você tem um domínio (ex: laboratoriolab.com.br):

1. **No seu provedor de domínio** (Registro.br, etc):
   - Adicione um registro A apontando para o IP do servidor
   - Ou CNAME apontando para o host da plataforma

2. **Exemplo para GitHub Pages**:
```
Type: CNAME
Host: www
Value: seu-usuario.github.io
```

3. **Criar arquivo `CNAME`** na raiz do projeto:
```
www.laboratoriolab.com.br
```

## ✅ Checklist de Lançamento

Antes de colocar no ar, verifique:

- [ ] Todas as imagens otimizadas
- [ ] Textos revisados
- [ ] Links funcionando
- [ ] Formulários testados
- [ ] Responsividade em todos os dispositivos
- [ ] Performance (PageSpeed Insights > 90)
- [ ] SEO básico implementado
- [ ] Analytics configurado
- [ ] HTTPS ativo
- [ ] Domínio configurado
- [ ] Backup dos arquivos
- [ ] Emails de contato funcionando

## 🔧 Manutenção

### Backup Regular

```bash
# Criar backup
tar -czf backup-site-$(date +%Y%m%d).tar.gz index.html style.css script.js

# Ou commit no Git
git add .
git commit -m "Backup $(date +%Y-%m-%d)"
git push
```

### Monitoramento

- **Uptime**: Use uptimerobot.com (gratuito)
- **Performance**: PageSpeed Insights
- **Erros**: Google Search Console
- **Analytics**: Google Analytics

## 🆘 Troubleshooting

### Site não carrega CSS/JS

Verifique:
1. Caminhos dos arquivos (maiúsculas/minúsculas)
2. MIME types no servidor
3. Cache do navegador (Ctrl+Shift+R)

### Imagens não aparecem

1. Verifique o caminho relativo
2. Confirme que as imagens foram enviadas
3. Teste com URL absoluta

### Formulário não funciona

1. Backend configurado?
2. CORS habilitado?
3. Logs do console no navegador

## 📚 Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/) - Compatibilidade de browsers
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [SSL Labs](https://www.ssllabs.com/ssltest/)

---

## 💡 Dica Final

Para um site profissional em produção, considere contratar:

1. **Hospedagem Profissional** (se necessário)
   - HostGator
   - Locaweb
   - UOL Host

2. **CDN** para velocidade
   - Cloudflare (gratuito)
   - AWS CloudFront

3. **Email Profissional**
   - Google Workspace
   - Microsoft 365

---

**Boa sorte com o lançamento! 🚀**

*Site desenvolvido seguindo os mais altos padrões de qualidade web*
