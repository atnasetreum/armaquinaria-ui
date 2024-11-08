import { vars } from "@config";

export const addDomainImg = (url: string) => {
  return `${vars.apiUrl}${url}`;
};
