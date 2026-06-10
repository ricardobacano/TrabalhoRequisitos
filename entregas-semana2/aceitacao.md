# Critérios de Aceitação

**Projeto:** Sistema de Monitoramento do Plano Decenal da Criança e do Adolescente  
**Versão:** 1.1  
**Data:** 11/06/2025  
**Referência:** `docs/aceitacao.md`  
**Status:** Em evolução

---

## 1. Objetivo

Este documento define os critérios de aceitação das histórias de usuário do sistema.

Os critérios de aceitação indicam as condições mínimas que devem ser atendidas para que uma funcionalidade seja considerada válida no protótipo e na documentação de requisitos.

---

## 2. Padrão Utilizado

Os critérios são organizados por história de usuário.

Sempre que possível, os critérios seguem a lógica:

> **Dado que** uma condição inicial existe,  
> **quando** o usuário realiza uma ação,  
> **então** o sistema deve apresentar um resultado esperado.

Além disso, cada história possui uma lista de verificação para facilitar a validação.

---

## 3. Critérios por História de Usuário

---

## HU01 — Visualizar problemas públicos

**Critérios no formato Dado/Quando/Então**

| ID | Critério |
|---|---|
| CA-HU01-01 | Dado que o usuário acessa a tela inicial, quando a página é carregada, então o sistema deve exibir os 23 problemas públicos. |
| CA-HU01-02 | Dado que um problema público é exibido, quando o usuário visualiza seus detalhes, então o sistema deve apresentar seu compromisso decenal vinculado. |
| CA-HU01-03 | Dado que o usuário não está autenticado, quando acessa a tela inicial, então o sistema deve permitir a visualização dos dados públicos. |

**Checklist de validação**

- [ ] Os 23 problemas públicos são exibidos.
- [ ] Cada problema possui compromisso vinculado.
- [ ] O acesso público funciona sem login.
- [ ] A listagem é compreensível e acessível.

---

## HU02 — Navegar pela hierarquia do plano

| ID | Critério |
|---|---|
| CA-HU02-01 | Dado que o usuário seleciona um problema público, quando acessa seus detalhes, então o sistema deve exibir os compromissos vinculados. |
| CA-HU02-02 | Dado que o usuário está em um compromisso, quando seleciona um objetivo, então o sistema deve exibir suas linhas de ação. |
| CA-HU02-03 | Dado que o usuário navega pela estrutura, quando avança ou retorna entre níveis, então o caminho de navegação deve permanecer claro. |

**Checklist de validação**

- [ ] A hierarquia Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa está representada.
- [ ] O usuário consegue navegar entre os níveis.
- [ ] Existe indicação visual do nível atual.
- [ ] O acesso não exige login.