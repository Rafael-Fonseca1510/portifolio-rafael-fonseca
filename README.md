# Meu Portfólio Profissional

## 📖 Descrição do Projeto
Website de portfólio profissional desenvolvido para a disciplina de **Projeto de Software - Laboratório 1**. O objetivo do sistema é apresentar a trajetória, habilidades, projetos e formas de contato de maneira moderna, responsiva e acessível.

O site é composto pelas seguintes seções:
* **Sobre Mim** — apresentação pessoal, formação e principais competências.
* **Projetos** — vitrine dos principais trabalhos desenvolvidos, com descrição e tecnologias.
* **Experiências** — trajetória acadêmica e profissional.
* **Contato** — canais de comunicação e redes sociais.

## Link de Acesso
O site está hospedado e pode ser acessado no seguinte link:
**[Link do Site Publicado](#)**

## 🛠️ Tecnologias Utilizadas
| Categoria | Tecnologia |
|-----------|------------|
| **Front-end** | React |
| **Build Tool** | Vite |
| **Estilização** | Tailwind CSS |
| **Componentes** | Material-UI (MUI) |
| **Roteamento** | React Router DOM |
| **Hospedagem em Nuvem** | Render |
| **Design/Prototipação** | Figma |
| **Controle de Versão** | Git + GitHub |

## 📦 Dependências e Bibliotecas
Principais pacotes utilizados no projeto:

* `react` / `react-dom` — Biblioteca base para construção da interface por componentes.
* `react-router-dom` — Gerenciamento de rotas e navegação entre as seções (SPA).
* `@mui/material` — Biblioteca de componentes prontos e acessíveis do Material-UI.
* `@emotion/react` / `@emotion/styled` — Motor de estilização exigido pelo MUI.
* `@mui/icons-material` — Conjunto de ícones do Material Design.
* `tailwindcss` — Framework CSS utilitário para estilização rápida e responsiva.
* `postcss` / `autoprefixer` — Processamento e compatibilidade do CSS entre navegadores.
* `vite` — Ferramenta de build e servidor de desenvolvimento rápido.

> As versões exatas de cada dependência estão listadas no arquivo `package.json`.

## Protótipos
* **Preview do Layout:**
![Figma](/Sprint_01_Lab01S01/evidencias/Evidence-FigmaCreation.png)

## 📂 Estrutura de Diretórios
A estrutura do projeto está organizada da seguinte forma:

```text
/
├── Processo_de_Desenvolvimento/  # Arquivos de acompanhamento e evidências das Sprints
│   ├── Sprint_01_Lab01S01/
│   ├── Sprint_02_Lab01S02/
│   └── Sprint_03_Lab01S03/
├── src/                          # Código-fonte principal do projeto
│   ├── components/               # Componentes visuais reutilizáveis
│   ├── pages/                    # Páginas (Sobre Mim, Projetos, etc.)
│   └── assets/                   # Imagens, fontes, vídeos e GIFs
├── README.md                     # Documentação do projeto
└── [Arquivos de configuração do sistema (ex: package.json)]
```

## 💻 Instruções de Instalação e Execução
Siga as etapas abaixo para rodar o projeto localmente em sua máquina.

**Pré-requisitos:** ter o [Node.js](https://nodejs.org/) (versão 18 ou superior) e o `npm` instalados.

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
> ⚠️ Nota: Caso a porta 5173 já esteja em uso por outro processo, o Vite automaticamente iniciará o servidor na próxima porta disponível (ex.: 5174, 5175...). Verifique sempre a URL exata exibida no terminal ao rodar npm run dev.

### 📜 Scripts Disponíveis
| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento local. |
| `npm run build` | Gera a versão de produção otimizada na pasta `dist/`. |
| `npm run preview` | Executa localmente a build de produção para validação. |

## 🧑‍💻 Autores
* **Matheus Barbosa** — [GitHub](https://github.com/Mattheusgus) - [LinkedIn](https://www.linkedin.com/in/omatheusaugusto)
* **Cleverson Rosa**
* **Rafael Lopes**
* **Caio Ferreira**
