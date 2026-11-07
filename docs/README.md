# Documentação do IBI

Esta documentação descreve o que está implementado no front-end neste momento. Recursos indicados como futuros não possuem integração com API nem persistência de dados.

| Funcionalidade | Descrição | Estado |
| --- | --- | --- |
| [Login](features/login.md) | Formulário de acesso à conta. | Interface pronta; autenticação pendente. |
| [Cadastro](features/cadastro.md) | Cadastro por perfil em três etapas. | Interface e validação local prontas; envio pendente. |
| [Confirmação de cadastro](features/confirmacao-cadastro.md) | Transição personalizada após concluir o cadastro. | Pronta com dados locais. |
| [Dashboard](features/dashboard.md) | Página de destino após o cadastro. | Placeholder. |
| [Cliente de API](architecture/cliente-api.md) | Base reutilizável para chamadas HTTP. | Pronto; ainda sem uso pelos fluxos. |

## Rotas

| Caminho | Página |
| --- | --- |
| `/` | Login |
| `/login` | Login |
| `/cadastro` | Cadastro |
| `/dashboard` | Dashboard |
