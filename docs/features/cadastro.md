# Cadastro

## Objetivo

Criar a experiência inicial de cadastro para os diferentes papéis da plataforma.

## Fluxo

1. **Escolha de perfil**: comprador (`usuario`), entregador (`entregador`) ou loja/casa religiosa (`loja`).
2. **Dados**: coleta informações conforme o perfil escolhido.
3. **Senha**: exige ao menos oito caracteres, uma letra maiúscula e um número.

Ao finalizar, o usuário vê a confirmação de cadastro e, após 4,5 segundos, é levado para `/dashboard`.

## Regras por perfil

| Perfil | Campos específicos | Observação |
| --- | --- | --- |
| Usuário | Nome, e-mail e telefone opcional. | Destinado a compras. |
| Entregador | Nome, e-mail e telefone opcional. | A interface informa que será necessário enviar CNH ou RG depois do cadastro. |
| Loja | Nome do responsável, nome da loja/terreiro e telefone comercial. | E-mail não é solicitado atualmente. |

## Implementação

- Página orquestradora: `src/features/auth/pages/Register.jsx`
- Estado e regras: `src/features/auth/hooks/useRegisterForm.js`
- Componentes: `RegisterRoleSelect`, `RegisterUserData` e `RegisterPassword`.
- Constantes de perfil: `src/core/utils/constants.js`
- Validação de senha: `src/core/utils/validators.js`

## Limitações atuais

Os dados permanecem apenas no estado do React enquanto a página está aberta. Não há confirmação de e-mail/telefone, verificação de documento, aceite real dos termos nem criação de conta no servidor.
