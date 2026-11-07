export const USER_ROLES = {
  USER: "usuario",
  DELIVERY: "entregador",
  STORE: "loja",
};

export const REGISTER_STEPS = {
  ROLE: 1,
  DETAILS: 2,
  PASSWORD: 3,
};

export const ROLE_CONFIG = {
  [USER_ROLES.USER]: {
    emoji: "🙏",
    label: "Usuário",
    tag: "Quero comprar",
    description: "Acesse produtos, oferendas e serviços espirituais entregues na sua porta.",
    benefits: ["Entrega rápida e discreta", "Produtos 100% autênticos", "Atendimento especializado"],
  },
  [USER_ROLES.DELIVERY]: {
    emoji: "🛵",
    label: "Entregador",
    tag: "Quero entregar",
    description: "Faça entregas de produtos sagrados e ganhe por cada pedido realizado.",
    benefits: ["Aceite pedidos próximos", "Receba por entrega", "Horários flexíveis", "Suporte dedicado"],
  },
  [USER_ROLES.STORE]: {
    emoji: "🕌",
    label: "Loja Religiosa",
    tag: "Quero vender",
    description: "Cadastre seu terreiro ou loja e venda produtos e serviços para toda a comunidade.",
    benefits: ["Vitrine digital completa", "Gestão simples de vendas", "Alcance mais clientes"],
  },
};
