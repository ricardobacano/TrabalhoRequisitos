# Casos de uso

**Projeto:** Sistema de monitoramento do plano decenal da criança e do adolescente
**Versão:** 1.3
**Data:** 25/06/2025
**Status:** Finalizado

## 1. Objetivo

Este documento apresenta casos de uso preliminares para apoiar a matriz de rastreabilidade da Semana 3. Os casos ainda não possuem detalhamento completo de fluxo principal, exceções e pré-condições, mas já permitem relacionar requisitos, histórias e telas.

A versão 0.2 incorpora ajustes solicitados após validação com a professora/cliente, especialmente nos pontos de exportação da dashboard, remoção do status dos filtros, especificação do registro de alteração/auditoria e uso dos anos correspondentes ao Plano Decenal carregado.

---

## 2. Lista de casos de uso

| ID   | Caso de uso                             | Atores principais                         | Histórias relacionadas | Telas relacionadas |
| ---- | --------------------------------------- | ----------------------------------------- | ---------------------- | ------------------ |
| UC01 | Consultar problemas públicos            | Público geral                             | HU01                   | TP01               |
| UC02 | Navegar pela hierarquia do plano        | Público geral                             | HU02                   | TP01, TP04         |
| UC03 | Consultar andamento de tarefas          | Público geral                             | HU03                   | TP04               |
| UC04 | Buscar informações                      | Público geral                             | HU04                   | TP02               |
| UC05 | Aplicar filtros estruturados            | Público geral                             | HU05                   | TP02               |
| UC06 | Exportar dashboard de acompanhamento    | Público geral                             | HU06                   | TP03, TP09         |
| UC07 | Visualizar dashboard de indicadores     | Público geral                             | HU07                   | TP03               |
| UC08 | Ativar alto contraste                   | Público geral                             | HU08                   | TP10               |
| UC09 | Realizar login                          | Conselho/Secretaria, SEDEF, Administrador | HU09                   | TP06               |
| UC10 | Atualizar status e percentual de tarefa | Conselho/Secretaria, SEDEF                | HU10                   | TP04, TP07         |
| UC11 | Visualizar histórico público            | Público geral                             | HU11                   | TP05               |
| UC12 | Inserir dados via interface             | SEDEF                                     | HU12                   | TP07               |
| UC13 | Importar dados por planilha             | SEDEF                                     | HU13                   | TP07               |
| UC14 | Gerenciar permissões                    | Administrador                             | HU14                   | TP08               |
| UC15 | Visualizar log de auditoria             | Administrador                             | HU15                   | TP07               |
| UC16 | Visualizar responsáveis e colaboradores | Público geral, Conselho/Secretaria, SEDEF | HU16                   | TP04               |

---

## 3. Casos de Uso Resumidos

### UC01 - Consultar problemas públicos

**Ator principal:** Público geral
**Objetivo:** visualizar os problemas públicos e seus compromissos vinculados.
**Resultado esperado:** o usuário entende o panorama geral do Plano Decenal.

---

### UC02 - Navegar pela hierarquia do plano

**Ator principal:** Público geral
**Objetivo:** navegar pela estrutura Problema público → Compromisso → Objetivo → Linha de ação → Tarefa → Indicador.
**Resultado esperado:** o usuário compreende o desdobramento das ações do Plano Decenal.

---

### UC03 - Consultar andamento de tarefas

**Ator principal:** Público geral
**Objetivo:** visualizar o status e o percentual de conclusão das tarefas.
**Resultado esperado:** o usuário acompanha o andamento das ações vinculadas ao plano.

---

### UC04 - Buscar informações

**Ator principal:** Público geral
**Objetivo:** realizar busca textual por palavra-chave, responsável, eixo do plano ou compromisso.
**Resultado esperado:** o usuário encontra informações do plano de forma rápida e compreensível.

---

### UC05 - Aplicar filtros estruturados

**Ator principal:** Público geral
**Objetivo:** filtrar informações por compromisso, indicador, período e responsável.
**Resultado esperado:** o usuário visualiza apenas informações relevantes para sua consulta.

**Observação:**
O filtro por status foi removido após validação com a professora/cliente. O status permanece como informação exibida no detalhamento das tarefas, mas não como filtro estruturado nesta versão.

---

### UC06 - Exportar dashboard de acompanhamento

**Ator principal:** Público geral
**Objetivo:** exportar a dashboard de acompanhamento considerando os filtros aplicados, período selecionado, indicadores, gráficos, percentuais, data de geração e contexto do Plano Decenal.
**Resultado esperado:** o usuário obtém uma visão consolidada da dashboard para consulta, apresentação ou análise externa.

**Observação:**
A exportação deixa de ser tratada apenas como exportação de dados filtrados e passa a contemplar a dashboard como visão consolidada do acompanhamento.

---

### UC07 - Visualizar dashboard de indicadores

**Ator principal:** Público geral
**Objetivo:** visualizar indicadores, percentuais e progresso do Plano Decenal.
**Resultado esperado:** o usuário acompanha a evolução dos compromissos por meio de uma visualização resumida.

**Observação:**
Os dados exibidos na dashboard devem corresponder ao intervalo de anos do Plano Decenal carregado no sistema, definido pelo ano inicial e ano final cadastrados para o plano.

---

### UC08 - Ativar alto contraste

**Ator principal:** Público geral
**Objetivo:** ativar ou desativar recurso visual de alto contraste.
**Resultado esperado:** o usuário tem melhor legibilidade e acessibilidade durante a navegação.

---

### UC09 - Realizar login

**Atores principais:** Conselho/Secretaria, SEDEF e Administrador
**Objetivo:** acessar funcionalidades restritas conforme perfil.
**Resultado esperado:** o usuário autenticado acessa apenas áreas permitidas.

---

### UC10 - Atualizar status e percentual de tarefa

**Atores principais:** Conselho/Secretaria e SEDEF
**Objetivo:** atualizar o status e o percentual de conclusão de uma tarefa existente.
**Resultado esperado:** a tarefa passa a refletir o andamento real da ação.

**Registro gerado:**
A atualização deve gerar registro de alteração contendo, quando aplicável: tipo da ação, entidade afetada, identificador do item, usuário ou órgão responsável, data e hora, campo modificado, valor anterior, valor novo e justificativa da alteração.

---

### UC11 - Visualizar histórico público

**Ator principal:** Público geral
**Objetivo:** visualizar alterações relevantes em tarefas e indicadores.
**Resultado esperado:** o usuário acompanha a evolução pública das ações sem acessar dados administrativos sensíveis.

---

### UC12 - Inserir dados via interface

**Ator principal:** SEDEF
**Objetivo:** cadastrar novos problemas públicos, compromissos, objetivos, linhas de ação, tarefas, indicadores, responsáveis e colaboradores.
**Resultado esperado:** novos dados passam a compor a estrutura do Plano Decenal.

**Registro gerado:**
A criação de novo item deve gerar registro de alteração ou auditoria contendo dados mínimos da ação realizada, do usuário responsável e da entidade cadastrada.

---

### UC13 - Importar dados por planilha

**Ator principal:** SEDEF
**Objetivo:** importar dados em lote por planilha, com validação da estrutura e prévia antes da confirmação.
**Resultado esperado:** os dados são importados com menor risco de erro e com rastreabilidade administrativa.

---

### UC14 - Gerenciar permissões

**Ator principal:** Administrador
**Objetivo:** alterar perfis e permissões de usuários.
**Resultado esperado:** permissões ficam alinhadas às responsabilidades dos quatro perfis oficiais: Público geral, Conselho/Secretaria, SEDEF e Administrador.

---

### UC15 - Visualizar log de auditoria

**Ator principal:** Administrador
**Objetivo:** acompanhar ações administrativas que alteraram o estado do sistema.
**Resultado esperado:** alterações administrativas ficam rastreáveis.

**Informações do log:**
O log administrativo deve conter, quando aplicável: ação realizada, entidade afetada, identificador do item, usuário responsável, data e hora, campo modificado, valor anterior, valor novo e justificativa da alteração.

---

### UC16 - Visualizar responsáveis e colaboradores

**Atores principais:** Público geral, Conselho/Secretaria e SEDEF
**Objetivo:** visualizar responsável principal, colaboradores, órgão/setor e papel desempenhado em cada ação.
**Resultado esperado:** o usuário compreende quem é responsável pela execução ou acompanhamento de cada ação.

---

## 4. Próximas Ações

* [ ] Detalhar fluxo principal de cada caso de uso.
* [ ] Adicionar pré-condições e pós-condições.
* [ ] Adicionar fluxos alternativos e exceções.
* [ ] Validar casos de uso com a professora/cliente.
* [ ] Confirmar os anos inicial e final do Plano Decenal carregado.
* [ ] Confirmar quais informações da dashboard devem aparecer na exportação.
* [ ] Confirmar se a justificativa da alteração será obrigatória em todos os registros ou apenas em alterações sensíveis.

---

## 5. Histórico de Alterações

| Versão | Data       | Alteração                                                                                                                                                                                                            |
| ------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.1    | 18/06/2025 | Criação dos casos de uso preliminares para apoiar a matriz da Semana 3.                                                                                                                                              |
| 0.2    | 18/06/2025 | Ajustes após validação com a professora/cliente: exportação da dashboard, remoção do status dos filtros, especificação do registro de alteração/auditoria e uso dos anos correspondentes ao Plano Decenal carregado. |
