/**
 * Lógica do Website - Diagnose Grupos Geradores MS
 */

const NUMERO_WHATSAPP_OFICIAL = "5567999848200"; // Centraliza o número da empresa aqui

/* ========================================================
   1. INICIALIZAÇÃO E EVENTOS GLOBAIS
   ======================================================== */
// ... resto do seu código
/* ========================================================
   1. INICIALIZAÇÃO E EVENTOS GLOBAIS
   ======================================================== */
document.addEventListener("DOMContentLoaded", function () {
    personalizarBotaoFlutuante(); // Botão corporativo
    

    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#00ff88" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": true, "anim": { "enable": true, "speed": 1.5, "opacity_min": 0.15, "sync": false } },
                "size": { "value": 3, "random": true, "anim": { "enable": true, "speed": 2, "size_min": 0.8, "sync": false } },
                "line_linked": { "enable": true, "distance": 140, "color": "#00ff88", "opacity": 0.35, "width": 1.2 },
                "move": { "enable": true, "speed": 2.0, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false }, "onclick": { "enable": false } } },
            "retina_detect": true
        });
    }

    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) menuToggle.addEventListener('click', toggleMenu);

   const slides = document.querySelectorAll('.carousel-slide');
    if (slides && slides.length > 0) {
        criarIndicadoresDinamicos(); 
        criarBotoesNavegacao();      // <--- ADICIONE ESTA LINHA AQUI
        adicionarEventosTouch();
        indiceSlideAtual = 0;
        exibirSlide(indiceSlideAtual);
        agendarProximaTroca();

        // Pré-carrega slides secundários após 2s sem disputar banda com o LCP
        setTimeout(function () {
            document.querySelectorAll('.carousel-slide [data-bg]').forEach(function (el) {
                const src = el.getAttribute('data-bg');
                if (src) {
                    const img = new Image();
                    img.src = src;
                    img.onload = function () {
                        el.style.backgroundImage = `url('${src}')`;
                        el.removeAttribute('data-bg');
                    };
                }
            });
        }, 2000);
    }
});

/* ========================================================
   2. MOTOR ÚNICO E BLINDADO DO CARROSSEL (TOUCH & DINÂMICO)
   ======================================================== */
let carrosselTimer = null;
let indiceSlideAtual = 0;
const TEMPO_TROCA_MS = 8000;
let touchStartX = 0;
let touchEndX = 0;

function adicionarEventosTouch() {
    const carrossel = document.getElementById('carousel');
    if (!carrossel) return;

    carrossel.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        if (carrosselTimer !== null) clearTimeout(carrosselTimer);
    }, {passive: true});

    carrossel.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        processarSwipe();
        agendarProximaTroca(); 
    }, {passive: true});
}

function processarSwipe() {
    const limiteSwipe = 50; 
    if (touchEndX < touchStartX - limiteSwipe) mudarSlide(1); 
    if (touchEndX > touchStartX + limiteSwipe) mudarSlide(-1); 
}

function criarIndicadoresDinamicos() {
    const slides = document.querySelectorAll('.carousel-slide');
    if (!slides || slides.length <= 1) return; 

    const containerCarrossel = slides[0].parentElement;
    const caixaIndicadores = document.createElement('div');
    caixaIndicadores.className = 'absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2';
    caixaIndicadores.id = 'indicadores-dinamicos';

    slides.forEach((_, index) => {
        const bolinha = document.createElement('button');
        bolinha.setAttribute('aria-label', `Ir para slide ${index + 1}`);
        // Área de toque aumentada com padding (p-2)
        bolinha.className = 'carousel-dot w-3 h-3 m-1 box-content bg-clip-content p-2 rounded-full bg-white/40 hover:bg-white/70 transition-all duration-500 focus:outline-none';
        bolinha.addEventListener('click', () => irParaSlide(index));
        caixaIndicadores.appendChild(bolinha);
    });
    containerCarrossel.appendChild(caixaIndicadores);
}

// NOVA FUNÇÃO: Cria as setas de navegação (Estilo Netflix/Industrial)
function criarBotoesNavegacao() {
    const slides = document.querySelectorAll('.carousel-slide');
    if (!slides || slides.length <= 1) return; // Só cria se houver mais de 1 foto

    const containerCarrossel = slides[0].parentElement;

    // INTELIGÊNCIA 1: Descobre se é o carrossel da Home ou das Internas
    const isInterna = containerCarrossel.classList.contains('rounded-2xl');
    const posVertical = isInterna ? "top-[55%] sm:top-[65%]" : "top-1/2";

    // INTELIGÊNCIA 2: Descobre a página atual para pintar a aba com a cor certa
    const isVendas = window.location.pathname.includes('vendas');
    const corHover = isVendas ? "hover:bg-[#003865]/90" : "hover:bg-[#70ab18]/90";

    // INTELIGÊNCIA 3: Ajusta o tamanho (Gigante na Home, Compacto nas Internas)
    const tamanhoBotao = isInterna ? "w-8 sm:w-10 h-14 sm:h-16" : "w-10 sm:w-12 h-24 sm:h-32";
    const tamanhoHover = isInterna ? "hover:w-10 sm:hover:w-12" : "hover:w-14 sm:hover:w-16";
    const tamanhoIcone = isInterna ? "text-lg" : "text-xl";

    // Constrói o Botão Voltar (Aba Esquerda)
    const btnVoltar = document.createElement('button');
    btnVoltar.setAttribute('type', 'button');
    btnVoltar.setAttribute('aria-label', 'Voltar Slide');
    btnVoltar.className = `absolute left-0 ${posVertical} -translate-y-1/2 z-20 ${tamanhoBotao} flex items-center justify-center rounded-r-2xl bg-black/40 ${corHover} backdrop-blur-md border-r border-y border-white/10 text-white transition-all duration-300 ${tamanhoHover} group focus:outline-none`;
    btnVoltar.innerHTML = `<i class="fa-solid fa-chevron-left ${tamanhoIcone} group-hover:-translate-x-1 transition-transform"></i>`;
    btnVoltar.addEventListener('click', () => mudarSlide(-1));

    // Constrói o Botão Avançar (Aba Direita)
    const btnAvancar = document.createElement('button');
    btnAvancar.setAttribute('type', 'button');
    btnAvancar.setAttribute('aria-label', 'Avançar Slide');
    btnAvancar.className = `absolute right-0 ${posVertical} -translate-y-1/2 z-20 ${tamanhoBotao} flex items-center justify-center rounded-l-2xl bg-black/40 ${corHover} backdrop-blur-md border-l border-y border-white/10 text-white transition-all duration-300 ${tamanhoHover} group focus:outline-none`;
    btnAvancar.innerHTML = `<i class="fa-solid fa-chevron-right ${tamanhoIcone} group-hover:translate-x-1 transition-transform"></i>`;
    btnAvancar.addEventListener('click', () => mudarSlide(1));

    // Injeta os dois botões automaticamente na tela
    containerCarrossel.appendChild(btnVoltar);
    containerCarrossel.appendChild(btnAvancar);
}

function exibirSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (!slides || slides.length === 0) return;

    if (index >= slides.length) { indiceSlideAtual = 0; } 
    else if (index < 0) { indiceSlideAtual = slides.length - 1; } 
    else { indiceSlideAtual = index; }

    slides.forEach((slide) => {
        slide.style.opacity = '0';
        slide.style.zIndex = '0';
    });

    const slideAtivo = slides[indiceSlideAtual];
    const lazyDiv = slideAtivo.querySelector('[data-bg]');
    if (lazyDiv) {
        lazyDiv.style.backgroundImage = `url('${lazyDiv.getAttribute('data-bg')}')`;
        lazyDiv.removeAttribute('data-bg');
    }

    slideAtivo.style.opacity = '1';
    slideAtivo.style.zIndex = '10';

    if (dots && dots.length > 0) {
        dots.forEach(dot => {
            dot.classList.remove('w-10', 'bg-white', 'shadow-[0_0_10px_rgba(255,255,255,0.8)]');
            dot.classList.add('w-3', 'bg-white/40');
        });
        dots[indiceSlideAtual].classList.remove('w-3', 'bg-white/40');
        dots[indiceSlideAtual].classList.add('w-10', 'bg-white', 'shadow-[0_0_10px_rgba(255,255,255,0.8)]');
    }
}

function irParaSlide(index) {
    if (carrosselTimer !== null) { clearTimeout(carrosselTimer); carrosselTimer = null; }
    exibirSlide(index);
    agendarProximaTroca();
}

function agendarProximaTroca() {
    if (carrosselTimer !== null) { clearTimeout(carrosselTimer); carrosselTimer = null; }
    carrosselTimer = setTimeout(() => {
        exibirSlide(indiceSlideAtual + 1);
        agendarProximaTroca();
    }, TEMPO_TROCA_MS);
}

function mudarSlide(direcao) {
    if (carrosselTimer !== null) { clearTimeout(carrosselTimer); carrosselTimer = null; }
    exibirSlide(indiceSlideAtual + direcao);
    agendarProximaTroca();
}

/* ========================================================
   3. PERSONALIZAÇÃO GLOBAL DO BOTÃO FLUTUANTE
   ======================================================== */
function personalizarBotaoFlutuante() {
    const btnWpp = document.querySelector('a[href^="https://wa.me"][class*="fixed"]');
    
    if (btnWpp) {
        // INJEÇÃO DO NÚMERO E MENSAGEM PADRÃO
        const mensagemPadrao = encodeURIComponent("Olá! Gostaria de falar com um consultor da Diagnose.");
        btnWpp.setAttribute('href', `https://wa.me/${NUMERO_WHATSAPP_OFICIAL}?text=${mensagemPadrao}`);

        // Efeitos visuais
        btnWpp.classList.add('pulse-btn');
        btnWpp.classList.remove('bg-white', 'hover:bg-gray-100', 'border-2', 'border-[#70ab18]');
        btnWpp.classList.add('bg-[#25D366]', 'hover:bg-[#20ba5a]', 'text-white');
        btnWpp.innerHTML = '<i class="fa-brands fa-whatsapp text-3xl"></i>';
    }
}
/* ========================================================
   4. FERRAMENTAS E FORMULÁRIOS
   ======================================================== */
function aplicarMascarasDinamicas() {
    // 1. MÁSCARA DE CPF E CNPJ
    // Captura os campos pelo ID (adicione outros IDs aqui se criar novos formulários)
    const camposDoc = document.querySelectorAll('#loc-doc, #venda-doc');
    
    camposDoc.forEach(campo => {
        campo.setAttribute('maxlength', '18'); // Trava física no HTML (tamanho máx do CNPJ)
        
        campo.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, ''); // Arranca tudo que não for número imediatamente
            if (value.length > 14) value = value.slice(0, 14); // Trava lógica em 14 números
            
            if (value.length <= 11) {
                // Formatação de CPF (Ex: 123.456.789-00)
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            } else {
                // Formatação de CNPJ (Ex: 12.345.678/0001-90)
                value = value.replace(/^(\d{2})(\d)/, '$1.$2');
                value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
                value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
                value = value.replace(/(\d{4})(\d{1,2})$/, '$1-$2');
            }
            this.value = value;
        });
    });

    // 2. MÁSCARA DE TELEFONE (DDD + Hífen)
    const camposWpp = document.querySelectorAll('#loc-wpp, #venda-wpp');
    
    camposWpp.forEach(campo => {
        campo.setAttribute('maxlength', '15'); // Trava física para (XX) XXXXX-XXXX
        
        campo.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11); // Trava lógica em 11 números

            value = value.replace(/^(\d{2})(\d)/g, '($1) $2'); // Coloca parênteses no DDD e espaço
            value = value.replace(/(\d)(\d{4})$/, '$1-$2');   // Coloca o hífen separando os 4 últimos
            this.value = value;
        });
    });
}

// Chame a função imediatamente para ativar os "escutadores" de digitação
aplicarMascarasDinamicas();

window.enviarLocacaoWpp = function(event) {
    event.preventDefault(); 
    const nome = document.getElementById('loc-nome').value;
    const documento = document.getElementById('loc-doc').value;
    const empresa = document.getElementById('loc-empresa').value;
    const telefone = document.getElementById('loc-wpp').value;
    const obs = document.getElementById('loc-obs').value || 'Não detalhada no momento';
    const mensagem = `*Nova Requisição de Locação*\n\n*Nome:* ${nome}\n*CPF/CNPJ:* ${documento}\n*Empresa/Obra:* ${empresa}\n*WhatsApp:* ${telefone}\n*Demanda:* ${obs}`;
    
    // Substituído pelo uso da variável global
    window.open(`https://wa.me/${NUMERO_WHATSAPP_OFICIAL}?text=${encodeURIComponent(mensagem)}`, '_blank');
};

window.enviarVendaWpp = function(event) {
    event.preventDefault(); 
    const nome = document.getElementById('venda-nome').value;
    const documento = document.getElementById('venda-doc').value;
    const empresa = document.getElementById('venda-empresa').value;
    const telefone = document.getElementById('venda-wpp').value;
    const obs = document.getElementById('venda-obs').value || 'Não detalhada no momento';
    const mensagem = `*Nova Requisição de Dimensionamento Técnico*\n\n*Nome:* ${nome}\n*CPF/CNPJ:* ${documento}\n*Empresa/Fazenda:* ${empresa}\n*WhatsApp:* ${telefone}\n*Finalidade:* ${obs}`;
    
    // Substituído pelo uso da variável global
    window.open(`https://wa.me/${NUMERO_WHATSAPP_OFICIAL}?text=${encodeURIComponent(mensagem)}`, '_blank');
};

window.preencherCotacao = function(potencia) {
    const secaoCotacao = document.getElementById('cotacao');
    const campoObs = document.getElementById('venda-obs');

    if (campoObs) {
        const potenciaFormatada = String(potencia).toLowerCase().includes('kva')
            ? potencia
            : `${potencia} kVA`;
        campoObs.value = `Gostaria de cotar um grupo gerador na potência de ${potenciaFormatada}`;
    }

    if (secaoCotacao) {
        secaoCotacao.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};