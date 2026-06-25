# Backlog

**Projeto:** Sistema de Monitoramento do Plano Decenal da Criança e do Adolescente
**Versão:** 1.3
**Data:** 25/06/2025
**Status:** Finalizado

---

## 1. Objetivo

Este documento organiza o backlog priorizado do sistema, relacionando histórias de usuário, requisitos evoluídos, telas previstas e estado de desenvolvimento.

Nesta versão, o backlog foi revisado para refletir as evoluções dos requisitos inconsistentes identificados nas semanas anteriores e os ajustes solicitados após validação com a professora/cliente. As principais mudanças envolvem:

* consolidação da hierarquia completa do Plano Decenal;
* separação entre busca textual e filtros estruturados;
* remoção do campo status dos filtros estruturados;
* separação entre cadastro e edição de registros;
* especificação do registro de alteração/auditoria;
* unificação do gerenciamento de permissões;
* reclassificação de requisitos técnicos de segurança;
* exportação da dashboard de acompanhamento;
* uso dos anos correspondentes ao Plano Decenal carregado;
* melhoria da rastreabilidade entre requisitos, histórias, critérios e protótipo.

---

## 2. Critérios de Priorização

| Prioridade  | Significado                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------- |
| Obrigatória | Funcionalidade essencial para atender ao escopo mínimo do trabalho e do sistema.                           |
| Importante  | Funcionalidade relevante para melhorar acompanhamento, análise, transparência ou administração do sistema. |
| Desejável   | Característica complementar ou melhoria de qualidade, podendo evoluir nas próximas versões.                |

---

## 3. Visão Geral do Backlog

| Prioridade  | Quantidade |
| ----------- | ---------: |
| Obrigatória |         11 |
| Importante  |          5 |
| Desejável   |          2 |

---

## 4. Backlog - Histórias Obrigatórias

| Ordem | ID   | História                                        | Perfil                                      | Requisitos evoluídos   | Tela                                | Status                                 |
| ----: | ---- | ----------------------------------------------- | ------------------------------------------- | ---------------------- | ----------------------------------- | -------------------------------------- |
|     1 | HU01 | Visualizar problemas públicos                   | Público Geral                               | RF01-EV                | Tela Inicial                        | Parcialmente representada no protótipo |
|     2 | HU02 | Navegar pela hierarquia completa do plano       | Público Geral                               | RF01-EV, RF02-EV       | Tela Inicial, Detalhamento          | Parcialmente representada no protótipo |
|     3 | HU03 | Acompanhar status das tarefas                   | Público Geral                               | RF03                   | Detalhamento                        | Parcialmente representada no protótipo |
|     4 | HU04 | Realizar busca textual no sistema               | Público Geral                               | RF04-EV                | Busca e Filtros                     | Representada visualmente no protótipo  |
|     5 | HU05 | Aplicar filtros estruturados                    | Público Geral                               | RF05-EV                | Busca e Filtros                     | Representada visualmente no protótipo  |
|     6 | HU08 | Ativar modo de alto contraste                   | Público Geral                               | RF10-EV, RNF01-EV      | Acessibilidade / Todas as telas     | Representada visualmente no protótipo  |
|     7 | HU09 | Realizar login                                  | Conselho / Secretaria, SEDEF, Administrador | RF11, RNF08, RNF09-EV  | Login                               | Representada visualmente no protótipo  |
|     8 | HU10 | Atualizar status e percentual de tarefas        | Conselho / Secretaria, SEDEF                | RF03, RF08-EV, RF22-EV | Detalhamento, Painel Administrativo | Parcialmente representada no protótipo |
|     9 | HU12 | Inserir novos dados via interface               | SEDEF                                       | RF12-EV                | Painel Administrativo               | Representada visualmente no protótipo  |
|    10 | HU14 | Gerenciar permissões de usuários                | Administrador                               | RF09-EV, RF20-EV       | Gerenciamento de Usuários           | Representada visualmente no protótipo  |
|    11 | HU16 | Visualizar responsáveis e colaboradores da ação | Público Geral, Conselho / Secretaria, SEDEF | RF19-EV                | Detalhamento                        | Representada visualmente no protótipo  |

---

## 5. Backlog - Histórias Importantes

| Ordem | ID   | História                                         | Perfil        | Requisitos evoluídos              | Tela                                    | Status                                 |
| ----: | ---- | ------------------------------------------------ | ------------- | --------------------------------- | --------------------------------------- | -------------------------------------- |
|    12 | HU06 | Exportar dashboard de acompanhamento             | Público Geral | RF06-EV, RNF04-EV                 | Dashboard, Exportação da Dashboard      | Representada visualmente no protótipo  |
|    13 | HU07 | Visualizar dashboard de indicadores              | Público Geral | RF16, RF17, RF18, RNF02, RNF07-EV | Dashboard / Visualização de Indicadores | Parcialmente representada no protótipo |
|    14 | HU11 | Visualizar histórico público de atualizações     | Público Geral | RF07-EV, RF08-EV                  | Histórico de Atualizações               | Representada visualmente no protótipo  |
|    15 | HU13 | Importar dados por planilha com validação prévia | SEDEF         | RF21-EV                           | Painel Administrativo                   | Representada visualmente no protótipo  |
|    16 | HU15 | Visualizar log administrativo de auditoria       | Administrador | RF13-EV                           | Painel Administrativo                   | Representada visualmente no protótipo  |

---

## 6. Backlog - Itens Desejáveis

| Ordem | ID    | Item                                           | Tipo                  | Requisitos | Tela  | Status                       |
| ----: | ----- | ---------------------------------------------- | --------------------- | ---------- | ----- | ---------------------------- |
|    17 | MEL01 | Responsividade completa em dispositivos móveis | Melhoria de qualidade | RNF02      | Todas | Planejada para versão futura |
|    18 | MEL02 | Interface visual similar ao Conselho Estadual  | Melhoria de interface | RNF06      | Todas | Planejada para versão futura |

---

## 7. Organização por Tela do Protótipo

| Tela                                    | Histórias relacionadas | Observação da versão atual                                                                                                                          |
| --------------------------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tela Inicial                            | HU01, HU02             | Deve apresentar visão geral e início da hierarquia completa.                                                                                        |
| Busca e Filtros                         | HU04, HU05             | Busca textual e filtros foram separados conceitualmente. Os filtros estruturados contemplam compromisso, indicador, período e responsável.          |
| Dashboard / Visualização de Indicadores | HU06, HU07             | Indicadores aparecem como representação visual inicial e devem considerar o intervalo de anos do Plano Decenal carregado.                           |
| Detalhamento de Objetivos e Tarefas     | HU02, HU03, HU10, HU16 | Deve evidenciar hierarquia, status, percentual, responsáveis e colaboradores.                                                                       |
| Histórico de Atualizações               | HU11                   | Histórico público separado do log administrativo.                                                                                                   |
| Login                                   | HU09                   | Login representa o acesso às áreas restritas.                                                                                                       |
| Painel Administrativo                   | HU10, HU12, HU13, HU15 | Cadastro, edição, importação e auditoria aparecem como módulos distintos.                                                                           |
| Gerenciamento de Usuários               | HU14                   | Administrador é tratado como quarto perfil oficial.                                                                                                 |
| Exportação da Dashboard                 | HU06                   | Exportação deve considerar filtros aplicados, período selecionado, indicadores, gráficos, percentuais, contexto do Plano Decenal e data de geração. |
| Acessibilidade / Todas as telas         | HU08, MEL01, MEL02     | Acessibilidade deve orientar toda a interface.                                                                                                      |

---

## 8. Organização por Perfil

| Perfil                | Histórias relacionadas                                     | Observação                                                        |
| --------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------- |
| Público Geral         | HU01, HU02, HU03, HU04, HU05, HU06, HU07, HU08, HU11, HU16 | Consulta dados públicos sem autenticação.                         |
| Conselho / Secretaria | HU09, HU10, HU16                                           | Acompanha e atualiza informações específicas, conforme permissão. |
| SEDEF                 | HU09, HU10, HU12, HU13, HU16                               | Mantém dados do Plano Decenal e realiza importações.              |
| Administrador         | HU09, HU14, HU15                                           | Gerencia usuários, permissões e auditoria.                        |

---

## 9. Evoluções e Decisões de Backlog

| ID   | Requisito(s)     | Situação identificada                                                                             | Decisão de evolução                                                                                                                                                                                             | Impacto no backlog                                                                                |
| ---- | ---------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| EV01 | RF01, RF02       | A hierarquia estava incompleta em parte da documentação.                                          | Evoluir para Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa → Indicador.                                                                                                                    | HU01 e HU02 passam a representar a hierarquia completa.                                           |
| EV02 | RF09, RF15, RF20 | RF09 e RF15 eram duplicados; RF20 não deixava claro o perfil Administrador.                       | Manter RF09, marcar RF15 como duplicado e oficializar Administrador como quarto perfil.                                                                                                                         | HU14 passa a ficar vinculada a RF09-EV e RF20-EV.                                                 |
| EV03 | RF12, RF22       | Havia sobreposição entre cadastro e edição.                                                       | RF12 fica responsável por cadastro; RF22 fica responsável por edição de registros existentes.                                                                                                                   | HU12 trata cadastro; HU10 trata atualização e edição de tarefas.                                  |
| EV04 | RF10, RNF01      | Acessibilidade aparecia misturada entre funcionalidade e qualidade.                               | RF10 trata alto contraste; RNF01 trata acessibilidade geral da interface.                                                                                                                                       | HU08 continua obrigatória e ligada às telas do protótipo.                                         |
| EV05 | RF14, RF23       | Segurança e JWT eram descritos como funcionalidade.                                               | Reclassificar como requisito não funcional de segurança.                                                                                                                                                        | HU09 passa a se vincular a RF11, RNF08 e RNF09-EV.                                                |
| EV06 | RF04, RF05       | Busca e filtros poderiam ser confundidos.                                                         | RF04 passa a representar busca textual; RF05 passa a representar filtros estruturados por compromisso, indicador, período e responsável. O filtro por status foi removido após validação com a cliente.         | HU04 e HU05 ficam separadas e mais claras.                                                        |
| EV07 | RF07, RF08, RF13 | Histórico público e auditoria administrativa poderiam se misturar.                                | Separar histórico público de atualizações e log administrativo de auditoria.                                                                                                                                    | HU11 e HU15 ficam mais claras.                                                                    |
| EV08 | RF21             | Importação por planilha precisava reduzir risco de erro.                                          | Incluir validação prévia e prévia dos registros antes da confirmação.                                                                                                                                           | HU13 passa a exigir validação antes da importação.                                                |
| EV09 | RF19             | Responsáveis e colaboradores precisavam de mais contexto.                                         | Exibir responsável, colaboradores, órgão/setor e papel desempenhado.                                                                                                                                            | HU16 passa a representar melhor a transparência da ação.                                          |
| EV10 | RF08, RF13, RF22 | O termo “registro” estava genérico e poderia ser interpretado de formas diferentes.               | Especificar registro de alteração/auditoria com ação, entidade afetada, identificador do item, usuário responsável, data e hora, campo modificado, valor anterior, valor novo e justificativa quando aplicável. | HU10, HU12, HU13, HU14 e HU15 passam a considerar registros mais claros de alteração e auditoria. |
| EV11 | RF06, RNF04      | A exportação estava centrada em dados filtrados, mas a cliente solicitou exportação da dashboard. | Evoluir para exportação da dashboard de acompanhamento, considerando filtros, período, indicadores, gráficos, percentuais, contexto do Plano Decenal e data de geração.                                         | HU06 passa a tratar exportação da dashboard, vinculada também à tela de Dashboard.                |
| EV12 | RNF07            | O desempenho estava associado a uma ideia genérica ou arbitrária de volume de dados.              | Relacionar consultas, filtros, dashboard e exportações aos anos do Plano Decenal carregado no sistema.                                                                                                          | HU07 passa a considerar o período do Plano Decenal carregado na visualização de indicadores.      |

---

## 10. Próximas Ações

* [ ] Validar as evoluções de requisitos com a professora/cliente.
* [ ] Atualizar o protótipo caso a cliente solicite alteração na hierarquia ou nos perfis.
* [ ] Complementar casos de uso detalhados.
* [ ] Atualizar a matriz de rastreabilidade após validação.
* [ ] Registrar novas decisões em `docs/historico-versoes.md`.
* [ ] Confirmar quais informações da dashboard devem aparecer na exportação.
* [ ] Confirmar os anos inicial e final do Plano Decenal carregado.
* [ ] Confirmar se a justificativa será obrigatória em todos os registros de alteração ou apenas em alterações sensíveis.

---

## 11. Histórico de Alterações

| Versão | Data       | Alteração                                                                                                                                                                                                            |
| ------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0    | 11/06/2025 | Criação inicial do backlog na entrega da Semana 2.                                                                                                                                                                   |
| 1.1    | 11/06/2025 | Separação do backlog em documento próprio, inclusão da HU16 e organização por tela e perfil.                                                                                                                         |
| 1.2    | 18/06/2025 | Atualização do backlog para refletir os requisitos evoluídos e as decisões de melhoria de usabilidade.                                                                                                               |
| 1.3    | 18/06/2025 | Ajustes após validação com a professora/cliente: remoção do status dos filtros, exportação da dashboard, especificação do registro de alteração/auditoria e uso dos anos correspondentes ao Plano Decenal carregado. |
