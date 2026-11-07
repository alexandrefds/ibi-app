# Dashboard

## Objetivo

Ser o ponto de entrada após o cadastro ou autenticação.

## Estado atual

A rota `/dashboard` apresenta uma mensagem de conta criada e um link de volta ao login. Ela não possui dados, proteção de rota nem variação por perfil.

## Implementação

- Página: `src/features/dashboard/pages/Dashboard.jsx`
- Rota: `src/routes/AppRoutes.jsx`

## Evolução esperada

O dashboard deverá identificar o perfil autenticado e oferecer experiências distintas:

- comprador: catálogo, pedidos e acompanhamento de entregas;
- entregador: ofertas de entrega, status e ganhos;
- loja/casa religiosa: vitrine, produtos, serviços, pedidos e gestão de vendas.
