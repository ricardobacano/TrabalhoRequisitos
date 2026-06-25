# Requisitos Evoluídos

**Projeto:** Sistema de Monitoramento do Plano Decenal da Criança e do Adolescente
**Versão:** 1.3
**Data:** 25/06/2025
**Status:** Finalizado

---

## 1. Objetivo

Este documento registra a versão evoluída dos requisitos do sistema após a análise de inconsistências, duplicidades, ambiguidades e oportunidades de melhoria de usabilidade.

As evoluções propostas não substituem o histórico anterior. Elas representam a versão atual recomendada para validação com a professora/cliente.

A versão 1.1 incorpora ajustes solicitados após validação com a cliente/professora, especialmente nos pontos de registro de alteração, filtros estruturados, exportação da dashboard e definição do período de dados conforme os anos do Plano Decenal carregado.

---

## 2. Requisitos Funcionais Evoluídos

| ID      | Requisito evoluído                                                                                                                                                                                                                                                             | Justificativa da evolução                                                                                              | Histórias relacionadas |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| RF01-EV | O sistema deve permitir a visualização dos problemas públicos vinculados aos compromissos do Plano Decenal.                                                                                                                                                                    | Mantém o escopo público e conecta o problema à hierarquia principal.                                                   | HU01, HU02             |
| RF02-EV | O sistema deve permitir navegação pela hierarquia completa: Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa → Indicador.                                                                                                                                    | Corrige a hierarquia incompleta identificada na análise inicial.                                                       | HU02                   |
| RF03    | O sistema deve exibir status e percentual de conclusão das tarefas.                                                                                                                                                                                                            | Requisito mantido por ser essencial ao monitoramento.                                                                  | HU03, HU10             |
| RF04-EV | O sistema deve permitir busca textual por palavra-chave, responsável, eixo do plano ou compromisso.                                                                                                                                                                            | Separa busca textual dos filtros estruturados.                                                                         | HU04                   |
| RF05-EV | O sistema deve permitir filtros estruturados por compromisso, indicador, período e responsável.                                                                                                                                                                                | Melhora usabilidade e evita confusão com busca textual. O filtro por status foi removido após validação com a cliente. | HU05                   |
| RF06-EV | O sistema deve permitir exportar a dashboard de acompanhamento, considerando filtros aplicados, período selecionado, indicadores, gráficos, percentuais, data de geração e contexto do Plano Decenal.                                                                          | Atende à solicitação da cliente de exportação da dashboard, e não apenas de dados filtrados em formato tabular.        | HU06, HU07             |
| RF07-EV | O sistema deve exibir histórico público de atualizações relevantes em tarefas e indicadores.                                                                                                                                                                                   | Separa transparência pública de auditoria administrativa.                                                              | HU11                   |
| RF08-EV | O sistema deve registrar alterações relevantes por meio de um registro de alteração contendo: tipo da ação, entidade afetada, identificador do item, usuário ou órgão responsável, data e hora, campo modificado, valor anterior, valor novo e justificativa quando aplicável. | Especifica melhor o que significa “registro” e melhora a rastreabilidade das alterações.                               | HU10, HU11             |
| RF09-EV | O sistema deve permitir ao Administrador visualizar usuários, alterar perfis e gerenciar permissões.                                                                                                                                                                           | Unifica permissões e substitui a duplicidade com RF15.                                                                 | HU14                   |
| RF10-EV | O sistema deve permitir ativar e desativar um modo de alto contraste.                                                                                                                                                                                                          | Mantém acessibilidade como funcionalidade visível.                                                                     | HU08                   |
| RF11    | O sistema deve permitir login de usuários autenticados por e-mail e senha.                                                                                                                                                                                                     | Requisito funcional mantido; segurança técnica fica em RNF.                                                            | HU09                   |
| RF12-EV | O sistema deve permitir que usuários autorizados cadastrem novos problemas públicos, compromissos, objetivos, linhas de ação, tarefas, indicadores, responsáveis e colaboradores.                                                                                              | Remove o uso de termos abertos como “etc.” e define entidades cadastráveis.                                            | HU12                   |
| RF13-EV | O sistema deve manter log administrativo de auditoria contendo ação realizada, entidade afetada, identificador do item, usuário responsável, data e hora, campo modificado, valor anterior, valor novo e justificativa quando aplicável.                                       | Separa log administrativo do histórico público e especifica quais informações devem compor o registro de auditoria.    | HU15                   |
| RF19-EV | O sistema deve exibir responsável principal, colaboradores, órgão/setor e papel desempenhado em cada ação.                                                                                                                                                                     | Melhora transparência e responsabilização.                                                                             | HU16                   |
| RF21-EV | O sistema deve permitir importação por planilha, validando a estrutura e exibindo prévia dos registros antes da confirmação.                                                                                                                                                   | Reduz risco de erro em importações em lote.                                                                            | HU13                   |
| RF22-EV | O sistema deve permitir que usuários autorizados editem registros existentes, gerando registro de alteração com usuário responsável, data e hora, campo modificado, valor anterior, valor novo e justificativa quando aplicável.                                               | Separa edição de cadastro e torna explícito o tipo de registro gerado pela alteração.                                  | HU10                   |

---

## 3. Requisitos Reclassificados ou Removidos

| ID original | Decisão                           | Nova classificação / destino | Justificativa                                                                                 |
| ----------- | --------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------- |
| RF15        | Removido como requisito principal | Duplicado de RF09-EV         | RF09 e RF15 tratavam do mesmo tema: painel administrativo e permissões.                       |
| RF14        | Reclassificado                    | RNF09-EV                     | Medidas de segurança são restrições técnicas e não ações diretas do usuário.                  |
| RF23        | Reclassificado                    | RNF09-EV                     | JWT é solução técnica de autenticação, não funcionalidade percebida diretamente pelo usuário. |

---

## 4. Requisitos Não Funcionais Evoluídos

| ID       | Requisito não funcional evoluído                                                                                                                                                                                     | Justificativa                                                                                          | Histórias relacionadas |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ---------------------- |
| RNF01-EV | A interface deve seguir boas práticas de acessibilidade, incluindo contraste adequado, legibilidade textual e navegação compreensível.                                                                               | Separa qualidade geral da interface da funcionalidade de alto contraste.                               | HU08                   |
| RNF02    | A interface deve evoluir para responsividade em dispositivos móveis.                                                                                                                                                 | Mantido como melhoria planejada, não obrigatória na versão simplificada do protótipo da Semana 3.      | HU07, MEL01            |
| RNF04-EV | A exportação da dashboard deve preservar a integridade, a consistência e o contexto das informações apresentadas, incluindo filtros aplicados, período selecionado e data de geração.                                | Complementa RF06-EV e reforça a exportação como visão consolidada da dashboard.                        | HU06, HU07             |
| RNF05-EV | O projeto deve possuir documentação mínima: README, visão geral, requisitos, backlog, histórias, critérios, casos de uso, matriz, descrição do protótipo e histórico de versões.                                     | Torna “bem documentado” mensurável.                                                                    | Documentação viva      |
| RNF07-EV | O sistema deve permitir consultas, filtros e visualizações considerando o intervalo de anos correspondente ao Plano Decenal carregado no sistema, definido pelo ano inicial e ano final cadastrados para cada plano. | Evita uso de dados arbitrários e relaciona o volume de informações ao período real do plano carregado. | HU04, HU05, HU07       |
| RNF08    | A sessão de usuários autenticados deve expirar após período de inatividade definido.                                                                                                                                 | Mantido como requisito de segurança e sessão.                                                          | HU09                   |
| RNF09-EV | O sistema deve proteger áreas restritas por autenticação, controle de sessão, permissões por perfil e mecanismos seguros de validação de credenciais.                                                                | Consolida RF14 e RF23 como requisitos técnicos de segurança.                                           | HU09, HU14             |

---

## 5. Impactos no Protótipo

| Evolução            | Impacto esperado no protótipo                                                                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RF01/RF02-EV        | A tela inicial e o detalhamento devem representar a hierarquia completa do plano.                                                                                                 |
| RF04/RF05-EV        | A tela de busca deve separar campo textual e filtros estruturados por compromisso, indicador, período e responsável.                                                              |
| RF06/RNF04-EV       | O protótipo deve possuir tela de exportação da dashboard, considerando filtros aplicados, período selecionado, indicadores, gráficos, percentuais e data de geração.              |
| RF09/RF20-EV        | A tela de usuários deve representar quatro perfis oficiais: Público Geral, Conselho/Secretaria, SEDEF e Administrador.                                                            |
| RF12/RF22-EV        | O painel administrativo deve separar cadastro de novos registros e edição de registros existentes.                                                                                |
| RF07/RF08/RF13-EV   | O protótipo deve separar histórico público e log administrativo de auditoria.                                                                                                     |
| RF08/RF13/RF22-EV   | As telas administrativas devem indicar que alterações geram registro de alteração/auditoria com ação, entidade, usuário, data, hora, campo alterado, valor anterior e valor novo. |
| RF10/RNF01-EV       | A interface deve representar alto contraste e preocupação geral com acessibilidade.                                                                                               |
| RF21-EV             | A importação deve indicar validação prévia e confirmação antes da inclusão definitiva dos dados.                                                                                  |
| RNF07-EV            | A busca e a dashboard devem indicar que os dados exibidos correspondem aos anos do Plano Decenal carregado.                                                                       |
| Protótipo com fluxo | O protótipo deve deixar de ser página única e possuir navegação entre múltiplas telas HTML.                                                                                       |

---

## 6. Pendências de Validação com a Cliente

* [ ] Confirmar se a hierarquia completa inclui Indicador como último nível ou como elemento associado à Tarefa/Objetivo.
* [ ] Confirmar os anos inicial e final do Plano Decenal que serão carregados no sistema.
* [ ] Confirmar se a exportação da dashboard deverá ser obrigatoriamente em PDF ou se também deverá haver exportação dos dados-base em CSV/Excel.
* [ ] Confirmar se a justificativa da alteração será obrigatória em todos os registros de alteração ou apenas em alterações sensíveis.
* [ ] Confirmar quais informações da dashboard devem aparecer na exportação final.

---

## 7. Histórico de Alterações

| Versão | Data       | Alteração                                                                                                                                                                                                                                          |
| ------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0    | 18/06/2025 | Criação do documento de requisitos evoluídos a partir das inconsistências levantadas.                                                                                                                                                              |
| 1.1    | 19/06/2025 | Ajustes após validação com a professora/cliente: especificação do registro de alteração, remoção do status dos filtros, exportação da dashboard, período vinculado aos anos do Plano Decenal carregado e impacto do protótipo com múltiplas telas. |
