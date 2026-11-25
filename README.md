# ⚡ Diagnose Grupos Geradores — Plataforma Comercial & Institucional

[![Site Oficial](https://img.shields.io/badge/Site%20Oficial-diagnosegruposgeradores.com.br-70ab18?style=for-the-badge&logo=google-chrome&logoColor=white)](https://diagnosegruposgeradores.com.br)
[![SEO](https://img.shields.io/badge/Lighthouse%20SEO-100-brightgreen?style=for-the-badge&logo=lighthouse&logoColor=white)](#desempenho-qualidade-e-boas-pr%C3%A1ticas)
[![Boas Práticas](https://img.shields.io/badge/Boas%20Pr%C3%A1ticas-100-brightgreen?style=for-the-badge&logo=lighthouse&logoColor=white)](#desempenho-qualidade-e-boas-pr%C3%A1ticas)
[![Acessibilidade](https://img.shields.io/badge/Acessibilidade-95-brightgreen?style=for-the-badge&logo=lighthouse&logoColor=white)](#desempenho-qualidade-e-boas-pr%C3%A1ticas)

🌐 **Website em Produção:** [https://diagnosegruposgeradores.com.br](https://diagnosegruposgeradores.com.br)

Plataforma corporativa B2B desenvolvida para a **Diagnose Grupos Geradores**, consultora autorizada MWM com mais de 40 anos de atuação no Mato Grosso do Sul (MS). O projeto atua como o principal canal digital de captação de *leads* qualificados e apresentação do catálogo técnico de vendas e locações.

---

## 🎯 Objetivo do Projeto

Estruturar as frentes de negócio da empresa de forma clara, rápida e escalável, separando a experiência visual por divisão comercial:

* **Página Inicial (`/`):** Recepção institucional com carrossel de alto impacto, acesso rápido às divisões e seção de Missão, Visão e Valores.
* **Divisão de Vendas (`/vendas`):** Catálogo técnico completo de Grupos Geradores MWM (**40 kVA a 1250 kVA**), utilizando a identidade corporativa em Azul MWM (`#003865`) e integração direta com orçamento.
* **Divisão de Locações (`/locacoes`):** Soluções sob demanda (**22 kVA a 500 kVA**) para obras, indústrias, hospitais e agronegócio, sob paleta Verde Diagnose (`#70ab18`), vitrine operacional (vídeo + foto) e formulário dedicado.
* **Sobre a Empresa (`/sobre`):** História, autoridade da marca e estrutura técnica no estado.

---

## 🛠️ Arquitetura e Stack Tecnológica

O projeto foi desenvolvido com foco em performance, segurança (SSL/HTTPS), SEO local e baixo custo operacional:

* **Backend / Gerador Estático:** Python com [Flask](https://flask.palletsprojects.com/) e [Frozen-Flask](https://frozen-flask.readthedocs.io/) para geração de páginas estáticas de carregamento instantâneo.
* **Estilização & Responsividade:** HTML5 semântico, [Tailwind CSS](https://tailwindcss.com/) compilado localmente (`static/css/tailwind.css`), tipografia fluida (`clamp()`), *View Transitions API* e *Scroll-Driven Animations* (`static/css/style.css`).
* **Tipografia Local:** Fonte **Jura** hospedada localmente em formato `WOFF2` com `font-display: swap` (evitando bloqueio de renderização e dependência externa).
* **Interatividade (UX):** JavaScript puro (*Vanilla JS*) carregado com `defer` (`static/js/script.js`).
* **Mídia Otimizada:** Imagens convertidas para **WebP**, carregamento assíncrono (`decoding="async"`), `fetchpriority="high"` na imagem principal (LCP) e carregamento sob demanda para slides secundários.
* **Ícones:** FontAwesome 6.4 carregado de forma assíncrona.
* **Hospedagem & Segurança:** Publicado em domínio próprio com certificado SSL/HTTPS ativo, redirecionamento forçado para HTTPS, cabeçalhos de segurança e cache otimizado via `.htaccess` (Hostinger) e suporte a deploy estático na Vercel.

---

## 📊 Desempenho, Qualidade e Boas Práticas

Auditoria realizada via **Google Lighthouse (Mobile)**:

| Métrica / Categoria | Resultado | Status |
| :--- | :---: | :---: |
| **SEO** (JSON-LD `LocalBusiness`, Open Graph, semântica) | **100 / 100** | 🟢 Excelente |
| **Boas Práticas** (HTTPS, sem *Mixed Content*, recursos seguros) | **100 / 100** | 🟢 Excelente |
| **Acessibilidade** (`aria-label`, contraste, navegação por foco) | **95 / 100** | 🟢 Excelente |
| **Total Blocking Time (TBT)** | **0 ms** | 🟢 Sem travamentos |
| **Cumulative Layout Shift (CLS)** | **0,001** | 🟢 Layout estável |
| **First Contentful Paint (FCP)** | **1,0 s** | 🟢 Rápido |

> *Otimizações adicionais de LCP (`<img fetchpriority="high">` no banner principal e lazy-loading do 2º slide) foram aplicadas para elevar ainda mais o desempenho em redes 4G móveis.*

---

## 🗂️ Estrutura de Rotas

* `/` → `index.html` (Página Inicial)
* `/vendas` → `vendas.html` (Divisão de Vendas MWM)
* `/locacoes` → `locacoes.html` (Divisão de Locações)
* `/sobre` → `sobre.html` (Sobre a Empresa)

---

## ✨ Principais Funcionalidades

1. **Catálogo Técnico com Cotação Automatizada:**
   * Tabela completa de geradores MWM (40 kVA a 1250 kVA) com rolagem adaptada para mobile.
   * Botão **"Cotar Equipamento"** em cada linha que rola suavemente até o formulário e preenche automaticamente a potência selecionada (ex: *"Gostaria de cotar um grupo gerador na potência de 500 kVA"*).
2. **Formulários Inteligentes com Integração WhatsApp:**
   * Máscaras dinâmicas em tempo real para **CPF/CNPJ** e **WhatsApp**.
   * Envio direto via API criptografada (`https://wa.me/`) com a mensagem estruturada pronta para atendimento comercial, sem armazenar dados sensíveis em banco aberto (conformidade LGPD).
3. **UX Mobile-First:**
   * Carrossel com suporte a gestos de toque (*swipe*), botões de navegação e indicadores dinâmicos.
   * Menu dropdown adaptativo para smartphones e tablets.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
* [Python 3.x](https://www.python.org/)
* Gerenciador de pacotes `pip`

### Passo a Passo
1. Clone o repositório:
   ```bash
   git clone https://github.com/raullrios/Site-Diagnose.git
   cd Site-Diagnose
   ```
2. Crie e ative o ambiente virtual (opcional, mas recomendado):
   ```bash
   python -m venv venv
   # Windows:
   venv\Scripts\activate
   # Linux/macOS:
   source venv/bin/activate
   ```
3. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```
4. Execute o servidor local:
   ```bash
   python app.py
   ```
5. Acesse no navegador em `http://127.0.0.1:5000`.

### Gerar Build Estático
```bash
python freeze.py
```

---

## 🏷️ Tags / Topics Recomendadas no GitHub
`html5` `tailwindcss` `javascript` `python` `flask` `frozen-flask` `seo` `web-performance` `responsive-design` `b2b` `landing-page`
