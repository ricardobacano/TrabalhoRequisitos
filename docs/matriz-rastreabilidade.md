---

## title: matriz-rastreabilidade.md

# Matriz de Rastreabilidade Parcial

**Projeto:** Sistema de Monitoramento do Plano Decenal da Criança e do Adolescente
**Versão:** 0.3
**Entrega:** Semana 3 - Protótipo inicial e rastreabilidade parcial
**Data:** 18/06/2025
**Status:** Parcial / em evolução

---

## 1. Objetivo

Esta matriz relaciona requisitos evoluídos, histórias de usuário, casos de uso, critérios de aceitação e telas do protótipo inicial.

A versão 0.3 atualiza a rastreabilidade para refletir as decisões de evolução dos requisitos inconsistentes e os ajustes solicitados após validação com a cliente/professora, especialmente nos pontos de hierarquia, permissões, segurança, acessibilidade, cadastro/edição, busca/filtros, histórico/auditoria, exportação da dashboard e período correspondente ao Plano Decenal carregado.

---

## 2. Convenções

| Prefixo | Significado                    |
| ------- | ------------------------------ |
| RF      | Requisito funcional            |
| RNF     | Requisito não funcional        |
| EV      | Evolução aplicada ao requisito |
| HU      | História de usuário            |
| UC      | Caso de uso                    |
| TP      | Tela do protótipo              |
| CA      | Critério de aceitação          |

> O sufixo `-EV` indica que o requisito foi mantido como evoluído. RF15 permanece apenas no histórico como duplicado de RF09.

---

## 3. Telas do Protótipo

| ID da tela | Tela                                    | Arquivo / referência            | Objetivo                                                                                                              |
| ---------- | --------------------------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| TP01       | Tela Inicial Pública                    | `prototipo/index.html`          | Apresentar visão geral, problemas públicos e acesso às principais áreas.                                              |
| TP02       | Busca e Filtros                         | `prototipo/busca.html`          | Representar busca textual e filtros estruturados como recursos separados.                                             |
| TP03       | Dashboard / Visualização de Indicadores | `prototipo/dashboard.html`      | Exibir progresso dos indicadores por meio de cards, percentuais e elementos visuais simples.                          |
| TP04       | Detalhamento de Objetivos e Tarefas     | `prototipo/detalhamento.html`   | Exibir hierarquia, tarefas, indicadores, responsáveis, colaboradores, status e percentual.                            |
| TP05       | Histórico de Atualizações               | `prototipo/historico.html`      | Apresentar histórico público de alterações relevantes em tarefas e indicadores.                                       |
| TP06       | Login                                   | `prototipo/login.html`          | Representar acesso restrito às funcionalidades administrativas.                                                       |
| TP07       | Painel Administrativo                   | `prototipo/admin.html`          | Representar cadastro, edição, importação e log administrativo.                                                        |
| TP08       | Gerenciamento de Usuários               | `prototipo/usuarios.html`       | Representar alteração de perfis e permissões dos quatro perfis oficiais.                                              |
| TP09       | Exportação da Dashboard                 | `prototipo/exportacao.html`     | Representar exportação da dashboard considerando filtros aplicados, período, indicadores, gráficos e data de geração. |
| TP10       | Acessibilidade / Alto Contraste         | `prototipo/acessibilidade.html` | Representar recurso de acessibilidade visual e preocupação com legibilidade.                                          |

---

## 4. Matriz de Rastreabilidade Parcial

| Requisito evoluído      | Evolução aplicada                                                                                                                                     | História | Caso de uso                                    | Tela(s)    | Critérios relacionados                                     | Situação no protótipo v1                                                                                      |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------- | ---------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| RF01-EV                 | Problemas públicos vinculados à hierarquia completa do plano.                                                                                         | HU01     | UC01 - Consultar problemas públicos            | TP01       | CA-HU01-01, CA-HU01-02, CA-HU01-03                         | Representado por área de visão geral pública e cards demonstrativos.                                          |
| RF01-EV, RF02-EV        | Hierarquia completa: Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa → Indicador.                                                  | HU02     | UC02 - Navegar pela hierarquia do plano        | TP01, TP04 | CA-HU02-01, CA-HU02-02, CA-HU02-03, CA-HU02-04             | Representado por fluxo entre telas e caminho de navegação textual.                                            |
| RF03                    | Consulta de status e percentual de tarefas.                                                                                                           | HU03     | UC03 - Consultar andamento de tarefas          | TP04       | CA-HU03-01, CA-HU03-02, CA-HU03-03                         | Representado por status e percentuais demonstrativos no detalhamento.                                         |
| RF04-EV                 | Busca textual separada dos filtros estruturados.                                                                                                      | HU04     | UC04 - Buscar informações                      | TP02       | CA-HU04-01, CA-HU04-02, CA-HU04-03                         | Representado visualmente por campo de busca. Sem lógica funcional nesta versão simplificada.                  |
| RF05-EV                 | Filtros estruturados por compromisso, indicador, período e responsável.                                                                               | HU05     | UC05 - Aplicar filtros                         | TP02       | CA-HU05-01, CA-HU05-02, CA-HU05-03                         | Representado visualmente por campos de filtro. O filtro por status foi removido após validação com a cliente. |
| RF06-EV, RNF04          | Exportação da dashboard, preservando filtros aplicados, período, indicadores, gráficos, data de geração e contexto do Plano Decenal.                  | HU06     | UC06 - Exportar dashboard de acompanhamento    | TP03, TP09 | CA-HU06-01, CA-HU06-02, CA-HU06-03, CA-HU06-04             | Representado por tela específica de exportação da dashboard e formatos previstos.                             |
| RF16, RF17, RF18, RNF02 | Indicadores com visualização de progresso e diferenciação visual.                                                                                     | HU07     | UC07 - Visualizar dashboard de indicadores     | TP03       | CA-HU07-01, CA-HU07-02, CA-HU07-03                         | Representado por cards, percentuais e elementos visuais simples.                                              |
| RNF07-EV                | Consultas, filtros e visualizações devem considerar o intervalo de anos correspondente ao Plano Decenal carregado, evitando uso de dados arbitrários. | HU07     | UC07 - Visualizar dashboard de indicadores     | TP02, TP03 | CG08                                                       | Representado por indicação de período do plano carregado na busca e na dashboard.                             |
| RF10-EV, RNF01-EV       | Alto contraste como funcionalidade e acessibilidade como qualidade geral.                                                                             | HU08     | UC08 - Ativar alto contraste                   | TP10       | CA-HU08-01, CA-HU08-02, CA-HU08-03, CA-HU08-04             | Representado como tela/recurso previsto. Persistência da preferência fica para versão futura.                 |
| RF11, RNF08, RNF09-EV   | Login como funcionalidade; JWT/segurança reclassificados como requisitos não funcionais.                                                              | HU09     | UC09 - Realizar login                          | TP06       | CA-HU09-01, CA-HU09-02, CA-HU09-03, CA-HU09-04             | Representado por formulário de login demonstrativo.                                                           |
| RF03, RF08-EV, RF22-EV  | Edição de status e percentual separada do cadastro, gerando registro de alteração específico.                                                         | HU10     | UC10 - Atualizar status de tarefa              | TP04, TP07 | CA-HU10-01, CA-HU10-02, CA-HU10-03                         | Representado por indicação de edição/atualização no detalhamento e no painel administrativo.                  |
| RF07-EV, RF08-EV        | Histórico público separado do log administrativo.                                                                                                     | HU11     | UC11 - Visualizar histórico público            | TP05       | CA-HU11-01, CA-HU11-02, CA-HU11-03, CA-HU11-04             | Representado por linha do tempo pública com alterações relevantes.                                            |
| RF12-EV                 | Cadastro de novos registros do Plano Decenal.                                                                                                         | HU12     | UC12 - Inserir dados via interface             | TP07       | CA-HU12-01, CA-HU12-02, CA-HU12-03, CA-HU12-04             | Representado por formulário administrativo simples.                                                           |
| RF21-EV                 | Importação por planilha com validação e prévia antes da confirmação.                                                                                  | HU13     | UC13 - Importar dados por planilha             | TP07       | CA-HU13-01, CA-HU13-02, CA-HU13-03, CA-HU13-04             | Representado por campo de upload e descrição da validação prévia.                                             |
| RF09-EV, RF20-EV        | Permissões unificadas; Administrador como quarto perfil. RF15 duplicado.                                                                              | HU14     | UC14 - Gerenciar permissões                    | TP08       | CA-HU14-01, CA-HU14-02, CA-HU14-03, CA-HU14-04, CA-HU14-05 | Representado por tabela de usuários e perfis.                                                                 |
| RF13-EV                 | Log administrativo de auditoria separado do histórico público.                                                                                        | HU15     | UC15 - Visualizar log de auditoria             | TP07       | CA-HU15-01, CA-HU15-02, CA-HU15-03, CA-HU15-04             | Representado por tabela de auditoria no painel administrativo.                                                |
| RF19-EV                 | Responsável, colaboradores, órgão/setor e papel da ação.                                                                                              | HU16     | UC16 - Visualizar responsáveis e colaboradores | TP04       | CA-HU16-01, CA-HU16-02, CA-HU16-03, CA-HU16-04             | Representado nos cards de tarefas/detalhamento.                                                               |

---

## 5. Especificação do Registro de Alteração

Para evitar ambiguidade no uso do termo "registro", esta matriz considera que alterações feitas no sistema devem gerar um **registro de alteração** ou **registro de auditoria**, conforme o caso.

O registro de alteração deve conter, quando aplicável:

| Informação registrada | Descrição                                                                             |
| --------------------- | ------------------------------------------------------------------------------------- |
| Tipo da ação          | Criação, edição, importação, alteração de permissão ou atualização de status.         |
| Entidade afetada      | Problema público, compromisso, objetivo, linha de ação, tarefa, indicador ou usuário. |
| Identificador do item | Código ou nome do item alterado.                                                      |
| Usuário responsável   | Usuário que realizou a ação.                                                          |
| Data e hora           | Momento da alteração.                                                                 |
| Campo modificado      | Campo alterado no sistema.                                                            |
| Valor anterior        | Informação antes da alteração.                                                        |
| Valor novo            | Informação após a alteração.                                                          |
| Justificativa         | Motivo informado para a alteração, quando necessário.                                 |

Essa definição afeta principalmente RF08-EV, RF13-EV e RF22-EV.

---

## 6. Requisitos Marcados para Histórico

| Requisito original | Decisão                        | Justificativa                                                          | Como aparece na matriz                                              |
| ------------------ | ------------------------------ | ---------------------------------------------------------------------- | ------------------------------------------------------------------- |
| RF15               | Marcado como duplicado de RF09 | Ambos tratavam de painel administrativo e permissões.                  | Não aparece como requisito principal; fica registrado no histórico. |
| RF23               | Reclassificado como RNF09-EV   | Uso de JWT é decisão técnica de segurança, não ação direta do usuário. | Vinculado à HU09 como requisito não funcional de segurança.         |
| RF14               | Reclassificado em RNF09-EV     | Medidas de segurança são restrições técnicas.                          | Vinculado à HU09 e ao controle de acesso.                           |

---

## 7. Observações de Evolução

* A matriz está atualizada para usar requisitos evoluídos, mantendo rastreabilidade com as histórias já existentes.
* O protótipo foi alterado de página única para múltiplas telas HTML, permitindo fluxo básico de navegação entre áreas públicas e administrativas.
* Busca, filtros, exportação, login, importação e atualização de tarefas estão representados visualmente, mas não implementados como funcionalidades reais.
* O filtro por status foi removido dos filtros estruturados, conforme solicitação da cliente/professora.
* A exportação passou a ser tratada como exportação da dashboard, considerando filtros aplicados, período, indicadores, gráficos e data de geração.
* O desempenho e o volume de dados passaram a ser relacionados aos anos correspondentes ao Plano Decenal carregado, evitando uso de dados arbitrários.
* A separação entre histórico público e log administrativo foi explicitada para evitar ambiguidade entre transparência e auditoria.
* A duplicidade entre RF09 e RF15 foi resolvida na rastreabilidade: RF09 permanece como requisito principal e RF15 fica no histórico.

---

## 8. Próximas Ações

* [ ] Validar com a professora/cliente se as evoluções propostas serão aceitas.
* [ ] Complementar casos de uso detalhados.
* [ ] Ajustar o protótipo caso a hierarquia ou os perfis sejam alterados após validação.
* [ ] Atualizar a matriz após a validação do protótipo.
* [ ] Registrar novas decisões em `docs/historico-versoes.md`.

---

## 9. Histórico de Alterações

| Versão | Data       | Alteração                                                                                                                                                                                                                                                              |
| ------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.1    | 18/06/2025 | Criação da matriz parcial da Semana 3.                                                                                                                                                                                                                                 |
| 0.2    | 18/06/2025 | Atualização da matriz para refletir requisitos evoluídos e protótipo simplificado.                                                                                                                                                                                     |
| 0.3    | 18/06/2025 | Atualização da matriz conforme ajustes solicitados pela professora: especificação do registro de alteração, remoção do status dos filtros, exportação da dashboard, período vinculado aos anos do Plano Decenal carregado e protótipo com fluxo entre múltiplas telas. |

