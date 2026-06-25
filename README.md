# Trabalho Requisitos

## Sistema de Monitoramento do Plano Decenal da Criança e do Adolescente

Projeto desenvolvido para a disciplina de **CI1162 Engenharia de Requisitos**, com foco em documentação viva, evolução de requisitos, rastreabilidade, prototipação e versionamento com Git.

## Sobre o Projeto

O sistema tem como objetivo apoiar o acompanhamento do Plano Decenal da Criança e do Adolescente, permitindo a visualização de problemas públicos, compromissos, objetivos, linhas de ação, tarefas e indicadores.

A proposta busca oferecer uma plataforma pública e administrativa para consulta, acompanhamento, atualização e análise das ações previstas no plano.

## Escopo Geral

O sistema contempla:

* visualização pública dos problemas públicos e compromissos;
* navegação pela hierarquia do Plano Decenal;
* acompanhamento de tarefas, status e percentuais;
* visualização de indicadores e dashboard;
* busca textual e filtros estruturados;
* histórico público de atualizações;
* login e acesso administrativo;
* gerenciamento de usuários e permissões;
* cadastro, edição e importação de dados;
* exportação da dashboard;
* recurso de acessibilidade, como alto contraste.

## Hierarquia do Sistema

A estrutura principal acompanhada pelo sistema segue a hierarquia:

```text
Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa → Indicador
```

## Perfis de Usuário

| Perfil                | Descrição                                                                   |
| --------------------- | --------------------------------------------------------------------------- |
| Público Geral         | Usuário que acessa informações públicas sem autenticação.                   |
| Conselho / Secretaria | Usuário autenticado com permissão de acompanhamento e atualização limitada. |
| SEDEF                 | Usuário autenticado responsável por manter dados do Plano Decenal.          |
| Administrador         | Usuário responsável por permissões, usuários e auditoria do sistema.        |

## Estrutura do Projeto

```text
TrabalhoRequisitos/
│
├── README.md
│
├── docs/
│   ├── requisitos.md
│   ├── backlog.md
│   ├── user_storys.md
│   ├── criterios-aceitacao.md
│   ├── regras-negocio.md
│   ├── casos-uso.md
│   └── matriz-rastreabilidade.md
│  
│
├── prototipo/
│   ├── index.html (e demais arquivos .html) 
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── script.js
│
├── entregas/
│   └── TrabRequisitos_Semana01.pdf
│
└── assets/
    └── imagens/
```

## Descrição das Pastas

| Pasta / Arquivo                  | Descrição                                                                      |
| -------------------------------- | ------------------------------------------------------------------------------ 
| `docs/`                          | Contém a documentação viva do projeto.                                         |
| `docs/requisitos.md`             | Lista os requisitos funcionais e não funcionais evoluídos.                     |
| `docs/backlog.md`                | Organiza as histórias e funcionalidades por prioridade.                        |
| `docs/user_storys.md`      | Registra as histórias de usuário do sistema.                                   |
| `docs/criterios-aceitacao.md`    | Define os critérios para validar cada história.                                |
| `docs/regras-negocio.md`         | Registra regras e restrições do domínio do sistema.                            |
| `docs/casos-uso.md`              | Apresenta os casos de uso preliminares.                                        |
| `docs/matriz-rastreabilidade.md` | Relaciona requisitos, histórias, casos de uso, critérios e telas do protótipo. 
| `prototipo/`                     | Contém os arquivos HTML, CSS e JavaScript do protótipo navegável.              |
| `prototipo/css/`                 | Contém os estilos visuais do protótipo.                                        |
| `prototipo/js/`                  | Contém scripts básicos de interação do protótipo.                              |
| `entregas/`                      | Registra as entregas semanais do projeto.                                      |
| `assets/`                        | Armazena imagens, capturas e arquivos auxiliares.                            

## Padrão de Commits

O projeto utiliza um padrão simples de mensagens de commit possui tipos e tags.

Formato recomendado:

```text
tipo(escopo): descrição breve da alteração
```

Exemplo:

```text
docs(backlog): atualiza histórias priorizadas
```

## Tipos de Commit Utilizados

| Tipo       | Descrição                                                                                                                | 
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| `docs`     | Alterações em documentação Markdown, requisitos, backlog, histórias, critérios, casos de uso ou matriz de rastreabilidade. |      
| `feat`     | Inclusão de nova funcionalidade no protótipo ou no projeto.                                                                | 
| `fix`      | Correção de erro em documentação, protótipo ou rastreabilidade.                                                            | 
| `style`    | Ajustes visuais, CSS, espaçamento, formatação ou aparência.                                                                | 
| `chore`    | Organização do repositório, criação de pastas, ajustes estruturais ou tarefas auxiliares.                                  | 
| `release`  | Fechamento de uma entrega semanal ou versão final.                                                                         |
