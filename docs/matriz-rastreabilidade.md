---
title: matriz-rastreabilidade.md
---

# Matriz de Rastreabilidade Parcial

**Projeto:** Sistema de Monitoramento do Plano Decenal da Criança e do Adolescente  
**Versão:** 0.2  
**Entrega:** Semana 3 - Protótipo inicial e rastreabilidade parcial  
**Data:** 18/06/2025  
**Status:** Parcial / em evolução

---

## 1. Objetivo

Esta matriz relaciona requisitos evoluídos, histórias de usuário, casos de uso, critérios de aceitação e telas do protótipo inicial.

A versão 0.2 atualiza a rastreabilidade para refletir as decisões de evolução dos requisitos inconsistentes, especialmente nos pontos de hierarquia, permissões, segurança, acessibilidade, cadastro/edição, busca/filtros e histórico/auditoria.

---

## 2. Convenções

| Prefixo | Significado |
|---|---|
| RF | Requisito funcional |
| RNF | Requisito não funcional |
| EV | Evolução aplicada ao requisito |
| HU | História de usuário |
| UC | Caso de uso |
| TP | Tela do protótipo |
| CA | Critério de aceitação |

> O sufixo `-EV` indica que o requisito foi mantido como evoluído. RF15 permanece apenas no histórico como duplicado de RF09.

---


## 3. Telas do Protótipo

| ID da tela | Tela | Arquivo / referência | Objetivo |
|---|---|---|---|
| TP01 | Tela Inicial Pública | `prototipo/index.html#inicio` | Apresentar visão geral, problemas públicos e acesso às principais áreas. |
| TP02 | Busca e Filtros | `prototipo/index.html#busca` | Representar busca textual e filtros estruturados como recursos separados. |
| TP03 | Visualização de Indicadores | `prototipo/index.html#indicadores` | Exibir progresso dos indicadores por meio de cards e elementos visuais simples. |
| TP04 | Detalhamento de Objetivos e Tarefas | `prototipo/index.html#detalhamento` | Exibir hierarquia, tarefas, indicadores, responsáveis, colaboradores, status e percentual. |
| TP05 | Histórico de Atualizações | `prototipo/index.html#historico` | Apresentar histórico público de alterações relevantes em tarefas e indicadores. |

---

## 4. Matriz de Rastreabilidade Parcial

| Requisito evoluído | Evolução aplicada | História | Caso de uso | Tela(s) | Critérios relacionados | Situação no protótipo v1 |
|---|---|---|---|---|---|---|
| RF01-EV | Problemas públicos vinculados à hierarquia completa do plano. | HU01 | UC01 - Consultar problemas públicos | TP01 | CA-HU01-01, CA-HU01-02, CA-HU01-03 | Representado por cards/área de visão geral pública. |
| RF01-EV, RF02-EV | Hierarquia completa: Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa → Indicador. | HU02 | UC02 - Navegar pela hierarquia do plano | TP01, TP04 | CA-HU02-01, CA-HU02-02, CA-HU02-03, CA-HU02-04 | Representado por estrutura textual e caminho de navegação. |
| RF03 | Consulta de status e percentual de tarefas. | HU03 | UC03 - Consultar andamento de tarefas | TP04 | CA-HU03-01, CA-HU03-02, CA-HU03-03 | Representado por status e percentuais demonstrativos. |
| RF04-EV | Busca textual separada dos filtros estruturados. | HU04 | UC04 - Buscar informações | TP02 | CA-HU04-01, CA-HU04-02, CA-HU04-03 | Representado visualmente por campo de busca. Sem lógica funcional nesta versão simplificada. |
| RF05-EV | Filtros estruturados por compromisso, indicador, período, status e responsável. | HU05 | UC05 - Aplicar filtros | TP02 | CA-HU05-01, CA-HU05-02, CA-HU05-03 | Representado visualmente por campos/filtros. Sem lógica funcional nesta versão simplificada. |
| RF06-EV, RNF04 | Exportação deve preservar filtros, data de geração e contexto. | HU06 | UC06 - Exportar dados filtrados | TP09 | CA-HU06-01, CA-HU06-02, CA-HU06-03, CA-HU06-04 | Representado por seção de exportação e formatos previstos. | 

---

## 5. Requisitos Marcados para Histórico

| Requisito original | Decisão | Justificativa | Como aparece na matriz |
|---|---|---|---|
| RF15 | Marcado como duplicado de RF09 | Ambos tratavam de painel administrativo e permissões. | Não aparece como requisito principal; fica registrado no histórico. |
| RF23 | Reclassificado como RNF09-EV | Uso de JWT é decisão técnica de segurança, não ação direta do usuário. | Vinculado à HU09 como requisito não funcional de segurança. |
| RF14 | Reclassificado em RNF09-EV | Medidas de segurança são restrições técnicas. | Vinculado à HU09 e ao controle de acesso. |

---

## 6. Observações de Evolução

- A matriz esta atualizada para usar requisitos evoluídos, mantendo rastreabilidade com as histórias já existentes.
- Busca, filtros, exportação, login, importação e atualização de tarefas estão representados visualmente, mas não implementados como funcionalidades reais.
- A separação entre histórico público e log administrativo foi explicitada para evitar ambiguidade entre transparência e auditoria.
- A duplicidade entre RF09 e RF15 foi resolvida na rastreabilidade: RF09 permanece como requisito principal e RF15 fica no histórico.

---

## 7. Próximas Ações

- [ ] Validar com a professora/cliente se as evoluções propostas serão aceitas.
- [ ] Complementar casos de uso detalhados.
- [ ] Ajustar o protótipo caso a hierarquia ou os perfis sejam alterados após validação.
- [ ] Atualizar a matriz após a validação do protótipo.
- [ ] Registrar novas decisões em `docs/historico-versoes.md`

---

## 8. Histórico de Alterações

| Versão | Data | Alteração |
|---|---|---|
| 0.1 | 18/06/2025 | Criação da matriz parcial da Semana 3. |
| 0.2 | 18/06/2025 | Atualização da matriz para refletir requisitos evoluídos e protótipo simplificado. |
