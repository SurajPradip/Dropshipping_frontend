const CORE_API = import.meta.env.VITE_CORE_API;
const CUSTOMER_API = import.meta.env.VITE_CUSTOMER_API;

export const api = {
  core: (path) => `${CORE_API}/checking_company_url${path}`,
};