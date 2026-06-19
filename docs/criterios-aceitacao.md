---

## title: criterios-aceitacao.md

# Critérios de Aceitação

**Projeto:** Sistema de Monitoramento do Plano Decenal da Criança e do Adolescente
**Versão:** 1.3
**Data:** 18/06/2025
**Referência:** `docs/criterios-aceitacao.md`
**Status:** Em evolução

---

## 1. Objetivo

Este documento define os critérios de aceitação das histórias de usuário do sistema.

Nesta versão, os critérios foram revisados para acompanhar os requisitos evoluídos e os ajustes solicitados após validação com a professora/cliente, especialmente nos pontos de:

* remoção do status dos filtros estruturados;
* exportação da dashboard de acompanhamento;
* especificação do registro de alteração/auditoria;
* consideração dos anos correspondentes ao Plano Decenal carregado;
* alinhamento com o protótipo simplificado em múltiplas telas.

---

## 2. Padrão Utilizado

Os critérios seguem, sempre que possível, a lógica:

> **Dado que** uma condição inicial existe,
> **quando** o usuário realiza uma ação,
> **então** o sistema deve apresentar um resultado esperado.

Além disso, cada história possui uma lista de verificação para apoiar a validação incremental.

---

## 3. Critérios por História de Usuário

---

## HU01 - Visualizar problemas públicos

| ID         | Critério                                                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-HU01-01 | Dado que o usuário acessa a tela inicial, quando a página é carregada, então o sistema deve exibir os problemas públicos disponíveis.                |
| CA-HU01-02 | Dado que um problema público é exibido, quando o usuário visualiza seus detalhes, então o sistema deve apresentar seu compromisso decenal vinculado. |
| CA-HU01-03 | Dado que o usuário não está autenticado, quando acessa a tela inicial, então o sistema deve permitir a visualização dos dados públicos.              |

**Checklist de validação**

* [ ] Problemas públicos são exibidos.
* [ ] Cada problema possui compromisso vinculado.
* [ ] O acesso público funciona sem login.
* [ ] A listagem é compreensível e acessível.

---

## HU02 - Navegar pela hierarquia completa do plano

| ID         | Critério                                                                                                                                        |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-HU02-01 | Dado que o usuário seleciona um problema público, quando acessa seus detalhes, então o sistema deve exibir os compromissos vinculados.          |
| CA-HU02-02 | Dado que o usuário está em um compromisso, quando seleciona um objetivo, então o sistema deve exibir suas linhas de ação e tarefas.             |
| CA-HU02-03 | Dado que o usuário navega pela estrutura, quando avança ou retorna entre níveis, então o caminho de navegação deve permanecer claro.            |
| CA-HU02-04 | Dado que uma tarefa possui indicador vinculado, quando o usuário visualiza o detalhamento, então o sistema deve exibir o indicador relacionado. |

**Checklist de validação**

* [ ] A hierarquia Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa → Indicador está representada.
* [ ] O usuário consegue navegar entre níveis.
* [ ] Existe indicação visual do nível atual.
* [ ] O acesso não exige login.
* [ ] O protótipo possui fluxo entre telas, e não apenas uma única página.

---

## HU03 - Acompanhar status das tarefas

| ID         | Critério                                                                                                                            |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| CA-HU03-01 | Dado que uma tarefa está cadastrada, quando o usuário acessa seus detalhes, então o sistema deve exibir seu status atual.           |
| CA-HU03-02 | Dado que uma tarefa possui andamento registrado, quando ela é exibida, então o sistema deve mostrar o percentual de conclusão.      |
| CA-HU03-03 | Dado que uma tarefa não possui atualização, quando exibida, então o sistema deve apresentar status compatível, como “não iniciada”. |

**Checklist de validação**

* [ ] O status aparece junto da tarefa.
* [ ] O percentual de conclusão aparece junto da tarefa.
* [ ] Os status seguem o padrão definido.
* [ ] A visualização está disponível para o público geral.

---

## HU04 - Realizar busca textual no sistema

| ID         | Critério                                                                                                                                                             |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-HU04-01 | Dado que o usuário informa uma palavra-chave, quando executa a busca, então o sistema deve exibir resultados correspondentes em versão funcional.                    |
| CA-HU04-02 | Dado que o usuário pesquisa por responsável, eixo ou compromisso, quando a busca é executada, então o sistema deve listar os itens relacionados em versão funcional. |
| CA-HU04-03 | Dado que não existem resultados para a busca, quando ela é executada, então o sistema deve exibir mensagem informativa.                                              |

**Checklist de validação**

* [ ] A busca textual está prevista na interface.
* [ ] A busca por responsável está prevista.
* [ ] A busca por eixo ou compromisso está prevista.
* [ ] Busca sem resultado possui mensagem clara em versão funcional.
* [ ] A busca textual está separada dos filtros estruturados.

---

## HU05 - Aplicar filtros estruturados

| ID         | Critério                                                                                                                                                                                              |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-HU05-01 | Dado que o usuário seleciona um filtro por compromisso, indicador, período ou responsável, quando aplica a consulta, então o sistema deve exibir apenas os dados correspondentes em versão funcional. |
| CA-HU05-02 | Dado que o usuário combina múltiplos filtros, quando a consulta é realizada, então o sistema deve considerar todos os filtros aplicados.                                                              |
| CA-HU05-03 | Dado que filtros estão aplicados, quando o usuário remove um filtro, então os resultados devem ser atualizados.                                                                                       |

**Checklist de validação**

* [ ] Filtro por compromisso está previsto.
* [ ] Filtro por indicador está previsto.
* [ ] Filtro por período está previsto.
* [ ] Filtro por responsável está previsto.
* [ ] O filtro por status foi removido conforme validação com a professora/cliente.
* [ ] Os filtros estruturados estão separados da busca textual.

---

## HU06 - Exportar dashboard de acompanhamento

| ID         | Critério                                                                                                                                                             |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-HU06-01 | Dado que o usuário visualiza a dashboard, quando solicita exportação, então o sistema deve permitir exportar a dashboard de acompanhamento.                          |
| CA-HU06-02 | Dado que filtros estão aplicados, quando a dashboard é exportada, então a exportação deve considerar os filtros aplicados e o período selecionado.                   |
| CA-HU06-03 | Dado que a dashboard é exportada, quando o arquivo é gerado, então ele deve incluir indicadores, gráficos, percentuais, data de geração e contexto do Plano Decenal. |
| CA-HU06-04 | Dado que a exportação representa a dashboard, quando o usuário escolhe o formato, então o formato PDF deve ser priorizado para a visão visual consolidada.           |

**Checklist de validação**

* [ ] Existe tela ou opção de exportação da dashboard.
* [ ] A exportação considera filtros aplicados.
* [ ] A exportação considera o período selecionado.
* [ ] A exportação inclui indicadores, gráficos e percentuais.
* [ ] A exportação informa data de geração e contexto do Plano Decenal.
* [ ] A exportação da dashboard está diferenciada da simples exportação de dados tabulares.

---

## HU07 - Visualizar dashboard de indicadores

| ID         | Critério                                                                                                                                                       |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-HU07-01 | Dado que existem indicadores cadastrados, quando o usuário acessa a dashboard, então o sistema deve exibir representações visuais de progresso.                |
| CA-HU07-02 | Dado que o Plano Decenal possui intervalo de anos definido, quando a dashboard é exibida, então os indicadores devem corresponder aos anos do plano carregado. |
| CA-HU07-03 | Dado que existem indicadores de tipos diferentes, quando exibidos, então o sistema deve diferenciá-los visualmente.                                            |
| CA-HU07-04 | Dado que o usuário consulta a dashboard, quando visualiza os indicadores, então deve conseguir compreender o progresso geral do plano.                         |

**Checklist de validação**

* [ ] A dashboard apresenta indicadores ou representações visuais de progresso.
* [ ] Os indicadores consideram os anos do Plano Decenal carregado.
* [ ] Indicadores de tipos diferentes possuem diferenciação visual.
* [ ] A visualização é compreensível no protótipo simplificado.
* [ ] Responsividade completa fica planejada para versão futura.

---

## HU08 - Ativar modo de alto contraste

| ID         | Critério                                                                                                                                                              |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-HU08-01 | Dado que o usuário acessa o sistema, quando procura recursos de acessibilidade, então deve existir opção ou tela indicando alto contraste.                            |
| CA-HU08-02 | Dado que o modo padrão está ativo, quando o usuário ativa alto contraste em versão funcional, então a interface deve alterar suas cores.                              |
| CA-HU08-03 | Dado que o alto contraste está ativo, quando o usuário navega pelo sistema, então a interface deve manter legibilidade.                                               |
| CA-HU08-04 | Dado que a interface está em desenvolvimento, quando o protótipo é avaliado, então deve demonstrar preocupação com contraste, legibilidade e navegação compreensível. |

**Checklist de validação**

* [ ] A opção de alto contraste está prevista.
* [ ] A interface mantém boa legibilidade.
* [ ] A acessibilidade orienta o visual das telas.
* [ ] A implementação funcional completa pode evoluir em versão futura.

---

## HU09 - Realizar login

| ID         | Critério                                                                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CA-HU09-01 | Dado que o usuário acessa a tela de login, quando visualiza o formulário, então o sistema deve solicitar e-mail e senha.                                     |
| CA-HU09-02 | Dado que o usuário informa credenciais inválidas, quando envia o formulário em versão funcional, então o sistema deve exibir mensagem genérica de erro.      |
| CA-HU09-03 | Dado que o usuário permanece inativo por período definido, quando tenta continuar usando o sistema em versão funcional, então a sessão deve estar encerrada. |
| CA-HU09-04 | Dado que o usuário acessa área administrativa, quando não está autenticado ou autorizado, então o sistema deve restringir o acesso em versão funcional.      |

**Checklist de validação**

* [ ] Login solicita e-mail e senha.
* [ ] Login representa acesso às áreas restritas.
* [ ] Mensagem de erro não revela qual campo está incorreto em versão funcional.
* [ ] Sessão expira após período definido em versão funcional.
* [ ] JWT permanece tratado como requisito técnico de segurança, não como ação direta do usuário.

---

## HU10 - Atualizar status e percentual de tarefas

| ID         | Critério                                                                                                                                                                                                                                                          |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-HU10-01 | Dado que o usuário possui permissão, quando edita uma tarefa, então o sistema deve permitir alteração de status e percentual em versão funcional.                                                                                                                 |
| CA-HU10-02 | Dado que o usuário não possui permissão, quando acessa a tarefa, então os controles de edição não devem estar disponíveis em versão funcional.                                                                                                                    |
| CA-HU10-03 | Dado que uma alteração é salva, quando o histórico ou log é consultado, então a alteração deve gerar registro de alteração.                                                                                                                                       |
| CA-HU10-04 | Dado que um registro de alteração é gerado, quando consultado, então deve conter tipo da ação, entidade afetada, identificador do item, usuário ou órgão responsável, data e hora, campo modificado, valor anterior, valor novo e justificativa quando aplicável. |

**Checklist de validação**

* [ ] Usuário autorizado edita status.
* [ ] Usuário autorizado edita percentual.
* [ ] Usuário não autorizado não edita.
* [ ] Alteração gera registro de alteração.
* [ ] O registro de alteração possui informações suficientes para rastreabilidade.

---

## HU11 - Visualizar histórico público de atualizações

| ID         | Critério                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-HU11-01 | Dado que uma tarefa ou indicador possui alterações relevantes, quando o usuário acessa o histórico público, então o sistema deve listar essas atualizações.               |
| CA-HU11-02 | Dado que o histórico é exibido, quando o usuário consulta os registros, então cada item deve mostrar data, descrição da alteração e responsável público quando aplicável. |
| CA-HU11-03 | Dado que o usuário acessa uma tarefa ou indicador, quando visualiza seu resumo, então a data da última atualização deve aparecer em destaque.                             |
| CA-HU11-04 | Dado que o histórico público é exibido, quando o usuário consulta as informações, então dados administrativos sensíveis não devem ser expostos.                           |

**Checklist de validação**

* [ ] Histórico público exibe alterações relevantes.
* [ ] Histórico público exibe data da alteração.
* [ ] Última atualização aparece em destaque.
* [ ] Histórico público não expõe dados administrativos sensíveis.
* [ ] Histórico público está separado do log administrativo.

---

## HU12 - Inserir novos dados via interface

| ID         | Critério                                                                                                                                                                                |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-HU12-01 | Dado que o usuário SEDEF acessa o painel administrativo, quando seleciona cadastro, então o sistema deve exibir formulários de inserção.                                                |
| CA-HU12-02 | Dado que o usuário tenta salvar dados incompletos, quando submete o formulário em versão funcional, então o sistema deve indicar os campos obrigatórios.                                |
| CA-HU12-03 | Dado que o cadastro é concluído com sucesso, quando o usuário acessa a interface pública, então o novo item deve estar visível em versão funcional.                                     |
| CA-HU12-04 | Dado que um novo item é cadastrado, quando o cadastro é salvo, então deve ser gerado registro de alteração ou auditoria contendo usuário responsável, data, hora e entidade cadastrada. |

**Checklist de validação**

* [ ] Formulários existem para os níveis da hierarquia.
* [ ] Campos obrigatórios são sinalizados.
* [ ] Dados inválidos são rejeitados em versão funcional.
* [ ] Cadastro válido é salvo em versão funcional.
* [ ] Cadastro gera registro de alteração ou auditoria.

---

## HU13 - Importar dados por planilha com validação prévia

| ID         | Critério                                                                                                                                                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CA-HU13-01 | Dado que o usuário SEDEF seleciona uma planilha `.xlsx` ou `.csv`, quando envia o arquivo, então o sistema deve validar sua estrutura em versão funcional.                                                                                 |
| CA-HU13-02 | Dado que a planilha possui erro, quando a validação é realizada, então o sistema deve rejeitar a importação integralmente ou indicar correções necessárias.                                                                                |
| CA-HU13-03 | Dado que a planilha é válida, quando a validação é concluída, então o sistema deve exibir uma prévia dos registros antes da confirmação.                                                                                                   |
| CA-HU13-04 | Dado que a importação é confirmada, quando os dados são importados, então deve ser gerado registro de auditoria contendo usuário responsável, data e hora, arquivo utilizado, quantidade de registros importados e resultado da validação. |

**Checklist de validação**

* [ ] Aceita `.xlsx`.
* [ ] Aceita `.csv`.
* [ ] Valida estrutura da planilha.
* [ ] Exibe prévia antes da confirmação.
* [ ] Registra importação bem-sucedida no log de auditoria.

---

## HU14 - Gerenciar permissões de usuários

| ID         | Critério                                                                                                                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-HU14-01 | Dado que o administrador acessa o painel, quando abre gerenciamento de usuários, então o sistema deve listar usuários e perfis atuais.                                                                  |
| CA-HU14-02 | Dado que o administrador altera um perfil, quando salva a alteração, então o sistema deve atualizar as permissões do usuário em versão funcional.                                                       |
| CA-HU14-03 | Dado que um usuário sem perfil de administrador tenta acessar a tela, quando solicita a página, então o sistema deve negar acesso em versão funcional.                                                  |
| CA-HU14-04 | Dado que uma permissão é alterada, quando o log é consultado, então a alteração deve estar registrada.                                                                                                  |
| CA-HU14-05 | Dado que os perfis do sistema são exibidos, quando o administrador consulta usuários, então os quatro perfis oficiais devem estar previstos: Público Geral, Conselho/Secretaria, SEDEF e Administrador. |

**Checklist de validação**

* [ ] Administrador visualiza usuários.
* [ ] Administrador altera permissões.
* [ ] Usuário não administrador não acessa a tela em versão funcional.
* [ ] Alteração fica registrada no log.
* [ ] Quatro perfis oficiais estão previstos.

---

## HU15 - Visualizar log administrativo de auditoria

| ID         | Critério                                                                                                                                                                                           |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-HU15-01 | Dado que o administrador acessa o painel, quando abre o log de auditoria, então o sistema deve listar ações que alteraram o estado do sistema.                                                     |
| CA-HU15-02 | Dado que o log é exibido, quando o administrador consulta os registros, então cada registro deve conter ação realizada, entidade afetada, identificador do item, usuário responsável, data e hora. |
| CA-HU15-03 | Dado que o log registra alteração de campo, quando exibido, então deve apresentar campo modificado, valor anterior, valor novo e justificativa quando aplicável.                                   |
| CA-HU15-04 | Dado que o log é imutável, quando qualquer usuário tenta editar ou excluir registros, então o sistema deve impedir a operação em versão funcional.                                                 |

**Checklist de validação**

* [ ] Log exibe ações realizadas.
* [ ] Log exibe usuário responsável.
* [ ] Log exibe data e hora.
* [ ] Log exibe entidade afetada e identificador do item.
* [ ] Log exibe valor anterior e valor novo quando aplicável.
* [ ] Log não pode ser editado ou excluído.
* [ ] Log administrativo está separado do histórico público.

---

## HU16 - Visualizar responsáveis e colaboradores da ação

| ID         | Critério                                                                                                                                                    |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-HU16-01 | Dado que uma ação possui responsável principal cadastrado, quando o usuário acessa o detalhamento, então o sistema deve exibir o responsável.               |
| CA-HU16-02 | Dado que uma ação possui colaboradores, quando o usuário acessa o detalhamento, então o sistema deve exibir a lista de colaboradores.                       |
| CA-HU16-03 | Dado que uma ação possui órgão ou setor relacionado, quando o detalhamento é exibido, então o sistema deve apresentar essa informação.                      |
| CA-HU16-04 | Dado que uma ação não possui colaboradores cadastrados, quando o detalhamento é exibido, então o sistema deve informar que não há colaboradores vinculados. |

**Checklist de validação**

* [ ] Responsável principal aparece no detalhamento da ação.
* [ ] Colaboradores aparecem no detalhamento da ação.
* [ ] Órgão/setor aparece quando disponível.
* [ ] Papel desempenhado aparece quando disponível.
* [ ] Ausência de colaboradores é informada.

---

## 4. Critérios Gerais de Aceitação do Sistema

| ID   | Critério geral                                                                                                                                                   | Relacionamento                                       |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| CG01 | A navegação principal deve permitir acesso às telas mínimas do protótipo.                                                                                        | Protótipo                                            |
| CG02 | As informações públicas devem estar disponíveis sem autenticação.                                                                                                | HU01, HU02, HU03, HU04, HU05, HU06, HU07, HU11, HU16 |
| CG03 | Funcionalidades administrativas devem exigir autenticação e perfil adequado em versão funcional.                                                                 | HU09, HU12, HU13, HU14, HU15                         |
| CG04 | Alterações de estado devem gerar registro de alteração ou log de auditoria.                                                                                      | HU10, HU12, HU13, HU14, HU15                         |
| CG05 | A interface deve possuir recurso ou indicação de acessibilidade visual.                                                                                          | HU08                                                 |
| CG06 | A exportação da dashboard deve refletir filtros aplicados, período selecionado, indicadores, gráficos, percentuais, data de geração e contexto do Plano Decenal. | HU06, HU07                                           |
| CG07 | O sistema deve respeitar a hierarquia do Plano Decenal.                                                                                                          | HU01, HU02, HU12                                     |
| CG08 | Consultas, filtros, dashboard e exportações devem considerar o intervalo de anos correspondente ao Plano Decenal carregado.                                      | HU04, HU05, HU06, HU07                               |
| CG09 | O protótipo inicial deve possuir fluxo entre múltiplas telas HTML, ainda que as funcionalidades estejam representadas de forma visual e simplificada.            | Protótipo                                            |

---

## 5. Histórico de Alterações

| Versão | Data       | Alteração                                                                                                                                                                                                                                            |
| ------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0    | 11/06/2025 | Criação inicial dos critérios dentro das histórias de usuário.                                                                                                                                                                                       |
| 1.1    | 11/06/2025 | Separação dos critérios em documento próprio, inclusão de critérios Dado/Quando/Então e cobertura da HU16.                                                                                                                                           |
| 1.2    | 18/06/2025 | Atualização dos critérios conforme requisitos evoluídos e decisões de usabilidade.                                                                                                                                                                   |
| 1.3    | 18/06/2025 | Ajustes após validação com a professora/cliente: remoção do status dos filtros, exportação da dashboard, especificação dos registros de alteração/auditoria, uso dos anos do Plano Decenal carregado e alinhamento com protótipo em múltiplas telas. |
