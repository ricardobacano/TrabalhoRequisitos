---

## title: regras-negocio.md

# Regras de Negócio

**Projeto:** Sistema de Monitoramento do Plano Decenal da Criança e do Adolescente
**Versão:** 0.2
**Data:** 19/06/2025
**Status:** Em evolução

---

## 1. Objetivo

Este documento registra regras de negócio preliminares derivadas dos requisitos evoluídos e das histórias de usuário.

A versão 0.2 incorpora ajustes solicitados após validação com a professora/cliente, especialmente nos pontos de registro de alteração, exportação da dashboard e uso dos anos correspondentes ao Plano Decenal carregado.

---

## 2. Regras de Negócio Preliminares

| ID   | Regra de negócio                                                                                                                                                                                                                                                                      | Relacionamento                                       |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| RN01 | Informações públicas do Plano Decenal devem estar disponíveis sem autenticação.                                                                                                                                                                                                       | HU01, HU02, HU03, HU04, HU05, HU06, HU07, HU11, HU16 |
| RN02 | A hierarquia oficial do sistema deve seguir Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa → Indicador.                                                                                                                                                           | RF01-EV, RF02-EV                                     |
| RN03 | Apenas usuários autenticados e autorizados podem cadastrar ou editar dados.                                                                                                                                                                                                           | HU09, HU10, HU12, HU13                               |
| RN04 | Apenas Administradores podem gerenciar usuários e permissões.                                                                                                                                                                                                                         | HU14                                                 |
| RN05 | Alterações administrativas devem gerar registro de alteração ou registro de auditoria contendo, quando aplicável: tipo da ação, entidade afetada, identificador do item, usuário responsável, data e hora, campo modificado, valor anterior, valor novo e justificativa da alteração. | HU10, HU12, HU13, HU14, HU15                         |
| RN06 | Histórico público deve exibir apenas alterações relevantes ao acompanhamento do plano, sem expor dados administrativos sensíveis.                                                                                                                                                     | HU11                                                 |
| RN07 | A exportação deve contemplar a dashboard de acompanhamento, respeitando os filtros aplicados, o período selecionado, os indicadores exibidos, os percentuais, os gráficos e a data de geração.                                                                                        | HU06, HU07                                           |
| RN08 | Importações por planilha devem ser validadas antes da confirmação e devem apresentar uma prévia dos registros que serão importados.                                                                                                                                                   | HU13                                                 |
| RN09 | Cada ação deve indicar responsável principal e, quando houver, colaboradores vinculados, órgão/setor e papel desempenhado.                                                                                                                                                            | HU16                                                 |
| RN10 | A interface deve prever recurso de acessibilidade visual e manter boa legibilidade para o usuário.                                                                                                                                                                                    | HU08                                                 |
| RN11 | As consultas, filtros, dashboards e exportações devem considerar o intervalo de anos correspondente ao Plano Decenal carregado no sistema, evitando uso de períodos arbitrários.                                                                                                      | HU04, HU05, HU06, HU07                               |

---

## 3. Pendências

* [ ] Validar regras de negócio com a professora/cliente.
* [ ] Verificar se Indicador será último nível da hierarquia ou entidade associada a tarefa/objetivo.
* [ ] Confirmar os anos inicial e final do Plano Decenal que serão carregados no sistema.
* [ ] Confirmar quais informações da dashboard devem aparecer na exportação.
* [ ] Definir se a justificativa da alteração será obrigatória em todos os registros de alteração ou apenas em alterações sensíveis.
* [ ] Detalhar restrições específicas de cada perfil de usuário.

---

## 4. Histórico de Alterações

| Versão | Data       | Alteração                                                                                                                                                                   |
| ------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.1    | 18/06/2025 | Criação das regras de negócio preliminares.                                                                                                                                 |
| 0.2    | 18/06/2025 | Ajustes após validação com a professora/cliente: especificação do registro de alteração, exportação da dashboard e inclusão da regra sobre anos do Plano Decenal carregado. |
