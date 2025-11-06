# ✏️ Guia Rápido de Edição - Site LAB

## 🎨 Como Editar o Site

### 1. Alterar Cores

**Arquivo**: `style.css` (linhas 23-32)

```css
:root {
    /* Mudar cor principal do site */
    --navy: #1d3461;           /* Azul escuro do header */
    --blue-primary: #5B7FFF;   /* Azul dos botões */
    --yellow: #FFC107;         /* Amarelo do botão login */
    
    /* Adicione suas cores aqui */
    --minha-cor: #FF5733;
}
```

**Exemplo de uso**:
```css
.meu-elemento {
    background: var(--minha-cor);
}
```

---

### 2. Alterar Textos

**Arquivo**: `index.html`

#### Hero/Banner Principal

```html
<!-- Linha ~95 -->
<h2 class="hero-title">SAÚDE VISTA<br>DE PERTO</h2>
<p class="hero-subtitle">A SUA SAÚDE CUIDADA COM PRECISÃO</p>
```

#### Informações de Contato

```html
<!-- Linha ~1000+ (Footer) -->
<p>BL E - SHLS, 716 Centro Medico de Brasília...</p>
<p><a href="mailto:lab@laboratoriolab.com.br">lab@laboratoriolab.com.br</a></p>
<a href="tel:6132453766">(61) 3245 - 3766</a>
```

---

### 3. Adicionar Imagens

#### Hero/Background

```html
<!-- Linha ~89 -->
<div class="hero-slide active" style="background-image: url('imagens/hero-1.jpg');">
```

#### Fotos dos Médicos

```html
<!-- Linha ~700+ -->
<div class="doctor-photo" style="background-image: url('imagens/dr-decio.jpg');"></div>
```

**CSS para ajustar**:
```css
.doctor-photo {
    background-size: cover;
    background-position: center;
}
```

---

### 4. Adicionar Nova Especialidade

**HTML** (`index.html`, linha ~200):

```html
<div class="specialty-card">
    <div class="specialty-icon">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <!-- Seu ícone SVG aqui -->
            <circle cx="50" cy="50" r="30" stroke-width="3"/>
        </svg>
    </div>
    <h3>NOVA ESPECIALIDADE</h3>
</div>
```

---

### 5. Adicionar Novo Médico

**HTML** (`index.html`, linha ~700+):

```html
<div class="doctor-card">
    <div class="doctor-photo"></div>
    <h3>Dr. Nome do Médico</h3>
    <p class="doctor-crm">CRM-DF XXXXX</p>
    <p class="doctor-bio">Formação e experiência...</p>
    <a href="#" class="btn btn-outline btn-sm">CURRÍCULO LATTES</a>
</div>
```

---

### 6. Adicionar Pergunta no FAQ

**HTML** (`index.html`, linha ~900+):

```html
<div class="faq-item">
    <button class="faq-question" onclick="toggleFaq(this)">
        <span>Sua nova pergunta aqui?</span>
        <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6 9l6 6 6-6" stroke-width="2"/>
        </svg>
    </button>
    <div class="faq-answer">
        <p>Resposta da pergunta aqui.</p>
    </div>
</div>
```

---

### 7. Mudar Logo

#### Opção 1: Usar imagem

```html
<!-- Linha ~35 -->
<div class="logo">
    <img src="imagens/logo.png" alt="LAB - Laboratório e Medicina Diagnóstica">
</div>
```

**CSS**:
```css
.logo img {
    height: 50px;
    width: auto;
}
```

#### Opção 2: Manter texto mas mudar estilo

```css
.logo h1 {
    font-size: 3rem;      /* Tamanho */
    color: #FFFFFF;       /* Cor */
    font-weight: 700;     /* Peso */
}
```

---

### 8. Adicionar Ícone/Favicon

**HTML** (adicionar no `<head>`):

```html
<link rel="icon" type="image/png" href="imagens/favicon.png">
<link rel="apple-touch-icon" href="imagens/apple-icon.png">
```

**Tamanhos recomendados**:
- favicon.png: 32x32px ou 64x64px
- apple-icon.png: 180x180px

---

### 9. Ajustar Responsividade

**CSS** (`style.css`, final do arquivo):

```css
@media (max-width: 768px) {
    .hero-title {
        font-size: 2rem;  /* Menor em mobile */
    }
    
    .specialty-card {
        padding: 1rem;    /* Menos padding em mobile */
    }
}
```

---

### 10. Adicionar Botão WhatsApp Flutuante

**HTML** (antes do `</body>`):

```html
<a href="https://wa.me/556132453766" class="whatsapp-float" target="_blank">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
</a>
```

**CSS**:
```css
.whatsapp-float {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background: #25D366;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 999;
    transition: 0.3s ease;
}

.whatsapp-float:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0,0,0,0.4);
}

.whatsapp-float svg {
    width: 35px;
    height: 35px;
}
```

---

### 11. Mudar Fonte

**HTML** (adicionar no `<head>`):

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
```

**CSS**:
```css
:root {
    --font-primary: 'Poppins', sans-serif;
}

body {
    font-family: var(--font-primary);
}
```

**Fontes recomendadas**:
- Poppins (moderna)
- Roboto (clean)
- Open Sans (legível)
- Montserrat (elegante)

---

### 12. Adicionar Google Maps

**HTML** (substitua o `.map-placeholder`):

```html
<div class="map-container">
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.123456789!2d-47.123456!3d-15.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLAB!5e0!3m2!1spt-BR!2sbr!4v1234567890"
        width="100%" 
        height="450" 
        style="border:0; border-radius: 16px;" 
        allowfullscreen="" 
        loading="lazy">
    </iframe>
</div>
```

**Como pegar o código**:
1. Abra Google Maps
2. Busque o endereço
3. Clique em "Compartilhar"
4. Clique em "Incorporar um mapa"
5. Copie o código HTML

---

### 13. Adicionar Vídeo

**Opção 1: Vídeo local**

```html
<div class="video-container">
    <video controls poster="imagens/thumbnail.jpg">
        <source src="videos/institucional.mp4" type="video/mp4">
        Seu navegador não suporta vídeo.
    </video>
</div>
```

**Opção 2: YouTube**

```html
<div class="video-container">
    <iframe 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
```

**CSS**:
```css
.video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    overflow: hidden;
}

.video-container iframe,
.video-container video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```

---

### 14. Personalizar Botões

```css
/* Botão customizado */
.btn-custom {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.btn-custom:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}
```

---

### 15. Adicionar Animação de Entrada

**CSS**:
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-in {
    animation: fadeInUp 0.6s ease-out;
}
```

**HTML**:
```html
<div class="animate-in">
    Seu conteúdo aqui
</div>
```

---

## 🐛 Problemas Comuns

### CSS não está funcionando

1. Limpe o cache: `Ctrl + Shift + R` (Windows) ou `Cmd + Shift + R` (Mac)
2. Verifique se o arquivo está na mesma pasta
3. Verifique o nome do arquivo (maiúsculas/minúsculas)

### JavaScript não funciona

1. Abra o Console (F12 > Console)
2. Veja se há erros em vermelho
3. Verifique se o arquivo `script.js` está carregado

### Imagens não aparecem

1. Verifique o caminho: `imagens/foto.jpg`
2. Verifique o formato: `.jpg`, `.png`, `.webp`
3. Letras maiúsculas e minúsculas importam!

---

## 💡 Dicas Rápidas

1. **Sempre faça backup** antes de editar
2. **Teste em diferentes navegadores**
3. **Use comentários** no código:
   ```html
   <!-- Este é um comentário HTML -->
   ```
   ```css
   /* Este é um comentário CSS */
   ```
   ```javascript
   // Este é um comentário JavaScript
   ```
4. **Valide seu HTML**: https://validator.w3.org/
5. **Teste responsividade**: F12 > Toggle Device Toolbar

---

## 📞 Precisa de Ajuda?

- HTML/CSS: [MDN Web Docs](https://developer.mozilla.org/)
- JavaScript: [JavaScript.info](https://javascript.info/)
- Stack Overflow: [stackoverflow.com](https://stackoverflow.com/)

---

**Edição Fácil = Site Sempre Atualizado! 🚀**
