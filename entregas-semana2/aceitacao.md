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

---

## HU03 — Acompanhar status das tarefas

| ID | Critério |
|---|---|
| CA-HU03-01 | Dado que uma tarefa está cadastrada, quando o usuário acessa seus detalhes, então o sistema deve exibir seu status atual. |
| CA-HU03-02 | Dado que uma tarefa possui andamento registrado, quando ela é exibida, então o sistema deve mostrar o percentual de conclusão. |
| CA-HU03-03 | Dado que uma tarefa não possui atualização, quando exibida, então o sistema deve apresentar status compatível, como “não iniciada”. |

**Checklist de validação**

- [ ] O status aparece junto da tarefa.
- [ ] O percentual de conclusão aparece junto da tarefa.
- [ ] Os status seguem o padrão definido.
- [ ] A visualização está disponível para o público geral.

---

## HU04 — Realizar busca no sistema

| ID | Critério |
|---|---|
| CA-HU04-01 | Dado que o usuário informa uma palavra-chave, quando executa a busca, então o sistema deve exibir resultados correspondentes. |
| CA-HU04-02 | Dado que o usuário pesquisa por responsável, eixo ou compromisso, quando a busca é executada, então o sistema deve listar os itens relacionados. |
| CA-HU04-03 | Dado que não existem resultados para a busca, quando ela é executada, então o sistema deve exibir mensagem informativa. |

**Checklist de validação**

- [ ] A busca por palavra-chave funciona.
- [ ] A busca por responsável funciona.
- [ ] A busca por eixo ou compromisso funciona.
- [ ] Busca sem resultado apresenta mensagem clara.

---

## HU05 — Aplicar filtros

| ID | Critério |
|---|---|
| CA-HU05-01 | Dado que o usuário seleciona um filtro, quando aplica a busca, então o sistema deve exibir apenas os dados correspondentes. |
| CA-HU05-02 | Dado que o usuário combina múltiplos filtros, quando a consulta é realizada, então o sistema deve considerar todos os filtros aplicados. |
| CA-HU05-03 | Dado que filtros estão aplicados, quando o usuário remove um filtro, então os resultados devem ser atualizados. |

**Checklist de validação**

- [ ] Filtro por compromisso funciona.
- [ ] Filtro por indicador funciona.
- [ ] Filtro por período funciona.
- [ ] Filtro por responsável funciona.
- [ ] Múltiplos filtros podem ser combinados.

---

## HU06 — Exportar dados filtrados

| ID | Critério |
|---|---|
| CA-HU06-01 | Dado que o usuário possui uma consulta filtrada, quando solicita exportação, então o sistema deve exportar apenas os dados filtrados. |
| CA-HU06-02 | Dado que o usuário escolhe Excel, CSV ou PDF, quando confirma a exportação, então o sistema deve gerar arquivo no formato selecionado. |
| CA-HU06-03 | Dado que o arquivo é exportado, quando comparado à interface, então deve conter os mesmos dados exibidos. |

**Checklist de validação**

- [ ] Exportação em Excel disponível.
- [ ] Exportação em CSV disponível.
- [ ] Exportação em PDF disponível.
- [ ] Exportação respeita filtros aplicados.
- [ ] Dados exportados preservam integridade.

---

## HU07 — Visualizar gráficos de progresso

| ID | Critério |
|---|---|
| CA-HU07-01 | Dado que existem indicadores cadastrados, quando o usuário acessa a tela de indicadores, então o sistema deve exibir gráficos de progresso. |
| CA-HU07-02 | Dado que o usuário seleciona um ano, quando aplica o filtro, então os gráficos devem exibir apenas dados do ano escolhido. |
| CA-HU07-03 | Dado que existem indicadores de tipos diferentes, quando exibidos, então o sistema deve diferenciá-los visualmente. |

**Checklist de validação**

- [ ] Gráficos são exibidos para os indicadores.
- [ ] Filtro por ano funciona.
- [ ] Tipos de indicador possuem diferenciação visual.
- [ ] Gráficos são legíveis em telas diferentes.

---

## HU08 — Ativar modo de alto contraste

| ID | Critério |
|---|---|
| CA-HU08-01 | Dado que o usuário acessa qualquer tela, quando procura a opção de acessibilidade, então o botão de alto contraste deve estar disponível. |
| CA-HU08-02 | Dado que o modo padrão está ativo, quando o usuário clica em alto contraste, então a interface deve alterar suas cores. |
| CA-HU08-03 | Dado que o alto contraste está ativo, quando o usuário navega para outra tela, então a preferência deve ser mantida durante a sessão. |

**Checklist de validação**

- [ ] Botão de alto contraste disponível.
- [ ] Alto contraste pode ser ativado.
- [ ] Alto contraste pode ser desativado.
- [ ] Preferência é mantida durante a sessão.

---

## HU09 — Realizar login

| ID | Critério |
|---|---|
| CA-HU09-01 | Dado que o usuário informa credenciais válidas, quando envia o formulário, então o sistema deve autenticar o usuário. |
| CA-HU09-02 | Dado que o usuário informa credenciais inválidas, quando envia o formulário, então o sistema deve exibir mensagem genérica de erro. |
| CA-HU09-03 | Dado que o usuário permanece inativo por 30 minutos, quando tenta continuar usando o sistema, então a sessão deve estar encerrada. |

**Checklist de validação**

- [ ] Login solicita e-mail e senha.
- [ ] Login aceita credenciais válidas.
- [ ] Login rejeita credenciais inválidas.
- [ ] Mensagem de erro não informa qual campo está incorreto.
- [ ] Sessão expira após 30 minutos de inatividade.

---

## HU10 — Atualizar status de tarefas

| ID | Critério |
|---|---|
| CA-HU10-01 | Dado que o usuário possui permissão, quando edita uma tarefa, então o sistema deve permitir alteração de status e percentual. |
| CA-HU10-02 | Dado que o usuário não possui permissão, quando acessa a tarefa, então os controles de edição não devem estar disponíveis. |
| CA-HU10-03 | Dado que uma alteração é salva, quando o histórico é consultado, então a alteração deve aparecer com usuário, data, hora, valor anterior e valor novo. |

**Checklist de validação**

- [ ] Usuário autorizado edita status.
- [ ] Usuário autorizado edita percentual.
- [ ] Usuário não autorizado não edita.
- [ ] Alteração gera registro no histórico.

---

## HU11 — Visualizar histórico de atualizações

| ID | Critério |
|---|---|
| CA-HU11-01 | Dado que uma tarefa possui alterações, quando o usuário acessa o histórico, então o sistema deve listar todas as atualizações. |
| CA-HU11-02 | Dado que o histórico é exibido, quando o usuário consulta os registros, então cada item deve mostrar data, hora e autor. |
| CA-HU11-03 | Dado que o usuário acessa uma tarefa, quando visualiza seu resumo, então a data da última atualização deve estar destacada. |

**Checklist de validação**

- [ ] Histórico exibe alterações.
- [ ] Histórico exibe autor.
- [ ] Histórico exibe data e hora.
- [ ] Última atualização aparece em destaque.
- [ ] Histórico não é editável.

---

## HU12 — Inserir novos dados via interface

| ID | Critério |
|---|---|
| CA-HU12-01 | Dado que o usuário SEDEF acessa o painel administrativo, quando seleciona cadastro, então o sistema deve exibir formulários de inserção. |
| CA-HU12-02 | Dado que o usuário tenta salvar dados incompletos, quando submete o formulário, então o sistema deve indicar os campos obrigatórios. |
| CA-HU12-03 | Dado que o cadastro é concluído com sucesso, quando o usuário acessa a interface pública, então o novo item deve estar visível. |

**Checklist de validação**

- [ ] Formulários existem para níveis da hierarquia.
- [ ] Campos obrigatórios são sinalizados.
- [ ] Dados inválidos são rejeitados.
- [ ] Cadastro válido é salvo.
- [ ] Cadastro gera registro de auditoria quando aplicável.

---

## HU13 — Importar dados por planilha

| ID | Critério |
|---|---|
| CA-HU13-01 | Dado que o usuário SEDEF seleciona uma planilha `.xlsx` ou `.csv`, quando envia o arquivo, então o sistema deve validar sua estrutura. |
| CA-HU13-02 | Dado que a planilha possui erro, quando a validação é realizada, então o sistema deve rejeitar a importação integralmente. |
| CA-HU13-03 | Dado que a planilha é válida, quando a importação é concluída, então os dados devem ser inseridos e registrados no log de auditoria. |

**Checklist de validação**

- [ ] Aceita `.xlsx`.
- [ ] Aceita `.csv`.
- [ ] Rejeita planilha inválida.
- [ ] Informa erro de forma clara.
- [ ] Registra importação bem-sucedida no log.

---

## HU14 — Gerenciar permissões de usuários

| ID | Critério |
|---|---|
| CA-HU14-01 | Dado que o administrador acessa o painel, quando abre gerenciamento de usuários, então o sistema deve listar usuários e perfis atuais. |
| CA-HU14-02 | Dado que o administrador altera um perfil, quando salva a alteração, então o sistema deve atualizar as permissões do usuário. |
| CA-HU14-03 | Dado que um usuário sem perfil de administrador tenta acessar a tela, quando solicita a página, então o sistema deve negar acesso. |
| CA-HU14-04 | Dado que uma permissão é alterada, quando o log é consultado, então a alteração deve estar registrada. |

**Checklist de validação**

- [ ] Administrador visualiza usuários.
- [ ] Administrador altera permissões.
- [ ] Usuário não administrador não acessa a tela.
- [ ] Alteração fica registrada no log.

---

## HU15 — Visualizar log de auditoria

| ID | Critério |
|---|---|
| CA-HU15-01 | Dado que o administrador acessa o painel, quando abre o log de auditoria, então o sistema deve listar ações que alteraram o estado do sistema. |
| CA-HU15-02 | Dado que o log é exibido, quando o administrador consulta os registros, então cada registro deve conter ação, usuário, data e hora. |
| CA-HU15-03 | Dado que o log é imutável, quando qualquer usuário tenta editar ou excluir registros, então o sistema deve impedir a operação. |

**Checklist de validação**

- [ ] Log exibe ações realizadas.
- [ ] Log exibe usuário.
- [ ] Log exibe data e hora.
- [ ] Log pode ser filtrado.
- [ ] Log não pode ser editado ou excluído.

---

## HU16 — Visualizar responsáveis e colaboradores da ação

| ID | Critério |
|---|---|
| CA-HU16-01 | Dado que uma ação possui responsável principal cadastrado, quando o usuário acessa o detalhamento, então o sistema deve exibir o responsável. |
| CA-HU16-02 | Dado que uma ação possui colaboradores, quando o usuário acessa o detalhamento, então o sistema deve exibir a lista de colaboradores. |
| CA-HU16-03 | Dado que uma ação não possui colaboradores cadastrados, quando o detalhamento é exibido, então o sistema deve informar que não há colaboradores vinculados. |

**Checklist de validação**

- [ ] Responsável principal aparece no detalhamento da ação.
- [ ] Colaboradores aparecem no detalhamento da ação.
- [ ] Ausência de colaboradores é informada.
- [ ] As informações são visíveis conforme perfil de acesso definido.

---

## 4. Critérios Gerais de Aceitação do Sistema

Além dos critérios por história, o sistema deve atender aos seguintes critérios gerais:

| ID | Critério geral | Relacionamento |
|---|---|---|
| CG01 | A navegação principal deve permitir acesso às telas mínimas do protótipo. | Protótipo |
| CG02 | As informações públicas devem estar disponíveis sem autenticação. | HU01, HU02, HU03, HU04, HU05 |
| CG03 | Funcionalidades administrativas devem exigir autenticação e perfil adequado. | HU09, HU12, HU13, HU14, HU15 |
| CG04 | Alterações de estado devem gerar histórico ou log de auditoria. | HU10, HU12, HU13, HU14, HU15 |
| CG05 | A interface deve possuir recurso de acessibilidade visual. | HU08 |
| CG06 | Dados exportados devem refletir o conjunto filtrado. | HU06 |
| CG07 | O sistema deve respeitar a hierarquia do Plano Decenal. | HU01, HU02, HU12 |