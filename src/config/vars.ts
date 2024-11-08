const isProd = import.meta.env.PROD;
const isDev = import.meta.env.DEV;
const apiUrl = import.meta.env.API_URL;
const prefix = import.meta.env.PREFIX;

export const vars = {
  isProd,
  isDev,
  apiUrl,
  apiUrlPrefix: `${apiUrl}${prefix}`,
};
