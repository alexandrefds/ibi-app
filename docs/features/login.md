# Login

## Objetivo

Apresentar a entrada para pessoas que já possuem uma conta no IBI.

## Experiência atual

- Campo obrigatório de telefone ou e-mail.
- Campo obrigatório de senha com controle para exibir ou ocultar o valor.
- Link visual para recuperação de senha.
- Botões visuais para acesso com Google e Facebook.
- Link para iniciar o cadastro.

## Implementação

- Página: `src/features/auth/pages/Login.jsx`
- Estilos: `src/features/auth/pages/Login.css`
- Componentes compartilhados: `FormField` e `PasswordInput`.

## Limitações atuais

O envio do formulário apenas impede o comportamento padrão do navegador. Não há validação de credenciais, sessão, login social, recuperação de senha ou redirecionamento autenticado.

## Integração esperada

O fluxo deve enviar o identificador e a senha para um endpoint de autenticação, guardar a sessão de forma segura e redirecionar o usuário segundo seu perfil.
