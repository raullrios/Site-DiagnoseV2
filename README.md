# ⚡ Diagnose Grupos Geradores - Plataforma Comercial & Institucional

Plataforma corporativa B2B desenvolvida para a **Diagnose Grupos Geradores**, consultora e autorizada MWM no estado do Mato Grosso do Sul (MS). O ecossistema foi projetado para atuar como o principal canal de captação de *leads* e apresentação do catálogo técnico da empresa.

## 🎯 Objetivo do Projeto
Estruturar as frentes de negócio da empresa de forma autônoma e escalável, dividindo a interface em "Centros de Custos" visuais e operacionais distintos:
*   **Divisão de Vendas:** Focada em catálogo técnico (40 kVA a 1000 kVA), utilizando a identidade corporativa da montadora oficial (Azul MWM).
*   **Divisão de Locações:** Focada em contratos programados de engenharia, indústria e agronegócio, operando sob uma paleta independente (Verde Esmeralda) e com forte ênfase em *compliance* logístico e cadastral.
*   **Institucional (Sobre):** Validação de autoridade da marca e apresentação dos mais de 40 anos de trajetória no estado.

## 🛠️ Arquitetura e Stack Tecnológico

O projeto foi construído priorizando alta performance, baixo custo operacional e rápida indexação (SEO):

*   **Motor / Backend:** Python com micro-framework [Flask](https://flask.palletsprojects.com/).
*   **Design & Layout:** HTML5 padronizado e [Tailwind CSS](https://tailwindcss.com/) via CDN (utilização de classes utilitárias para garantir 100% de responsividade mobile).
*   **Tipografia Institucional:** Fontes importadas do Google Fonts (*Orbitron* para títulos de alto impacto e aspecto industrial; *Arial/Sans-serif* para os memoriais descritivos).
*   **Interatividade (UX):** JavaScript puro (Vanilla JS).
*   **Ícones:** FontAwesome (v6.4).
*   **Hospedagem & Deploy:** GitHub integrado em regime de Integração Contínua (CI/CD) com a [Vercel](https://vercel.com/).

## 🗂️ Estrutura de Rotas (Flask)

O sistema de roteamento garante navegação limpa através de URLs amigáveis:
- `/` -> `index.html` (Recepção / Home Page)
- `/vendas` -> `vendas.html` (Divisão de Vendas MWM)
- `/locacoes` -> `locacoes.html` (Divisão de Aluguéis sob cronograma)
- `/sobre` -> `sobre.html` (Histórico corporativo)

## ✨ Principais Funcionalidades Implementadas

1. **Catálogo Integrado com Call-to-Action Automatizado:**
   - Tabelas técnicas de geradores com barras de rolagem independentes (`custom-scrollbar`).
   - Botões "Cotar Equipamento" que capturam a potência desejada (`kVA`) e levam o usuário diretamente ao formulário de conversão, já com a mensagem pré-redigida.

2. **Formulários Inteligentes e Validação de Dados:**
   - **Máscaras Dinâmicas em JS:** Aplicação automática de pontuação de `CPF/CNPJ` e `WhatsApp` à medida que o cliente digita.
   - **Compliance:** Restrição de caracteres não numéricos em campos estratégicos e mensagens de erro nativas (HTML Validation) customizadas para o português.
   - **Integração Comercial:** Rotina de formatação (URL Encoding) que compila os dados do formulário e abre um chat direto no WhatsApp do consultor com o "briefing" pronto.

3. **Interface Adaptativa e Elementos de UX:**
   - **Carrosséis de Imagens Isolados:** Imagens e textos divididos em blocos rígidos para evitar sobreposição em telas pequenas, acompanhados por um motor lógico em JS que zera o cronômetro do *autoplay* ao toque manual.
   - **Menu Acordeão Responsivo:** O *dropdown* do menu superior adapta-se ao eixo vertical nos smartphones, garantindo visibilidade total sem vazar a tela (overflow-x hidden global).

## 🚀 Como Executar Localmente

### Pré-requisitos
*   [Python 3.x](https://www.python.org/) instalado na máquina.
*   Gerenciador de pacotes `pip`.

### Passo a Passo
1. Clone este repositório para o seu computador:
   ```bash
   git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
