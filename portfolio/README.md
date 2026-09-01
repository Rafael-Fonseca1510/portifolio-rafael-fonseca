# Meu Portfólio Profissional

## 📖 Descrição do Projeto
Website de portfólio profissional desenvolvido para a disciplina de Projeto de Software - Laboratório 1. O objetivo do sistema é apresentar a trajetória, habilidades, projetos e formas de contato de maneira moderna e acessível, contendo as seguintes seções: **Sobre Mim, Projetos, Experiências e Contato**.

O layout foi implementado fielmente ao protótipo do Figma: tema *dark* com acento ciano, tipografia monoespaçada para labels/tags, timeline de projetos e formulário de contato interativo. A interface é **bilíngue (PT/EN)** com alternância em tempo real pelo cabeçalho e **100% responsiva** (mobile-first).

## 🧩 Personalização por Membro (1 único arquivo!)
Este projeto foi estruturado para que **cada membro do grupo tenha a sua própria versão** editando **apenas um arquivo**:

> ### 👉 `src/config/profile.config.js`

Nele você altera **tudo**: nome, logo, bio (PT/EN), foto, projetos, experiências, contato e redes sociais. **Nenhum componente precisa ser tocado.**

### Como criar a sua versão
1. Abra `src/config/profile.config.js` e troque os valores pelos seus.
2. **Sua foto:** coloque a imagem em `public/profile/` (ex.: `public/profile/joao.jpg`) e aponte no config:
   ```js
   hero: {
     heroMedia: 'photo',              // 'photo' = mostra sua foto | 'code' = janela de código
     photo: '/profile/joao.jpg',
   }
   ```
3. **Redes sociais e contato:** edite os arrays `contact` e `socials` (ícones disponíveis: `email`, `whatsapp`, `linkedin`, `github`, `twitter`, `instagram`, `phone`, `site`).
4. **Projetos/Experiências:** edite os arrays `projects` e `experiences`. Cada projeto aceita uma imagem real (`image: '/profile/projeto1.png'`) ou mantém o gradiente padrão.
5. Salve — o site inteiro (título da aba, favicon, textos, timeline) se adapta automaticamente. 🎉

> 💡 Campos no formato `{ pt: "...", en: "..." }` são bilíngues. Se não quiser tradução, repita o mesmo texto nos dois.

## 🔗 Link de Acesso
O site está hospedado e pode ser acessado no seguinte link:
**[Inserir Link do Site Publicado](#)**

## 🛠️ Tecnologias Utilizadas
* **Front-end:** React 18 + Vite
* **Estilização/Componentes:** Tailwind CSS + Material UI (MUI)
* **Hospedagem em Nuvem:** Vercel *(sugerido)*
* **Design/Prototipação:** Figma

## 📦 Dependências e Bibliotecas
* `react` / `react-dom` — Biblioteca de UI e renderização.
* `@mui/material` — Componentes prontos (botões, inputs, drawer, snackbar).
* `@mui/icons-material` — Conjunto de ícones (GitHub, LinkedIn, e-mail, etc.).
* `@emotion/react` / `@emotion/styled` — Engine de estilos exigida pelo MUI.
* `tailwindcss` — Framework CSS utilitário para o layout e o tema.
* `vite` — Bundler e servidor de desenvolvimento rápido.
* `autoprefixer` / `postcss` — Processamento e compatibilidade do CSS.

## 🖼️ Protótipos
* **Preview do Layout:**
![Figma](/Processo_de_Desenvolvimento/Sprint_01_Lab01S01/evidencias/Evidence-FigmaCreation.png)

## 📂 Estrutura de Diretórios
```text
/
├── Processo_de_Desenvolvimento/   # Acompanhamento e evidências das Sprints
│   ├── Sprint_01_Lab01S01/
│   ├── Sprint_02_Lab01S02/
│   └── Sprint_03_Lab01S03/
├── public/
│   └── profile/                   # 📸 SUAS fotos aqui (avatar, prints de projeto)
│       └── avatar-placeholder.svg #   Placeholder pronto (troque pela sua foto)
├── src/                           # Código-fonte principal
│   ├── config/                    # ⭐ ÁREA DE EDIÇÃO POR MEMBRO
│   │   ├── profile.config.js      #   👉 EDITE AQUI: seus dados (nome, foto, links...)
│   │   └── i18n.js                #   Rótulos de navegação e títulos (PT/EN)
│   ├── components/                # Componentes reutilizáveis (não precisa editar)
│   │   ├── Navbar.jsx             #   Cabeçalho fixo + toggle PT/EN + menu mobile
│   │   ├── Hero.jsx               #   Seção "Sobre Mim" (foto OU code window)
│   │   ├── Projects.jsx           #   Timeline de projetos
│   │   ├── ProjectCard.jsx        #   Cartão de projeto
│   │   ├── Experience.jsx         #   Experiências profissionais
│   │   ├── Contact.jsx            #   Info de contato + formulário
│   │   ├── Footer.jsx             #   Rodapé + redes sociais
│   │   └── icons.js               #   Mapa de ícones das redes sociais
│   ├── App.jsx                    #   Composição das seções + título/favicon
│   ├── theme.js                   #   Tema dark do Material UI
│   ├── main.jsx                   #   Ponto de entrada React
│   └── index.css                  #   Estilos globais + Tailwind
├── index.html
├── tailwind.config.js             # Paleta e tokens do Figma
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md
```

## 💻 Instruções de Instalação e Execução
Siga as etapas abaixo para rodar o projeto localmente em sua máquina.

> **Pré-requisito:** Node.js 18+ instalado.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Mattheusgus/Matheus-Barbosa-LABORATORIO_1_LAB_DESENVOLVIMENTO_DE_SOFTWARE.git
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd Matheus-Barbosa-LABORATORIO_1_LAB_DESENVOLVIMENTO_DE_SOFTWARE
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
4. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
5. **Acesse no navegador:**
   O site estará rodando em `http://localhost:5173`.

### Build de produção
```bash
npm run build      # gera a pasta dist/
npm run preview    # pré-visualiza o build localmente
```

## 🧑‍💻 Autores
* **Matheus Barbosa**
* **Cleverson Rosa**
* **Rafael Lopes**
* **Caio Ferreira**

## 🔗 Redes
* [LinkedIn](#)
* [GitHub](https://github.com/seu-usuario)
