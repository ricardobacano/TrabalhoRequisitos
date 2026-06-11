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
