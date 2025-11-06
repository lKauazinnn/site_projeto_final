// ============================================
// MENU MOBILE
// ============================================
const btnMobileMenu = document.getElementById('btnMobileMenu');
const navMenu = document.getElementById('navMenu');

btnMobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Alterna ícone do menu
    const icon = btnMobileMenu.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Fecha menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = btnMobileMenu.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ============================================
// HERO SLIDER
// ============================================
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.hero-prev');
const nextBtn = document.querySelector('.hero-next');

function showSlide(index) {
    // Remove active de todos
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Adiciona active no slide e indicador correto
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Event listeners dos botões
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Event listeners dos indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto-play do slider (a cada 5 segundos)
let autoPlayInterval = setInterval(nextSlide, 5000);

// Pausa o auto-play quando o mouse está sobre o hero
const hero = document.querySelector('.hero');
hero.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
});

hero.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(nextSlide, 5000);
});

// ============================================
// SCROLL SUAVE
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// HEADER COM SOMBRA NO SCROLL
// ============================================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Adiciona/remove sombra
    if (currentScroll > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// ANIMAÇÃO AO SCROLL (Intersection Observer)
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elementos para animar
const animateElements = document.querySelectorAll('.especialidade-card, .exame-card, .stat-item, .faq-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ============================================
// FAQ ACCORDION
// ============================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Fecha todos os outros itens
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle do item clicado
        item.classList.toggle('active');
    });
});

// ============================================
// BUSCA DE CONVÊNIOS
// ============================================
const searchConvenio = document.getElementById('searchConvenio');
const convenioSections = document.querySelectorAll('.convenios-section');

if (searchConvenio) {
    searchConvenio.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        convenioSections.forEach(section => {
            const category = section.querySelector('.convenio-category');
            const grid = section.querySelector('.convenios-grid');
            const items = section.querySelectorAll('.convenio-item');
            let hasVisibleItems = false;

            items.forEach(item => {
                const img = item.querySelector('img');
                // Pega o texto do atributo 'alt' da imagem, ou o texto do próprio item
                const text = (img ? img.alt : item.textContent).toLowerCase();

                if (text.includes(searchTerm)) {
                    item.style.display = 'flex'; // Usar 'flex' para manter o alinhamento
                    hasVisibleItems = true;
                } else {
                    item.style.display = 'none';
                }
            });

            // Se a busca estiver ativa, mostra o grid e a seção se tiver itens visíveis
            if (searchTerm) {
                if (hasVisibleItems) {
                    grid.classList.add('show');
                    category.classList.add('active');
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            } else {
                // Se a busca estiver vazia, reseta tudo para o estado inicial
                section.style.display = 'block';
                grid.classList.remove('show');
                category.classList.remove('active');
                items.forEach(item => {
                    item.style.display = 'flex';
                });
            }
        });
    });
}

// ============================================
// FORMULÁRIO DE CONTATO
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validação básica
        const inputs = contactForm.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
                input.style.borderColor = '#EF4444';
            } else {
                input.style.borderColor = '#E5E7EB';
            }
        });
        
        if (isValid) {
            // Aqui você pode adicionar a lógica de envio do formulário
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
}

// ============================================
// NEWSLETTER
// ============================================
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        if (emailInput.value.trim() !== '') {
            alert('Obrigado por se inscrever em nossa newsletter!');
            newsletterForm.reset();
        } else {
            alert('Por favor, insira um email válido.');
        }
    });
}

// ============================================
// ANIMAÇÃO DOS NÚMEROS (Stats)
// ============================================
function animateNumbers() {
    const stats = document.querySelectorAll('.stat-item h3');
    
    stats.forEach(stat => {
        const target = stat.textContent;
        const isPercentage = target.includes('%');
        const isPlusSign = target.includes('+');
        const number = parseInt(target.replace(/[^\d]/g, ''));
        
        if (!isNaN(number)) {
            let current = 0;
            const increment = number / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    current = number;
                    clearInterval(timer);
                }
                
                let displayText = Math.floor(current).toString();
                if (isPlusSign) displayText += '+';
                if (isPercentage) displayText += '%';
                
                stat.textContent = displayText;
            }, 30);
        }
    });
}

// Detecta quando a seção de stats entra na tela
const statsSection = document.querySelector('.sobre-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// ============================================
// LOADING STATE
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// DROPDOWN CONVÊNIOS
// ============================================
const convenioCategories = document.querySelectorAll('.convenio-category');

convenioCategories.forEach(category => {
    category.addEventListener('click', function() {
        // Toggle active class no título
        this.classList.toggle('active');

        // Pega o grid de convênios logo após o título
        const grid = this.nextElementSibling;

        // Toggle show class no grid
        grid.classList.toggle('show');
    });
});

// ============================================
// EXPANSÃO DE CARDS DE ESPECIALIDADES
// ============================================
const especialidadeCards = document.querySelectorAll('.especialidade-card');
const especialidadesGrid = document.querySelector('.especialidades-grid');

especialidadeCards.forEach(card => {
    // Botão "Ver mais"
    const btnVerMais = card.querySelector('.btn-exame');
    const btnFechar = card.querySelector('.btn-close-especialidade');

    btnVerMais.addEventListener('click', (e) => {
        e.preventDefault();

        // Expande o card
        card.classList.add('expanded');
        especialidadesGrid.classList.add('has-expanded');

        // Scroll suave até a seção de especialidades
        const especialidadesSection = document.querySelector('#especialidades');
        especialidadesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    btnFechar.addEventListener('click', () => {
        // Recolhe o card
        card.classList.remove('expanded');
        especialidadesGrid.classList.remove('has-expanded');
    });
});

// ============================================
// EXPANSÃO DE CARDS DE EXAMES
// ============================================
const exameCards = document.querySelectorAll('.exame-card');
const examesGrid = document.querySelector('.exames-grid');

exameCards.forEach(card => {
    // Botão "Ver mais"
    const btnVerMais = card.querySelector('.btn-exame');
    const btnFechar = card.querySelector('.btn-close-exame');

    btnVerMais.addEventListener('click', (e) => {
        e.preventDefault();

        // Expande o card
        card.classList.add('expanded');
        examesGrid.classList.add('has-expanded');
    });

    btnFechar.addEventListener('click', () => {
        // Adiciona classe de fechamento para animação
        card.classList.add('closing');
        examesGrid.classList.add('closing');

        // Após a animação, remove todas as classes
        setTimeout(() => {
            card.classList.remove('expanded', 'closing');
            examesGrid.classList.remove('has-expanded', 'closing');
        }, 200);
    });
});

// Fechar com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Fechar especialidade expandida
        const expandedEspecialidade = document.querySelector('.especialidade-card.expanded');
        if (expandedEspecialidade) {
            expandedEspecialidade.classList.remove('expanded');
            especialidadesGrid.classList.remove('has-expanded');
        }

        // Fechar exame expandido
        const expandedExame = document.querySelector('.exame-card.expanded');
        if (expandedExame) {
            expandedExame.classList.add('closing');
            examesGrid.classList.add('closing');

            setTimeout(() => {
                expandedExame.classList.remove('expanded', 'closing');
                examesGrid.classList.remove('has-expanded', 'closing');
            }, 200);
        }
    }
});

// ============================================
// VALORES - ACCORDION
// ============================================
const valorItems = document.querySelectorAll('.valor-item');

valorItems.forEach(item => {
    const header = item.querySelector('.valor-header');

    header.addEventListener('click', () => {
        // Fecha todos os outros
        valorItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle no item clicado
        item.classList.toggle('active');
    });
});

// ============================================
// DROPDOWN MENU MOBILE
// ============================================
const dropdownLinks = document.querySelectorAll('.dropdown > a');

dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Em mobile, previne navegação e abre o dropdown
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = link.parentElement;
            dropdown.classList.toggle('active');
        }
    });
});

// ============================================
// CONSOLE LOG
// ============================================
console.log('%c🏥 LAB - Laboratório e Medicina Diagnóstica', 'color: #2563EB; font-size: 20px; font-weight: bold;');
console.log('%c50 anos cuidando da sua saúde', 'color: #6B7280; font-size: 14px;');
console.log('%cWebsite desenvolvido com ❤️', 'color: #10B981; font-size: 12px;');