# IBI

Interface web do IBI, uma plataforma de produtos e serviços sagrados. A aplicação permite que pessoas interessadas em comprar, lojas/casas religiosas e entregadores iniciem seu cadastro na plataforma.

> O projeto está na etapa de interface. Login, cadastro e dashboard ainda não estão conectados a um back-end nem persistem dados.

## Tecnologias

- React 19
- Vite 8
- React Router 7
- TanStack Query 5
- CSS modular por funcionalidade

## Funcionalidades atuais

- Tela de login com campos de identificação e senha.
- Cadastro em três etapas: escolha do perfil, dados pessoais/comerciais e senha.
- Perfis de comprador, entregador e loja/casa religiosa.
- Validação visual de senha segura.
- Tela de confirmação personalizada por perfil após o cadastro.
- Rota inicial de dashboard.
- Cliente HTTP reutilizável preparado para consumir uma API por meio de `VITE_API_URL`.

Veja o índice detalhado em [docs/README.md](docs/README.md).

## Estrutura

```text
src/
├── features/
│   ├── auth/          # Login e cadastro
│   └── dashboard/     # Página inicial pós-cadastro
├── core/              # Cliente de API, constantes e validadores
├── shared/            # Componentes reutilizáveis e estilos globais
├── config/            # Configuração do React Query
└── routes/            # Rotas da aplicação
```

## Como executar

Pré-requisito: Node.js LTS e npm.

```bash
npm install
npm run dev
```

O Vite mostrará no terminal a URL local da aplicação.

## Scripts

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento. |
| `npm run build` | Gera a versão de produção em `dist/`. |
| `npm run preview` | Serve localmente a versão gerada. |
| `npm run lint` | Executa a checagem de lint. |

## Configuração da API

Quando houver um back-end, crie um arquivo `.env.local` na raiz:

```env
VITE_API_URL=https://api.exemplo.com
```

O cliente em `src/core/services/api/client.js` usa essa variável como prefixo para requisições HTTP. Sem ela, as chamadas são relativas ao mesmo domínio da aplicação.

## Próximos passos de produto

1. Integrar cadastro e login a uma API com autenticação segura.
2. Implementar dashboards específicos para cada perfil.
3. Criar catálogo de produtos e serviços, pedidos, pagamentos e entregas.
4. Substituir os links temporários de termos, privacidade e recuperação de senha por fluxos reais.
