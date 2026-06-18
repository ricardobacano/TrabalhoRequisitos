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
| TP06 | Login | `prototipo/index.html#login` | Representar acesso restrito às funcionalidades administrativas. |
| TP07 | Painel Administrativo | `prototipo/index.html#admin` | Representar cadastro, edição, importação e log administrativo. |
| TP08 | Gerenciamento de Usuários | `prototipo/index.html#usuarios` | Representar alteração de perfis e permissões dos quatro perfis oficiais. |
| TP09 | Exportação de Dados | `prototipo/index.html#exportacao` | Representar exportação de dados filtrados com contexto da consulta. |
| TP10 | Acessibilidade / Alto Contraste | Todas as telas | Representar recurso de acessibilidade visual e preocupação com legibilidade. |
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
| RF16, RF17, RF18, RNF02 | Indicadores com visualização de progresso e diferenciação visual. | HU07 | UC07 - Visualizar indicadores | TP03 | CA-HU07-01, CA-HU07-02, CA-HU07-03 | Representado por cards e elementos visuais simples. |
| RF10-EV, RNF01-EV | Alto contraste como funcionalidade e acessibilidade como qualidade geral. | HU08 | UC08 - Ativar alto contraste | TP10 | CA-HU08-01, CA-HU08-02, CA-HU08-03, CA-HU08-04 | Representado como recurso/estado visual previsto. Persistência fica para versão futura. |
| RF11, RNF08, RNF09-EV | Login como funcionalidade; JWT/segurança reclassificados como RNF. | HU09 | UC09 - Realizar login | TP06 | CA-HU09-01, CA-HU09-02, CA-HU09-03, CA-HU09-04 | Representado por formulário de login demonstrativo. |
| RF03, RF08-EV, RF22-EV | Edição de status separada de cadastro e registrada no histórico. | HU10 | UC10 - Atualizar status de tarefa | TP04, TP07 | CA-HU10-01, CA-HU10-02, CA-HU10-03 | Representado por indicação de edição/atualização no detalhamento e painel. |
| RF07-EV, RF08-EV | Histórico público separado do log administrativo. | HU11 | UC11 - Visualizar histórico público | TP05 | CA-HU11-01, CA-HU11-02, CA-HU11-03, CA-HU11-04 | Representado por linha do tempo pública. |
| RF12-EV | Cadastro de novos registros da hierarquia e responsáveis. | HU12 | UC12 - Inserir dados via interface | TP07 | CA-HU12-01, CA-HU12-02, CA-HU12-03, CA-HU12-04 | Representado por formulário administrativo simples. |
| RF21-EV | Importação por planilha com validação e prévia. | HU13 | UC13 - Importar dados por planilha | TP07 | CA-HU13-01, CA-HU13-02, CA-HU13-03, CA-HU13-04 | Representado por campo de upload e descrição da validação. |
| RF09-EV, RF20-EV | Permissões unificadas; Administrador como quarto perfil. RF15 duplicado. | HU14 | UC14 - Gerenciar permissões | TP08 | CA-HU14-01, CA-HU14-02, CA-HU14-03, CA-HU14-04, CA-HU14-05 | Representado por tabela de usuários e perfis. |
| RF13-EV | Log administrativo de auditoria separado do histórico público. | HU15 | UC15 - Visualizar log de auditoria | TP07 | CA-HU15-01, CA-HU15-02, CA-HU15-03, CA-HU15-04 | Representado por tabela de auditoria no painel. |
| RF19-EV | Responsável, colaboradores, órgão/setor e papel da ação. | HU16 | UC16 - Visualizar responsáveis e colaboradores | TP04 | CA-HU16-01, CA-HU16-02, CA-HU16-03, CA-HU16-04 | Representado nos cards de tarefas/detalhamento. |


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
