# Backlog Priorizado

**Projeto:** Sistema de Monitoramento do Plano Decenal da Criança e do Adolescente  
**Versão:** 1.1  
**Data:** 11/06/2025  
**Referência:** `docs/backlog.md`  
**Status:** Em evolução

---

## 1. Objetivo

Este documento organiza o backlog priorizado do sistema, relacionando as histórias de usuário aos requisitos, telas previstas e estado de desenvolvimento.

O backlog será utilizado para orientar a evolução do protótipo, da documentação viva e da matriz de rastreabilidade.

---

## 2. Critérios de Priorização

As histórias foram classificadas em três níveis:

| Prioridade | Significado |
|---|---|
| Obrigatória | Funcionalidade essencial para atender ao escopo mínimo do trabalho e do sistema. |
| Importante | Funcionalidade relevante para melhorar acompanhamento, análise e administração do sistema. |
| Desejável | Característica complementar ou melhoria de qualidade, podendo evoluir nas próximas versões. |

---

## 3. Visão Geral do Backlog

| Prioridade | Quantidade |
|---|---:|
| Obrigatória | 11 |
| Importante | 5 |
| Desejável | 2 |

---

## 4. Backlog — Histórias Obrigatórias

| Ordem | ID | História | Perfil | Requisitos | Tela | Status |
|---:|---|---|---|---|---|---|
| 1 | HU01 | Visualizar problemas públicos | Público Geral | RF01 | Tela Inicial | A fazer |
| 2 | HU02 | Navegar pela hierarquia do plano | Público Geral | RF01, RF02 | Tela Inicial, Detalhamento | A fazer |
| 3 | HU03 | Acompanhar status das tarefas | Público Geral | RF03 | Detalhamento | A fazer |
| 4 | HU04 | Realizar busca no sistema | Público Geral | RF04 | Busca e Filtros | A fazer |
| 5 | HU05 | Aplicar filtros | Público Geral | RF05 | Busca e Filtros | A fazer |
| 6 | HU08 | Ativar modo de alto contraste | Público Geral | RF10, RNF01 | Todas | A fazer |
| 7 | HU09 | Realizar login | Usuário autenticado | RF11, RF23, RNF08 | Login | A fazer |
| 8 | HU10 | Atualizar status de tarefas | Conselho / Secretaria, SEDEF | RF03, RF08, RF22 | Detalhamento | A fazer |
| 9 | HU12 | Inserir novos dados via interface | SEDEF | RF12, RF22 | Painel Administrativo | A fazer |
| 10 | HU14 | Gerenciar permissões de usuários | Administrador | RF09, RF15, RF20 | Gerenciamento de Usuários | A fazer |
| 11 | HU16 | Visualizar responsáveis e colaboradores da ação | Público Geral, Conselho / Secretaria, SEDEF | RF19 | Detalhamento | A fazer |

---

## 5. Backlog — Histórias Importantes

| Ordem | ID | História | Perfil | Requisitos | Tela | Status |
|---:|---|---|---|---|---|---|
| 12 | HU06 | Exportar dados filtrados | Público Geral | RF06, RNF04 | Exportação de Dados | A fazer |
| 13 | HU07 | Visualizar gráficos de progresso | Público Geral | RF16, RF17, RF18, RNF02 | Visualização de Indicadores | A fazer |
| 14 | HU11 | Visualizar histórico de atualizações | Público Geral | RF07, RF08 | Histórico de Atualizações | A fazer |
| 15 | HU13 | Importar dados por planilha | SEDEF | RF21 | Painel Administrativo | A fazer |
| 16 | HU15 | Visualizar log de auditoria | Administrador | RF13 | Painel Administrativo | A fazer |

---

## 6. Backlog — Itens Desejáveis

| Ordem | ID | Item | Tipo | Requisitos | Tela | Status |
|---:|---|---|---|---|---|---|
| 17 | MEL01 | Responsividade completa em dispositivos móveis | Melhoria de qualidade | RNF02 | Todas | A fazer |
| 18 | MEL02 | Interface visual similar ao Conselho Estadual | Melhoria de interface | RNF06 | Todas | A fazer |

---

## 7. Organização por Tela do Protótipo

| Tela | Histórias relacionadas |
|---|---|
| Tela Inicial | HU01, HU02 |
| Busca e Filtros | HU04, HU05 |
| Visualização de Indicadores | HU07 |
| Detalhamento de Objetivos e Tarefas | HU02, HU03, HU10, HU16 |
| Histórico de Atualizações | HU11 |
| Login | HU09 |
| Painel Administrativo | HU12, HU13, HU15 |
| Gerenciamento de Usuários | HU14 |
| Exportação de Dados | HU06 |
| Todas as telas | HU08, MEL01, MEL02 |

---

## 8. Organização por Perfil

| Perfil | Histórias relacionadas |
|---|---|
| Público Geral | HU01, HU02, HU03, HU04, HU05, HU06, HU07, HU08, HU11, HU16 |
| Conselho / Secretaria | HU09, HU10, HU16 |
| SEDEF | HU09, HU10, HU12, HU13, HU16 |
| Administrador | HU09, HU14, HU15 |

---

## 9. Inconsistências e Decisões de Backlog

| ID | Inconsistência | Decisão | Impacto |
|---|---|---|---|
| IC01 | RF09 e RF15 possuem escopo duplicado sobre painel administrativo e permissões. | Manter RF09 e marcar RF15 como duplicata no histórico de versões. | HU14 permanece vinculada a ambos temporariamente, até revisão formal. |
| IC02 | RF12 e RF22 possuem sobreposição sobre inserção/alteração via interface. | Manter RF12 para inserção e RF22 para alteração de registros existentes. | HU12 e HU10 usam os requisitos com escopo delimitado. |
| IC03 | RF19 não possuía história correspondente na versão anterior. | Criar HU16 para exibir responsável principal e colaboradores. | Backlog passa a cobrir RF19. |
| IC04 | RF23 cita JWT como funcionalidade, mas possui natureza técnica. | Manter vínculo com HU09, mas considerar reclassificação como requisito não funcional de segurança. | Será revisado em histórico de versões. |

---

## 10. Próximas Ações

- [ ] Criar telas iniciais do protótipo navegável.
- [ ] Atualizar `docs/matriz-rastreabilidade.md`.
- [ ] Registrar IC01, IC02, IC03 e IC04 em `docs/historico-versoes.md`.
- [ ] Validar se todos os requisitos funcionais possuem pelo menos uma história associada.
- [ ] Validar se todos os itens obrigatórios possuem critério de aceitação correspondente.

---

## 11. Histórico de Alterações

| Versão | Data | Alteração |
|---|---|---|
| 1.0 | 11/06/2025 | Criação inicial do backlog na entrega da Semana 2. |
| 1.1 | 11/06/2025 | Separação do backlog em documento próprio, inclusão da HU16 e criação de organização por tela e perfil. |
