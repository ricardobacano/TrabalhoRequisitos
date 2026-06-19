---

## title: historias-usuario.md

# Histórias de Usuário

**Projeto:** Sistema de Monitoramento do Plano Decenal da Criança e do Adolescente
**Versão:** 1.3
**Data:** 18/06/2025
**Referência:** `docs/historias-usuario.md`
**Status:** Em evolução

---

## 1. Objetivo

Este documento apresenta as histórias de usuário do sistema, revisadas a partir da evolução dos requisitos inconsistentes identificados nas semanas anteriores.

A versão 1.3 mantém as histórias já levantadas, mas atualiza vínculos, telas e critérios resumidos para refletir as evoluções validadas com a professora/cliente.

As principais mudanças desta versão são:

* consolidação da hierarquia completa do Plano Decenal;
* separação entre busca textual e filtros estruturados;
* remoção do campo **status** dos filtros estruturados;
* separação entre cadastro e edição de registros;
* definição de quatro perfis de acesso;
* reclassificação de segurança/JWT como requisito não funcional;
* separação entre histórico público e log administrativo;
* especificação do registro de alteração/auditoria;
* exportação da dashboard de acompanhamento;
* uso dos anos correspondentes ao Plano Decenal carregado;
* alinhamento com protótipo em múltiplas telas HTML.

---

## 2. Perfis de Usuário

| Código | Perfil                | Descrição                                                                                            |
| ------ | --------------------- | ---------------------------------------------------------------------------------------------------- |
| PU01   | Público Geral         | Qualquer pessoa que acessa o sistema sem autenticação para consultar dados públicos.                 |
| PU02   | Conselho / Secretaria | Usuário autenticado com permissão de consulta avançada, acompanhamento e edição limitada.            |
| PU03   | SEDEF                 | Usuário autenticado responsável pela manutenção, atualização e importação de dados do Plano Decenal. |
| PU04   | Administrador         | Usuário autenticado responsável por permissões, auditoria e administração geral do sistema.          |

---

## 3. Convenção das Histórias

As histórias seguem o formato:

> Como **[perfil]**, desejo **[ação ou funcionalidade]**, para que **[benefício esperado]**.

Cada história possui:

| Campo                  | Descrição                                                  |
| ---------------------- | ---------------------------------------------------------- |
| ID                     | Identificador único da história de usuário.                |
| Perfil                 | Perfil principal relacionado à história.                   |
| Prioridade             | Obrigatória, Importante ou Desejável.                      |
| Requisitos             | Requisitos funcionais ou não funcionais relacionados.      |
| Tela                   | Tela ou módulo previsto no protótipo.                      |
| Critérios de aceitação | Condições necessárias para considerar a história atendida. |

---

## 4. Histórias de Usuário

---

## HU01 - Visualizar problemas públicos

**Como** usuário público,
**desejo** visualizar os problemas públicos vinculados ao Plano Decenal,
**para que** eu possa compreender o panorama geral dos compromissos vigentes.

| Campo      | Valor                                         |
| ---------- | --------------------------------------------- |
| Perfil     | Público Geral                                 |
| Prioridade | Obrigatória                                   |
| Requisitos | RF01-EV                                       |
| Tela       | Tela Inicial Pública — `prototipo/index.html` |

**Critérios de aceitação resumidos:**

* O sistema deve exibir os problemas públicos de forma clara.
* Cada problema público deve indicar seu compromisso decenal vinculado.
* O acesso deve estar disponível sem autenticação.
* A listagem deve ser clara, acessível e navegável.

---

## HU02 - Navegar pela hierarquia completa do plano

**Como** usuário público,
**desejo** navegar pela hierarquia Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa → Indicador,
**para que** eu possa entender como cada compromisso se desdobra em ações concretas e indicadores de acompanhamento.

| Campo      | Valor                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------- |
| Perfil     | Público Geral                                                                               |
| Prioridade | Obrigatória                                                                                 |
| Requisitos | RF01-EV, RF02-EV                                                                            |
| Tela       | Tela Inicial Pública — `prototipo/index.html`; Detalhamento — `prototipo/detalhamento.html` |

**Critérios de aceitação resumidos:**

* A hierarquia completa deve estar disponível para navegação.
* O usuário deve conseguir avançar e retornar entre os níveis.
* O sistema deve exibir o caminho de navegação.
* A navegação não deve exigir autenticação.
* O protótipo deve demonstrar fluxo entre telas, e não apenas uma tela única.

---

## HU03 - Acompanhar status das tarefas

**Como** usuário público,
**desejo** visualizar o status de cada tarefa e o percentual de conclusão,
**para que** eu possa monitorar o andamento dos compromissos.

| Campo      | Valor                                        |
| ---------- | -------------------------------------------- |
| Perfil     | Público Geral                                |
| Prioridade | Obrigatória                                  |
| Requisitos | RF03                                         |
| Tela       | Detalhamento — `prototipo/detalhamento.html` |

**Critérios de aceitação resumidos:**

* Cada tarefa deve exibir status.
* Cada tarefa deve exibir percentual de conclusão.
* Os status permitidos devem ser: não iniciada, em andamento e concluída.
* A informação deve ser visível para usuários públicos.

---

## HU04 - Realizar busca textual no sistema

**Como** usuário público,
**desejo** buscar informações por palavra-chave, responsável, eixo do plano ou compromisso,
**para que** eu encontre rapidamente os dados de que preciso.

| Campo      | Valor                                    |
| ---------- | ---------------------------------------- |
| Perfil     | Público Geral                            |
| Prioridade | Obrigatória                              |
| Requisitos | RF04-EV                                  |
| Tela       | Busca e Filtros — `prototipo/busca.html` |

**Critérios de aceitação resumidos:**

* O campo de busca textual deve estar disponível em destaque.
* A busca deve aceitar palavra-chave, responsável, eixo do plano ou compromisso.
* Os resultados devem indicar o contexto hierárquico do item encontrado em versão funcional.
* Buscas sem resultado devem apresentar mensagem informativa em versão funcional.
* A busca textual deve estar separada dos filtros estruturados.

---

## HU05 - Aplicar filtros estruturados

**Como** usuário público,
**desejo** filtrar informações por compromisso, indicador, período e responsável,
**para que** eu visualize apenas os dados relevantes para minha análise.

| Campo      | Valor                                    |
| ---------- | ---------------------------------------- |
| Perfil     | Público Geral                            |
| Prioridade | Obrigatória                              |
| Requisitos | RF05-EV                                  |
| Tela       | Busca e Filtros — `prototipo/busca.html` |

**Critérios de aceitação resumidos:**

* Os filtros devem incluir compromisso, indicador, período e responsável.
* O filtro por status não deve fazer parte dos filtros estruturados nesta versão.
* Deve ser possível combinar múltiplos filtros em versão funcional.
* Os filtros aplicados devem permanecer visíveis em versão funcional.
* Os resultados devem ser atualizados após aplicação ou remoção dos filtros em versão funcional.
* Os filtros estruturados devem estar separados da busca textual.

---

## HU06 - Exportar dashboard de acompanhamento

**Como** usuário público,
**desejo** exportar a dashboard de acompanhamento,
**para que** eu possa analisar, apresentar ou compartilhar a visão consolidada dos indicadores, gráficos, percentuais e filtros aplicados.

| Campo      | Valor                                                                                         |
| ---------- | --------------------------------------------------------------------------------------------- |
| Perfil     | Público Geral                                                                                 |
| Prioridade | Importante                                                                                    |
| Requisitos | RF06-EV, RNF04-EV                                                                             |
| Tela       | Dashboard — `prototipo/dashboard.html`; Exportação da Dashboard — `prototipo/exportacao.html` |

**Critérios de aceitação resumidos:**

* O sistema deve permitir exportar a dashboard de acompanhamento.
* A exportação deve considerar filtros aplicados e período selecionado.
* A exportação deve incluir indicadores, gráficos, percentuais, data de geração e contexto do Plano Decenal.
* A exportação visual da dashboard deve priorizar o formato PDF.
* Os dados-base da dashboard poderão ser exportados em CSV ou Excel em versão futura.
* A exportação da dashboard deve ser diferenciada da simples exportação de dados tabulares.

---

## HU07 - Visualizar dashboard de indicadores

**Como** usuário público,
**desejo** visualizar uma dashboard com indicadores e progresso do Plano Decenal,
**para que** eu acompanhe a evolução dos compromissos de forma resumida e visual.

| Campo      | Valor                                  |
| ---------- | -------------------------------------- |
| Perfil     | Público Geral                          |
| Prioridade | Importante                             |
| Requisitos | RF16, RF17, RF18, RNF02, RNF07-EV      |
| Tela       | Dashboard — `prototipo/dashboard.html` |

**Critérios de aceitação resumidos:**

* O sistema deve exibir indicadores e representações visuais de progresso.
* Os indicadores exibidos devem corresponder ao intervalo de anos do Plano Decenal carregado no sistema.
* Deve ser possível visualizar o período considerado na dashboard.
* Indicadores de tipos diferentes devem possuir diferenciação visual.
* Os gráficos e elementos visuais devem ser compreensíveis.
* Responsividade completa fica planejada para evolução futura.

---

## HU08 - Ativar modo de alto contraste

**Como** usuário com dificuldade visual,
**desejo** ativar o modo de alto contraste,
**para que** eu possa utilizar o sistema com maior conforto e acessibilidade.

| Campo      | Valor                                                            |
| ---------- | ---------------------------------------------------------------- |
| Perfil     | Público Geral                                                    |
| Prioridade | Obrigatória                                                      |
| Requisitos | RF10-EV, RNF01-EV                                                |
| Tela       | Acessibilidade — `prototipo/acessibilidade.html`; Todas as telas |

**Critérios de aceitação resumidos:**

* O recurso de alto contraste deve estar previsto no protótipo.
* O modo deve ser ativado e desativado facilmente em versão funcional.
* A preferência deve ser mantida durante a sessão em versão funcional.
* A interface deve manter legibilidade, contraste adequado e navegação compreensível.
* A acessibilidade deve ser tratada como qualidade geral da interface, não apenas como botão isolado.

---

## HU09 - Realizar login

**Como** usuário autenticado,
**desejo** fazer login com minhas credenciais,
**para que** eu acesse as funcionalidades restritas de edição e administração.

| Campo      | Valor                                       |
| ---------- | ------------------------------------------- |
| Perfil     | Conselho / Secretaria, SEDEF, Administrador |
| Prioridade | Obrigatória                                 |
| Requisitos | RF11, RNF08, RNF09-EV                       |
| Tela       | Login — `prototipo/login.html`              |

**Critérios de aceitação resumidos:**

* O formulário deve solicitar e-mail e senha.
* Credenciais inválidas devem retornar mensagem genérica em versão funcional.
* A autenticação deve proteger o acesso a áreas restritas em versão funcional.
* A sessão deve expirar após período de inatividade definido.
* JWT e mecanismos técnicos de segurança devem permanecer classificados como requisitos não funcionais, e não como ação direta do usuário.

---

## HU10 - Atualizar status e percentual de tarefas

**Como** usuário autenticado autorizado,
**desejo** atualizar o status e o percentual de conclusão de uma tarefa,
**para que** o sistema reflita o andamento real das ações do plano.

| Campo      | Valor                                                                                        |
| ---------- | -------------------------------------------------------------------------------------------- |
| Perfil     | Conselho / Secretaria, SEDEF                                                                 |
| Prioridade | Obrigatória                                                                                  |
| Requisitos | RF03, RF08-EV, RF22-EV                                                                       |
| Tela       | Detalhamento — `prototipo/detalhamento.html`; Painel Administrativo — `prototipo/admin.html` |

**Critérios de aceitação resumidos:**

* Usuários autorizados devem conseguir editar status e percentual em versão funcional.
* Usuários sem permissão não devem visualizar controles de edição em versão funcional.
* A alteração deve gerar registro de alteração.
* O registro de alteração deve conter tipo da ação, entidade afetada, identificador do item, usuário ou órgão responsável, data e hora, campo modificado, valor anterior, valor novo e justificativa quando aplicável.
* A atualização deve poder aparecer no histórico público quando for relevante ao acompanhamento do plano.

---

## HU11 - Visualizar histórico público de atualizações

**Como** usuário público,
**desejo** visualizar o histórico público de atualizações de uma tarefa ou indicador,
**para que** eu acompanhe a evolução do plano ao longo do tempo sem acessar dados administrativos sensíveis.

| Campo      | Valor                                          |
| ---------- | ---------------------------------------------- |
| Perfil     | Público Geral                                  |
| Prioridade | Importante                                     |
| Requisitos | RF07-EV, RF08-EV                               |
| Tela       | Histórico Público — `prototipo/historico.html` |

**Critérios de aceitação resumidos:**

* O histórico deve exibir alterações relevantes para o acompanhamento público.
* A última atualização deve aparecer em destaque.
* O histórico deve permitir ordenação cronológica em versão funcional.
* O histórico público não deve expor dados administrativos sensíveis.
* O histórico público deve estar separado do log administrativo de auditoria.

---

## HU12 - Inserir novos dados via interface

**Como** usuário SEDEF,
**desejo** inserir novos problemas públicos, compromissos, objetivos, linhas de ação, tarefas, indicadores, responsáveis e colaboradores pela interface,
**para que** o sistema seja atualizado sem depender exclusivamente de importação por planilha.

| Campo      | Valor                                          |
| ---------- | ---------------------------------------------- |
| Perfil     | SEDEF                                          |
| Prioridade | Obrigatória                                    |
| Requisitos | RF12-EV                                        |
| Tela       | Painel Administrativo — `prototipo/admin.html` |

**Critérios de aceitação resumidos:**

* O sistema deve possuir formulários para os níveis da hierarquia do Plano Decenal.
* Os campos obrigatórios devem estar identificados.
* O sistema deve validar os dados antes de salvar em versão funcional.
* O novo registro deve ser exibido após a inserção em versão funcional.
* O cadastro deve gerar registro de alteração ou auditoria contendo usuário responsável, data, hora e entidade cadastrada.
* O cadastro de responsáveis e colaboradores deve refletir no detalhamento das ações.

---

## HU13 - Importar dados por planilha com validação prévia

**Como** usuário SEDEF,
**desejo** importar dados em lote por planilha, com validação da estrutura e prévia dos registros antes da confirmação,
**para que** eu possa atualizar múltiplos registros de forma eficiente e com menor risco de erro.

| Campo      | Valor                                          |
| ---------- | ---------------------------------------------- |
| Perfil     | SEDEF                                          |
| Prioridade | Importante                                     |
| Requisitos | RF21-EV                                        |
| Tela       | Painel Administrativo — `prototipo/admin.html` |

**Critérios de aceitação resumidos:**

* O sistema deve aceitar arquivos `.xlsx` e `.csv`.
* O sistema deve validar a estrutura da planilha antes da importação.
* Planilhas inválidas devem ser rejeitadas ou indicar correções necessárias em versão funcional.
* Planilhas válidas devem exibir prévia dos registros antes da confirmação.
* Importações válidas devem gerar registro de auditoria contendo usuário responsável, data e hora, arquivo utilizado, quantidade de registros importados e resultado da validação.

---

## HU14 - Gerenciar permissões de usuários

**Como** administrador,
**desejo** elevar ou reduzir permissões de outros usuários,
**para que** o acesso ao sistema esteja alinhado às responsabilidades de cada perfil.

| Campo      | Valor                                                                                                 |
| ---------- | ----------------------------------------------------------------------------------------------------- |
| Perfil     | Administrador                                                                                         |
| Prioridade | Obrigatória                                                                                           |
| Requisitos | RF09-EV, RF20-EV                                                                                      |
| Tela       | Gerenciamento de Usuários — `prototipo/usuarios.html`; Painel Administrativo — `prototipo/admin.html` |

**Critérios de aceitação resumidos:**

* O administrador deve visualizar usuários cadastrados e seus perfis atuais.
* O administrador deve alterar o perfil de usuários em versão funcional.
* A alteração deve ser registrada no log administrativo de auditoria.
* Apenas administradores devem acessar a tela de gerenciamento em versão funcional.
* Os quatro perfis oficiais devem estar previstos: Público Geral, Conselho / Secretaria, SEDEF e Administrador.

> **Observação:** RF15 foi removido da rastreabilidade principal e permanece apenas no histórico como duplicado de RF09.

---

## HU15 - Visualizar log administrativo de auditoria

**Como** administrador,
**desejo** visualizar o log das ações que alteraram o estado do sistema,
**para que** eu possa auditar o uso, rastrear alterações e identificar irregularidades.

| Campo      | Valor                                          |
| ---------- | ---------------------------------------------- |
| Perfil     | Administrador                                  |
| Prioridade | Importante                                     |
| Requisitos | RF13-EV                                        |
| Tela       | Painel Administrativo — `prototipo/admin.html` |

**Critérios de aceitação resumidos:**

* O log deve exibir ações administrativas realizadas.
* O log deve conter ação realizada, entidade afetada, identificador do item, usuário responsável, data e hora.
* O log deve exibir campo modificado, valor anterior, valor novo e justificativa quando aplicável.
* O log deve ser ordenado por data em versão funcional.
* O log não deve poder ser editado ou excluído.
* O log administrativo deve estar separado do histórico público de atualizações.

---

## HU16 - Visualizar responsáveis e colaboradores da ação

**Como** usuário público, Conselho / Secretaria ou SEDEF,
**desejo** visualizar o responsável principal e os colaboradores de cada ação,
**para que** eu saiba quais órgãos, setores ou pessoas estão vinculados à execução ou acompanhamento daquela atividade.

| Campo      | Valor                                        |
| ---------- | -------------------------------------------- |
| Perfil     | Público Geral, Conselho / Secretaria, SEDEF  |
| Prioridade | Obrigatória                                  |
| Requisitos | RF19-EV                                      |
| Tela       | Detalhamento — `prototipo/detalhamento.html` |

**Critérios de aceitação resumidos:**

* Cada ação deve exibir responsável principal.
* Cada ação deve exibir colaboradores vinculados, quando houver.
* As informações devem incluir órgão/setor e papel desempenhado, quando disponíveis.
* Caso não haja colaboradores, o sistema deve informar essa ausência de forma clara.
* As informações devem aparecer junto ao detalhamento da ação.

---

## 5. Rastreabilidade Resumida

| História | Requisitos relacionados           | Tela relacionada                    |
| -------- | --------------------------------- | ----------------------------------- |
| HU01     | RF01-EV                           | Tela Inicial Pública                |
| HU02     | RF01-EV, RF02-EV                  | Tela Inicial Pública, Detalhamento  |
| HU03     | RF03                              | Detalhamento                        |
| HU04     | RF04-EV                           | Busca e Filtros                     |
| HU05     | RF05-EV                           | Busca e Filtros                     |
| HU06     | RF06-EV, RNF04-EV                 | Dashboard, Exportação da Dashboard  |
| HU07     | RF16, RF17, RF18, RNF02, RNF07-EV | Dashboard de Indicadores            |
| HU08     | RF10-EV, RNF01-EV                 | Acessibilidade, Todas as telas      |
| HU09     | RF11, RNF08, RNF09-EV             | Login                               |
| HU10     | RF03, RF08-EV, RF22-EV            | Detalhamento, Painel Administrativo |
| HU11     | RF07-EV, RF08-EV                  | Histórico Público                   |
| HU12     | RF12-EV                           | Painel Administrativo               |
| HU13     | RF21-EV                           | Painel Administrativo               |
| HU14     | RF09-EV, RF20-EV                  | Gerenciamento de Usuários           |
| HU15     | RF13-EV                           | Painel Administrativo               |
| HU16     | RF19-EV                           | Detalhamento                        |

---

## 6. Observações de Evolução

* A HU05 foi ajustada para remover o filtro por status, conforme solicitação da professora/cliente.
* A HU06 foi alterada para tratar da exportação da dashboard de acompanhamento, e não apenas de dados filtrados.
* A HU07 passou a considerar os anos correspondentes ao Plano Decenal carregado.
* A HU10, HU12, HU13, HU14 e HU15 passaram a especificar melhor os registros de alteração ou auditoria.
* A HU14 não utiliza mais RF15 como requisito principal, pois RF15 permanece apenas no histórico como duplicado de RF09.
* As telas foram ajustadas para o protótipo com fluxo entre múltiplos arquivos HTML.

---

## 7. Histórico de Alterações

| Versão | Data       | Alteração                                                                                                                                                                                                                                            |
| ------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0    | 11/06/2025 | Criação inicial das histórias de usuário.                                                                                                                                                                                                            |
| 1.1    | 11/06/2025 | Inclusão da HU16 para cobrir RF19 e padronização da estrutura para separação dos critérios em documento próprio.                                                                                                                                     |
| 1.2    | 18/06/2025 | Atualização das histórias conforme requisitos evoluídos, incluindo separação entre busca/filtros, histórico/auditoria e cadastro/edição.                                                                                                             |
| 1.3    | 18/06/2025 | Ajustes após validação com a professora/cliente: remoção do status dos filtros, exportação da dashboard, especificação dos registros de alteração/auditoria, uso dos anos do Plano Decenal carregado e alinhamento com protótipo em múltiplas telas. |
