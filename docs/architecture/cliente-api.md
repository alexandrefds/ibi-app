# Cliente de API

## Objetivo

Centralizar chamadas HTTP para evitar repetição de configuração e tratamento de erros nas funcionalidades.

## Implementação atual

O módulo `src/core/services/api/client.js` exporta `apiClient` com os métodos `get`, `post`, `put` e `delete`.

- A URL-base vem da variável de ambiente `VITE_API_URL`.
- As requisições usam JSON por padrão.
- Respostas `204` retornam `null`.
- Erros HTTP lançam uma exceção com `message` retornada pela API, quando disponível.

## Uso esperado

```js
import { apiClient } from "../../core/services/api/client";

const user = await apiClient.post("/auth/register", data);
```

## Estado atual

Nenhuma tela usa o cliente ainda. Login e cadastro trabalham somente no navegador.

## Cuidados para a integração

- Definir e documentar o contrato de erros da API.
- Incluir autenticação por token ou cookie seguro conforme a arquitetura escolhida.
- Não enviar ou armazenar senhas em texto puro fora de uma conexão HTTPS.
- Tratar `FormData` separadamente para uploads, pois o cliente define `Content-Type: application/json` por padrão.
