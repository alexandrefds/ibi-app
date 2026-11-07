const API_BASE_URL = import.meta.env.VITE_API_URL ?? "";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });

  const body = response.status === 204 ? null : await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(body?.message ?? "Não foi possível concluir a solicitação.");
  }

  return body;
}

export const apiClient = {
  get: (path, options) => request(path, options),
  post: (path, data, options) => request(path, { ...options, method: "POST", body: JSON.stringify(data) }),
  put: (path, data, options) => request(path, { ...options, method: "PUT", body: JSON.stringify(data) }),
  delete: (path, options) => request(path, { ...options, method: "DELETE" }),
};
