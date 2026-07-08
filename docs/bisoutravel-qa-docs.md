================================================
   BISOU TRAVEL — QA DOCUMENTATION
   Test Cases & Defect Reports
   Autor: Jesse Rother | github.com/pink-bowie
================================================

────────────────────────────────
TC01
────────────────────────────────

ID: TC01
Título: Busca de passagens com dados válidos
Pré-condições: Estar na página index.html
Passos:
	1.Selecionar cidades diferentes em "Origem" e "Destino".
	2.Preencher datas válidas de Ida e Volta.
	3.Clicar em "Buscar Passagens".
Resultado Esperado: Mensagem "Formulário enviado com sucesso!" é exibida.
Resultado Obtido: Mensagem "Formulário enviado com sucesso!" foi exibida.
Status: Passou

────────────────────────────────
TC02
────────────────────────────────

ID: TC02
Título: Campo "Número de Passageiros" aceita valores negativos
Pré-condições: Estar na página bugs.html
Passos:
	1.Inserir -1 em "Número de Passageiros"
	2.Preencher os demais campos corretamente
	3.Clicar em "Buscar Passagens"
Resultado Esperado: O campo não deve aceitar valores menores que 1. O formulário não deve ser enviado.
Resultado Obtido:  Mensagem "Formulário enviado com sucesso!" foi exibida com o valor -1 no campo.
Status: Falhou

────────────────────────────────
DR01
────────────────────────────────

ID: DR01
Título: Campo "Número de Passageiros" aceita valores negativos
Ambiente: Chrome 127, Resolução 1920x1080
Pré-condições: Estar na página bugs.html
TC Relacionado: TC02
Passos para Reprodução:
	1. Inserir -1 em "Número de Passageiros"
	2. Preencher os demais campos corretamente
	3. Clicar em "Buscar Passagens"
Resultado Esperado: O campo não deve aceitar valores menores que 1. O formulário não deve ser enviado.
Resultado Obtido:   O campo permite inserir valores menores que 1
Evidência: [print da tela]
Prioridade: High
Status: Aberto

────────────────────────────────
TC03
────────────────────────────────

ID: TC03
Título: Permissão de cidades iguais em "Origem" e "Destino"
Pré-condições: Estar na página bugs.html
Passos:
	1. Selecionar a mesma cidade em "Origem" e "Destino".
	2. Preencher os demais campos corretamente
	3. Clicar em "Buscar Passagens" 
Resultado Esperado: O sistema deve bloquear a seleção de cidades iguais.
Resultado Obtido: A mensagem de sucesso foi exibida indevidamente.
Status: Falhou

────────────────────────────────
DR02
────────────────────────────────

ID: DR02
Título: Permissão de cidades iguais em "Origem" e "Destino"
Ambiente: Chrome 127, Resolução 1920x1080
Pré-condições: Estar na página bugs.html
TC Relacionado: TC03
Passos para Reprodução:
	1. Selecionar a mesma cidade em "Origem" e "Destino".
	2. Preencher os demais campos corretamente
	3. Clicar em "Buscar Passagens" 
Resultado Esperado: O sistema deve bloquear a seleção de cidades iguais.
Resultado Obtido: Mensagem "Formulário enviado com sucesso!" foi exibida com cidades iguais selecionadas.
Evidência: [print da tela]
Prioridade: High
Status: Aberto

────────────────────────────────
TC04
────────────────────────────────

ID:TC04
Título: Alinhamento incorreto no campo de Destino 
Pré-condições: Estar na página bugs.html
Passos para Reprodução:
	1. Observar a posição do campo "Destino" em relação aos demais campos.
Resultado Esperado: O campo de Destino deve estar centralizado e alinhado verticalmente com os demais campos.
Resultado Obtido: O campo de Destino está deslocado e desalinhado para a direita.
Status: Falhou

────────────────────────────────
DR03
────────────────────────────────

ID: DR03
Título: Alinhamento incorreto no campo de Destino 
Ambiente: Chrome 127, Resolução 1920x1080
Pré-condições: Estar na página bugs.html
TC Relacionado: TC04
Passos para Reprodução:
	1. Observar a posição do campo "Destino" em relação aos demais campos.
Resultado Esperado: O campo de Destino deve estar centralizado e alinhado verticalmente com os demais campos.
Resultado Obtido: O campo de Destino está deslocado e desalinhado para a direita.
Evidência: [print da tela]
Prioridade: Low
Status: Aberto

────────────────────────────────
✦ Documentação elaborada por Jesse Rother
  QA em formação | github.com/pink-bowie