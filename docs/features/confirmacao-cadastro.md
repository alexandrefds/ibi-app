# Confirmação de cadastro

## Objetivo

Dar retorno imediato ao fim do cadastro, adaptando a mensagem ao perfil selecionado.

## Comportamento

- Mostra o nome do usuário ou o nome da loja/casa religiosa.
- Exibe ícone, mensagem e benefícios específicos para comprador, entregador ou loja.
- Executa uma animação de transição e chama `onComplete` após 4,5 segundos.
- No fluxo de cadastro, `onComplete` redireciona para `/dashboard`.

## Implementação

- Componente: `src/components/ui/WelcomeScreen/WelcomeScreen.jsx`
- Estilos: `src/components/ui/WelcomeScreen/WelcomeScreen.css`

## Limitação atual

A confirmação significa apenas que o fluxo visual foi concluído; ela não comprova que uma conta foi criada, pois ainda não existe integração com back-end.
