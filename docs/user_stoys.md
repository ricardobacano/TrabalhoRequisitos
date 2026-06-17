# Histórias de Usuário

**Projeto:** Sistema de Monitoramento do Plano Decenal da Criança e do Adolescente  
**Versão:** 1.1
**Data:** 14/06/2025
**Status:** Em evolução

---

## 1. Objetivo

Este documento apresenta as histórias de usuário do sistema de monitoramento do Plano Decenal da Criança e do Adolescente.

As histórias foram elaboradas a partir dos requisitos funcionais e não funcionais levantados, das regras de negócio definidas e das inconsistências identificadas nas entregas anteriores.

Cada história descreve uma necessidade do usuário em linguagem simples, mantendo vínculo com:

- requisitos relacionados;
- telas do protótipo;
- critérios de aceitação;
- prioridade no backlog.

---

## 2. Perfis de Usuário

| Código | Perfil | Descrição |
|---|---|---|
| PU01 | Público Geral | Qualquer pessoa que acessa o sistema sem autenticação para consultar dados públicos. |
| PU02 | Conselho / Secretaria | Usuário autenticado com permissão de consulta avançada, acompanhamento e edição limitada. |
| PU03 | SEDEF | Usuário autenticado responsável pela manutenção, atualização e importação de dados do Plano Decenal. |
| PU04 | Administrador | Usuário autenticado responsável por permissões, auditoria e administração geral do sistema. |

---

## 3. Convenção das Histórias

As histórias seguem o formato:

> Como **[perfil]**, desejo **[ação ou funcionalidade]**, para que **[benefício esperado]**.

Cada história possui:

| Campo | Descrição |
|---|---|
| ID | Identificador único da história de usuário. |
| Perfil | Perfil principal relacionado à história. |
| Prioridade | Obrigatória, Importante ou Desejável. |
| Requisitos | Requisitos funcionais ou não funcionais relacionados. |
| Tela | Tela ou módulo previsto no protótipo. |
| Critérios de aceitação | Condições necessárias para considerar a história atendida. |

---

## 4. Histórias de Usuário

---

## HU01 — Visualizar problemas públicos

**Como** usuário público,  
**desejo** visualizar os 23 problemas públicos vinculados ao Plano Decenal,  
**para que** eu possa compreender o panorama geral dos compromissos vigentes.

| Campo | Valor |
|---|---|
| Perfil | Público Geral |
| Prioridade | Obrigatória |
| Requisitos | RF01 |
| Tela | Tela Inicial |

**Critérios de aceitação resumidos:**

- O sistema deve exibir os 23 problemas públicos.
- Cada problema deve estar vinculado a um compromisso decenal.
- O acesso deve estar disponível sem autenticação.
- A listagem deve ser clara, acessível e navegável.

---

## HU02 — Navegar pela hierarquia do plano

**Como** usuário público,  
**desejo** navegar pela hierarquia Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa,  
**para que** eu possa entender como cada compromisso se desdobra em ações concretas.

| Campo | Valor |
|---|---|
| Perfil | Público Geral |
| Prioridade | Obrigatória |
| Requisitos | RF01, RF02 |
| Tela | Tela Inicial, Detalhamento de Objetivos e Tarefas |

**Critérios de aceitação resumidos:**

- A hierarquia completa deve estar disponível para navegação.
- O usuário deve conseguir avançar e retornar entre os níveis.
- O sistema deve exibir o caminho de navegação.
- A navegação não deve exigir autenticação.

---

## HU03 — Acompanhar status das tarefas

**Como** usuário público,  
**desejo** visualizar o status de cada tarefa e o percentual de conclusão,  
**para que** eu possa monitorar o andamento dos compromissos.

| Campo | Valor |
|---|---|
| Perfil | Público Geral |
| Prioridade | Obrigatória |
| Requisitos | RF03 |
| Tela | Detalhamento de Objetivos e Tarefas |

**Critérios de aceitação resumidos:**

- Cada tarefa deve exibir status.
- Cada tarefa deve exibir percentual de conclusão.
- Os status permitidos devem ser: não iniciada, em andamento e concluída.
- A informação deve ser visível para usuários públicos.

---

## HU04 — Realizar busca no sistema

**Como** usuário público,  
**desejo** buscar informações por palavra-chave, responsável, eixo do plano ou compromisso,  
**para que** eu encontre rapidamente os dados de que preciso.

| Campo | Valor |
|---|---|
| Perfil | Público Geral |
| Prioridade | Obrigatória |
| Requisitos | RF04 |
| Tela | Busca e Filtros |

**Critérios de aceitação resumidos:**

- O campo de busca deve estar disponível em destaque.
- A busca deve aceitar palavra-chave, responsável, eixo e compromisso.
- Os resultados devem indicar o contexto hierárquico do item encontrado.
- Buscas sem resultado devem apresentar mensagem informativa.

---

## HU05 — Aplicar filtros

**Como** usuário público,  
**desejo** filtrar informações por compromisso, indicador, período de tempo e responsável,  
**para que** eu visualize apenas os dados relevantes para minha análise.

| Campo | Valor |
|---|---|
| Perfil | Público Geral |
| Prioridade | Obrigatória |
| Requisitos | RF05 |
| Tela | Busca e Filtros |

**Critérios de aceitação resumidos:**

- Os filtros devem incluir compromisso, indicador, período e responsável.
- Deve ser possível combinar múltiplos filtros.
- Os filtros aplicados devem permanecer visíveis.
- Os resultados devem ser atualizados após aplicação ou remoção dos filtros.

---

## HU06 — Exportar dados filtrados

**Como** usuário público,  
**desejo** exportar os dados filtrados nos formatos Excel, CSV ou PDF,  
**para que** eu possa analisar as informações externamente.

| Campo | Valor |
|---|---|
| Perfil | Público Geral |
| Prioridade | Importante |
| Requisitos | RF06, RNF04 |
| Tela | Exportação de Dados |

**Critérios de aceitação resumidos:**

- O sistema deve oferecer exportação em Excel, CSV e PDF.
- A exportação deve refletir apenas o conjunto filtrado.
- Os dados exportados não devem conter omissões ou duplicações.
- O arquivo deve ser gerado após confirmação do usuário.

---

## HU07 — Visualizar gráficos de progresso

**Como** usuário público,  
**desejo** visualizar gráficos de progresso para cada indicador,  
**para que** eu acompanhe a evolução dos compromissos de forma visual.

| Campo | Valor |
|---|---|
| Perfil | Público Geral |
| Prioridade | Importante |
| Requisitos | RF16, RF17, RF18, RNF02 |
| Tela | Visualização de Indicadores |

**Critérios de aceitação resumidos:**

- O sistema deve exibir gráficos para cada indicador.
- Deve ser possível filtrar gráficos por ano.
- Indicadores de tipos diferentes devem possuir diferenciação visual.
- Os gráficos devem ser legíveis em diferentes tamanhos de tela.

---

## HU08 — Ativar modo de alto contraste

**Como** usuário com dificuldade visual,  
**desejo** ativar o modo de alto contraste,  
**para que** eu possa utilizar o sistema com maior conforto e acessibilidade.

| Campo | Valor |
|---|---|
| Perfil | Público Geral |
| Prioridade | Obrigatória |
| Requisitos | RF10, RNF01 |
| Tela | Todas as telas |

**Critérios de aceitação resumidos:**

- O botão de alto contraste deve estar disponível em todas as telas.
- O modo deve ser ativado e desativado facilmente.
- A preferência deve ser mantida durante a sessão.
- O contraste deve atender boas práticas de acessibilidade.

---

## HU09 — Realizar login

**Como** usuário autenticado,  
**desejo** fazer login com minhas credenciais,  
**para que** eu acesse as funcionalidades restritas de edição e administração.

| Campo | Valor |
|---|---|
| Perfil | Conselho / Secretaria, SEDEF, Administrador |
| Prioridade | Obrigatória |
| Requisitos | RF11, RF23, RNF08 |
| Tela | Login |

**Critérios de aceitação resumidos:**

- O formulário deve solicitar e-mail e senha.
- Credenciais inválidas devem retornar mensagem genérica.
- A autenticação deve proteger o acesso a áreas restritas.
- A sessão deve expirar após 30 minutos de inatividade.

---

## HU10 — Atualizar status de tarefas

**Como** usuário autenticado autorizado,  
**desejo** atualizar o status e o percentual de conclusão de uma tarefa,  
**para que** o sistema reflita o andamento real das ações do plano.

| Campo | Valor |
|---|---|
| Perfil | Conselho / Secretaria, SEDEF |
| Prioridade | Obrigatória |
| Requisitos | RF03, RF08, RF22 |
| Tela | Detalhamento de Objetivos e Tarefas |

**Critérios de aceitação resumidos:**

- Usuários autorizados devem conseguir editar status e percentual.
- Usuários sem permissão não devem visualizar controles de edição.
- A alteração deve ser registrada no histórico.
- O sistema deve registrar data, hora e usuário responsável.

---

## HU11 — Visualizar histórico de atualizações

**Como** usuário público,  
**desejo** visualizar o histórico de atualizações de uma tarefa ou indicador,  
**para que** eu acompanhe a evolução ao longo do tempo.

| Campo | Valor |
|---|---|
| Perfil | Público Geral |
| Prioridade | Importante |
| Requisitos | RF07, RF08 |
| Tela | Histórico de Atualizações |

**Critérios de aceitação resumidos:**

- O histórico deve exibir alterações realizadas.
- A última atualização deve aparecer em destaque.
- O histórico deve permitir ordenação cronológica.
- O histórico não deve ser editável por usuários.

---

## HU12 — Inserir novos dados via interface

**Como** usuário SEDEF,  
**desejo** inserir novos problemas, compromissos, objetivos, linhas de ação, tarefas e indicadores pela interface,  
**para que** o sistema seja atualizado sem depender de importação por planilha.

| Campo | Valor |
|---|---|
| Perfil | SEDEF |
| Prioridade | Obrigatória |
| Requisitos | RF12, RF22 |
| Tela | Painel Administrativo |

**Critérios de aceitação resumidos:**

- O sistema deve possuir formulários para cada nível da hierarquia.
- Os campos obrigatórios devem estar identificados.
- O sistema deve validar os dados antes de salvar.
- O novo registro deve ser exibido após a inserção.

---

## HU13 — Importar dados por planilha

**Como** usuário SEDEF,  
**desejo** importar dados em lote por planilha,  
**para que** eu possa atualizar múltiplos registros de forma eficiente.

| Campo | Valor |
|---|---|
| Perfil | SEDEF |
| Prioridade | Importante |
| Requisitos | RF21 |
| Tela | Painel Administrativo |

**Critérios de aceitação resumidos:**

- O sistema deve aceitar arquivos `.xlsx` e `.csv`.
- O sistema deve validar a estrutura da planilha.
- Planilhas inválidas devem ser rejeitadas integralmente.
- Importações válidas devem ser registradas no log de auditoria.

---

## HU14 — Gerenciar permissões de usuários

**Como** administrador,  
**desejo** elevar ou reduzir permissões de outros usuários,  
**para que** o acesso ao sistema esteja alinhado às responsabilidades de cada perfil.

| Campo | Valor |
|---|---|
| Perfil | Administrador |
| Prioridade | Obrigatória |
| Requisitos | RF09, RF15, RF20 |
| Tela | Gerenciamento de Usuários, Painel Administrativo |

**Critérios de aceitação resumidos:**

- O administrador deve visualizar usuários cadastrados.
- O administrador deve alterar o perfil de usuários.
- A alteração deve ser registrada no log de auditoria.
- Apenas administradores devem acessar a tela de gerenciamento.

> **Observação:** RF15 foi mantido neste vínculo por histórico, mas deverá ser marcado como duplicado de RF09 no histórico de versões.

---

## HU15 — Visualizar log de auditoria

**Como** administrador,  
**desejo** visualizar o log das ações que alteraram o estado do sistema,  
**para que** eu possa auditar o uso e identificar irregularidades.

| Campo | Valor |
|---|---|
| Perfil | Administrador |
| Prioridade | Importante |
| Requisitos | RF13 |
| Tela | Painel Administrativo |

**Critérios de aceitação resumidos:**

- O log deve exibir ação, usuário, data e hora.
- O log deve ser ordenado por data.
- O log não deve poder ser editado ou excluído.
- O log deve possuir filtros por usuário, tipo de ação e período.

---

## HU16 — Visualizar responsáveis e colaboradores da ação

**Como** usuário público,  
**desejo** visualizar o responsável principal e os colaboradores de cada ação,  
**para que** eu saiba quais órgãos ou pessoas estão vinculados à execução daquela atividade.

| Campo | Valor |
|---|---|
| Perfil | Público Geral, Conselho / Secretaria, SEDEF |
| Prioridade | Obrigatória |
| Requisitos | RF19 |
| Tela | Detalhamento de Objetivos e Tarefas |

**Critérios de aceitação resumidos:**

- Cada ação deve exibir responsável principal.
- Cada ação deve exibir colaboradores vinculados.
- A informação deve aparecer junto ao detalhamento da ação.
- Caso não haja colaboradores, o sistema deve informar essa ausência de forma clara.

---

## 5. Rastreabilidade Resumida

| História | Requisitos relacionados | Tela relacionada |
|---|---|---|
| HU01 | RF01 | Tela Inicial |
| HU02 | RF01, RF02 | Tela Inicial, Detalhamento |
| HU03 | RF03 | Detalhamento |
| HU04 | RF04 | Busca e Filtros |
| HU05 | RF05 | Busca e Filtros |
| HU06 | RF06, RNF04 | Exportação |
| HU07 | RF16, RF17, RF18, RNF02 | Indicadores |
| HU08 | RF10, RNF01 | Todas |
| HU09 | RF11, RF23, RNF08 | Login |
| HU10 | RF03, RF08, RF22 | Detalhamento |
| HU11 | RF07, RF08 | Histórico |
| HU12 | RF12, RF22 | Painel Administrativo |
| HU13 | RF21 | Painel Administrativo |
| HU14 | RF09, RF15, RF20 | Gerenciamento de Usuários |
| HU15 | RF13 | Painel Administrativo |
| HU16 | RF19 | Detalhamento |

---

## 6. Histórico de Alterações

| Versão | Data | Alteração |
|---|---|---|
| 1.0 | 14/06/2025 | Criação inicial das histórias de usuário. |
| 1.1 | 14/06/2025 | Inclusão da HU16 para cobrir RF19 e padronização da estrutura para separação dos critérios em documento próprio. |
